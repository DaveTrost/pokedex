import Component from '../../utils/Component.js';
import { Header } from '../header/Header-class.js';
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

        const pokedex = new Pokedex({ pokemons: [] });
        dom.appendChild(pokedex.renderDOM());

        fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex')
            .then(response => response.json())
            .then(data => pokedex.update({ pokemons: data.results }));


    }

    renderHTML() {
        return /*html*/ `<main></main>`;
    }
}