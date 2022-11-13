const Lotto = require('./Lotto');
const { MESSAGE } = require('./Constants');

class WinningLotto extends Lotto {
  /**
   * @param {Array<number>} numbers - 구입한 로또 개수
   * @param {number} bonus - 구입한 로또 개수
   */
  constructor(numbers, bonus) {
    super(numbers);
    this.validateBonus(numbers, bonus);
    this.bonus = bonus;
  }

  /**
   * 당첨 로또 번호와 보너스 번호를 입력받아 유효성을 검증한다.
   * @param {Array<number>} numbers - 당첨 로또 번호
   * @param {number} bonus - bonus 번호
   */
  validateBonus(numbers, bonus) {
    if (numbers.includes(bonus)) throw new Error(MESSAGE.ERROR_BONUS_IN_NUMS);
    if (!Number.isInteger(bonus)) throw new Error(MESSAGE.ERROR_NO_INTEGER);
    if (bonus < 1 || bonus > 45) throw new Error(MESSAGE.ERROR_OUT_OF_RANGE);
  }

  /**
   * 랜덤 로또 하나를 인자로 받아서 [일치하는 번호개수, 보너스 일치 개수] 를 반환한다.
   * @param {Lotto} lotto - 로또
   * @return {Array<number>} [matched number 개수, bonus matched]
   */
  getNumOfMatchedAndBonus(lotto) {
    let matched = 0;
    let bonus = 0;
    const winningNums = this.getNums();
    const lottoNums = lotto.getNums();
    lottoNums.forEach((Num) => {
      if (winningNums.includes(Num)) matched += 1;
      if (Num === this.bonus) bonus = 1;
    });
    return [matched, bonus];
  }
}
module.exports = WinningLotto;
