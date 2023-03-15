import home from '../pages/home';
import menu from '../pages/menu';
import aboutUs from '../pages/about-us';
import headerLogo from './header-logo';

function initialLoad() {
  const content = document.querySelector('#content');

  headerLogo();
  content.appendChild(menu());
}

function pageLoad(moduleName) {
  const content = document.querySelector('#content');
  const main = document.getElementById('main');
  content.removeChild(main);

  if (moduleName === 'home') content.appendChild(home());
  else if (moduleName === 'menu') content.appendChild(menu());
  else if (moduleName === 'about') content.appendChild(aboutUs());
}

export { initialLoad, pageLoad };
