import {Selector, t} from 'testcafe'

class shoppingCart{

    constructor(){
        this.name = Selector('.inventory_item_name')
        this.checkoutbtn=Selector('#checkout')
    }

    //Validate if item exits in the cart
    async isItemInTheCart(item) {
        const count = await this.name.count;
        let found = false;
        for(var i = 0; i < count; i++) {
            const title = await this.name.nth(i).innerText;
            if (title.match(item)) {
                found = true; //if the title of the item name is the same as the passed item, then it was found.
            }

        }
    return found
  }

  async clickCheckoutbtn(){
      await t.click(this.checkoutbtn)
  }
}

export default new shoppingCart()