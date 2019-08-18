import Component from '../../utils/Component.js';
import { Pokemon } from './Pokemon.js';

export class Pokedex extends Component {

    onRender(dom) {
        this.props.pokemons.forEach(pokedata => {
            const pokemon = new Pokemon({ pokemon: pokedata });
            dom.appendChild(pokemon.renderDOM());
        });
    }

    renderHTML() {
        return /*html*/ `<section id="pokedex"></section>`;
    }
}