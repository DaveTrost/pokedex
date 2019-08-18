import Component from '../../utils/Component.js';

export class Arrange extends Component {

    renderHTML() {
        return /*html*/ `
            <section id="arrange">
                <select name="sort-order" id="sort-order">
                    <option value="" selected hidden>Sort by Option:</option>
                    <option value="a-to-z">alphabetical ascending</option>
                    <option value="z-to-a">alphabetical descending</option>
                </select>
                <label for="page">
                    <button>◄</button><span> page 1 of 1 </span><button>►</button>
                </label>
            </section>
        `;
    }
}