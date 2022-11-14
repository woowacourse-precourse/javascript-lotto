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

  }



  printLottoCount () {
    const input = new Input();
    const lottocount = input.inputMoneyCount();
    MissionUtils.Console.print(`${lottocount}개를 구매했습니다.`);
    return lottocount;
  }
}

module.exports = App;
