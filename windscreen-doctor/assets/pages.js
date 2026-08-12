const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-list");

function closeMenu() {
  if (!menu || !menuButton) return;
  menu.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open menu");
}

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });
  menu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
}

document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
  });
});

const faqSearch = document.querySelector("#faq-search");
if (faqSearch) {
  faqSearch.addEventListener("input", () => {
    const query = faqSearch.value.trim().toLowerCase();
    document.querySelectorAll(".faq-item").forEach(item => {
      item.hidden = query && !item.textContent.toLowerCase().includes(query);
    });
  });
}

const fileInput = document.querySelector("#photo");
const fileLabel = document.querySelector("#file-label");
if (fileInput && fileLabel) {
  fileInput.addEventListener("change", () => {
    fileLabel.textContent = fileInput.files.length
      ? fileInput.files[0].name
      : "Take a photo or choose an image";
  });
}

const quoteForm = document.querySelector("#quote-form");
if (quoteForm) {
  const suburbFromUrl = new URLSearchParams(window.location.search).get("suburb");
  const suburbField = quoteForm.querySelector("#suburb");
  if (suburbFromUrl && suburbField) suburbField.value = suburbFromUrl;

  quoteForm.addEventListener("submit", event => {
    event.preventDefault();
    const content = quoteForm.querySelector(".form-content");
    const success = quoteForm.querySelector(".form-success");
    if (content && success) {
      content.hidden = true;
      success.classList.add("show");
      quoteForm.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}

document.querySelectorAll("[data-year]").forEach(element => {
  element.textContent = new Date().getFullYear();
});
