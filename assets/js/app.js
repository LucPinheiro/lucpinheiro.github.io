/* ========= Scroll reveal ========= */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("show"); });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ========= Close navbar on mobile after click ========= */
document.querySelectorAll('.navbar a.nav-link[href^="#"]').forEach(a => {
  a.addEventListener("click", () => {
    const nav = document.getElementById("navLinks");
    if (nav && nav.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(nav).hide();
  });
});

/* ========= i18n ========= */
const I18N = {
  en: {
    "nav.home":"Home","nav.odoo":"Odoo","nav.projects":"Projects","nav.skills":"Skills","nav.experience":"Experience","nav.contact":"Contact",
    "cta.email":"Email","cta.projects":"View projects","cta.odoo":"Odoo work","cta.cv":"Download CV",
    "hero.kicker":"One‑Page CV · Odoo · Data · Frontend",
    "hero.lead":"Full‑stack profile with strong Odoo background, plus Data (Pandas/NumPy) and React. I build clean, maintainable solutions focused on business value.",
    "summary.kicker":"Quick overview","summary.title":"What I deliver","summary.projectsLabel":"Highlighted projects","summary.projectsHint":"Odoo · Data · React · Java",
    "summary.yearsNum":"3+","summary.yearsLabel":"Years in IT","summary.yearsHint":"Development & support","summary.locationLabel":"Location","summary.locationValue":"Spain / Remote",
    "odoo.lead":"Setup, customization and development of Odoo Community/Enterprise: custom modules, integrations, migrations and reporting.",
    "odoo.k1.title":"Custom modules","odoo.k1.desc":"Python models, views, security, wizards and QWeb reports.",
    "odoo.k2.title":"Integrations","odoo.k2.desc":"APIs, data import/export and workflow automation.",
    "odoo.k3.title":"Migrations","odoo.k3.desc":"Upgrades across versions and dependency management.",
    "odoo.k4.title":"Business domains","odoo.k4.desc":"Food industry, logistics, maintenance, CRM, e‑learning and e‑commerce.",
    "odoo.btn":"Open Odoo portfolio","odoo.expBtn":"See Odoo experience","odoo.projectsKicker":"Selected work",
    "odoo.p1":"QR-based capture for purchase/fishing documents",
    "odoo.p2":"Inventory models + quality control tests",
    "odoo.p3":"Weight scale checkpoint for packaging (MRP)",
    "odoo.p4":"Accounting authorization fields & security groups",
    "odoo.p5":"Sales: expected delivery date + GDPR footer reports",
    "odoo.note":"Tip: the Odoo page uses the same “slide” style, but with Odoo brand colors.",
    "projects.kicker":"Portfolio","projects.title":"Highlighted projects","projects.subtitle":"Cards + modal details (gallery where available).",
    "projects.filterAll":"All","projects.filterWeb":"Web","projects.open":"Open","projects.close":"Close",
    "skills.kicker":"Skills","skills.title":"Knowledge & tools","skills.subtitle":"A practical stack built from real projects and professional experience.",
    "skills.acquired":"Knowledge acquired","skills.ds":"Data / BI","skills.cloud":"Cloud","skills.front":"Frontend","skills.back":"Backend & DB","skills.tools":"Dev tools",
    "skills.odoo":"ERP","skills.agile":"Agile & soft skills",
    "skills.aiTitle":"Generative AI & Business Automation",
    "skills.designTitle":"Graphic Design & Marketing","design.web":"Web / UI","design.adobe":"Adobe Suite","design.video":"Video / motion","design.audio":"Audio / music",
    "ai.1":"ChatGPT / Copilot / Gemini / Claude — writing, reports, customer support and technical help.",
    "ai.2":"Power Automate / Make / Zapier — admin & logistics automation; integrations (Odoo, CRM, communication).",
    "ai.3":"Notion AI / ClickUp Brain / Airtable AI — smarter task & project management.",
    "ai.4":"OCR — digitization and automated data extraction.",
    "ai.5":"DALL·E / Midjourney / Leonardo.ai — visual assets and marketing creatives.",
    "ai.6":"Runway / Pika Labs / Synthesia — explainer videos and presentations.",
    "ai.7":"ChatGPT Code Interpreter / GitHub Copilot — developer assistance.",
    "ai.8":"AI tools for logistics — route optimization, demand forecasting and analytics.",
    "exp.kicker":"Experience","exp.title":"Work history","exp.subtitle":"Roles focused on Odoo development, web production and teaching.",
    "exp.i1.title":"Odoo Consultant & Developer — I2T Consultors","exp.i1.meta":"Manresa, Catalonia · 2023–2024",
    "exp.i2.title":"Odoo Developer — Solvos","exp.i2.meta":"Vigo, Pontevedra · 2022–2023",
    "exp.i3.title":"Web Developer & Layout Designer — Ide Comunicación","exp.i3.meta":"Vigo, Pontevedra · 2021–2022",
    "exp.i4.title":"Private teacher (current)","exp.i4.meta":"Video editing · Graphic design · Systems · Web programming",
    "exp.i5.title":"Graphic designer & merchandising sales — BRASILú","exp.i5.meta":"Rio de Janeiro, Brazil · 2013–2014",
    "exp.i6.title":"Graphic & web designer — Brasilú / Luso Print / COLORGRAF","exp.i6.meta":"Portugal & Brazil · 2011–2012 / 2006",
    "edu.kicker":"Education","edu.title":"Education & training",
    "edu.e1.title":"Python App Dev — Specialization","edu.e1.meta":"Instituto de Teis, Vigo · 2025–2026 · 430h",
    "edu.e2.title":"Higher Technician — Multiplatform App Development (DAM)","edu.e2.meta":"Instituto de Teis, Vigo · 2019–2022 · 2000h",
    "edu.e3.title":"Full‑Stack Developer","edu.e3.meta":"Hack a Boss Academy · 2021 · 400h",
    "edu.e4.title":"BSc — Biological Sciences","edu.e4.meta":"UEMA · 2006–2010",
    "contact.kicker":"Contact","contact.title":"Let’s talk","contact.subtitle":"If you have an Odoo project, a role, or a collaboration idea — feel free to reach out.",
    "contact.emailBtn":"Email me","contact.links":"Quick links","contact.odooPage":"Odoo portfolio page","contact.cv":"CV (PDF)"
  },
  es: {
    "nav.home":"Inicio","nav.odoo":"Odoo","nav.projects":"Proyectos","nav.skills":"Skills","nav.experience":"Experiencia","nav.contact":"Contacto",
    "cta.email":"Email","cta.projects":"Ver proyectos","cta.odoo":"Trabajo en Odoo","cta.cv":"Descargar CV",
    "hero.kicker":"CV One‑Page · Odoo · Datos · Frontend",
    "hero.lead":"Perfil full‑stack con fuerte experiencia en Odoo, además de Data (Pandas/NumPy) y React. Desarrollo soluciones limpias y mantenibles orientadas a valor de negocio.",
    "summary.kicker":"Resumen","summary.title":"Qué aporto","summary.projectsLabel":"Proyectos destacados","summary.projectsHint":"Odoo · Datos · React · Java",
    "summary.yearsNum":"3+","summary.yearsLabel":"Años en IT","summary.yearsHint":"Desarrollo y soporte","summary.locationLabel":"Ubicación","summary.locationValue":"España / Remoto",
    "odoo.lead":"Instalación, personalización y desarrollo en Odoo Community/Enterprise: módulos a medida, integraciones, migraciones y reporting.",
    "odoo.k1.title":"Módulos a medida","odoo.k1.desc":"Modelos Python, vistas, seguridad, asistentes y reportes QWeb.",
    "odoo.k2.title":"Integraciones","odoo.k2.desc":"APIs, importación/exportación y automatización de flujos.",
    "odoo.k3.title":"Migraciones","odoo.k3.desc":"Actualizaciones entre versiones y gestión de dependencias.",
    "odoo.k4.title":"Sectores","odoo.k4.desc":"Alimentación, logística, mantenimiento, CRM, e‑learning y e‑commerce.",
    "odoo.btn":"Abrir portfolio Odoo","odoo.expBtn":"Ver experiencia Odoo","odoo.projectsKicker":"Trabajos destacados",
    "odoo.p1":"Captura con QR para compras / documento de pesca",
    "odoo.p2":"Modelos de inventario + tests de control de calidad",
    "odoo.p3":"Punto de control de báscula para empaquetado (MRP)",
    "odoo.p4":"Campos de autorización contable + grupos de seguridad",
    "odoo.p5":"Ventas: fecha estimada + pie GDPR en reportes",
    "odoo.note":"Tip: la página de Odoo mantiene el estilo “slides” con colores de marca.",
    "projects.kicker":"Portfolio","projects.title":"Proyectos destacados","projects.subtitle":"Tarjetas + modal (galería cuando aplica).",
    "projects.filterAll":"Todos","projects.filterWeb":"Web","projects.open":"Abrir","projects.close":"Cerrar",
    "skills.kicker":"Skills","skills.title":"Conocimientos y herramientas","skills.subtitle":"Stack práctico construido con proyectos reales y experiencia profesional.",
    "skills.acquired":"Conocimientos adquiridos","skills.ds":"Datos / BI","skills.cloud":"Cloud","skills.front":"Frontend","skills.back":"Backend y BD","skills.tools":"Herramientas",
    "skills.odoo":"ERP","skills.agile":"Ágil y habilidades",
    "skills.aiTitle":"IA Generativa y Automatización Empresarial",
    "skills.designTitle":"Diseño Gráfico y Marketing","design.web":"Web / UI","design.adobe":"Adobe","design.video":"Vídeo / motion","design.audio":"Audio / música",
    "ai.1":"ChatGPT / Copilot / Gemini / Claude — redacción, informes, atención al cliente y soporte técnico.",
    "ai.2":"Power Automate / Make / Zapier — automatización administrativa y logística; integraciones (Odoo, CRM, comunicación).",
    "ai.3":"Notion AI / ClickUp Brain / Airtable AI — gestión inteligente de proyectos y tareas.",
    "ai.4":"OCR — digitalización y extracción automatizada de datos.",
    "ai.5":"DALL·E / Midjourney / Leonardo.ai — creación de material visual y recursos gráficos.",
    "ai.6":"Runway / Pika Labs / Synthesia — generación de vídeos explicativos y presentaciones.",
    "ai.7":"ChatGPT Code Interpreter / GitHub Copilot — asistencia en desarrollo.",
    "ai.8":"IA para logística — optimización de rutas, predicción de demanda y análisis de datos.",
    "exp.kicker":"Experiencia","exp.title":"Experiencia laboral","exp.subtitle":"Roles centrados en desarrollo Odoo, producción web y docencia.",
    "exp.i1.title":"Consultora y Desarrolladora Odoo — I2T Consultors","exp.i1.meta":"Manresa, Cataluña · 2023–2024",
    "exp.i2.title":"Desarrolladora Odoo — Solvos","exp.i2.meta":"Vigo, Pontevedra · 2022–2023",
    "exp.i3.title":"Desarrolladora y Maquetadora web — Ide Comunicación","exp.i3.meta":"Vigo, Pontevedra · 2021–2022",
    "exp.i4.title":"Profesora particular (actualidad)","exp.i4.meta":"Edición de vídeo · Diseño gráfico · Sistemas · Programación web",
    "exp.i5.title":"Diseñadora gráfica y comercial de merchandising — BRASILú","exp.i5.meta":"Rio de Janeiro, Brasil · 2013–2014",
    "exp.i6.title":"Diseñadora gráfica y web — Brasilú / Luso Print / COLORGRAF","exp.i6.meta":"Portugal y Brasil · 2011–2012 / 2006",
    "edu.kicker":"Educación","edu.title":"Formación",
    "edu.e1.title":"Especialización · Python App Dev","edu.e1.meta":"Instituto de Teis, Vigo · 2025–2026 · 430h",
    "edu.e2.title":"Técnico Superior · DAM","edu.e2.meta":"Instituto de Teis, Vigo · 2019–2022 · 2000h",
    "edu.e3.title":"Full‑Stack Developer","edu.e3.meta":"Hack a Boss Academy · 2021 · 400h",
    "edu.e4.title":"Grado · Ciencias Biológicas","edu.e4.meta":"UEMA · 2006–2010",
    "contact.kicker":"Contacto","contact.title":"Hablemos","contact.subtitle":"Si tienes un proyecto Odoo, una vacante o idea de colaboración, escríbeme.",
    "contact.emailBtn":"Enviar email","contact.links":"Enlaces","contact.odooPage":"Página portfolio Odoo","contact.cv":"CV (PDF)"
  },
  pt: {
    "nav.home":"Início","nav.odoo":"Odoo","nav.projects":"Projetos","nav.skills":"Skills","nav.experience":"Experiência","nav.contact":"Contato",
    "cta.email":"Email","cta.projects":"Ver projetos","cta.odoo":"Trabalhos em Odoo","cta.cv":"Baixar CV",
    "hero.kicker":"CV One‑Page · Odoo · Dados · Frontend",
    "hero.lead":"Perfil full‑stack com forte experiência em Odoo, além de Data (Pandas/NumPy) e React. Construo soluções limpas e sustentáveis focadas em valor de negócio.",
    "summary.kicker":"Resumo","summary.title":"O que entrego","summary.projectsLabel":"Projetos em destaque","summary.projectsHint":"Odoo · Dados · React · Java",
    "summary.yearsNum":"3+","summary.yearsLabel":"Anos em TI","summary.yearsHint":"Desenvolvimento e suporte","summary.locationLabel":"Localização","summary.locationValue":"Espanha / Remoto",
    "odoo.lead":"Instalação, personalização e desenvolvimento em Odoo Community/Enterprise: módulos sob medida, integrações, migrações e relatórios.",
    "odoo.k1.title":"Módulos sob medida","odoo.k1.desc":"Modelos Python, views, segurança, wizards e relatórios QWeb.",
    "odoo.k2.title":"Integrações","odoo.k2.desc":"APIs, importação/exportação e automação de fluxos.",
    "odoo.k3.title":"Migrações","odoo.k3.desc":"Atualizações entre versões e gestão de dependências.",
    "odoo.k4.title":"Setores","odoo.k4.desc":"Alimentação, logística, manutenção, CRM, e‑learning e e‑commerce.",
    "odoo.btn":"Abrir portfólio Odoo","odoo.expBtn":"Ver experiência Odoo","odoo.projectsKicker":"Trabalhos selecionados",
    "odoo.p1":"Captura via QR para compras / documento de pesca",
    "odoo.p2":"Modelos de inventário + testes de controle de qualidade",
    "odoo.p3":"Checkpoint de balança para empacotamento (MRP)",
    "odoo.p4":"Campos de autorização contábil + grupos de segurança",
    "odoo.p5":"Vendas: data prevista + rodapé GDPR em relatórios",
    "odoo.note":"Dica: a página de Odoo mantém o estilo “slides” com cores da marca.",
    "projects.kicker":"Portfólio","projects.title":"Projetos em destaque","projects.subtitle":"Cards + modal (galeria quando disponível).",
    "projects.filterAll":"Todos","projects.filterWeb":"Web","projects.open":"Abrir","projects.close":"Fechar",
    "skills.kicker":"Skills","skills.title":"Conhecimentos e ferramentas","skills.subtitle":"Stack prático construído com projetos reais e experiência profissional.",
    "skills.acquired":"Conhecimentos adquiridos","skills.ds":"Dados / BI","skills.cloud":"Cloud","skills.front":"Frontend","skills.back":"Backend e BD","skills.tools":"Ferramentas",
    "skills.odoo":"ERP","skills.agile":"Ágil e soft skills",
    "skills.aiTitle":"IA Generativa e Automação Empresarial",
    "skills.designTitle":"Design Gráfico e Marketing","design.web":"Web / UI","design.adobe":"Adobe","design.video":"Vídeo / motion","design.audio":"Áudio / música",
    "ai.1":"ChatGPT / Copilot / Gemini / Claude — textos, relatórios, atendimento e suporte técnico.",
    "ai.2":"Power Automate / Make / Zapier — automação administrativa e logística; integrações (Odoo, CRM, comunicação).",
    "ai.3":"Notion AI / ClickUp Brain / Airtable AI — gestão inteligente de tarefas e projetos.",
    "ai.4":"OCR — digitalização e extração automática de dados.",
    "ai.5":"DALL·E / Midjourney / Leonardo.ai — criação de materiais visuais e recursos gráficos.",
    "ai.6":"Runway / Pika Labs / Synthesia — vídeos explicativos e apresentações.",
    "ai.7":"ChatGPT Code Interpreter / GitHub Copilot — apoio ao desenvolvimento.",
    "ai.8":"IA para logística — otimização de rotas, previsão de demanda e análises.",
    "exp.kicker":"Experiência","exp.title":"Experiência profissional","exp.subtitle":"Funções focadas em Odoo, produção web e ensino.",
    "exp.i1.title":"Consultora e Desenvolvedora Odoo — I2T Consultors","exp.i1.meta":"Manresa, Catalunha · 2023–2024",
    "exp.i2.title":"Desenvolvedora Odoo — Solvos","exp.i2.meta":"Vigo, Pontevedra · 2022–2023",
    "exp.i3.title":"Desenvolvedora e Maquetadora web — Ide Comunicación","exp.i3.meta":"Vigo, Pontevedra · 2021–2022",
    "exp.i4.title":"Professora particular (atual)","exp.i4.meta":"Edição de vídeo · Design gráfico · Sistemas · Programação web",
    "exp.i5.title":"Designer gráfico e comercial — BRASILú","exp.i5.meta":"Rio de Janeiro, Brasil · 2013–2014",
    "exp.i6.title":"Designer gráfico e web — Brasilú / Luso Print / COLORGRAF","exp.i6.meta":"Portugal e Brasil · 2011–2012 / 2006",
    "edu.kicker":"Educação","edu.title":"Formação",
    "edu.e1.title":"Especialização · Python App Dev","edu.e1.meta":"Instituto de Teis, Vigo · 2025–2026 · 430h",
    "edu.e2.title":"Técnico Superior · DAM","edu.e2.meta":"Instituto de Teis, Vigo · 2019–2022 · 2000h",
    "edu.e3.title":"Full‑Stack Developer","edu.e3.meta":"Hack a Boss Academy · 2021 · 400h",
    "edu.e4.title":"Bacharel · Ciências Biológicas","edu.e4.meta":"UEMA · 2006–2010",
    "contact.kicker":"Contato","contact.title":"Vamos conversar","contact.subtitle":"Se você tem um projeto Odoo, vaga ou ideia de colaboração, fale comigo.",
    "contact.emailBtn":"Enviar email","contact.links":"Links","contact.odooPage":"Página portfólio Odoo","contact.cv":"CV (PDF)"
  },
  fr: {
    "nav.home":"Accueil","nav.odoo":"Odoo","nav.projects":"Projets","nav.skills":"Compétences","nav.experience":"Expérience","nav.contact":"Contact",
    "cta.email":"Email","cta.projects":"Voir les projets","cta.odoo":"Travaux Odoo","cta.cv":"Télécharger le CV",
    "hero.kicker":"CV One‑Page · Odoo · Data · Frontend",
    "hero.lead":"Profil full‑stack avec une forte expérience Odoo, plus Data (Pandas/NumPy) et React. Je construis des solutions propres, maintenables et orientées business.",
    "summary.kicker":"Aperçu","summary.title":"Ce que je fournis","summary.projectsLabel":"Projets clés","summary.projectsHint":"Odoo · Data · React · Java",
    "summary.yearsNum":"3+","summary.yearsLabel":"Années en IT","summary.yearsHint":"Dev & support","summary.locationLabel":"Localisation","summary.locationValue":"Espagne / Remote",
    "odoo.lead":"Mise en place, personnalisation et développement Odoo Community/Enterprise : modules sur mesure, intégrations, migrations et reporting.",
    "odoo.k1.title":"Modules sur mesure","odoo.k1.desc":"Modèles Python, vues, sécurité, wizards et rapports QWeb.",
    "odoo.k2.title":"Intégrations","odoo.k2.desc":"APIs, import/export de données et automatisation des workflows.",
    "odoo.k3.title":"Migrations","odoo.k3.desc":"Montées de version et gestion des dépendances.",
    "odoo.k4.title":"Domaines","odoo.k4.desc":"Agro‑alimentaire, logistique, maintenance, CRM, e‑learning et e‑commerce.",
    "odoo.btn":"Ouvrir le portfolio Odoo","odoo.expBtn":"Voir l’expérience Odoo","odoo.projectsKicker":"Travaux sélectionnés",
    "odoo.p1":"Capture via QR pour achats / document de pêche",
    "odoo.p2":"Modèles inventaire + tests de contrôle qualité",
    "odoo.p3":"Checkpoint balance pour packaging (MRP)",
    "odoo.p4":"Champs d’autorisation comptable + groupes de sécurité",
    "odoo.p5":"Ventes : date estimée + pied GDPR dans les rapports",
    "odoo.note":"Astuce : la page Odoo garde le style “slides” avec les couleurs de marque.",
    "projects.kicker":"Portfolio","projects.title":"Projets clés","projects.subtitle":"Cartes + modale (galerie si disponible).",
    "projects.filterAll":"Tous","projects.filterWeb":"Web","projects.open":"Ouvrir","projects.close":"Fermer",
    "skills.kicker":"Compétences","skills.title":"Connaissances & outils","skills.subtitle":"Stack pragmatique basé sur des projets réels et l’expérience.",
    "skills.acquired":"Connaissances acquises","skills.ds":"Data / BI","skills.cloud":"Cloud","skills.front":"Frontend","skills.back":"Backend & BD","skills.tools":"Outils",
    "skills.odoo":"ERP","skills.agile":"Agile & soft skills",
    "skills.aiTitle":"IA générative & automatisation",
    "skills.designTitle":"Design graphique & marketing","design.web":"Web / UI","design.adobe":"Adobe","design.video":"Vidéo / motion","design.audio":"Audio / musique",
    "ai.1":"ChatGPT / Copilot / Gemini / Claude — rédaction, rapports, support client et assistance technique.",
    "ai.2":"Power Automate / Make / Zapier — automatisation admin & logistique ; intégrations (Odoo, CRM, communication).",
    "ai.3":"Notion AI / ClickUp Brain / Airtable AI — gestion intelligente des tâches et projets.",
    "ai.4":"OCR — numérisation et extraction automatique de données.",
    "ai.5":"DALL·E / Midjourney / Leonardo.ai — création visuelle et supports marketing.",
    "ai.6":"Runway / Pika Labs / Synthesia — vidéos explicatives et présentations.",
    "ai.7":"ChatGPT Code Interpreter / GitHub Copilot — assistance au développement.",
    "ai.8":"IA pour la logistique — optimisation des itinéraires, prévision de la demande et analytics.",
    "exp.kicker":"Expérience","exp.title":"Parcours professionnel","exp.subtitle":"Rôles orientés Odoo, production web et enseignement.",
    "exp.i1.title":"Consultante & Développeuse Odoo — I2T Consultors","exp.i1.meta":"Manresa, Catalogne · 2023–2024",
    "exp.i2.title":"Développeuse Odoo — Solvos","exp.i2.meta":"Vigo, Pontevedra · 2022–2023",
    "exp.i3.title":"Développeuse web & maquettiste — Ide Comunicación","exp.i3.meta":"Vigo, Pontevedra · 2021–2022",
    "exp.i4.title":"Professeure particulière (actuel)","exp.i4.meta":"Montage vidéo · Design graphique · Systèmes · Programmation web",
    "exp.i5.title":"Designer graphique & merchandising — BRASILú","exp.i5.meta":"Rio de Janeiro, Brésil · 2013–2014",
    "exp.i6.title":"Designer graphique & web — Brasilú / Luso Print / COLORGRAF","exp.i6.meta":"Portugal & Brésil · 2011–2012 / 2006",
    "edu.kicker":"Éducation","edu.title":"Formation",
    "edu.e1.title":"Spécialisation · Python App Dev","edu.e1.meta":"Instituto de Teis, Vigo · 2025–2026 · 430h",
    "edu.e2.title":"Technicien supérieur · DAM","edu.e2.meta":"Instituto de Teis, Vigo · 2019–2022 · 2000h",
    "edu.e3.title":"Développeuse Full‑Stack","edu.e3.meta":"Hack a Boss Academy · 2021 · 400h",
    "edu.e4.title":"Licence · Sciences biologiques","edu.e4.meta":"UEMA · 2006–2010",
    "contact.kicker":"Contact","contact.title":"Contactez‑moi","contact.subtitle":"Pour un projet Odoo, un poste ou une collaboration — écrivez‑moi.",
    "contact.emailBtn":"Envoyer un email","contact.links":"Liens","contact.odooPage":"Page portfolio Odoo","contact.cv":"CV (PDF)"
  }
};

const DEFAULT_LANG = "en";

function applyI18n(lang){
  const dict = I18N[lang] || I18N[DEFAULT_LANG];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  // update active flag
  document.querySelectorAll(".flag-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  // rerender projects to refresh translated title/desc
  renderProjects(currentFilter);
}

function setLang(lang){
  localStorage.setItem("lang", lang);
  applyI18n(lang);
}

document.querySelectorAll(".flag-btn").forEach(btn => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

/* ========= Projects ========= */
const PROJECTS = [
  {
    key: "odoo",
    category: "odoo",
    link: "odoo.html",
    img: "assets/img/projects/odoo-cover.svg",
    title: {
      en: "Odoo Portfolio (Community & Enterprise)",
      es: "Portfolio Odoo (Community y Enterprise)",
      pt: "Portfólio Odoo (Community e Enterprise)",
      fr: "Portfolio Odoo (Community & Enterprise)"
    },
    desc: {
      en: "Custom modules, migrations, integrations and reporting. Click to see a detailed Odoo page with real addons and screenshots.",
      es: "Módulos a medida, migraciones, integraciones y reportes. Haz clic para ver una página Odoo detallada con addons y capturas.",
      pt: "Módulos sob medida, migrações, integrações e relatórios. Clique para ver a página Odoo com addons e capturas.",
      fr: "Modules sur mesure, migrations, intégrations et reporting. Cliquez pour une page Odoo détaillée avec addons et captures."
    },
    tags: ["odoo", "python", "postgresql"]
  },
  {
    key: "data",
    category: "data",
    link: "https://github.com/LucPinheiro/librerias_pandas_numpy_python",
    img: "assets/img/projects/pandas-numpy-cover.png",
    title: {
      en: "Data Analysis with Python (Pandas & NumPy)",
      es: "Análisis de Datos con Python (Pandas & NumPy)",
      pt: "Análise de Dados com Python (Pandas & NumPy)",
      fr: "Analyse de données avec Python (Pandas & NumPy)"
    },
    desc: {
      en: "Multi‑source integration (CSV/JSON/SQLite), cleaning, LEFT merges and EDA with data quality metrics.",
      es: "Integración multi‑fuente (CSV/JSON/SQLite), limpieza, merges LEFT y EDA con métricas de calidad.",
      pt: "Integração multi‑fonte (CSV/JSON/SQLite), limpeza, merges LEFT e EDA com métricas de qualidade.",
      fr: "Intégration multi‑sources (CSV/JSON/SQLite), nettoyage, merges LEFT et EDA avec métriques de qualité."
    },
    tags: ["python", "pandas", "numpy", "data"],
    gallery: [
      "assets/img/projects/pandas-numpy-cover.png",
      "assets/img/projects/pandas-numpy-cleaning.png",
      "assets/img/projects/pandas-numpy-joins.png",
      "assets/img/projects/pandas-numpy-dimensions.png",
      "assets/img/projects/pandas-numpy-geo.png"
    ]
  },
  {
    key: "java",
    category: "data", // keep under "data" or "all" (no java filter in UI)
    link: "https://github.com/LucPinheiro/SistemaControlVacuna_Java",
    img: "assets/img/projects/java-vaccines-cover.svg",
    title: {
      en: "Vaccine Control System (Java · OOP)",
      es: "Sistema de Control de Vacunas (Java · POO)",
      pt: "Sistema de Controle de Vacinas (Java · POO)",
      fr: "Système de contrôle des vaccins (Java · POO)"
    },
    desc: {
      en: "Domain model with interfaces and business rules: clinical phases, approve/reject flows and status queries.",
      es: "Modelo de dominio con interfaces y reglas de negocio: fases clínicas, autorización/rechazo y consultas por estado.",
      pt: "Modelo de domínio com interfaces e regras de negócio: fases clínicas, aprovação/rejeição e consultas por status.",
      fr: "Modèle de domaine avec interfaces et règles métier : phases cliniques, validation/refus et requêtes d’état."
    },
    tags: ["java", "oop", "interfaces", "backend"]
  },
  {
    key: "web",
    category: "web",
    link: "https://github.com/LucPinheiro/OjeadorDeportivo_React",
    img: "assets/img/projects/ojeador-cover.svg",
    title: {
      en: "Sports Scout (React)",
      es: "Ojeador Deportivo (React)",
      pt: "Olheiro Esportivo (React)",
      fr: "Recruteur sportif (React)"
    },
    desc: {
      en: "Role‑based SPA connecting scouts and families: player profiles with photos/videos, filtered search and hiring requests.",
      es: "SPA por roles que conecta ojeadores y familias: perfiles con fotos/vídeos, búsqueda con filtros y solicitudes de contratación.",
      pt: "SPA por perfis conectando olheiros e famílias: perfis com fotos/vídeos, busca com filtros e solicitações.",
      fr: "SPA par rôles reliant recruteurs et familles : profils (photos/vidéos), recherche filtrée et demandes."
    },
    tags: ["react", "spa", "frontend", "ux"]
  }
];

const grid = document.getElementById("projectsGrid");
const filterBtns = document.querySelectorAll("[data-filter]");
let currentFilter = "all";

function getLang(){
  return localStorage.getItem("lang") || DEFAULT_LANG;
}

function projectMatches(p, filter){
  if (filter === "all") return true;
  return p.category === filter || p.tags.includes(filter);
}

function renderProjects(filter){
  if (!grid) return;
  currentFilter = filter || "all";
  const lang = getLang();
  grid.innerHTML = "";

  PROJECTS.filter(p => projectMatches(p, currentFilter)).forEach((p, idx) => {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-4";
    const title = (p.title && p.title[lang]) || (p.title && p.title.en) || "";
    const desc  = (p.desc && p.desc[lang]) || (p.desc && p.desc.en) || "";

    col.innerHTML = `
      <div class="glow-card h-100">
        <div class="glow-inner d-flex flex-column h-100">
          <img class="thumb mb-3" src="${p.img}" alt="${title}" loading="lazy">
          <div class="d-flex flex-wrap gap-2 mb-2">
            ${p.tags.map(t => `<span class="badge-soft">${t}</span>`).join("")}
          </div>
          <div class="fw-bold fs-5">${title}</div>
          <p class="text-muted-2 mt-2 mb-3">${desc}</p>

          <div class="mt-auto d-flex gap-2">
            <button class="btn btn-outline-glow btn-sm w-100" data-open="${idx}">
              <span>${(I18N[lang]?.["projects.open"]) || "Open"}</span>
            </button>
            <a class="btn btn-outline-glow btn-sm" href="${p.link}" target="${p.link.endsWith('.html') ? '_self' : '_blank'}" rel="noreferrer" aria-label="Open link">
              <i class="bi bi-box-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(col);
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

/* ========= Modal ========= */
const modalEl = document.getElementById("projectModal");
const modal = modalEl ? new bootstrap.Modal(modalEl) : null;
const pmTitle = document.getElementById("pmTitle");
const pmDesc  = document.getElementById("pmDesc");
const pmTags  = document.getElementById("pmTags");
const pmLink  = document.getElementById("pmLink");
const pmImg   = document.getElementById("pmImg");
const pmGallery = document.getElementById("pmGallery");

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-open]");
  if (!btn || !modal) return;

  const idx = Number(btn.dataset.open);
  const p = PROJECTS.filter(pp => projectMatches(pp, currentFilter))[idx];

  const lang = getLang();
  const title = (p.title && p.title[lang]) || (p.title && p.title.en) || "";
  const desc  = (p.desc && p.desc[lang]) || (p.desc && p.desc.en) || "";

  pmTitle.textContent = title;
  pmDesc.textContent  = desc;
  pmLink.href         = p.link;
  pmLink.target       = p.link.endsWith(".html") ? "_self" : "_blank";
  pmImg.src           = p.img;

  pmTags.innerHTML = p.tags.map(t => `<span class="badge-soft">${t}</span>`).join("");

  // Gallery (if any)
  pmGallery.innerHTML = "";
  if (p.gallery && p.gallery.length) {
    p.gallery.forEach(src => {
      const d = document.createElement("div");
      d.className = "col-6";
      d.innerHTML = `<img class="thumb" src="${src}" alt="Gallery" loading="lazy">`;
      pmGallery.appendChild(d);
    });
  }

  modal.show();
});

/* ========= Init ========= */
document.getElementById("year").textContent = new Date().getFullYear();

// load default language
applyI18n(getLang());

// render projects
renderProjects("all");
