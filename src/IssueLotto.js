const { LOTTO_NUMBER_RANGE } = require('./constant');
const MissionUtils = require('@woowacourse/mission-utils');
const Match = require('./Matcher');

const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class LottoGenerator {
  constructor() {
    this.lottoCount = 0;
    this.LOTTO_TICKET_PRICE = 1000;
  }

  getPurchaseLottoCount(money) {
    this.lottoCount += money / this.LOTTO_TICKET_PRICE;
    this.makeRandomLottoNumber();
  }

  makeRandomLottoNumber() {
    const lottoNumbers = [];
    for (let i = 0; i < this.lottoCount; i++) {
      const lottoNumber = Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER_RANGE.MINIMUM_NUMBER,
        LOTTO_NUMBER_RANGE.MAXIMUM_NUMBER,
        LOTTO_NUMBER_RANGE.PICK_SIX_NUMBER,
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
