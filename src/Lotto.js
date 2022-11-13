const Random = require("@woowacourse/mission-utils").Random;
const Console = require("@woowacourse/mission-utils").Console;
const inputValidation = require("./inputValidation");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const checkSixNum = inputValidation.checkSixNum(numbers);
  }

  //로또 뽑기 logic
  randomLottoNumber() {
    const lottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
    return lottoNum;
  }

  randomBonusNumber() {
    
  }
}

module.exports = Lotto;
