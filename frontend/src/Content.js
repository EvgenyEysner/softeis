import Hero_person from "./assets/images/Hero/person.png";

import django from "./assets/images/Skills/django.png";
import fastapi from "./assets/images/Skills/fastapi.png";
import reactjs from "./assets/images/Skills/react.png";
import html from "./assets/images/Skills/html.webp";
import css from "./assets/images/Skills/css.png";
import javascript from "./assets/images/Skills/js.webp";
import docker from "./assets/images/Skills/docker.webp";
import linux from "./assets/images/Skills/linux.webp";
import python from "./assets/images/Skills/python.webp";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import {GrMail} from "react-icons/gr";
import {MdArrowForward, MdCall, MdOutlinePermContactCalendar} from "react-icons/md";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {TbSmartHome} from "react-icons/tb";
import {BiUser} from "react-icons/bi";
import {RiProjectorLine, RiServiceLine} from "react-icons/ri";

export const content = {
  nav: [
    {link: "#home", icon: TbSmartHome},
    {link: "#skills", icon: BiUser},
    {link: "#services", icon: RiServiceLine},
    {link: "#projects", icon: RiProjectorLine},
    {link: "#contact", icon: MdOutlinePermContactCalendar},
  ],
  hero: {
    title: "Full-Stack-Entwickler",
    firstName: "Evgeny",
    LastName: "Eysner",
    btnText: "Projekte entdecken →",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Jahre Erfahrung in Full-Stack-Entwicklung",
      },
      {
        count: "15+",
        text: "Erfolgreich umgesetzte Projekte",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MEINE KERNKOMPETENZEN",
    skills_content: [
      {
        name: "Python",
        description: "Robuste Backend-Lösungen & skalierbare Web-APIs",
        modalDesc: "Backend-Entwicklung mit umfangreichen Standardbibliotheken. " +
          "Web-Scraping und Automatisierung. Datenverarbeitung und API-Integration. " +
          "Entwicklung von CLI-Tools für DevOps. Unittest und Pytest für Qualitätssicherung. " +
          "Asynchrone Programmierung mit asyncio.",
        logo: python,
      },
      {
        name: "Django / Django REST Framework",
        description: "Robuste Backend-Lösungen & skalierbare Web-APIs",
        modalDesc: "MVC-basierte Webanwendungen. Komplexe Datenbankstrukturen mit ORM. REST APIs mit serialisierten Datenmodellen. " +
          "Token-basierte Authentifizierung. Automatisch generierte Admin-Oberfläche.Integrierte Sicherheitsfunktionen. " +
          "Template-System für Server-Side Rendering",
        logo: django,
      },
      {
        name: "FastAPI",
        description: "Hochperformante REST-APIs mit modernen Standards",
        modalDesc: "Hochperformante REST APIs. OpenAPI (Swagger) Dokumentation. Asynchrone Endpunkte für bessere Skalierung. " +
          "Automatische Datenvalidierung mit Pydantic. WebSocket-Unterstützung für Echtzeitkommunikation. " +
          "Dependency Injection System. CORS und Middleware-Integration",
        logo: fastapi,
      },
      {
        name: "React.js",
        description: "Interaktive Frontends mit State-of-the-Art Technologien",
        modalDesc: "Moderne Single Page Applications (SPA). Wiederverwendbare UI-Komponenten. React Hooks für Zustandsmanagement. " +
          "Integration von REST und GraphQL APIs. Client-Side Routing mit React Router. Optimierte Rendering-Performance.",
        logo: reactjs,
      },
      {
        name: "Docker",
        description: "Containerisierung & effiziente Deployment-Pipelines",
        modalDesc: "Containerisierung von Webanwendungen. Multi-Container-Setups mit Docker Compose. CI/CD-Pipeline Integration. " +
          "Development und Production Builds. Volume-Management für Persistenz. Container-Orchestrierung. Docker Registry Management",
        logo: docker,
      },
      {
        name: "Linux/DevOps",
        description: "Serveradministration & CI/CD-Implementierung",
        modalDesc: "Nginx Webserver-Konfiguration. SSL/TLS-Zertifikate mit Let's Encrypt. Prozess-Management mit Systemd. " +
          "Automatisierte Backups. Server-Monitoring und Logging. Shell-Scripting für Automation. Security Best Practices",
        logo: linux,
      },
      {
        name: "JavaScript",
        description: "Entwicklung mit ES6+ & modernen Frameworks",
        modalDesc: "Features und Module-System. Asynchrone Programmierung mit Promises/async/await. DOM-Manipulation und Event-Handling. " +
          "API-Aufrufe mit Fetch/Axios. localStorage/sessionStorage Verwaltung. Error Handling und Debugging. npm Paket-Management",
        logo: javascript,
      },
      {
        name: "HTML",
        description: "Semantische Strukturierung & barrierefreie Webentwicklung",
        modalDesc: "Semantische HTML5-Strukturen. Meta-Tags für SEO-Optimierung. " +
          "Responsive Layouts. Script und Style Integration.",
        logo: html,
      },
      {
        name: "CSS",
        description: "Responsive Layouts & moderne Design-Systeme",
        modalDesc: "Responsive Design mit Media Queries. Flexbox und Grid Layout-Systeme. CSS-Animationen und Transitionen. " +
          "Cross-Browser-Kompatibilität",
        logo: css,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Leistungen",
    subtitle: "WAS ICH BIETE",
    service_content: [
      {
        title: "Full-Stack Entwicklung",
        description: "Von der Konzeption bis zum Deployment: Individuelle Webanwendungen mit Django, React und Docker-Infrastruktur.",
        logo: services_logo1,
      },
      {
        title: "API-Entwicklung",
        description: "Schnelle & dokumentierte APIs mit FastAPI für Mobile-Apps, Microservices und Integrationen.",
        logo: services_logo2,
      },
      {
        title: "DevOps Lösungen",
        description: "Automatisierte Deployment-Pipelines, Cloud-Integration und Serveroptimierung für maximale Performance.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projekte",
    subtitle: "MEINE ARBEIT",
    image: person_project,
    project_content: [
      {
        title: "E-Commerce Plattform",
        image: project1,
        desc: "Full-Stack Lösung mit Django Backend und React Frontend"
      },
      {
        title: "Analytics Dashboard",
        image: project2,
        desc: "Echtzeit-Datenvisualisierung mit FastAPI und React"
      },
      {
        title: "CI/CD Pipeline Setup",
        image: project3,
        desc: "Docker-basierte Deployment-Automatisierung für Kubernetes"
      },
    ],
  },
  Contact: {
    title: "Kontakt",
    subtitle: "JETZT KONTAKTIEREN",
    social_media: [
      {
        text: "evgeny.eysner@gmail.com",
        icon: GrMail,
        link: "evgeny.eysner@gmail.com",
      },
      {
        text: "+49 1797716033",
        icon: MdCall,
        link: "https://wa.me/+491797716033",
      },
      {
        text: "GitHub Profile",
        icon: BsGithub,
        link: "https://github.com/evgenyeysner",
      },
      {
        text: "LinkedIn Profil",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/evgeny-eysner-4b3744222/",
      },
    ],
  },
  Footer: {
    text: "© 2025 Softeis | Alle Rechte vorbehalten",
  },
};
