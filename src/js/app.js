// logo
const headerLogo = document.querySelector('.header__logo');
// header menu
const homeButton = document.querySelector('.header__menu-home');
const projectsButton = document.querySelector('.header__menu-projects');
const blogButton = document.querySelector('.header__menu-blog');
const contactButton = document.querySelector('.header__menu-contact');
// header tagline
const headerTaglineHome = document.querySelector('.header__tagline-home');
const headerTagline = document.querySelector('.header__tagline');
// header accent figure
const accentFigure1 = document.querySelector('.header__tagline-accent-figure-1');
const accentFigure2 = document.querySelector('.header__tagline-accent-figure-2');
const accentFigure3 = document.querySelector('.header__tagline-accent-figure-3');
const accentFigure4 = document.querySelector('.header__tagline-accent-figure-4');
// header accent text
const accentText = document.querySelector('.header__tagline-accent-text');
// header accent img
const accentImg = document.querySelector('.header__tagline-img');
// section home links
const linkProjects = document.querySelector('.home__link-projects');
const linkBlog = document.querySelector('.home__link-blog');
const linkContact = document.querySelector('.home__link-contact');
// sections
const sectionProjects = document.querySelector('.projects');
const sectionBlog = document.querySelector('.blog');
const sectionContact = document.querySelector('.contact');
const sectionHome = document.querySelector('.home');
// footer menu
const footerHome = document.querySelector('.footer__menu-home');
const footerProjects = document.querySelector('.footer__menu-projects');
const footerBlog = document.querySelector('.footer__menu-blog');
const footerContact = document.querySelector('.footer__menu-contact');

// class changers
showHome = function () {
  // logo color
  headerLogo.className = 'header__logo header__logo_purple';
  // menu color
  homeButton.className = 'header__menu-item header__menu-home header__menu-home_purple';
  projectsButton.className = 'header__menu-item header__menu-projects';
  blogButton.className = 'header__menu-item header__menu-blog';
  contactButton.className = 'header__menu-item header__menu-contact';
  // header
  headerTaglineHome.className = 'header__tagline-home';
  headerTagline.className = 'header__tagline hidden';
  // accent figure
  accentFigure1.className =
    'header__tagline-accent-figure header__tagline-accent-figure-1 header__tagline-accent-figure_purple';
  accentFigure2.className =
    'header__tagline-accent-figure header__tagline-accent-figure-2 header__tagline-accent-figure_purple';
  accentFigure3.className =
    'header__tagline-accent-figure header__tagline-accent-figure-3 header__tagline-accent-figure_purple';
  accentFigure4.className =
    'header__tagline-accent-figure header__tagline-accent-figure-4 header__tagline-accent-figure_purple';
  // accent img
  accentImg.className = 'header__tagline-img header__tagline-img_purple';
  // sections
  sectionProjects.className = 'projects hidden';
  sectionBlog.className = 'blog hidden';
  sectionContact.className = 'contact hidden';
  sectionHome.className = 'home';
};

showProjects = function () {
  // logo color
  headerLogo.className = 'header__logo header__logo_blue';
  // menu color
  homeButton.className = 'header__menu-item header__menu-home';
  projectsButton.className = 'header__menu-item header__menu-projects header__menu-projects_blue';
  blogButton.className = 'header__menu-item header__menu-blog';
  contactButton.className = 'header__menu-item header__menu-contact';
  // header
  headerTaglineHome.className = 'header__tagline-home hidden';
  headerTagline.className = 'header__tagline';
  // accent figure
  accentFigure1.className =
    'header__tagline-accent-figure header__tagline-accent-figure-1 header__tagline-accent-figure_blue';
  accentFigure2.className =
    'header__tagline-accent-figure header__tagline-accent-figure-2 header__tagline-accent-figure_blue';
  accentFigure3.className =
    'header__tagline-accent-figure header__tagline-accent-figure-3 header__tagline-accent-figure_blue';
  accentFigure4.className =
    'header__tagline-accent-figure header__tagline-accent-figure-4 header__tagline-accent-figure_blue';
  // accent text
  accentText.innerText = 'GALLERY';
  accentText.className = 'header__tagline-accent-text header__tagline-accent-text_blue';
  // accent img
  accentImg.className = 'header__tagline-img header__tagline-img_blue';
  // sections
  sectionProjects.className = 'projects';
  sectionBlog.className = 'blog hidden';
  sectionContact.className = 'contact hidden';
  sectionHome.className = 'home hidden';
};

showBlog = function () {
  // logo color
  headerLogo.className = 'header__logo header__logo_green';
  // menu color
  homeButton.className = 'header__menu-item header__menu-home';
  projectsButton.className = 'header__menu-item header__menu-projects';
  blogButton.className = 'header__menu-item header__menu-blog header__menu-blog_green';
  contactButton.className = 'header__menu-item header__menu-contact';
  // header
  headerTaglineHome.className = 'header__tagline-home hidden';
  headerTagline.className = 'header__tagline';
  // accent figure
  accentFigure1.className =
    'header__tagline-accent-figure header__tagline-accent-figure-1 header__tagline-accent-figure_green';
  accentFigure2.className =
    'header__tagline-accent-figure header__tagline-accent-figure-2 header__tagline-accent-figure_green';
  accentFigure3.className =
    'header__tagline-accent-figure header__tagline-accent-figure-3 header__tagline-accent-figure_green';
  accentFigure4.className =
    'header__tagline-accent-figure header__tagline-accent-figure-4 header__tagline-accent-figure_green';
  // accent text
  accentText.innerText = 'JOURNAL';
  accentText.className = 'header__tagline-accent-text header__tagline-accent-text_green';
  // accent img
  accentImg.className = 'header__tagline-img header__tagline-img_green';
  // sections
  sectionProjects.className = 'projects hidden';
  sectionBlog.className = 'blog';
  sectionContact.className = 'contact hidden';
  sectionHome.className = 'home hidden';
};

showContact = function () {
  // logo color
  headerLogo.className = 'header__logo header__logo_orange';
  // menu color
  homeButton.className = 'header__menu-item header__menu-home';
  projectsButton.className = 'header__menu-item header__menu-projects';
  blogButton.className = 'header__menu-item header__menu-blog';
  contactButton.className = 'header__menu-item header__menu-contact header__menu-contact_orange';
  // header
  headerTaglineHome.className = 'header__tagline-home hidden';
  headerTagline.className = 'header__tagline';
  // accent figure
  accentFigure1.className =
    'header__tagline-accent-figure header__tagline-accent-figure-1 header__tagline-accent-figure_orange';
  accentFigure2.className =
    'header__tagline-accent-figure header__tagline-accent-figure-2 header__tagline-accent-figure_orange';
  accentFigure3.className =
    'header__tagline-accent-figure header__tagline-accent-figure-3 header__tagline-accent-figure_orange';
  accentFigure4.className =
    'header__tagline-accent-figure header__tagline-accent-figure-4 header__tagline-accent-figure_orange';
  // accent text
  accentText.innerText = 'CONTACT';
  accentText.className = 'header__tagline-accent-text header__tagline-accent-text_orange';
  // accent img
  accentImg.className = 'header__tagline-img header__tagline-img_orange';
  // sections
  sectionProjects.className = 'projects hidden';
  sectionBlog.className = 'blog hidden';
  sectionContact.className = 'contact';
  sectionHome.className = 'home hidden';
};

// header menu buttons
homeButton.addEventListener('click', (event) => {
  showHome();
});

projectsButton.addEventListener('click', (event) => {
  showProjects();
});

blogButton.addEventListener('click', (event) => {
  showBlog();
});

contactButton.addEventListener('click', (event) => {
  showContact();
});

// home section links
linkProjects.addEventListener('click', (event) => {
  showProjects();
});

linkBlog.addEventListener('click', (event) => {
  showBlog();
});

linkContact.addEventListener('click', (event) => {
  showContact();
});

// footer menu buttons
footerHome.addEventListener('click', (event) => {
  showHome();
});

footerProjects.addEventListener('click', (event) => {
  showProjects();
});

footerBlog.addEventListener('click', (event) => {
  showBlog();
});

footerContact.addEventListener('click', (event) => {
  showContact();
});