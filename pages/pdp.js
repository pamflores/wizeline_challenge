import {Selector, t} from 'testcafe';
import productListing from '../pages/plp';
import {PAGE} from '../data/pageElements';

//Product Details Page
class productDetails{
    
    constructor(){
        this.PDPtitle = Selector ('.inventory_details_name.large_size');
        this.addToCartBtn = Selector ('.btn_inventory')
        this.backtoPLP = Selector ('#back-to-products')
    }
    
    async returnPDPtitle(){
        return await this.PDPtitle.innerText;
    }

    async addItemToCart(){
        await t.click(this.addToCartBtn);
    }

    async returnBtnText(){
        return await this.addToCartBtn.innerText;
    }
// Getting out of the PDP and returning to PLP
    async returntoPLP(){
        await t.click(this.backtoPLP)
        await t.expect(await productListing.returnPLPtitle()).eql(PAGE.PAGETITLES.PRODUCTLIST)
    }
}


export default new productDetails();