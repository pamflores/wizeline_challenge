import {Selector, t} from 'testcafe'

// Common actions throught the site pages
class common{

    constructor(){
        this.burgerbtn = Selector('#react-burger-menu-btn');
        this.burgerlogout = Selector('#logout_sidebar_link');
        this.cartbtn = Selector('.shopping_cart_link');
    }

    async clickBurguerBtn(){
        await t.click(this.burgerbtn);
    }

    async clickLogoutLink(){
        await t.click(this.burgerlogout);
    }

    async logout(){
        await this.clickBurguerBtn();
        await this.clickLogoutLink();
    }

    async openCart(){
        await t.click(this.cartbtn);
    }

  
}

export default new common();