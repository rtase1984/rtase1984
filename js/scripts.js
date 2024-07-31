const toggleThemeCheckbox = document.getElementById('toggle-theme-checkbox');

// Función para cambiar el modo
function toggleTheme() {
    const elements = document.querySelectorAll('.container, .sidebar, .main-content, .project, .roadmap-item, .roadmap-item .progress-bar, .roadmap-item .progress, .language-switcher button');
    document.body.classList.toggle('dark-mode');
    elements.forEach(el => el.classList.toggle('dark-mode'));
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Evento para el checkbox de cambio de tema
toggleThemeCheckbox.addEventListener('change', toggleTheme);

// Establece el tema al cargar la página basado en la preferencia guardada
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const elements = document.querySelectorAll('.container, .sidebar, .main-content, .project, .roadmap-item, .roadmap-item .progress-bar, .roadmap-item .progress, .language-switcher button');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        elements.forEach(el => el.classList.add('dark-mode'));
        toggleThemeCheckbox.checked = true;
    }
});

// Soporte para Múltiples Idiomas
const translations = {
    en: {
        nombre: "Your Name",
        profesion: "Software Developer",
        bienvenido: "Welcome to my Portfolio (under construction)",
        explora: "Explore my projects and skills.",
        proyectosDestacados: "Featured Projects",
        proyecto1Titulo: "Project 1",
        proyecto1Desc: "Description of Project 1. It uses Java, Spring Boot, and PostgreSQL.",
        proyecto2Titulo: "Project 2",
        proyecto2Desc: "Description of Project 2. It uses PHP, Laravel, and MySQL.",
        misRoadmaps: "My Roadmaps",
        seguimiento: "Here you can track the progress of my skills over time.",
        javaRoadmap: "Java",
        devopsRoadmap: "DevOps",
        webRoadmap: "Web Development",
    },
    es: {
        nombre: "Tu Nombre",
        profesion: "Desarrollador de Software",
        bienvenido: "Bienvenido a mi Portafolio (en construcción)",
        explora: "Explora mis proyectos y habilidades.",
        proyectosDestacados: "Proyectos Destacados",
        proyecto1Titulo: "Proyecto 1",
        proyecto1Desc: "Descripción del Proyecto 1. Utiliza Java, Spring Boot, y PostgreSQL.",
        proyecto2Titulo: "Proyecto 2",
        proyecto2Desc: "Descripción del Proyecto 2. Utiliza PHP, Laravel, y MySQL.",
        misRoadmaps: "Mis Roadmaps",
        seguimiento: "Aquí puedes seguir el progreso de mis habilidades a lo largo del tiempo.",
        javaRoadmap: "Java",
        devopsRoadmap: "DevOps",
        webRoadmap: "Desarrollo Web",
    },
    fr: {
        nombre: "Votre Nom",
        profesion: "Développeur de Logiciels",
        bienvenido: "Bienvenue sur mon Portfolio (en construction)",
        explora: "Explorez mes projets et compétences.",
        proyectosDestacados: "Projets à la Une",
        proyecto1Titulo: "Projet 1",
        proyecto1Desc: "Description du Projet 1. Il utilise Java, Spring Boot et PostgreSQL.",
        proyecto2Titulo: "Projet 2",
        proyecto2Desc: "Description du Projet 2. Il utilise PHP, Laravel et MySQL.",
        misRoadmaps: "Mes Roadmaps",
        seguimiento: "Ici, vous pouvez suivre l'évolution de mes compétences au fil du temps.",
        javaRoadmap: "Java",
        devopsRoadmap: "DevOps",
        webRoadmap: "Développement Web",
    }
};

// Función para cambiar el idioma
function setLanguage(language) {
    const elements = document.querySelectorAll('[id]');
    elements.forEach(el => {
        const translationKey = el.id;
        if (translations[language][translationKey]) {
            el.textContent = translations[language][translationKey];
        }
    });
    // Marca el botón del idioma activo
    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.classList.remove('active-language'); // Remueve la clase activa de todos los botones
        if (btn.getAttribute('data-lang') === language) {
            btn.classList.add('active-language'); // Añade la clase activa al botón seleccionado
        }
    });
    localStorage.setItem('language', language); // Guarda el idioma seleccionado en localStorage
}

// Evento para los botones de cambio de idioma
document.querySelectorAll('.language-switcher button').forEach(btn => {
    btn.addEventListener('click', () => {
        const language = btn.getAttribute('data-lang');
        setLanguage(language);
    });
});

// Establece el idioma al cargar la página basado en la preferencia guardada
window.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || (navigator.language.startsWith('es') ? 'es' : 'en');
    setLanguage(savedLanguage);
});
