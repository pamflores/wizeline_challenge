import {Selector, t} from 'testcafe'

class Finish{

    constructor(){
       this.finishLbl = Selector(".complete-header")
    }

    async returnFinishLbl(){
        return await this.finishLbl.innerText;
    }
 
}

export default new Finish()