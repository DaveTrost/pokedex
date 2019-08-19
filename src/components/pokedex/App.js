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

        const arrange = new Arrange({ options: [] });
        dom.appendChild(arrange.renderDOM());

        const pokedex = new Pokedex({ pokemons: [] });
        dom.appendChild(pokedex.renderDOM());
        
        window.addEventListener('hashchange', () => this.updateResultsOnPage(pokedex, arrange, search));
        this.updateResultsOnPage(pokedex, arrange, search);
    }

    updateResultsOnPage(pokedex, arrange, search) {
        search.update();
        const options = hashStorage.get();
        const pokemonData = retrieveFromPokedex(options);
        pokemonData.then(data => {
            arrange.update({ 
                options: options,
                pokeCount: data.count,
                perPage: data.perPage
            });
            pokedex.update({ pokemons: data.results });
        });
    }

    renderHTML() {
        return /*html*/ `<main></main>`;
    }
}

