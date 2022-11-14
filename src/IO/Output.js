const MissionUtils = require('@woowacourse/mission-utils');
const { WINNINGS } = require('../utils/Constants');

class Output {
  #resultForPrint = {};

  constructor() {
    this.convertResultForPrint();
  }

  printUserLottoCount(lottoCount) {
    MissionUtils.Console.print(`\n${lottoCount}개를 구매했습니다.`);
  }

  printUserLottoNumber(lottoArray) {
    lottoArray.forEach((item) => {
      const randomLottoNumbers = item.lottoNumber;
      const convertedNumber = String(randomLottoNumbers).replace(/,/g, ', ');
      MissionUtils.Console.print('[' + convertedNumber + ']');
    })
  }

  printResult(score, revenue) {
    MissionUtils.Console.print('\n당첨 통계');
    MissionUtils.Console.print('---');
    MissionUtils.Console.print(`3개 일치 (${this.#resultForPrint.matchedThree}원) - ${score.three}개`);
    MissionUtils.Console.print(`4개 일치 (${this.#resultForPrint.matchedFour}원) - ${score.four}개`);
    MissionUtils.Console.print(`5개 일치 (${this.#resultForPrint.matchedFive}원) - ${score.five}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (${this.#resultForPrint.matchedFiveAndBonus}원) - ${score.fivePlusBonus}개`);
    MissionUtils.Console.print(`6개 일치 (${this.#resultForPrint.matchedSix}원) - ${score.six}개`);
    MissionUtils.Console.print(`총 수익률은 ${revenue}%입니다.`);
  }
  
  convertResultForPrint() {
    for (const [key, value] of Object.entries(WINNINGS)) {
      this.#resultForPrint[key] = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  }
}

module.exports = Output;
