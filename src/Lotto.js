const  MissionUtils  = require("@woowacourse/mission-utils");
const Coin = require('./Coin');

class Lotto {
  #numbers;

  userNumberList;

  prize = {
    "first":0,
    "second":0,
    "third":0,
    "fourth":0,
    "fifth":0,
  };

  bonus;

  constructor(numbers) {
    const coin = new Coin();
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
}

module.exports = Lotto;
