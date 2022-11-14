const {Console} = require("@woowacourse/mission-utils");
const CreateRandomLotto = require("./CreateRandomLotto")
const INPUT_MONEY_MESSAGE = "구입금액을 입력해 주세요."

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
            Console.print(`${issuedLotto}개를 구매했습니다.`);
            this.issuedRandomNum = this.createRandomLotto.issuedRandomNumber(issuedLotto);
        })
        return this.issuedRandomNum;
    }

    checkNum(value){
        if(value % 1000 !==  0){
            throw new Error("[ERROR] 구입 금액은 1000원 단위입니다.") 
        }
    }
}

module.exports = UserInputNumber;