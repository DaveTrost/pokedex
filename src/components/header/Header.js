import Component from '../../utils/Component.js';

export class Header extends Component {

    renderHTML() {
        return /*html*/ `
            <header>
                <img class="logo-icon" src="assets/header/Pokedex-icon.png" alt="logo with image of a handheld pokedex">
                <img src="assets/header/pokedex-title.png" alt="POKEDEX title">
            </header>
        `;
    }
}