import Component from '../../utils/Component.js';

export class Search extends Component {

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
                            <span><input checked type="checkbox" name="search-field" id="search-field">All Types</span>
                            <span><input type="checkbox" name="search-field" id="search-field">Ground</span>
                            <span><input type="checkbox" name="search-field" id="search-field">Fire</span>
                            <span><input type="checkbox" name="search-field" id="search-field">Pyschic</span>
                        </label>
                        <label class="settings-column" for="filter-by-ability">
                            <h2>FILTER BY ABILITY:</h2>
                            <span>Attack<input type="range" min="0" max="1000" value="50" clas"slider"></span>
                            <span>Defense<input type="range" min="0" max="1000" value="50" clas"slider"></span>
                            <span>Speed<input type="range" min="0" max="1000" value="50" clas"slider"></span>
                            <span>Special Attack<input type="range" min="0" max="1000" value="50" clas"slider"></span>
                            <span>Special Defense<input type="range" min="0" max="1000" value="50" clas"slider"></span>
                        </label>
                    </div>
                </form>
            </section>
        `;
    }
}