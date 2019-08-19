import Component from '../../utils/Component.js';

export class Pokemon extends Component {

    onRender(dom) {
        const nameTextColor = this.props.pokemon.color_2 === 'NA' ? 'gray' : this.props.pokemon.color_2;
        dom.querySelector('.name').style.color = nameTextColor;
        dom.querySelector('.background').style.backgroundColor = this.props.pokemon.color_1;
    }

    renderHTML() {
        const pokedata = this.props.pokemon;
        const ability2 = pokedata.ability_2 === 'NA' ? '' : `<li>ability: ${pokedata.ability_2}</li>`;
        const eggGroup1 = pokedata.egg_group_1 === 'NA' ? '' : `<li>egg group: ${pokedata.egg_group_1}</li>`;
        const eggGroup2 = pokedata.egg_group_2 === 'NA' ? '' : `<li>egg group: ${pokedata.egg_group_2}</li>`;
        const badgeBottomRight = pokedata.type_2 === 'NA' ? '' : `<img class="badge-bottom-right" src="assets/pokedex/${pokedata.type_2}.png" alt=" ${pokedata.type_2} icon">`;
        return /*html*/ `
            <div class="poke-card">
                <input class="active-card" type="checkbox" id="pokemon-id-${this.props.pokemon.id}">
                <label for="pokemon-id-${pokedata.id}">
                    <div class="background"></div>
                    <h2 class="name">${pokedata.pokemon}</h2>
                    <p class="info-bottom-middle">stats</p>
                    <ul class="hud-details">
                        <li>height: ${pokedata.height}</li>
                        <li>weight: ${pokedata.weight}</li>
                        <li>hit points: ${pokedata.hp}</li>
                        <li>speed: ${pokedata.speed}</li>
                        <li class="smaller-line-height">&nbsp</li>
                        <li>attack: ${pokedata.attack}</li>
                        <li>defense: ${pokedata.defense}</li>
                        <li>special attack: ${pokedata.special_attack}</li>
                        <li>special defense: ${pokedata.special_defense}</li>
                        <li class="smaller-line-height">&nbsp</li>
                        <li>ability: ${pokedata.ability_1}</li>
                        ${ability2}
                        <li class="smaller-line-height">&nbsp</li>
                        ${eggGroup1}
                        ${eggGroup2}
                        <li>evolves from: ${pokedata.evolves_from_species_id}</li>
                    </ul>
                    <img class="badge-top-right" src="assets/pokedex/evolution-badge.png" alt="evolution badge">
                    <img class="badge-bottom-left" src="assets/pokedex/${pokedata.type_1}.png" alt=" ${pokedata.type_1} icon">
                    ${badgeBottomRight}
                    <img class ="pokemon" src="${pokedata.url_image}" alt="a pokemon called ${pokedata.pokemon}">
                </label>
            </div>
        `;
        // <p class="info-bottom-left">${pokedata.type_1}</p>
        // <p class="info-bottom-right ${pokedata.type_2 === 'NA' ? 'hidden' : ''}">${pokedata.type_2}</p>
    }
}