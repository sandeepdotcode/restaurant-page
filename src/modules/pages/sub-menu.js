import addTextAnimation from '../functions/text-anim';

function starters() {
  const starterContainer = document.createElement('div');
  starterContainer.className = 'starter-container';

  const starterHead = document.createElement('h3');
  starterHead.className = 'starter-head';
  addTextAnimation(starterHead, 'Starters & Salads');

  const starterMenu = document.createElement('div');
  starterMenu.classList.add('menu-starter', 'menu-block');
  const saladMenu = document.createElement('div');
  saladMenu.classList.add('menu-salad', 'menu-block');

  const startSubHead = document.createElement('h5');
  startSubHead.classList.add('starter-sub-head', 'sub-head--menu');
  startSubHead.textContent = 'Starters';

  const saladSubHead = document.createElement('h5');
  saladSubHead.classList.add('salad-sub-head', 'sub-head--menu');
  saladSubHead.textContent = 'Salads';

  starterMenu.appendChild(startSubHead);
  saladMenu.appendChild(saladSubHead);
  starterContainer.append(starterHead, starterMenu, saladMenu);

  return starterContainer;
}

export default starters;
