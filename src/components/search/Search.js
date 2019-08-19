import Component from '../../utils/Component.js';
import hashStorage from '../../services/hash-storage.js';

export class Search extends Component {

    onRender(dom) {
        const searchForm = dom.querySelector('#search-form');
        searchForm.querySelector('#search-field').value = hashStorage.get().pokemon || '';

        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const searchData = new FormData(searchForm);
            const searchTerm = searchData.get('search-field') || '';

            hashStorage.set({ pokemon: searchTerm });
            hashStorage.set({ page: 1 });
        });
        // var slider = document.getElementById('myRange');
        // var output = document.getElementById('demo');
        // output.innerHTML = slider.value; // Display the default slider value
        // // Update the current slider value (each time you drag the slider handle)
        // slider.oninput = function() {
        //     output.innerHTML = this.value;
        // }
    }

    renderHTML() {
        return /*html*/ `
            <section id="search">
                <form id="search-form" action="/">
                    <label for="search-field"><h2>SEARCH:</h2>
                        <input type="search" name="search-field" id="search-field">
                    </label>
                    <input class="show-hide-control" type="checkbox" hidden name="advanced-search" id="advanced-search">
                    <label id="advanced-search-label" for="advanced-search"><h2>ADVANCED SEARCH</h2></label>
                    <div class="show-hide-container settings-column">
                        <label class="settings-column" for="filter-by-type">
                            <h2>FILTER BY TYPE:</h2>
                            <span><input checked type="checkbox" name="all-types">All Types</span>
                            <span><input type="checkbox" name="ground-types">Ground</span>
                            <span><input type="checkbox" name="fire-types">Fire</span>
                            <span><input type="checkbox" name="psychic-types">Pyschic</span>
                        </label>
                        <label class="settings-column" for="filter-by-ability">
                            <h2>FILTER BY ABILITY:</h2>
                            <p><span>Attack<input type="range" min="0" max="1000" value="50" id="attack-slider" class="slider"></span><span></span></p>
                            <p><span>Defense<input type="range" min="0" max="1000" value="50" id="defense-slider" class="slider"></span><span></span></p>
                            <p><span>Speed<input type="range" min="0" max="1000" value="50" id="speed-slider" class="slider"></span><span></span></p>
                            <p><span>Special Attack<input type="range" min="0" max="1000" value="50" id="special-attack-slider" class="slider"></span><span></span></p>
                            <p><span>Special Defense<input type="range" min="0" max="1000" value="50" id="special-defense-slider" class="slider"></span><span></span></p>
                        </label>
                    </div>
                </form>
            </section>
        `;
    }
}