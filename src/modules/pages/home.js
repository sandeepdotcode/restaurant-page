import addTextAnimation from '../functions/text-anim';
import cocktailImage from '../../assets/images/home-cocktails.jpg';
import fishHome1 from '../../assets/images/home-fish-1.png';
import pizzaHome from '../../assets/images/home-pizza.png';
import noodleHome from '../../assets/images/home-noodle.png';
import fishHome2 from '../../assets/images/home-fish-2.png';
// import homeBackground from '../../assets/images/home-bg.jpg';
import '../../styles/home.css';

function home() {
  const main = document.createElement('main');
  main.id = 'main';
  main.className = 'main-home';

  const heroDiv = document.createElement('div');
  heroDiv.className = 'hero-div';

  const heroHead = document.createElement('h1');
  heroHead.className = 'hero-text';
  addTextAnimation(heroHead, 'Assorted International Cuisine');

  const heroSub = document.createElement('p');
  heroSub.className = 'hero-subtext';
  addTextAnimation(heroSub, 'CURATED BY WORLDWIDE EXPERT CHEFS');

  heroDiv.appendChild(heroSub);
  heroDiv.appendChild(heroHead);
  main.appendChild(heroDiv);

  const missionDiv = document.createElement('div');
  missionDiv.className = 'our-mission';
  const missionTitle = document.createElement('h3');
  missionTitle.className = 'mission-title';
  addTextAnimation(missionTitle, 'Our Mission');

  const missionPara1 = document.createElement('p');
  const missionPara2 = document.createElement('p');
  const missionPara3 = document.createElement('p');
  const missionImage = document.createElement('img');
  missionPara1.className = 'mission-text';
  missionPara2.className = 'mission-text';
  missionPara3.className = 'mission-text';
  missionImage.className = 'mission-drinks--img';
  missionImage.src = cocktailImage;
  missionImage.alt = 'Image of Cocktails';

  missionPara1.textContent = `Worldwide Kitchen is a globally influenced fine-dining restaurant nestled in the heart of England in Buckingham Palace.
   Executive chef Mr. Worldwide and his Assistant Pitbull Woofmeister leads the kitched team with innovation, leadership and superb technique.
    Worldwide offers an array of gastronomic adventures with many small and large plates, specialty craft cocktails and a few other sections
     serving food from all over the world. Sourcing the freshest ingredients both locally and internationally, guests dining with us can taste the
      heartfelt commitment to quality.`;
  missionPara2.textContent = `Worldwide Kitchen distinguishes itself by emphasizing on the social experience and taking a vibe-driven approach to fine dining.
   The dining room, sushi lounge and cocktail bar evokes a fun sense of style matched by the chic ambiance and decor.`;
  missionPara3.textContent = `Whether you are joining us for dinner, cocktails, a private party or any special occasion, Worldwide Kitchen opens its doors
   to you and promises to make the experience special and memorable. The team eagerly awaits to show you world-class hospitality`;

  missionDiv.append(missionTitle, missionPara1, missionPara2, missionPara3, missionImage);
  main.appendChild(missionDiv);

  const picturesDiv = document.createElement('div');
  picturesDiv.className = 'home-pictures-container';

  const picturesHead = document.createElement('h2');
  picturesHead.className = 'pictures-heading';
  addTextAnimation(picturesHead, 'Beautiful and Flavorful Food');

  const picturesArray = [];
  for (let i = 1; i <= 4; i += 1) {
    const picture = document.createElement('img');
    picture.classList.add(`home-picture-${i}`, 'picture-spin');
    picturesArray.push(picture);
  }

  picturesArray[0].src = fishHome1;
  picturesArray[1].src = noodleHome;
  picturesArray[2].src = fishHome2;
  picturesArray[3].src = pizzaHome;

  picturesDiv.appendChild(picturesHead);
  picturesDiv.append(picturesArray[0], picturesArray[1], picturesArray[2], picturesArray[3]);
  main.appendChild(picturesDiv);

  return main;
}

export default home;
