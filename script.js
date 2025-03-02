function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    pages.forEach(page => page.classList.remove('active'));
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
        selectedPage.classList.add('active');
    }
}

function changeLanguage() {
    const currentLang = document.documentElement.lang;
    if (currentLang === 'es') {
        document.documentElement.lang = 'en';
        updateTextToEnglish();
    } else {
        document.documentElement.lang = 'es';
        updateTextToSpanish();
    }
}

function updateTextToEnglish() {
    document.getElementById("pageTitle").textContent = "MafeMCode's Portfolio";
    document.getElementById("navAboutMe").textContent = "About me";
    document.getElementById("navSkills").textContent = "Skills";
    document.getElementById("navProjects").textContent = "Projects";
    document.getElementById("navContact").textContent = "Contact me";
    document.getElementById("navChangeLang").innerHTML = "<img class='bandera' src='./media/español.png' alt='Español'></img>";
    
    document.getElementById("page1Title").textContent = "Marcos Fernández Moya";
    document.getElementById("skillsTitle").textContent = "Education";
    document.getElementById("experienceTitle").textContent = "Experience";
    document.getElementById("aboutMe").innerHTML = "I am a <strong>newly graduated web developer</strong> with training in <strong>Full Stack</strong>. Throughout my degree, I have gained a solid foundation in web technologies, application development, and database management. My passion for <strong>Big Data</strong> drives me to continue deepening my understanding of handling large volumes of data and finding innovative solutions.";
    document.getElementById("motivation").innerHTML = "Although I'm still learning, I'm very motivated to face new challenges and grow in web development.";
    document.getElementById("lookingFor").innerHTML = "I'm looking for opportunities to continue learning and contribute my enthusiasm.";
    
    document.getElementById("page2Title").textContent = "Skills";
    document.getElementById("langTitle").textContent = "Languages";
    document.getElementById("lenES").textContent = "Spanish - Native";
    document.getElementById("lenEN").textContent = "English - C2 Proficiency";
    document.getElementById("lenFR").textContent = "French - Conversational";
    document.getElementById("lenNW").textContent = "Norwegian - Begginer";
    
    document.getElementById("page3Title").textContent = "Projects";
    document.getElementById("project1").innerHTML = "<p>Hotel reservations organization system</p> <p><a href='https://gestionhoteles.vercel.app/'><img class='iconGreen' src='./media/domain.png'></img></a><a href='https://github.com/MafeMCode/POBloqueI'><img class='iconGreen' src='./media/github-sign.png'></img></a></p>";
    document.getElementById("project2").innerHTML = "<p>Worldbuilding and moon cycles personal page</p> <p><a href='https://lunas-magic.vercel.app/'><img class='iconGreen' src='./media/domain.png'></img></a><a href='https://github.com/MafeMCode/lunasMagic'><img class='iconGreen' src='./media/github-sign.png'></img></a></p>";
    
    
    document.getElementById("page4Title").textContent = "Contact Me";
    document.getElementById("contactEmail").innerHTML = "Email: marcosfdezmoya@gmail.com";
    document.getElementById("contactPhone").innerHTML = "Phone: +34 681 39 13 19";
    document.getElementById("messageLabel").textContent = "Write your message:";
    document.getElementById("emailLabel").textContent = "Your email:";
    document.getElementById("downloadCV").textContent = "Download CV";
    document.getElementById("botonEnviarCorreo").value = "Send";
}

function updateTextToSpanish() {
    document.getElementById("pageTitle").textContent = "Portfolio de MafeMCode";
    document.getElementById("navAboutMe").textContent = "Sobre mí";
    document.getElementById("navSkills").textContent = "Habilidades";
    document.getElementById("navProjects").textContent = "Proyectos";
    document.getElementById("navContact").textContent = "Contacta conmigo";
    document.getElementById("navChangeLang").innerHTML = "<img class='bandera' src='./media/inglés.png' alt='English'></img>";
    
    document.getElementById("page1Title").textContent = "Marcos Fernández Moya";
    document.getElementById("skillsTitle").textContent = "Educación";
    document.getElementById("experienceTitle").textContent = "Experiencia";
    document.getElementById("aboutMe").innerHTML = "Soy un <strong>desarrollador web recién graduado</strong> con formación en <strong>Full Stack</strong>. A lo largo de mi grado, he adquirido una base sólida en tecnologías web, desarrollo de aplicaciones y gestión de bases de datos. Mi pasión por el <strong>Big Data</strong> me motiva a seguir profundizando en el manejo de grandes volúmenes de información y encontrar soluciones innovadoras.";
    document.getElementById("motivation").innerHTML = "Aunque aún estoy aprendiendo, estoy muy motivado para enfrentar nuevos desafíos y seguir creciendo en el desarrollo web.";
    document.getElementById("lookingFor").innerHTML = "Estoy buscando oportunidades para seguir aprendiendo y aportar mi entusiasmo.";
    
    document.getElementById("page2Title").textContent = "Habilidades";
    document.getElementById("langTitle").textContent = "Idiomas";
    document.getElementById("lenES").textContent = "Español - Nativo";
    document.getElementById("lenEN").textContent = "Inglés - C2 Proficiency";
    document.getElementById("lenFR").textContent = "Francés - Conversacional";
    document.getElementById("lenNW").textContent = "Noruego - Principiante";

    document.getElementById("page3Title").textContent = "Proyectos";
    document.getElementById("project1").innerHTML = "<p>Sistema de gestion de reservas de hoteles</p> <p><a href='https://gestionhoteles.vercel.app/'><img class='iconGreen' src='./media/domain.png'></img></a><a href='https://github.com/MafeMCode/POBloqueI'><img class='iconGreen' src='./media/github-sign.png'></img></a></p>";
    document.getElementById("project2").innerHTML = "<p>Página personal de Worldbuilding y ciclos lunares</p> <p><a href='https://lunas-magic.vercel.app/'><img class='iconGreen' src='./media/domain.png'></img></a><a href='https://github.com/MafeMCode/lunasMagic'><img class='iconGreen' src='./media/github-sign.png'></img></a></p>";
    
    document.getElementById("page4Title").textContent = "Contacta conmigo";
    document.getElementById("contactEmail").innerHTML = "Email: marcosfdezmoya@gmail.com";
    document.getElementById("contactPhone").innerHTML = "Teléfono: +34 681 39 13 19";
    document.getElementById("messageLabel").textContent = "Escribe tu mensaje:";
    document.getElementById("emailLabel").textContent = "Tu email:";
    document.getElementById("downloadCV").textContent = "Descargar CV";
    document.getElementById("botonEnviarCorreo").value = "Enviar";
}


addEventListener('DOMContentLoaded', showPage('page1'));

updateTextToSpanish();