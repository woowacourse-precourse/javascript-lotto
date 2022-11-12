const MissionUtils = require('@woowacourse/mission-utils');
const Validator = require('./Validator');
const GamePrint = require('../GamePrint');
const { LOTTO_LENGTH } = require('../constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.matches = null;
    numbers = Validator.lottoValidCheck(numbers);
    this.#numbers = numbers;
    GamePrint.lottoNumber(this.#numbers);
  }
  getBonus(bonus) {
    Validator.bonusValidCheck(bonus, this.#numbers);
    this.bonus = bonus;
  }
  compare(UserLotto) {
    const matchCount = { lotto: 0, bonus: false};
    UserLotto.forEach(number => {
      if(this.#numbers.includes(number)) return matchCount.lotto += 1;
      if(this.bonus.includes(number)) {
        matchCount.lotto += 1;
        return matchCount.bonus = true;
      }
    });
    matchCount.lotto = matchCount.lotto.toString();
    return matchCount;
  }
}

function getUserLottos(sheets) {
  const lottos = [];
  while(lottos.length < sheets) {
    const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, LOTTO_LENGTH);
    lotto.sort((a,b) => a - b);
    lottos.push(lotto);
  }
  return lottos;
}

exports.Lotto = Lotto;
exports.getUserLottos = getUserLottos;
