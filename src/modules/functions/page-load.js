import loadFooter from '../pages/footer';
import home from '../pages/home';
import menu from '../pages/menu';
import aboutUs from '../pages/about-us';
import headerLogo from './header-logo';

function initialLoad() {
  const content = document.querySelector('#content');

  loadFooter();
  headerLogo();
  content.appendChild(home());
}

function pageLoad(moduleName) {
  const content = document.querySelector('#content');
  const main = document.getElementById('main');
  content.removeChild(main);

  if (moduleName === 'home') content.appendChild(home());
  else if (moduleName === 'menu') content.appendChild(menu());
  else if (moduleName === 'about') content.appendChild(aboutUs());
  const newMain = document.querySelector('main');
  newMain.scrollIntoView();
}

export { initialLoad, pageLoad };
