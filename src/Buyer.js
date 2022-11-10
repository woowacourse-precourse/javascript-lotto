const MissionUtils = require('@woowacourse/mission-utils');

class Buyer {
  #inputtedCash;
  #countOfLotto;

  constructor() {
    this.#inputtedCash = Buyer.inputCash();
    this.#countOfLotto;
  }

  static inputCash() {
    MissionUtils.Console.readLine(
      '구입금액을 입력해 주세요.\n',
      (inputtedCash) => {
        return inputtedCash;
      }
    );
  }
}

const buyer = new Buyer();
Buyer.inputCash();

module.exports = Buyer;
