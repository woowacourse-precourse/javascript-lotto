const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    // this.validate(numbers);
    this.#numbers = numbers;
  }

  // validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }

  inputPurchaseAmount() {
    MissionUtils.Console.readLine(
      "구입 금액을 입력해주세요.\n",
      (inputMoney) => {
        this.checkPurchaseAmount(inputMoney);
      }
    );
  }

  checkPurchaseAmount(inputMoney) {
    //금액 입력 예외 처리
    MissionUtils.Console.print(`inputMoney : ${inputMoney}`);
    if (isNaN(inputMoney)) throw new Error("[ERROR] 숫자만 입력하세요.");

    const INPUTMONEY = parseInt(inputMoney);
    if (INPUTMONEY < 1000)
      throw new Error("[ERROR] 1000원 이상으로 입력하세요.");
    if (INPUTMONEY % 1000 != 0)
      throw new Error("[ERROR] 1000 단위로 입력하세요.");
  }

  // TODO: 추가 기능 구현
}
module.exports = new Lotto();
