const MissionUtils = require('@woowacourse/mission-utils');

const { Random } = MissionUtils;
const Lotto = require('./Lotto');

class RandomLottos {
  /**
   * 구입한 로또 개수만큼 랜덤 로또를 발행하여 lottoArray에 저장합니다.
   * @param {number} numOfLotto - 구입한 로또 개수
   */
  constructor(numOfLotto) {
    this.lottoArray = [];
    this.numOfLotto = numOfLotto;
    for (let i = 0; i < numOfLotto; i += 1) {
      const newLotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottoArray.push(new Lotto(newLotto));
    }
  }
}

module.exports = RandomLottos;
