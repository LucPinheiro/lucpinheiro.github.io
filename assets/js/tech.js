(() => {
  const tech = [
    {
      key: "odoo",
      title: "Odoo (ERP)",
      desc: "Custom modules, OWL, integrations, migrations and reporting.",
      badges: ["Odoo", "Python", "PostgreSQL", "OWL", "QWeb", "XML"],
      examples: [
        { label: "Odoo portfolio page", url: "odoo.html" },
        { label: "Modules repo", url: "https://github.com/LucPinheiro/ModulosOdoo" },
        { label: "OWL Website RMA", url: "https://github.com/LucPinheiro/ModulosOdoo/tree/main/owl_website_rma" }
      ],
      page: "tech-odoo.html",
      tag: "odoo"
    },
    {
      key: "data",
      title: "Data (Pandas / NumPy)",
      desc: "Data cleaning, merges, EDA and quality metrics from multi-source datasets.",
      badges: ["Python", "Pandas", "NumPy", "EDA"],
      examples: [
        { label: "Project repo", url: "https://github.com/LucPinheiro/librerias_pandas_numpy_python" }
      ],
      page: "tech-data.html",
      tag: "data"
    },
    {
      key: "react",
      title: "Frontend (React)",
      desc: "SPA UX, roles, forms, filters and product-oriented flows.",
      badges: ["React", "Bootstrap", "UX", "SPA"],
      examples: [
        { label: "Ojeador Deportivo repo", url: "https://github.com/LucPinheiro/OjeadorDeportivo_React" }
      ],
      page: "tech-react.html",
      tag: "frontend"
    },
    {
      key: "java",
      title: "Backend (Java / OOP)",
      desc: "Domain modeling, interfaces, business rules, state validation.",
      badges: ["Java", "OOP", "Business rules"],
      examples: [
        { label: "Sistema Control Vacuna", url: "https://github.com/LucPinheiro/SistemaControlVacuna_Java" }
      ],
      page: "tech-java.html",
      tag: "backend"
    },
    {
      key: "ai",
      title: "AI Automation",
      desc: "Automation with AI tools + integrations for operations and admin workflows.",
      badges: ["ChatGPT", "Power Automate", "Make", "Zapier", "OCR"],
      examples: [
        { label: "Go to tech page", url: "tech-ai.html" }
      ],
      page: "tech-ai.html",
      tag: "ai"
    },
    {
      key: "design",
      title: "Design & Marketing",
      desc: "Brand assets, UI composition, marketing creatives and motion basics.",
      badges: ["Figma", "Adobe", "UI", "Motion"],
      examples: [
        { label: "Go to tech page", url: "tech-design.html" }
      ],
      page: "tech-design.html",
      tag: "design"
    }
  ];

  const grid = document.getElementById("techGrid");
  const buttons = document.querySelectorAll("[data-tech-filter]");

  function badgeHtml(items){
    return items.map((t) => `<span class="badge-soft c2">${t}</span>`).join("");
  }

  function examplesHtml(items){
    return items.slice(0, 3).map(x => `
      <a class="btn btn-outline-glow btn-sm" href="${x.url}" target="${x.url.startsWith('http') ? '_blank' : '_self'}" rel="noreferrer">
        <i class="bi bi-link-45deg me-1"></i> ${x.label}
      </a>
    `).join("");
  }

  function card(t){
    return `
      <div class="col-12 col-lg-6 tech-card" data-tag="${t.tag}">
        <div class="glow-card reveal">
          <div class="glow-inner">
            <div class="d-flex align-items-start justify-content-between gap-2">
              <div>
                <div class="kicker mb-2">${t.tag.toUpperCase()}</div>
                <h2 class="h4 fw-bold mb-2">${t.title}</h2>
                <p class="text-muted-2 mb-3">${t.desc}</p>
              </div>
              <a class="btn btn-outline-glow btn-sm" href="${t.page}">
                <span>Open page</span> <i class="bi bi-arrow-right ms-1"></i>
              </a>
            </div>

            <div class="d-flex flex-wrap gap-2 mb-3">
              ${badgeHtml(t.badges)}
            </div>

            <div class="d-flex flex-wrap gap-2">
              ${examplesHtml(t.examples)}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function render(filter){
    grid.innerHTML = tech
      .filter(t => filter === "all" || t.tag === filter)
      .map(card)
      .join("");

    // activar reveal si tu app.js lo usa
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("show"));
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      render(btn.dataset.techFilter);
    });
  });

  render("all");
})();
