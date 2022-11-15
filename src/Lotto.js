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
      lotto.sort((a, b) => a - b);
      usersLottos.push(lotto);
      i++;
    }
    return usersLottos;
  }

  compareLotto(lotto, winningNumber, bonusNumber) {
    let count = 0;
    let bonus = false;

    lotto.forEach(num => {
      if (winningNumber.includes(num)) {
        count++;
      }
      if (num === bonusNumber) {
        bonus = true;
      }
    });

    return [count, bonus];
  }

  getResult(usersLottos, winningNumber) {
    let result = [0, 0, 0, 0, 0];
    const bonusNumber = winningNumber.pop();

    for (let lotto of usersLottos) {
      const [count, bonus] = this.compareLotto(
        lotto,
        winningNumber,
        bonusNumber,
      );

      if (count === 3) result[0] += 1;
      if (count === 4) result[1] += 1;
      if (count === 5 && bonus === false) result[2] += 1;
      if (count === 5 && bonus === true) result[3] += 1;
      if (count === 6) result[4] += 1;
    }

    return result;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
