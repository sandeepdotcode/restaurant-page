import '../../styles/about-us.css';
import addTextAnimation from '../functions/text-anim';
import mrWorldwideImg from '../../assets/images/mrworldwide.png';
import mrSushi from '../../assets/images/mr-sushi.png';

function aboutUs() {
  const main = document.createElement('div');
  main.id = 'main';
  main.className = 'main-about-us';

  const heroDiv = document.createElement('div');
  heroDiv.className = 'hero-div--about';

  const heroHead = document.createElement('h1');
  heroHead.className = 'hero-title--about';
  addTextAnimation(heroHead, 'Meet Our Team');

  heroDiv.appendChild(heroHead);
  main.appendChild(heroDiv);

  const managerDiv = document.createElement('div');
  managerDiv.className = 'manager-div';

  const managerTitle = document.createElement('h5');
  managerTitle.textContent = 'EXECUTIVE CHEF AND RESTAURANT MANAGER';
  managerTitle.className = 'manager-title';
  const managerName = document.createElement('h2');
  managerName.textContent = 'Mr. Worldwide';
  managerName.className = 'manager-name';

  const managerBio = document.createElement('p');
  managerBio.classList = 'manager-bio';
  managerBio.textContent = `The Man, The Myth, The LEGEND. The founder, manager, and executive chef of 
                            Worldwide Kitchen. Prior to starting the restaurant he had a successful career
                            as one of the world's most popular pop singers. It was always his dream to bring
                            together all the tastes of the world that he discovered while touring the world
                            in one place accessible to everyone. Mr. Worldwide describes the Worldwide Kitchen
                            his masterpiece and the greatest achievement of his life.`;

  managerDiv.append(managerTitle, managerName, managerBio);

  const managerImg = document.createElement('img');
  managerImg.className = 'manager-image';
  managerImg.src = mrWorldwideImg;
  const mistersDish = document.createElement('img');
  mistersDish.classList.add('misters-dish', 'picture-spin');
  mistersDish.src = mrSushi;
  managerDiv.append(managerImg, mistersDish);

  main.appendChild(managerDiv);

  return main;
}

export default aboutUs;
