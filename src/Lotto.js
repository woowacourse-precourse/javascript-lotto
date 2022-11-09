const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    // this.validate(numbers);
    this.#numbers = numbers;
    this.START_MESSAGE = "구입금액을 입력해 주세요.";
  }

  buyLotto() {
    MissionUtils.Console.print(this.START_MESSAGE);
    this.pay();
  }
  pay() {
    MissionUtils.Console.readLine("", (payNumber) => {
      MissionUtils.Console.print(""); // 공백
      this.countMyLottoSheets(payNumber);
    });
  }
  countMyLottoSheets(payNumber) {
    const countedSheets = payNumber / 1000;
    MissionUtils.Console.print(`${countedSheets}개를 구매했습니다.`);
    // return this.
  }

  // validate(numbers) {

  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }
}

const lotto = new Lotto();
lotto.buyLotto();

module.exports = Lotto;
