const Mission = require("@woowacourse/mission-utils");

class Clerk {
  #payment;

  inputLottoAmount() {
    Mission.Console.readLine("구입금액을 입력해 주세요.", (payment) => {
      this.#payment = payment;
    });
    return;
  }
}

module.exports = Clerk;
