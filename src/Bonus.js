// const MissionUtils = require('@woowacourse/mission-utils');
class Bonus {
  constructor(winning, bonus) {
    this.validate(winning, bonus);
  }

  validate(winning, bonus) {
    if (winning.includes(bonus)) {
      throw new Error('[ERROR] 당첨 번호와 보너스 번호가 중복됩니다.');
    }
    return bonus;
  }
}

module.exports = Bonus;
