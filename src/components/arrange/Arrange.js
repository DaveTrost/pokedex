import Component from '../../utils/Component.js';
import hashStorage from '../../services/hash-storage.js';

export class Arrange extends Component {

    onRender(dom) {
        this.updatePaging(dom);
    }

    updatePaging(dom) {
        const pageBack = dom.querySelector('label button:first-of-type');
        const pageForward = dom.querySelector('label button:last-of-type');
        const pageDisplay = dom.querySelector('label span');
        let currentPage = hashStorage.get().page || 1;
        pageDisplay.textContent = ` page ${currentPage} of 41 `;
        if(currentPage === 1) {
            pageBack.disabled = true;
        }
        pageBack.addEventListener('click', () => {
            currentPage = hashStorage.get().page || 1;
            hashStorage.set({ page: +currentPage - 1 });
            pageDisplay.textContent = ` page ${+currentPage - 1} of 41 `;
        });
        pageForward.addEventListener('click', () => {
            currentPage = hashStorage.get().page || 1;
            hashStorage.set({ page: +currentPage + 1 });
            pageDisplay.textContent = ` page ${+currentPage + 1} of 41 `;
        });
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