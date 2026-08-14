const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-list");
const header = document.querySelector("[data-header], .site-header");

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

function updateHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

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
      : "Upload a clear photo of the damage";
  });
}

const quoteForm = document.querySelector("#quote-form");
if (quoteForm) {
  const suburbFromUrl = new URLSearchParams(window.location.search).get("suburb");
  const suburbField = quoteForm.querySelector("#suburb");
  if (suburbFromUrl && suburbField) suburbField.value = suburbFromUrl;

  const steps = [...quoteForm.querySelectorAll("[data-step]")];
  const navButtons = [...quoteForm.querySelectorAll("[data-goto]")];

  function showStep(index) {
    if (!steps.length) return;
    steps.forEach((step, i) => step.classList.toggle("is-active", i === index));
    navButtons.forEach((button, i) => {
      button.classList.toggle("is-active", i === index);
      button.classList.toggle("is-done", i < index);
    });
  }

  function currentIndex() {
    return Math.max(0, steps.findIndex(step => step.classList.contains("is-active")));
  }

  function validateStep(step) {
    const fields = [...step.querySelectorAll("input, select, textarea")].filter(field => field.hasAttribute("required") || field.type === "radio");
    let valid = true;
    const radioGroups = new Set();
    fields.forEach(field => {
      if (field.type === "radio") {
        radioGroups.add(field.name);
        return;
      }
      const ok = field.checkValidity();
      field.classList.toggle("is-invalid", !ok);
      if (!ok) valid = false;
    });
    radioGroups.forEach(name => {
      const group = [...step.querySelectorAll(`input[name="${name}"]`)];
      const ok = group.some(input => input.checked);
      group.forEach(input => input.closest(".damage-option")?.classList.toggle("is-invalid", !ok));
      if (!ok) valid = false;
    });
    if (!valid) {
      const firstInvalid = step.querySelector(".is-invalid, input:invalid, select:invalid, textarea:invalid");
      firstInvalid?.focus();
    }
    return valid;
  }

  navButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (index > currentIndex() && !validateStep(steps[currentIndex()])) return;
      showStep(index);
    });
  });

  quoteForm.querySelectorAll("[data-next]").forEach(button => {
    button.addEventListener("click", () => {
      const index = currentIndex();
      if (!validateStep(steps[index])) return;
      showStep(Math.min(index + 1, steps.length - 1));
    });
  });

  quoteForm.querySelectorAll("[data-back]").forEach(button => {
    button.addEventListener("click", () => showStep(Math.max(currentIndex() - 1, 0)));
  });

  quoteForm.addEventListener("submit", event => {
    event.preventDefault();
    if (steps.length && !validateStep(steps[currentIndex()])) return;
    const content = quoteForm.querySelector(".form-content");
    const success = quoteForm.querySelector(".form-success");
    if (content && success) {
      content.hidden = true;
      success.classList.add("show");
      quoteForm.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}

const visualiser = document.querySelector("[data-visualiser]");
if (visualiser) {
  const title = visualiser.querySelector("[data-viz-title]");
  const status = visualiser.querySelector("[data-viz-status]");
  const copy = visualiser.querySelector("[data-viz-copy]");
  const zones = [...visualiser.querySelectorAll("[data-zone]")];

  const details = {
    chip: {
      title: "Stone chip",
      status: "Often leads to replacement",
      tone: "replace",
      copy: "A chip is often how replacement starts. Multiple chips, a chip in the driver’s view, or a chip that has begun to run are common reasons to fit new glass."
    },
    view: {
      title: "Driver’s view",
      status: "Replacement typically needed",
      tone: "replace",
      copy: "Damage in the driver’s direct view affects safe visibility. Replacement is the service we offer."
    },
    edge: {
      title: "Edge area",
      status: "Replacement typically needed",
      tone: "replace",
      copy: "Damage that reaches the windscreen edge can compromise integrity. Replacement is the appropriate route."
    },
    crack: {
      title: "Long crack",
      status: "Replacement typically needed",
      tone: "replace",
      copy: "A long or spreading crack means new glass. Send a photo so we can quote before anyone travels to the vehicle."
    },
    centre: {
      title: "Centre area",
      status: "Replacement typically needed",
      tone: "replace",
      copy: "The centre of the windscreen sits in the main viewing area. Chips or cracks here are typical replacement conditions."
    }
  };

  function activate(name) {
    const data = details[name];
    if (!data) return;
    zones.forEach(zone => zone.classList.toggle("is-active", zone.getAttribute("data-zone") === name));
    if (title) title.textContent = data.title;
    if (status) {
      status.textContent = data.status;
      status.className = `viz-status ${data.tone}`;
    }
    if (copy) copy.textContent = data.copy;
  }

  zones.forEach(zone => {
    const name = zone.getAttribute("data-zone");
    zone.addEventListener("click", () => activate(name));
    zone.addEventListener("mouseenter", () => activate(name));
    zone.addEventListener("focus", () => activate(name));
  });
  activate("chip");
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

document.querySelectorAll("[data-year]").forEach(element => {
  element.textContent = new Date().getFullYear();
});
