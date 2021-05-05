import {Selector, t} from 'testcafe'

class checkoutNames{

    constructor(){
        this.checkoutbtn=Selector('#checkout');
        this.firstNameText = Selector('#first-name');
        this.lastNameText = Selector('#last-name');
        this.zipCodeText = Selector('#postal-code');
        this.continueBtn = Selector('#continue');
        this.paymentLbl = Selector('.summary_value_label');
        this.finishBtn = Selector('#finish');
    }

// Insert first name, last name and zipcode to the checkout page
    async addNames(first,last,zip){
        await t.typeText(this.firstNameText,first)
            .typeText(this.lastNameText,last)
            .typeText(this.zipCodeText,zip)
            .click(this.continueBtn)

    }
    async returnPaymentLbl(){
        return await this.paymentLbl.innerText; // Return text for payment label. Used for assertion
    }
    async finish(){
        await t.click(this.finishBtn)
    }
}

export default new checkoutNames()


