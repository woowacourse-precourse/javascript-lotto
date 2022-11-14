// const MissionUtils = require('@woowacourse/mission-utils');
class Bonus {
  #convertBonusType;
  #convertWinningType;

  constructor(winning, bonus) {
    this.#convertBonusType = Number(bonus);
    this.#convertWinningType = winning.split(',').map(Number);
    this.validate();
  }

  validate() {
    const testType = /[0-9]/g;
    const testlength = /[0-9]{1}/;
    if (this.#convertWinningType.includes(this.#convertBonusType))
      throw new Error('[ERROR] 당첨 번호와 보너스 번호가 중복될 수 없습니다.');
    if (this.#convertBonusType < 1 || this.#convertBonusType > 45)
      throw new Error('[ERROR] 1~45 사이 숫자여야 합니다.');
    if (!testlength.test(this.#convertBonusType))
      throw new Error('[ERROR] 보너스숫자 하나만 입력해야 합니다.');
    if (!testType.test(this.#convertBonusType)) throw new Error('[ERROR] 숫자만 입력해야 합니다.');
    return this.#convertBonusType;
  }
}

module.exports = Bonus;
