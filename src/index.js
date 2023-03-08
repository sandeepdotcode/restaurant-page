import { initialLoad, pageLoad } from './modules/functions/page-load';
import changeHeaderOnScroll from './modules/functions/header-scroll';
import './styles/style.css';
import './styles/header-footer.css';

initialLoad();
window.addEventListener('scroll', changeHeaderOnScroll, false);

const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const aboutBtn = document.querySelector('.about-btn');

homeBtn.addEventListener('click', () => {
  pageLoad('home');
});

menuBtn.addEventListener('click', () => {
  pageLoad('menu');
});

aboutBtn.addEventListener('click', () => {
  pageLoad('menu');
});
