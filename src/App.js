const { Console } = require("@woowacourse/mission-utils");

const { MESSAGE, AMOUNT_UNIT, ERROR } = require("../src/utils/constants");

class App {
  play() {}

  //구매 금액 입력 요청하기
  getPurchaseAmount() {
    Console.readLine(MESSAGE.ENTER_PURCHASE_AMOUNT, (amount) => {
      console.log(amount);
    });
  }

  //구매 금액 유효성 검사하기
  validateInput(input) {
    const trimmedInput = input.trim();

    //문자가 섞여있지 않은지 검사
    if (trimmedInput.match(RegExp(/([^0-9])/g)) !== null) {
      throw new Error(ERROR.INVALID_INPUT);
    }

    //금액이 1000으로 나눠떨어지는지 검사
    if (Number(trimmedInput) % AMOUNT_UNIT !== 0) {
      throw new Error(ERROR.INDIVISIBLE);
    }

    return true;
  }

  //구매 금액으로 로또 몇장 살 수 있는지 계산하기
  countAvailableQuantity(amount) {
    return Number(amount) / AMOUNT_UNIT;
  }
}

module.exports = App;
