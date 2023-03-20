import starters from './sub-menu';
import { addTextAnimation } from '../functions/text-anim';
import '../../styles/menu.css';

function menu() {
  const main = document.createElement('main');
  main.id = 'main';
  main.className = 'main-menu';

  const heroDiv = document.createElement('div');
  heroDiv.classList.add('hero-div--menu', 'activate-anim');

  const heroTitleWrapper = document.createElement('div');
  heroTitleWrapper.className = 'menu-title-wrapper';

  const heroTitle = document.createElement('h1');
  heroTitle.classList.add('hero-title--menu', 'activate-anim');
  addTextAnimation(heroTitle, 'View Our Menu');

  heroTitleWrapper.appendChild(heroTitle);
  heroDiv.appendChild(heroTitleWrapper);

  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'cards-container';

  const menuCardsArray = [];
  for (let i = 1; i <= 4; i += 1) {
    const card = document.createElement('div');
    card.classList.add('floating-card', `menu-card-${i}`);
    menuCardsArray.push(card);
  }

  menuCardsArray[0].textContent = 'STARTERS';
  menuCardsArray[1].textContent = 'MAIN DISHES';
  menuCardsArray[2].textContent = 'DESSERTS';
  menuCardsArray[3].textContent = 'DRINKS';

  menuCardsArray.forEach((card) => {
    cardsContainer.appendChild(card);
  });
  heroDiv.appendChild(cardsContainer);

  main.appendChild(heroDiv);

  const menuDiv = document.createElement('div');
  menuDiv.className = 'menu-div';

  menuDiv.appendChild(starters());
  main.appendChild(menuDiv);

  return main;
}

export default menu;
