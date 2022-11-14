const MissionUtils = require("@woowacourse/mission-utils");
const CalculateLotto = require("./CalculateLotto");

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
    this.createLottoNumbersList(numbers);
  }

  createLottoNumbersList(numbers_arr){
    let lotto_numbers_list = [];
    lotto_numbers_list += numbers_arr;
  }
}

module.exports = Lotto;
