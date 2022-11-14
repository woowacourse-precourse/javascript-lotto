const MissionUtils = require("@woowacourse/mission-utils");
const Calculator = require('./components/Calculator.js');
const Input = require('./components/Input.js');

class App {
  play () {
    const cal = new Calculator();
    const input = new Input();

    const lottocount = this.printLottoCount();
    const lottoArr = cal.createLottoNumber(lottocount);

    const winNumber = (input.inputWinNumber()).split(',').map(Number);
    const bonusNumber = input.inputBonusNumber();

    const lottoresult = cal.calWinning(lottoArr, winNumber);
    const winningArr = cal.winningScore(lottoresult, lottoArr, bonusNumber);
    this.printResult(winningArr, lottocount);
  }

  printResult (arr, count) {
    const cal = new Calculator();
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${arr[3]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${arr[4]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${arr[5]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${arr[6]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${arr[7]}개`);
    MissionUtils.Console.print(`총 수익률은 ${cal.calYield(arr,count)}%입니다.`);
  }

  printLottoCount () {
    const input = new Input();
    const lottocount = input.inputMoneyCount();
    MissionUtils.Console.print(`${lottocount}개를 구매했습니다.`);
    return lottocount;
  }
}

module.exports = App;
