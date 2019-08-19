import Component from '../../utils/Component.js';
import hashStorage from '../../services/hash-storage.js';

export class Arrange extends Component {

    onRender(dom) {
        const pageBack = dom.querySelector('label button:first-of-type');
        const pageForward = dom.querySelector('label button:last-of-type');
        
        pageBack.addEventListener('click', () => this.updatePaging(dom, -1));
        pageForward.addEventListener('click', () => this.updatePaging(dom, 1));
        this.updatePaging(dom, 0);
    }
    
    updatePaging(dom, pageChange = 0) {
        const newPage = +(this.props.options.page || 1) + pageChange;
        const maxPage = Math.ceil(this.props.pokeCount / this.props.perPage);
        
        hashStorage.set({ page: newPage });

        const pageDisplay = dom.querySelector('label span');
        const pageBack = dom.querySelector('label button:first-of-type');
        const pageForward = dom.querySelector('label button:last-of-type');
        
        pageDisplay.textContent = ` page ${newPage} of ${maxPage} `;
        pageBack.disabled = newPage === 1 ? true : false;
        pageForward.disabled = newPage === maxPage ? true : false;
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
                    <button>◄</button><span></span><button>►</button>
                </label>
            </section>
        `;
    }
}