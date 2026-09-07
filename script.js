// ====================================================================
// AALTO GUARD - LOPULLINEN SKRIPTI
// ====================================================================

// Google Sheets Web App URL (toiminnassa)
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwCyNBr7Ojjog0oEaOanLifaqsDcKqUdZvEk0fqP-FkpCNGHFuUS6V_K2H-BwDqR7J5/exec";

document.addEventListener("DOMContentLoaded", () => {
  // ------------------------------------------------------------------
  // 1. Odotuslistan lähetys Google Sheetiin
  // ------------------------------------------------------------------
  const form = document.getElementById("waitlist-form");
  const emailInput = document.getElementById("email-input");
  const submitBtn = document.getElementById("submit-btn");
  const feedback = document.getElementById("form-feedback");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      if (!email) return;

      const originalBtnText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Liitytään...";
      feedback.className = "form-feedback";
      feedback.textContent = "";

      try {
        if (GOOGLE_SCRIPT_URL) {
          await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({ email: email }),
          });
        }

        feedback.className = "form-feedback success";
        feedback.textContent = "Kiitos liittymisestä! Olet mukana listalla.";
        emailInput.value = "";
        submitBtn.textContent = "Liitytty ✓";

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText;
        }, 4000);
      } catch (err) {
        console.error("Virhe:", err);
        feedback.className = "form-feedback error";
        feedback.textContent = "Hups! Jotain meni pieleen. Yritä uudelleen.";
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    });
  }

  // ------------------------------------------------------------------
  // 2. Välitön Frosted Glass Modaali (Tietosuojaseloste)
  // ------------------------------------------------------------------
  const openPrivacyBtn = document.getElementById("open-privacy-btn");
  const modal = document.getElementById("privacy-modal");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const modalBackdrop = document.getElementById("modal-backdrop");

  function openModal() {
    if (modal) {
      document.body.classList.add("modal-open");
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
    }
  }

  function closeModal() {
    if (modal) {
      document.body.classList.remove("modal-open");
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    }
  }

  if (openPrivacyBtn) openPrivacyBtn.addEventListener("click", openModal);
  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});
