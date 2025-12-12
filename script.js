document.addEventListener("DOMContentLoaded", function () {
  var intro = document.querySelector(".intro") || createIntro();
  var bar = document.querySelector(".progress-bar");
  var progress = 0;
  var interval = setInterval(function () {
    progress += Math.random() * 12;
    if (progress > 100) progress = 100;
    if (bar) bar.style.width = progress + "%";
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(function () {
        intro.style.opacity = "0";
        setTimeout(function () {
          intro.style.display = "none";
          document.documentElement.style.overflowY = "auto";
        }, 400);
      }, 300);
    }
  }, 180);
  function createIntro() {
    var n = document.createElement("div");
    n.className = "intro";
    n.innerHTML = '<div class="intro-box"><h1>Bienvenido</h1><p>Preparando tu portafolio</p><div class="progress"><div class="progress-bar"></div></div></div>';
    document.body.appendChild(n);
    return n;
  }
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
  var menuToggle = document.getElementById("menuToggle");
  var navLinks = document.getElementById("navLinks");
  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  }
  var langBtn = document.getElementById("langBtn");
  var langOptions = document.getElementById("langOptions");
  var langLabel = document.getElementById("langLabel");
  if (langBtn) {
    langBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      langOptions.classList.toggle("show");
    });
  }
  document.addEventListener("click", function () {
    if (langOptions) langOptions.classList.remove("show");
  });
  var i18n = {
    es: {
      meta_title: "Gael Emiliano Pérez Osuna — Portafolio",
      logo: "Gael",
      nav_hero: "Sobre mí",
      nav_services: "Habilidades",
      nav_skills: "Conocimientos",
      nav_edu: "Educación",
      nav_cert: "Certificados",
      nav_proj: "Proyectos",
      nav_contact: "Contacto",
      lang_label: "Español",
      lang_es: "🇲🇽 Español",
      lang_en: "🇺🇸 English",
      lang_fr: "🇫🇷 Français",
      hero_t1: "Hola, soy <span class=\"accent\">Gael</span>",
      hero_p: "Soy una persona con fuerte interés por el futuro de la tecnología, motivado por aprender continuamente \n                y profundizar en mi área profesional. Me apasiona resolver problemas complejos mediante soluciones \n                eficientes en seguridad informática, bases de datos y redes. Actualmente curso estudios universitarios \n                con el objetivo de ejercer profesionalmente mientras sigo creciendo día con día.",
      hero_btn: "Ver Proyectos",
      services_t: "HABILIDADES",
      serv1_t: "Seguridad Informática",
      serv1_p: "Análisis, protección y endurecimiento de sistemas, redes y accesos.",
      serv2_t: "Bases de Datos",
      serv2_p: "Diseño, modelado, consultas y administración de bases SQL.",
      serv3_t: "Redes y Cisco",
      serv3_p: "Configuración de VLAN, ACLs, diagnósticos y simulación de topologías seguras.",
      serv4_t: "Desarrollo Web",
      serv4_p: "Frontend básico con HTML, CSS y JavaScript, control de versiones con Git.",
      serv5_t: "Desarrollo Móvil",
      serv5_p: "Aplicaciones en Android Studio.",
      serv6_t: "UI/UX y Prototipado",
      serv6_p: "Prototipos en Figma para aplicaciones web y móviles.",
      skills_t: "CONOCIMIENTOS",
      sk_html: "HTML",
      sk_css: "CSS",
      sk_js: "JavaScript",
      sk_py: "Python",
      sk_cpp: "C++",
      sk_fig: "Figma",
      sk_vsc: "VSCode",
      sk_git: "GitHub",
      sk_lab: "GitLab",
      sk_cis: "Cisco",
      sk_and: "Android",
      sk_sql: "SQL",
      edu_t: "EDUCACIÓN",
      edu1_t: "Universidad Politécnica de Sinaloa",
      edu1_p: "Ingeniería en Tecnologías de la Información e Innovación Digital",
      edu2_t: "Certificaciones Técnicas",
      edu2_p: "Inglés B1 · Técnico en Mecatrónica · Cursos Cisco.",
      cert_t: "CERTIFICADOS",
      cert1_t: "Certificado: CSS",
      cert2_t: "Certificado: HTML",
      cert3_t: "Certificado: Introducción a Redes",
      cert4_t: "Certificado: Redes",
      proj_t: "PROYECTOS",
      proj1_t: "EazyHome",
      proj1_p: "Aplicación web para la contratación de servicios.",
      proj1_tech: "HTML · JavaScript · MySQL · Figma · CSS · XAMPP",
      proj2_t: "Rutamaz",
      proj2_p: "App móvil para rastreo de rutas de camiones.",
      proj2_tech: "Figma",
      proj3_t: "TacoMex",
      proj3_p: "App móvil para gestión de restaurantes.",
      proj3_tech: "Figma",
      contact_t: "CONTACTO",
      contact_mail: "Gmail: gepo2006@gmail.com",
      contact_tel: "Número: +52 669 229 9866",
      contact_lang: "Idiomas: Español (Nativo) · Inglés (B1)",
      footer_copy: "© <span id=\"year\"></span> Gael Emiliano Pérez Osuna — Portafolio",
      t1: "Soy un desarrollador",
      t2: "Soy un ing. en seguridad",
      t3: "Soy un analista",
      t4: "Soy una persona curiosa"
    },
    en: {
      meta_title: "Gael Emiliano Pérez Osuna — Portfolio",
      logo: "Gael",
      nav_hero: "About",
      nav_services: "Skills",
      nav_skills: "Knowledge",
      nav_edu: "Education",
      nav_cert: "Certificates",
      nav_proj: "Projects",
      nav_contact: "Contact",
      lang_label: "English",
      lang_es: "🇲🇽 Español",
      lang_en: "🇺🇸 English",
      lang_fr: "🇫🇷 Français",
      hero_t1: "Hi, I'm <span class=\"accent\">Gael</span>",
      hero_p: "I am a person with a strong interest in the future of technology, motivated to continuously learn \n                and deepen my professional area. I am passionate about solving complex problems through efficient \n                solutions in information security, databases, and networks. I am currently studying at university \n                with the goal of practicing professionally while continuing to grow day by day.",
      hero_btn: "View Projects",
      services_t: "SKILLS",
      serv1_t: "Information Security",
      serv1_p: "Analysis, protection and hardening of systems, networks and access.",
      serv2_t: "Databases",
      serv2_p: "Design, modeling, queries and administration of SQL databases.",
      serv3_t: "Networks & Cisco",
      serv3_p: "Configuration of VLANs, ACLs, diagnostics and simulation of secure topologies.",
      serv4_t: "Web Development",
      serv4_p: "Basic frontend with HTML, CSS and JavaScript, version control with Git.",
      serv5_t: "Mobile Development",
      serv5_p: "Applications in Android Studio.",
      serv6_t: "UI/UX & Prototyping",
      serv6_p: "Prototypes in Figma for web and mobile applications.",
      skills_t: "KNOWLEDGE",
      sk_html: "HTML",
      sk_css: "CSS",
      sk_js: "JavaScript",
      sk_py: "Python",
      sk_cpp: "C++",
      sk_fig: "Figma",
      sk_vsc: "VSCode",
      sk_git: "GitHub",
      sk_lab: "GitLab",
      sk_cis: "Cisco",
      sk_and: "Android",
      sk_sql: "SQL",
      edu_t: "EDUCATION",
      edu1_t: "Polytechnic University of Sinaloa",
      edu1_p: "Engineering in Information Technologies and Digital Innovation",
      edu2_t: "Technical Certifications",
      edu2_p: "English B1 · Technical in Mechatronics · Cisco courses.",
      cert_t: "CERTIFICATES",
      cert1_t: "Certificate: CSS",
      cert2_t: "Certificate: HTML",
      cert3_t: "Certificate: Introduction to Networks",
      cert4_t: "Certificate: Networks",
      proj_t: "PROJECTS",
      proj1_t: "EazyHome",
      proj1_p: "Web application for hiring services.",
      proj1_tech: "HTML · JavaScript · MySQL · Figma · CSS · XAMPP",
      proj2_t: "Rutamaz",
      proj2_p: "Mobile app for tracking bus routes.",
      proj2_tech: "Figma",
      proj3_t: "TacoMex",
      proj3_p: "Mobile app for restaurant management.",
      proj3_tech: "Figma",
      contact_t: "CONTACT",
      contact_mail: "Gmail: gepo2006@gmail.com",
      contact_tel: "Phone: +52 669 229 9866",
      contact_lang: "Languages: Spanish (Native) · English (B1)",
      footer_copy: "© <span id=\"year\"></span> Gael Emiliano Pérez Osuna — Portfolio",
      t1: "I'm a developer",
      t2: "I'm a security eng.",
      t3: "I'm an analyst",
      t4: "I'm a curious person"
    },
    fr: {
      meta_title: "Gael Emiliano Pérez Osuna — Portefeuille",
      logo: "Gael",
      nav_hero: "À propos",
      nav_services: "Compétences",
      nav_skills: "Connaissances",
      nav_edu: "Éducation",
      nav_cert: "Certificats",
      nav_proj: "Projets",
      nav_contact: "Contact",
      lang_label: "Français",
      lang_es: "🇲🇽 Español",
      lang_en: "🇺🇸 English",
      lang_fr: "🇫🇷 Français",
      hero_t1: "Bonjour, je suis <span class=\"accent\">Gael</span>",
      hero_p: "Je suis une personne fortement intéressée par l'avenir de la technologie, motivée à apprendre en continu \n                et à approfondir mon domaine professionnel. Je suis passionné par la résolution de problèmes complexes \n                grâce à des solutions efficaces en sécurité informatique, bases de données et réseaux. J'étudie actuellement \n                à l'université dans le but d'exercer professionnellement tout en continuant à progresser jour après jour.",
      hero_btn: "Voir les projets",
      services_t: "COMPÉTENCES",
      serv1_t: "Sécurité informatique",
      serv1_p: "Analyse, protection et durcissement des systèmes, réseaux et accès.",
      serv2_t: "Bases de données",
      serv2_p: "Conception, modélisation, requêtes et administration de bases SQL.",
      serv3_t: "Réseaux & Cisco",
      serv3_p: "Configuration de VLAN, ACL, diagnostics et simulation de topologies sécurisées.",
      serv4_t: "Développement Web",
      serv4_p: "Frontend basique avec HTML, CSS et JavaScript, gestion de versions avec Git.",
      serv5_t: "Développement mobile",
      serv5_p: "Applications avec Android Studio.",
      serv6_t: "UI/UX & Prototypage",
      serv6_p: "Prototypes dans Figma pour applications web et mobiles.",
      skills_t: "CONNAISSANCES",
      sk_html: "HTML",
      sk_css: "CSS",
      sk_js: "JavaScript",
      sk_py: "Python",
      sk_cpp: "C++",
      sk_fig: "Figma",
      sk_vsc: "VSCode",
      sk_git: "GitHub",
      sk_lab: "GitLab",
      sk_cis: "Cisco",
      sk_and: "Android",
      sk_sql: "SQL",
      edu_t: "ÉDUCATION",
      edu1_t: "Université Polytechnique de Sinaloa",
      edu1_p: "Génie en technologies de l'information et innovation numérique",
      edu2_t: "Certifications techniques",
      edu2_p: "Anglais B1 · Technique en mécatronique · Cours Cisco.",
      cert_t: "CERTIFICATS",
      cert1_t: "Certificat : CSS",
      cert2_t: "Certificat : HTML",
      cert3_t: "Certificat : Introduction aux réseaux",
      cert4_t: "Certificat : Réseaux",
      proj_t: "PROJETS",
      proj1_t: "EazyHome",
      proj1_p: "Application web pour la location de services.",
      proj1_tech: "HTML · JavaScript · MySQL · Figma · CSS · XAMPP",
      proj2_t: "Rutamaz",
      proj2_p: "Application mobile pour le suivi des itinéraires de bus.",
      proj2_tech: "Figma",
      proj3_t: "TacoMex",
      proj3_p: "Application mobile pour la gestion de restaurants.",
      proj3_tech: "Figma",
      contact_t: "CONTACT",
      contact_mail: "Gmail : gepo2006@gmail.com",
      contact_tel: "Téléphone : +52 669 229 9866",
      contact_lang: "Langues : Espagnol (natif) · Anglais (B1)",
      footer_copy: "© <span id=\"year\"></span> Gael Emiliano Pérez Osuna — Portefeuille",
      t1: "Je suis développeur",
      t2: "Je suis un ingénieur en sécurité",
      t3: "Je suis un analyste",
      t4: "Je suis une personne curieuse"
    }
  };
  function applyLang(lang) {
    var els = document.querySelectorAll("[data-i18n]");
    els.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (i18n[lang] && i18n[lang][key]) {
        el.innerHTML = i18n[lang][key];
      }
    });
    if (i18n[lang] && i18n[lang].meta_title) document.title = i18n[lang].meta_title;
    if (langLabel) langLabel.textContent = i18n[lang].lang_label;
    document.documentElement.lang = lang;
    setTypingTexts(lang);
  }
  var currentLang = localStorage.getItem("siteLang") || "es";
  applyLang(currentLang);
  document.querySelectorAll("#langOptions li").forEach(function (li) {
    li.addEventListener("click", function () {
      var lang = li.getAttribute("data-lang");
      localStorage.setItem("siteLang", lang);
      applyLang(lang);
      if (langOptions) langOptions.classList.remove("show");
    });
  });
  var modal = document.getElementById("certModal");
  var modalImg = document.getElementById("modalImg");
  var closeBtn = document.querySelector(".close-modal");
  document.querySelectorAll(".cert-card").forEach(function (card) {
    card.addEventListener("click", function () {
      if (!modal) return;
      modal.style.display = "block";
      modalImg.src = this.getAttribute("data-cert");
    });
  });
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      if (!modal) return;
      modal.style.display = "none";
    });
  }
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
  var texts = [];
  var typingElement = document.querySelector(".typing");
  var i = 0;
  var j = 0;
  var deleting = false;
  var typingTimer = null;
  function typeLoop() {
    var current = texts[i] || "";
    if (!deleting) {
      if (typingElement) typingElement.textContent = current.slice(0, j++);
      if (j === current.length + 1) {
        deleting = true;
        typingTimer = setTimeout(typeLoop, 1400);
        return;
      }
    } else {
      if (typingElement) typingElement.textContent = current.slice(0, j--);
      if (j < 0) {
        deleting = false;
        i = (i + 1) % texts.length;
      }
    }
    typingTimer = setTimeout(typeLoop, deleting ? 50 : 90);
  }
  function setTypingTexts(lang) {
    if (!i18n[lang]) return;
    texts = [
      i18n[lang].t1 || "",
      i18n[lang].t2 || "",
      i18n[lang].t3 || "",
      i18n[lang].t4 || ""
    ];
    if (typingTimer) {
      clearTimeout(typingTimer);
      typingTimer = null;
    }
    i = 0;
    j = 0;
    deleting = false;
    if (typingElement) {
      typingElement.textContent = "";
      setTimeout(typeLoop, 400);
    }
  }
  setTypingTexts(currentLang);
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal(".section-title", { duration: 900, distance: "40px", origin: "bottom" });
    ScrollReveal().reveal(".hero-left, .hero-right", { duration: 1000, distance: "50px", origin: "left", interval: 120 });
    ScrollReveal().reveal(".service-card", { duration: 900, distance: "40px", origin: "bottom", interval: 120 });
    ScrollReveal().reveal(".skill-item", { duration: 900, distance: "40px", origin: "bottom", interval: 80 });
    ScrollReveal().reveal(".timeline-item", { duration: 900, distance: "40px", origin: "left", interval: 140 });
    ScrollReveal().reveal(".project-card", { duration: 900, distance: "40px", origin: "bottom", interval: 120 });
    ScrollReveal().reveal(".cert-card", { duration: 900, distance: "40px", origin: "bottom", interval: 120 });
  }
});
