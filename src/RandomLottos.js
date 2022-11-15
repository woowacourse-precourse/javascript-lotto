const MissionUtils = require('@woowacourse/mission-utils');
const { CONSTANT, LOTTO } = require('./Constants');
const Lotto = require('./Lotto');
const WinningLotto = require('./WinningLotto');

const { Console, Random } = MissionUtils;

class RandomLottos {
  /**
   * 구입한 로또 개수만큼 랜덤 로또를 발행하여 lottoArray에 저장합니다.
   * @param {number} numOfLotto - 구입한 로또 개수
   */
  constructor(numOfLotto) {
    this.lottoArray = [];
    this.numOfLotto = numOfLotto;
    for (let i = 0; i < numOfLotto; i += 1) {
      const newLotto = this.lottoGenerator();
      this.lottoArray.push(newLotto);
    }
  }

  /**
   * 로또를 한개 발행하여 반환합니다..
   * @returns {Lotto} 랜덤으로 새로 발행한 로또
   */
  lottoGenerator() {
    const lottoNums = Random.pickUniqueNumbersInRange(
      LOTTO.START_NUMBER,
      LOTTO.END_NUMBER,
      LOTTO.NUM_OF_DRAWN,
    );
    return new Lotto(lottoNums);
  }

  /**
   * 구입한 로또를 출력합니다.
   */
  printRandomLottos() {
    Console.print(`${this.numOfLotto}개를 구매했습니다.`);
    this.lottoArray.forEach((lotto) => {
      lotto.printLotto();
    });
    Console.print('');
  }

  /**
   * 당첨로또 번호를 받아서 1등부터 5등로또가 몇개있는지 배열을 반환합니다.
   * @param {WinningLotto} winningLotto - 당첨로또
   * @returns {Array<number>} result - [3개 일치, 4개 일치, 5개 일치, 5개+보너스 일치, 6개 일치] 개수
   */
  getPrizeResult(winningLotto) {
    const result = [0, 0, 0, 0, 0];
    this.lottoArray.forEach((lotto) => {
      const [numOfMatched, bonus] = winningLotto.getNumOfMatchedAndBonus(lotto);
      if (numOfMatched === 6) result[CONSTANT.SIX_MATCHED] += 1;
      if (numOfMatched === 5 && bonus) result[CONSTANT.FIVE_BONUS_MATCHED] += 1;
      if (numOfMatched === 5 && !bonus) result[CONSTANT.FIVE_MATCHED] += 1;
      if (numOfMatched === 4) result[CONSTANT.FOUR_MATCHED] += 1;
      if (numOfMatched === 3) result[CONSTANT.THREE_MATCHED] += 1;
    });
    return result;
  }
}
module.exports = RandomLottos;
