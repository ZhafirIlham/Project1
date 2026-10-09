/* Core interactions: navbar, scroll reveal, active links, stat counters */
(function() {
    const navbar = document.getElementById("navbar");
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    const links = Array.from(document.querySelectorAll(".navbar__link"));

    /* ---------- Navbar shrink on scroll ---------- */
    const onScroll = () => {
        navbar.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, {
        passive: true
    });
    onScroll();

    /* ---------- Mobile menu ---------- */
    function closeMenu() {
        navToggle.classList.remove("is-open");
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
    }
    navToggle.addEventListener("click", () => {
        const open = navToggle.classList.toggle("is-open");
        navLinks.classList.toggle("is-open", open);
        navToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.addEventListener("click", (e) => {
        if (e.target.classList.contains("navbar__link")) closeMenu();
    });

    /* ---------- Scroll reveal ---------- */
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.14
        }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    /* ---------- Active section highlighting ---------- */
    const sections = links
        .map((l) => document.querySelector(l.getAttribute("href")))
        .filter(Boolean);

    const spyObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = "#" + entry.target.id;
                    links.forEach((l) =>
                        l.classList.toggle("is-active", l.getAttribute("href") === id)
                    );
                }
            });
        }, {
            threshold: 0.5
        }
    );
    sections.forEach((s) => spyObserver.observe(s));

    /* ---------- Animated stat counters ---------- */
    const counters = document.querySelectorAll(".stat__num");
    const counterObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = +el.dataset.count;
                const duration = 1500;
                const start = performance.now();

                function step(now) {
                    const progress = Math.min((now - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.floor(eased * target);
                    if (progress < 1) requestAnimationFrame(step);
                    else el.textContent = target;
                }
                requestAnimationFrame(step);
                counterObserver.unobserve(el);
            });
        }, {
            threshold: 0.6
        }
    );
    counters.forEach((c) => counterObserver.observe(c));

    /* ---------- Animated skill bars ---------- */
    const skills = document.querySelectorAll(".skill");
    const skillObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-animated");
                skillObserver.unobserve(entry.target);
            });
        }, {
            threshold: 0.4
        }
    );
    skills.forEach((s) => skillObserver.observe(s));

    /* ---------- Scroll-to-top button ---------- */
    const scrollTopBtn = document.getElementById("scrollTop");
    if (scrollTopBtn) {
        const toggleTopBtn = () =>
            scrollTopBtn.classList.toggle("is-visible", window.scrollY > 600);
        window.addEventListener("scroll", toggleTopBtn, {
            passive: true
        });
        toggleTopBtn();
        scrollTopBtn.addEventListener("click", () =>
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        );
    }

    /* ---------- Footer year ---------- */
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---------- Resume button placeholder ---------- */
    const resumeBtn = document.getElementById("downloadResume");
    if (resumeBtn) {
        resumeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Resume akan segera tersedia. Hubungi ilhamzhafir@gmail.com untuk permintaan CV.");
        });
    }
})();