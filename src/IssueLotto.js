const { LOTTO_NUMBER, LOTTO_TICKET } = require('./constant');
const MissionUtils = require('@woowacourse/mission-utils');
const Match = require('./Matcher');

const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class LottoGenerator {
  constructor() {
    this.lottoCount = 0;
  }

  getPurchaseLottoCount(money) {
    this.lottoCount += money / LOTTO_TICKET.ONE_PRICE;
    this.makeRandomLottoNumber();
  }

  makeRandomLottoNumber() {
    const lottoNumbers = [];
    for (let i = 0; i < this.lottoCount; i++) {
      const lottoNumber = Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER.MIN_RANGE,
        LOTTO_NUMBER.MAX_RANGE,
        LOTTO_NUMBER.PICK_SIX,
      );
      lottoNumbers.push(lottoNumber.sort((a, b) => a - b));
    }
    Match.lottoNumbers = lottoNumbers;
    this.printLotto(lottoNumbers);
  }

  printLotto(lottoNumbers) {
    const lottoList = lottoNumbers
      .map((x, index) => '[' + lottoNumbers[index].join(', ') + ']')
      .join('\n');

    Console.print(`\n${this.lottoCount}개를 구매했습니다.\n${lottoList}`);
  }
}

const LOTTOGENERATOR = new LottoGenerator();

module.exports = LOTTOGENERATOR;
