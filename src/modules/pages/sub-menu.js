import starterTartare from '../../assets/images/starter.jpg';

function createMenuItem(itemName, price, subText) {
  const item = document.createElement('div');
  const itemMain = document.createElement('p');
  const itemSub = document.createElement('p');
  item.className = 'menu-item';
  itemMain.className = 'menu-item--main';
  itemSub.className = 'menu-item--sub';
  const nameSpan = document.createElement('span');
  const priceSpan = document.createElement('span');
  nameSpan.textContent = itemName;
  priceSpan.textContent = price;
  itemSub.textContent = subText;
  itemMain.append(nameSpan, priceSpan);
  item.append(itemMain, itemSub);

  return item;
}

function starters() {
  const starterContainer = document.createElement('div');
  starterContainer.className = 'starter-container';

  const starterHead = document.createElement('h3');
  starterHead.classList.add('starter-head', 'menu-head', 'activate-anim');
  starterHead.textContent = 'Starters & Salads';

  const starterMenu = document.createElement('div');
  starterMenu.classList.add('menu-starter', 'menu-block');
  const saladMenu = document.createElement('div');
  saladMenu.classList.add('menu-salad', 'menu-block');

  const startSubHead = document.createElement('h4');
  startSubHead.classList.add('starter-sub-head', 'sub-head--menu');
  startSubHead.textContent = 'Starters';

  const saladSubHead = document.createElement('h4');
  saladSubHead.classList.add('salad-sub-head', 'sub-head--menu');
  saladSubHead.textContent = 'Salads';

  const starterImg = document.createElement('img');
  starterImg.className = 'menu-image';
  starterImg.src = starterTartare;
  const starterTxtDiv = document.createElement('div');
  starterTxtDiv.className = 'menu-text-div';

  starterTxtDiv.appendChild(createMenuItem('American Spicy Chicken Wings', '20', 'American Sweet & Spicy Coca-Cola Chicken Wings'));
  starterTxtDiv.appendChild(createMenuItem('Beef Tartare', '20', 'Raw Ground Beef w/ Onions, Capers & Worcestershire Sauce'));
  starterTxtDiv.appendChild(createMenuItem('Bruschetta', '23', 'w/ Rosemary, Roasted Tomatoes, Riccota & Salty Prosciutto'));
  starterTxtDiv.appendChild(createMenuItem('Chicken Satay', '18', 'Malaysian Chicken Satay w/ Oriental Flair & Exotic Flavours'));
  starterTxtDiv.appendChild(createMenuItem('Feta Rolls', '4', 'Greek Cucumber Feta Rolls'));
  starterTxtDiv.appendChild(createMenuItem('Gravlax', '18', 'Swedish Cured Salmon w/ fresh dill, vodka(optional) & seasonings'));
  starterTxtDiv.appendChild(createMenuItem('Parippu Vada', '8', 'Hot & Spicy Indian Masala Vada Made w/ Bengal Gram Dal & Spices'));
  starterTxtDiv.appendChild(createMenuItem('Steamed Dumplings', '18', 'Chinese Steamed Pork Dumplings'));
  starterTxtDiv.appendChild(createMenuItem('Quesadilla', '18 / 18 / 14', 'Chicken, Beef or No-meat options'));
  starterTxtDiv.appendChild(createMenuItem('Queso Fundido', '16', 'Layers of Melted Cheese Loaded w/ Spicy Chorizo Sausage'));

  starterMenu.append(startSubHead, starterImg, starterTxtDiv);

  saladMenu.appendChild(saladSubHead);
  starterContainer.append(starterHead, starterMenu, saladMenu);

  return starterContainer;
}

export default starters;
