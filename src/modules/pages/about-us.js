import '../../styles/about-us.css';
import addTextAnimation from '../functions/text-anim';
import mrWorldwideImg from '../../assets/images/mrworldwide.png';
import mrSushi from '../../assets/images/mr-sushi.png';
import chefImage from '../../assets/images/pitbull-chef.png';

function aboutUs() {
  const main = document.createElement('main');
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
  managerBio.className = 'manager-bio';
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

  const chefDiv = document.createElement('div');
  chefDiv.className = 'chef-div';
  const chefTitle = document.createElement('h5');
  chefTitle.className = 'chef-title';
  chefTitle.textContent = 'SOUS CHEF';
  const chefName = document.createElement('h2');
  chefName.className = 'chef-name';
  chefName.textContent = 'Pitbull Woofmeister';

  const chefBio = document.createElement('p');
  chefBio.className = 'chef-bio';
  chefBio.textContent = `Doggo ipsum puggorino woofer you are doin me a concern stop it fren shibe, long woofer length boy very taste wow. Wrinkler ruff you are doing me the shock yapper big ol, vvv ur givin me a spook super chub. Clouds super chub wrinkler heckin smol porgo, big ol long woofer much ruin diet blep. Fat boi he made many woofs corgo woofer pupper, boof wow very biscit doing me a frighten. Pats wow such tempt shibe doggo vvv waggy wags, aqua doggo heckin maximum borkdrive.
  `;
  chefDiv.append(chefTitle, chefName, chefBio);

  const chefImg = document.createElement('img');
  chefImg.className = 'chef-image';
  chefImg.src = chefImage;
  chefDiv.appendChild(chefImg);

  main.append(managerDiv, chefDiv);

  return main;
}

export default aboutUs;
