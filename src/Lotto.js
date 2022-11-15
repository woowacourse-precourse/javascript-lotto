const MissionUtils = require("@woowacourse/mission-utils");
const Data = require("./Data");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.myPay = 0;
    this.myLottoNumbers = [];
    this.winNumbers = 0;
    this.bonusNumber = 0;
    this.validate(numbers);
    this.#numbers = numbers;
    this.rewardLotto = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
