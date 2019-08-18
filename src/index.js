import { App } from './components/pokedex/App.js';

/* pause CSS animations until the page is loaded
     https://css-tricks.com/making-animations-wait/  */
document.body.classList.add('js-loading');
window.addEventListener('load', () => setTimeout(() => {
    document.body.classList.remove('js-loading');
}, 100));

const root = document.getElementById('root');
const app = new App();
const dom = app.renderDOM();

root.appendChild(dom);