import Component from '../../utils/Component.js';
import { Header } from '../header/header.js';
import { Search } from '../search/Search.js';
import { Arrange } from '../arrange/Arrange.js';
import { Pokedex } from './Pokedex.js';

export class App extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const search = new Search();
        dom.appendChild(search.renderDOM());

        const arrange = new Arrange();
        dom.appendChild(arrange.renderDOM());

        const pokedex = new Pokedex();
        dom.appendChild(pokedex.renderDOM());
    }

    renderHTML() {
        return /*html*/ `<main></main>`;
    }
}