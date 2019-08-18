import Component from '../../utils/Component.js';
import { Header } from '../header/Header.js';
import { Search } from '../search/Search.js';
import { Arrange } from '../arrange/Arrange.js';
import { Pokedex } from './Pokedex.js';
import { retrieveFromPokedex } from '../../services/pokedex-api.js';
import hashStorage from '../../services/hash-storage.js';

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
        
        window.addEventListener('hashchange', () => this.updateResultsOnPage(pokedex, arrange));
        this.updateResultsOnPage(pokedex, arrange);
    }

    updateResultsOnPage(pokedex, arrange) {
        const options = hashStorage.get();
        const pokemonData = retrieveFromPokedex(options);
        pokemonData.then(data => {
            pokedex.update({ pokemons: data.results });
        });
        arrange.update({ options: options });
    }

    renderHTML() {
        return /*html*/ `<main></main>`;
    }
}

