import { Pokemon } from '../src/components/pokedex/Pokemon.js';
const test = QUnit.test;

QUnit.module('Module Name');

test('test name', assert => {
    const testData = {
        _id: '5cef3501ef6005a77cd4fe0c',
        pokemon: 'houndoom-mega',
        id: 249,
        species_id: 229,
        height: 19,
        weight: 495,
        base_experience: 210,
        type_1: 'dark',
        type_2: 'fire',
        attack: 90,
        defense: 90,
        hp: 75,
        special_attack: 140,
        special_defense: 90,
        speed: 115,
        ability_1: 'solar-power',
        ability_2: 'NA',
        ability_hidden: 'NA',
        color_1: '#705848',
        color_2: '#F08030',
        color_f: '#8F6142',
        egg_group_1: 'ground',
        egg_group_2: 'NA',
        url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/229_f2.png',
        generation_id: 'NA',
        evolves_from_species_id: 'NA',
        evolution_chain_id: 'NA',
        shape_id: 'NA',
        shape: 'NA',
        pokebase: 'houndoom',
        pokedex: 'http://www.pokemon.com/us/pokedex/houndoom'
    };
    
    const expected = /*html*/ `
        <div class="poke-card">
            <input class="active-card" type="checkbox" id="pokemon-id-249">
            <label for="pokemon-id-249">
                <div class="background"></div>
                <h2 class="name">houndoom-mega</h2>
                <p class="info-top-right">HP:<br>75</p>
                <ul class="hud-details">
                    <li>height: 19</li>
                    <li>weight: 495</li>
                    <li>hit points: 75</li>
                    <li>speed: 115</li>
                    <li class="smaller-line-height">&nbsp</li>
                    <li>attack: 90</li>
                    <li>defense: 90</li>
                    <li>special attack: 140</li>
                    <li>special defense: 90</li>
                    <li class="smaller-line-height">&nbsp</li>
                    <li>ability: solar-power</li>
                    <li class="smaller-line-height">&nbsp</li>
                    <li>egg group: ground</li>
                    <li>evolves from: NA</li>
                </ul>
                <img class="badge-top-right" src="assets/pokedex/evolution-badge.png" alt="evolution badge">
                <img class="badge-bottom-left" src="assets/pokedex/dark.png" alt=" dark icon">
                <img class="badge-bottom-right" src="assets/pokedex/fire.png" alt=" fire icon">
                <img class ="pokemon" src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/229_f2.png" alt="a pokemon called houndoom-mega">
            </label>
        </div>
    `;
    
    const testPokemon = new Pokemon({ pokemon: testData });
    assert.htmlEqual(testPokemon.renderHTML(), expected);
});