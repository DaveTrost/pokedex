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
            const filterTypes = searchData.getAll('type');
            const filterTypesUsable = filterTypes.filter((type) => type !== 'all');
            const typeString = filterTypesUsable.join();

            hashStorage.set({ type: typeString });
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
                            <label><input checked type="checkbox" value="all" name="type">All Types</label>
                            <label><input type="checkbox" value="normal" name="type">Normal</label>
                            <label><input type="checkbox" value="fire" name="type">Fire</label>
                            <label><input type="checkbox" value="water" name="type">Water</label>
                            <label><input type="checkbox" value="electric" name="type">Electric</label>
                            <label><input type="checkbox" value="grass" name="type">Grass</label>
                            <label><input type="checkbox" value="ice" name="type">Ice</label>
                            <label><input type="checkbox" value="fighting" name="type">Fighting</label>
                            <label><input type="checkbox" value="poison" name="type">Poison</label>
                            <label><input type="checkbox" value="ground" name="type">Ground</label>
                            <label><input type="checkbox" value="flying" name="type">Flying</label>
                            <label><input type="checkbox" value="psychic" name="type">Psychic</label>
                            <label><input type="checkbox" value="bug" name="type">Bug</label>
                            <label><input type="checkbox" value="rock" name="type">Rock</label>
                            <label><input type="checkbox" value="ghost" name="type">Ghost</label>
                            <label><input type="checkbox" value="dragon" name="type">Dragon</label>
                            <label><input type="checkbox" value="dark" name="type">Dark</label>
                            <label><input type="checkbox" value="steel" name="type">Steel</label>
                            <label><input type="checkbox" value="fairy" name="type">Fairy</label>
                        </label>
                        <button type="submit">Go</button>
                    </div>
                </form>
            </section>
        `;
    }
}