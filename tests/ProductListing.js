import {CREDENTIALS} from '../data/credentials';
import roles from '../helper/roles';
import loginpage from '../pages/loginPage';
import productListing from '../pages/plp';
import {PAGE} from '../data/pageElements';
import productDetails from '../pages/pdp';


fixture `Product Listing Page Testing`
    .page(PAGE.URL);
    
test(`Sort`, async t => {
    await loginpage.loginMethod(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    await t.expect(await productListing.returnPLPtitle()).eql(PAGE.PAGETITLES.PRODUCTLIST)
    await productListing.sortBy(PAGE.SORTS.LtoH) // Sort from low to high
    await t.expect(await productListing.firstProduct()).contains(PAGE.PRODUCTS.ONESIE) //Verify it was correctly sorted
});
