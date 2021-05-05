import {CREDENTIALS} from '../data/credentials';
import roles from '../helper/roles';
import loginpage from '../pages/loginPage';
import productListing from '../pages/plp';
import {PAGE} from '../data/pageElements';
import productDetails from '../pages/pdp';
import common from '../pages/common';
import shoppingCart from '../pages/shoppingCart';



fixture `Product Details Page Testing`
    .page(PAGE.URL).beforeEach(async t=>{ await t.useRole(roles.validUser)}) 

test(`Verify Products were added to the Cart`, async t => {
    await productListing.addItemToCart(PAGE.PRODUCTS.LIGHT)
    await productDetails.returntoPLP()
    await productListing.addItemToCart(PAGE.PRODUCTS.BACKPACK)
    await productDetails.returntoPLP()
    await t.expect(await productListing.returnPLPtitle()).eql(PAGE.PAGETITLES.PRODUCTLIST)
    await productListing.addItemToCart(PAGE.PRODUCTS.ONESIE)
    await common.openCart()
    await t.expect(await shoppingCart.isItemInTheCart(PAGE.PRODUCTS.LIGHT)).eql(true) 
    await t.expect(await shoppingCart.isItemInTheCart(PAGE.PRODUCTS.BACKPACK)).eql(true) 
    await t.expect(await shoppingCart.isItemInTheCart(PAGE.PRODUCTS.ONESIE)).eql(true) 
});

