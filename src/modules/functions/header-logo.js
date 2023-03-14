import logo from '../../assets/images/worldwide-logo-lowres.png';

function headerLogo() {
  const header = document.querySelector('header');
  const headerNav = document.querySelector('nav');

  const logoImg = document.createElement('img');
  logoImg.className = 'header-logo';
  logoImg.src = logo;
  logoImg.alt = 'Restaurant Logo';

  header.insertBefore(logoImg, headerNav);
}

export default headerLogo;
