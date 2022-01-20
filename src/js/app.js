// logo color
const headerLogo = document.querySelector('.header__logo');
// menu color
const homeButton = document.querySelector('.header__menu-home');
const projectsButton = document.querySelector('.header__menu-projects');
const blogButton = document.querySelector('.header__menu-blog');
const contactButton = document.querySelector('.header__menu-contact');
// header
const headerTaglineHome = document.querySelector('.header__tagline-home');
const headerTagline = document.querySelector('.header__tagline');
// accent figure
const accentFigure1 = document.querySelector('.header__tagline-accent-figure-1');
const accentFigure2 = document.querySelector('.header__tagline-accent-figure-2');
const accentFigure3 = document.querySelector('.header__tagline-accent-figure-3');
const accentFigure4 = document.querySelector('.header__tagline-accent-figure-4');
// accent text
const accentText = document.querySelector('.header__tagline-accent-text');
// accent img
const accentImg = document.querySelector('.header__tagline-img');
// footer button up
const footerButtonUp = document.querySelector('.footer__button-up');
// sections
const sectionProjects = document.querySelector('.projects');
const sectionBlog = document.querySelector('.blog');
const sectionContact = document.querySelector('.contact');
const sectionHome = document.querySelector('.home');

// PURPLE PAGE =========================================
homeButton.addEventListener('click', (purpleEvent) => {
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
  // accent text
  accentText.innerText = 'ПРИВЕТ';
  accentText.className = 'header__tagline-accent-text header__tagline-accent-text_purple';
  // accent img
  accentImg.className = 'header__tagline-img header__tagline-img_purple';
  // footer button up
  footerButtonUp.className = 'footer__button-up footer__button-up_purple';
  // sections
  sectionProjects.className = 'projects hidden';
  sectionBlog.className = 'blog hidden';
  sectionContact.className = 'contact hidden';
  sectionHome.className = 'home';
});

// BLUE PAGE =========================================
projectsButton.addEventListener('click', (blueEvent) => {
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
  accentText.innerText = 'ХЕНДМЕЙД';
  accentText.className = 'header__tagline-accent-text header__tagline-accent-text_blue';
  // accent img
  accentImg.className = 'header__tagline-img header__tagline-img_blue';
  // footer button up
  footerButtonUp.className = 'footer__button-up footer__button-up_blue';
  // sections
  sectionProjects.className = 'projects';
  sectionBlog.className = 'blog hidden';
  sectionContact.className = 'contact hidden';
  sectionHome.className = 'home hidden';
});

// GREEN PAGE =========================================
blogButton.addEventListener('click', (greenEvent) => {
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
  accentText.innerText = 'НОЧНИК';
  accentText.className = 'header__tagline-accent-text header__tagline-accent-text_green';
  // accent img
  accentImg.className = 'header__tagline-img header__tagline-img_green';
  // footer button up
  footerButtonUp.className = 'footer__button-up footer__button-up_green';
  // sections
  sectionProjects.className = 'projects hidden';
  sectionBlog.className = 'blog';
  sectionContact.className = 'contact hidden';
  sectionHome.className = 'home hidden';
});

// ORANGE PAGE =========================================
contactButton.addEventListener('click', (orangeEvent) => {
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
  accentText.innerText = 'НОУ БАРТЕР';
  accentText.className = 'header__tagline-accent-text header__tagline-accent-text_orange';
  // accent img
  accentImg.className = 'header__tagline-img header__tagline-img_orange';
  // footer button up
  footerButtonUp.className = 'footer__button-up footer__button-up_orange';
  // sections
  sectionProjects.className = 'projects hidden';
  sectionBlog.className = 'blog hidden';
  sectionContact.className = 'contact';
  sectionHome.className = 'home hidden';
});
