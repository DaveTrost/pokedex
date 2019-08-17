import Component from '../../utils/Component.js';

export class Pokedex extends Component {

    onRender() {
        console.log("rendering");
        return true;
    }

    renderHTML() {
        return /*html*/ `<section id="pokedex"></section>`;
    }
}