import initialLoad from './modules/functions/init-page-load';
import changeHeaderOnScroll from './modules/functions/header-scroll';
import './styles/style.css';
import './styles/header-footer.css';

initialLoad();
window.addEventListener('scroll', changeHeaderOnScroll, false);
