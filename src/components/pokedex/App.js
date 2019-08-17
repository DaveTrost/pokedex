import Component from '../../utils/Component.js';
import { Header } from '../header/header.js';

export class App extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
    }

    renderHTML() {
        return /*html*/ `<main></main>`;
    }
}