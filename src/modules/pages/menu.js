import addTextAnimation from '../functions/text-anim';
import '../../styles/menu.css';

function menu() {
  const main = document.createElement('main');
  main.id = 'main';
  main.className = 'main-menu';

  const heroDiv = document.createElement('div');
  heroDiv.className = 'hero-div--menu';

  const heroTitle = document.createElement('h1');
  heroTitle.className = 'hero-title--menu';
  addTextAnimation(heroTitle, 'View Our Menu');

  heroDiv.appendChild(heroTitle);

  const menuCardsArray = [];
  for (let i = 1; i <= 4; i += 1) {
    const card = document.createElement('div');
    card.classList.add('floating-card', `menu-card-${i}`);
    menuCardsArray.push(card);
  }

  menuCardsArray[0].textContent = 'Starters';
  menuCardsArray[1].textContent = 'Main Dishes';
  menuCardsArray[2].textContent = 'Desserts';
  menuCardsArray[3].textContent = 'Drinks';

  menuCardsArray.forEach((card) => {
    heroDiv.appendChild(card);
  });

  main.appendChild(heroDiv);

  return main;
}

export default menu;
