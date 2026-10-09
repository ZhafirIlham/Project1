/* Contact form validation with success / error states (client-side only) */
(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const feedback = document.getElementById("formFeedback");
  const fields = {
    name: form.querySelector("#name"),
    email: form.querySelector("#email"),
    message: form.querySelector("#message"),
  };

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(input, msg) {
    const field = input.closest(".field");
    field.classList.toggle("is-invalid", Boolean(msg));
    const slot = field.querySelector(".field__error");
    if (slot) slot.textContent = msg || "";
    return !msg;
  }

  function validateName() {
    const v = fields.name.value.trim();
    if (!v) return setError(fields.name, "Nama wajib diisi.");
    if (v.length < 2) return setError(fields.name, "Nama terlalu pendek.");
    return setError(fields.name, "");
  }
  function validateEmail() {
    const v = fields.email.value.trim();
    if (!v) return setError(fields.email, "Email wajib diisi.");
    if (!emailRe.test(v)) return setError(fields.email, "Format email tidak valid.");
    return setError(fields.email, "");
  }
  function validateMessage() {
    const v = fields.message.value.trim();
    if (!v) return setError(fields.message, "Pesan wajib diisi.");
    if (v.length < 10) return setError(fields.message, "Pesan minimal 10 karakter.");
    return setError(fields.message, "");
  }

  fields.name.addEventListener("blur", validateName);
  fields.email.addEventListener("blur", validateEmail);
  fields.message.addEventListener("blur", validateMessage);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ok = [validateName(), validateEmail(), validateMessage()].every(Boolean);

    if (!ok) {
      feedback.textContent = "Mohon periksa kembali isian form.";
      feedback.className = "contact__feedback is-error";
      return;
    }

    feedback.textContent =
      "Terima kasih! Pesan Anda sudah tercatat. Saya akan segera membalas.";
    feedback.className = "contact__feedback is-success";
    form.reset();

    setTimeout(() => {
      feedback.textContent = "";
      feedback.className = "contact__feedback";
    }, 6000);
  });
})();
