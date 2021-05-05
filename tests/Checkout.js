import roles from '../helper/roles';
import {PAGE} from '../data/pageElements';
import common from '../pages/common';
import shoppingCart from '../pages/shoppingCart';
import checkoutNames from '../pages/checkoutNames';
import finish from '../pages/finish'



fixture `Checkout Page Testing`
    .page(PAGE.URL).beforeEach(async t=>{ await t.useRole(roles.validUser)}) 

test(`Checkout Finish`, async t => {
    await common.openCart()
    await shoppingCart.clickCheckoutbtn()
    await checkoutNames.addNames(PAGE.NAMES.FIRST_NAME,PAGE.NAMES.LAST_NAME,PAGE.NAMES.POSTAL_CODE)
    await t.expect(await checkoutNames.returnPaymentLbl()).eql(PAGE.LABELS.PAYMENT) //Assertion
    await checkoutNames.finish()
    await t.expect(await finish.returnFinishLbl()).eql(PAGE.LABELS.THANK_YOU)//Assertion
});