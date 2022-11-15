const Validator = require('./utils/Validator');
const MissionUtils = require('@woowacourse/mission-utils');
const Random = MissionUtils.Random;
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.Validator = new Validator();
  }

  validateLotto(numbers) {
    if (
      this.Validator.isNumber(numbers) !== Error &&
      this.Validator.isSix(numbers) !== Error &&
      this.Validator.isUnique(numbers) !== Error &&
      this.Validator.isValidRange(numbers) !== Error
    )
      return true;
  }

  validateBonusNum(numbers, bonus) {
    if (
      this.Validator.isNumber(bonus) !== Error &&
      this.Validator.isUniqueBonus(numbers, bonus) !== Error
    ) {
      return true;
    }
  }

  pickLottoNumber(quantity) {
    let usersLottos = [];
    let i = 0;
    while (i < quantity) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      usersLottos.push(lotto);
      i++;
    }
    return usersLottos;
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
