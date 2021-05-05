require('dotenv').config();
import {Selector, t} from 'testcafe'


//Constant page elements, labels or texts that will serve for assertions in the tests
export const PAGE = {   
    URL: process.env.URL,

    PAGETITLES: {
        PRODUCTLIST: "PRODUCTS",
        YOUR_CART: "YOUR CART",
        OVERVIEW: "CHECKOUT: OVERVIEW"
  },
    PAGEMSGS: {
        LOGINERROR: "Epic sadface: Username and password do not match any user in this service"
    },

    SORTS: {
        AtoZ: "Name (A to Z)",
        ZtoA: "Name (A to Z)",
        LtoH: "Price (low to high)",
        HtoL: "Price (high to low)"
    },
    PRODUCTS:{
        ONESIE: "Sauce Labs Onesie",
        LIGHT: "Sauce Labs Bike Light",
        BACKPACK: "Sauce Labs Backpack",
    },
    BUTTONS:{
        ADDTOCART: "ADD TO CART",
        REMOVE: "REMOVE"
    },
    LABELS:{
        PAYMENT: "SauceCard #31337",
        THANK_YOU: "THANK YOU FOR YOUR ORDER"
    },
    NAMES:{
        FIRST_NAME: "John",
        LAST_NAME: "Smith",
        POSTAL_CODE: "90210"
    }

    
}


