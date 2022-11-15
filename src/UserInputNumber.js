const {Console} = require("@woowacourse/mission-utils");
const CreateRandomLotto = require("./CreateRandomLotto");
const { INPUT_MESSAGE, BUY_LOTTO_MESSAGE, ERROR_MESSAGE, THOUSAND} = require("./Constants");
const { INPUT_MONEY_MESSAGE } = INPUT_MESSAGE;
const { NOT_THOUSAND_UNIT, INPUT_NUM_BLANK } = ERROR_MESSAGE;

class UserInputNumber {
    constructor(){
        this.createRandomLotto = new CreateRandomLotto();
        this.issuedRandomNum = [];
        this.issudLotto;
    }
    
    userLottoPaymentAmount(){
        Console.readLine( INPUT_MONEY_MESSAGE , (input) => {
            let issuedLotto = input/THOUSAND;
            this.issudLotto = issuedLotto;
            this.checkInput(input);
            Console.print(`${issuedLotto}${BUY_LOTTO_MESSAGE}`);
            this.issuedRandomNum = this.createRandomLotto.issuedRandomNumber(issuedLotto);
        })
        return this.issuedRandomNum;
    }

    checkInput(value){
        if(value % THOUSAND !==  0){
            throw new Error(NOT_THOUSAND_UNIT);
        }
        if(value == "" || value == null){
            throw new Error(INPUT_NUM_BLANK);
        }
    }
}

module.exports = UserInputNumber;