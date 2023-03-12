import '../../styles/about-us.css';
import addTextAnimation from '../functions/text-anim';

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

  return main;
}

export default aboutUs;
