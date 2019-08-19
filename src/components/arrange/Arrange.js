import Component from '../../utils/Component.js';
import hashStorage from '../../services/hash-storage.js';

export class Arrange extends Component {

    onRender(dom) {
        const pageDisplay = dom.querySelector('label span');
        const pageBack = dom.querySelector('label button:first-of-type');
        const pageForward = dom.querySelector('label button:last-of-type');

        pageBack.addEventListener('click', () => this.updatePaging(pageDisplay, pageBack, -1));
        pageForward.addEventListener('click', () => this.updatePaging(pageDisplay, pageBack, 1));
        this.updatePaging(pageDisplay, pageBack, 0);
    }

    updatePaging(pageDisplay, backButton, pageChange = 0) {
        const newPage = +(hashStorage.get().page || 1) + pageChange;

        pageDisplay.textContent = ` page ${newPage} of 41 `;
        backButton.disabled = newPage === 1 ? true : false;
        hashStorage.set({ page: newPage });
    }

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