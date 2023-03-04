import home from '../pages/home';

function initialLoad() {
  const content = document.querySelector('#content');

  content.appendChild(home());
}

export default initialLoad;
