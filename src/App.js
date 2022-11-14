const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require('./Lotto');
const InputMoney = require('./InputMoney');
const LottoNumbers = require('./LottoNumbers');
const MakeRandomValue = require('./MakeRandomValue');

class App{
  constructor() {
    this.inputMoney = new InputMoney();
    this.lottoNumbers = new LottoNumbers();
  }

  play() {
    let MONEY = this.inputMoney.getMoney();
    let NUMBERS = this.lottoNumbers.getNumbers();
    let BONUS_NUMBER = this.lottoNumbers.getBonusNumber();

    let lotteryTicket = new MakeRandomValue().makeRandomValue(MONEY);
    this.printTickets(lotteryTicket, MONEY);

    const lotto = new Lotto(NUMBERS);
    lotto.matchLotto(lotteryTicket, BONUS_NUMBER, MONEY);
  }

  printTickets(lotteryTicket, MONEY) {
    MissionUtils.Console.print(`${MONEY/1000}개를 구매했습니다.`);

    lotteryTicket.forEach((item) => {
      let temp = '[' + String(item.join(', ')) + ']';
      MissionUtils.Console.print(temp);
    });
  }
}

module.exports = App;
