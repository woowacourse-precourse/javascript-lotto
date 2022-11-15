const {Console} = require("@woowacourse/mission-utils");
const CreateRandomLotto = require("./CreateRandomLotto")
const { INPUT_MESSAGE, BUY_LOTTO_MESSAGE, ERROR_MESSAGE } = require("./Constants")
const { INPUT_MONEY_MESSAGE } = INPUT_MESSAGE
const { NOT_THOUSAND_UNIT } = ERROR_MESSAGE

class UserInputNumber {
    constructor(){
        this.createRandomLotto = new CreateRandomLotto();
        this.issuedRandomNum = [];
        this.issudLotto;
    }
    
    userLottoPaymentAmount(){
        Console.readLine( INPUT_MONEY_MESSAGE , (input) => {
            let issuedLotto = input/1000;
            this.issudLotto = issuedLotto;
            this.checkNum(input);
            Console.print(`${issuedLotto}${BUY_LOTTO_MESSAGE}`);
            this.issuedRandomNum = this.createRandomLotto.issuedRandomNumber(issuedLotto);
        })
        return this.issuedRandomNum;
    }

    checkNum(value){
        if(value % 1000 !==  0){
            throw new Error(NOT_THOUSAND_UNIT);
        }
    }
}

module.exports = UserInputNumber;