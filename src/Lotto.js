const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = require("@woowacourse/mission-utils");
const { getLottoNumber, makeLottoArray } = require("./LottoGenerator");
const { makeWinLottoNumber, changePriceToCount } = require("./UiInputLogic");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
  matchLotto(i) {
    console.log(this.#numbers, i);
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
