import {Selector, t} from 'testcafe';
import {PAGE} from '../data/pageElements';
import productDetails from '../pages/pdp';

class productListing{

    constructor(){
        this.plpTitle = Selector('.title');
        this.sortCombo = Selector('.product_sort_container');
        this.firstProd = Selector('.inventory_list').nth(0);
        this.productLink = Selector('.inventory_item_name');
        this.cart = Selector ('.shopping_cart_link');
    }

    async returnPLPtitle() {
        return await this.plpTitle.innerText;
    }
// Sort PLP by certain option
    async sortBy(option){
        await t.click(this.sortCombo)
                .click((new selectOption(option).option))
    }

    async firstProduct(){
        return await this.firstProd.innerText;
    }

    async selectProduct(product){
        await t.click(this.productLink.withText(product));
    }

    async goToCart(){
        await t.click(this.cart)
    }

    async addItemToCart(prod){
        await this.selectProduct(prod)
        await productDetails.addItemToCart()
        await t.expect(await productDetails.returnBtnText()).eql(PAGE.BUTTONS.REMOVE) //Assertion
    }
}

class selectOption {
    constructor(option) {
        this.option = Selector('option', { text: option })
    }
}
    



export default new productListing();