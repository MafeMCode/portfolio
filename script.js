function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => (page.style.display = "none"));
  pages.forEach((page) => page.classList.remove("active"));
  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.style.display = "block";
    selectedPage.classList.add("active");
  }
}

function changeLanguage() {
  const currentLang = document.documentElement.lang;
  if (currentLang === "es") {
    document.documentElement.lang = "en";
    updateTextToEnglish();
  } else {
    document.documentElement.lang = "es";
    updateTextToSpanish();
  }
}

function updateTextToEnglish() {
  document.getElementById("pageTitle").textContent = "MafeMCode's Portfolio";
  document.getElementById("navAboutMe").textContent = "About me";
  document.getElementById("navSkills").textContent = "Skills";
  document.getElementById("navProjects").textContent = "Projects";
  document.getElementById("navContact").textContent = "Contact me";
  document.getElementById("navChangeLang").innerHTML =
    "<img class='bandera' src='./media/español.png' alt='Español'></img>";

  document.getElementById("page1Title").textContent = "Marcos Fernández Moya";
  document.getElementById("skillsTitle").textContent = "Education";
  document.getElementById("education").innerHTML =
    "<h3>Higher Degree in Web Development</h3><hr></hr>" +
    "<p>Studied at IES Hermanos Machado - Class of 2025</p><br></br>" +
    "<h3>Scientific-Technological Baccalaureate</h3><hr></hr>" +
    "<p>Studied at IES Hermanos Machado - Class of 2014</p>";
  document.getElementById("experienceTitle").textContent = "Experience";
  document.getElementById("experience").textContent =
    "10 years of experience in the hospitality industry as a waiter, bar manager, and floor manager. During this time, I developed my skills in conflict resolution and in organizing a well-coordinated and united team. I was also responsible for procuring raw materials as well as managing both the financial and physical resources of the company. Speed, attention to detail, and learning protocols are some of the skills I honed while working in this profession.";
  document.getElementById("aboutMe").innerHTML =
    "I am a <strong>newly graduated web developer</strong> with training in <strong>Full Stack</strong>. Throughout my degree, I have gained a solid foundation in web technologies, application development, and database management. My passion for <strong>Big Data</strong> drives me to continue deepening my understanding of handling large volumes of data and finding innovative solutions.";
  document.getElementById("motivation").innerHTML =
    "Although I'm still learning, I'm very motivated to face new challenges and grow in web development.";
  document.getElementById("lookingFor").innerHTML =
    "I'm looking for opportunities to continue learning and contribute my enthusiasm.";

  document.getElementById("page2Title").textContent = "Skills";
  document.getElementById("langTitle").textContent = "Languages";
  document.getElementById("lenES").textContent = "Spanish - Native";
  document.getElementById("lenEN").textContent = "English - C2 Proficiency";
  document.getElementById("lenFR").textContent = "French - Conversational";
  document.getElementById("lenNW").textContent = "Norwegian - Begginer";

  document.getElementById("page3Title").textContent = "Projects";
  document.getElementById("project1").innerHTML =
    "<p>Hotel reservations organization system</p> <p><a href='https://gestionhoteles.vercel.app/'><img class='iconGreen' src='./media/domain.png'></img></a><a href='https://github.com/MafeMCode/POBloqueI'><img class='iconGreen' src='./media/github-sign.png'></img></a></p>";
  document.getElementById("project2").innerHTML =
    "<p>Worldbuilding and moon cycles personal page</p> <p><a href='https://lunas-magic.vercel.app/'><img class='iconGreen' src='./media/domain.png'></img></a><a href='https://github.com/MafeMCode/lunasMagic'><img class='iconGreen' src='./media/github-sign.png'></img></a></p>";

  document.getElementById("page4Title").textContent = "Contact Me";

  document.getElementById("downloadCV").textContent = "Download CV";
}

function updateTextToSpanish() {
  document.getElementById("pageTitle").textContent = "Portfolio de MafeMCode";
  document.getElementById("navAboutMe").textContent = "Sobre mí";
  document.getElementById("navSkills").textContent = "Habilidades";
  document.getElementById("navProjects").textContent = "Proyectos";
  document.getElementById("navContact").textContent = "Contacta conmigo";
  document.getElementById("navChangeLang").innerHTML =
    "<img class='bandera' src='./media/inglés.png' alt='English'></img>";

  document.getElementById("page1Title").textContent = "Marcos Fernández Moya";
  document.getElementById("skillsTitle").textContent = "Educación";
  document.getElementById("education").innerHTML =
    "<h3>Grado Superior en Desarrollo Web</h3><hr></hr><p>Cursado en el instituto IES Hermanos Machado - Promoción del 2025</p><br></br><h3>Bachillerato Cientifico-Tecnológico</h3><hr></hr><p>Cursado en el instituto IES Hermanos Machado - Promoción del 2014</p>";
  document.getElementById("experienceTitle").textContent = "Experiencia";
  document.getElementById("experience").textContent =
    "10 años de experiencia en el sector hostelero como camarero, jefe de barra y jefe de sala.  Durante el mismo, desarrollé mis aptitudes en la resolución de conflictos y en la organización de un equipo de trabajo unido y bien coordinado. También estuve encargado de la procuración de materias primas así como de la gestión de recursos tanto económicos como físicos de la empresa. La velocidad, atención al detalle y aprendizaje de protocolos son algunas de las aptitudes que desarrollé en el desempleo de la profesión.";
  document.getElementById("aboutMe").innerHTML =
    "Soy un <strong>desarrollador web recién graduado</strong> con formación en <strong>Full Stack</strong>. A lo largo de mi grado, he adquirido una base sólida en tecnologías web, desarrollo de aplicaciones y gestión de bases de datos. Mi pasión por el <strong>Big Data</strong> me motiva a seguir profundizando en el manejo de grandes volúmenes de información y encontrar soluciones innovadoras.";
  document.getElementById("motivation").innerHTML =
    "Aunque aún estoy aprendiendo, estoy muy motivado para enfrentar nuevos desafíos y seguir creciendo en el desarrollo web.";
  document.getElementById("lookingFor").innerHTML =
    "Estoy buscando oportunidades para seguir aprendiendo y aportar mi entusiasmo.";

  document.getElementById("page2Title").textContent = "Habilidades";
  document.getElementById("langTitle").textContent = "Idiomas";
  document.getElementById("lenES").textContent = "Español - Nativo";
  document.getElementById("lenEN").textContent = "Inglés - C2 Proficiency";
  document.getElementById("lenFR").textContent = "Francés - Conversacional";
  document.getElementById("lenNW").textContent = "Noruego - Principiante";

  document.getElementById("page3Title").textContent = "Proyectos";
  document.getElementById("project1").innerHTML =
    "<p>Sistema de gestion de reservas de hoteles</p> <p><a href='https://gestionhoteles.vercel.app/'><img class='iconGreen' src='./media/domain.png'></img></a><a href='https://github.com/MafeMCode/POBloqueI'><img class='iconGreen' src='./media/github-sign.png'></img></a></p>";
  document.getElementById("project2").innerHTML =
    "<p>Página personal de Worldbuilding y ciclos lunares</p> <p><a href='https://lunas-magic.vercel.app/'><img class='iconGreen' src='./media/domain.png'></img></a><a href='https://github.com/MafeMCode/lunasMagic'><img class='iconGreen' src='./media/github-sign.png'></img></a></p>";

  document.getElementById("page4Title").textContent = "Contacta conmigo";

  document.getElementById("downloadCV").textContent = "Descargar CV";
}

function copyToClipboard(texto) {
  const textoACopiar = texto;
  navigator.clipboard
    .writeText(textoACopiar)
    .then(() => {
      alert(textoACopiar + " copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

addEventListener("DOMContentLoaded", showPage("page1"));

updateTextToSpanish();
