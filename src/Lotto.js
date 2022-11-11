const { MissionUtils } = require("@woowacourse/mission-utils");
const PURCHASEAMOUNT_INPUT_MESSAGE = "구입금액을 입력해 주세요.";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  play() {
    MissionUtils.Console.readLine(
      PURCHASEAMOUNT_INPUT_MESSAGE,
      (purchaseAmount) => {
        // 구입 금액 유효성 검사
      }
    );
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    // TODO: 추가 기능 구현
  }
}

module.exports = Lotto;
