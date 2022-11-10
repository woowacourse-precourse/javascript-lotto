const Console = require("@woowacourse/mission-utils");
const CreateRandomLotto = require("./CreateRandomLotto")
const createRandomLotto = new CreateRandomLotto();
const INPUT_MONEY_MESSAGE = "구입금액을 입력해 주세요."

class UserInputNumber {
    
    userLottoPaymentAmount(){
        Console.readLine( INPUT_MONEY_MESSAGE , (input) => {
            let issuedLotto = input/1000;
            Console.print(issuedLotto + "개를 구매했습니다.");
        })
    }
}

module.exports = UserInputNumber;
