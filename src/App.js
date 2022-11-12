const { Console } = require('@woowacourse/mission-utils');
const BonusLotto = require('./BonusLotto');
const { RANKING, INPUT_MESSAGE, PRINT_MESSAGE } = require('./constant');
const Lotto = require('./Lotto');
const Profit = require('./Profit');
const PurChase = require('./Purchase');
const Statistics = require('./Statistics');

class App {
  constructor() {
    this.money;
    this.purChaseLottoNumber;
    this.fullLottoNumber;
  }

  play() {
    this.purChaseLotto();
  }

  purChaseLotto() {
    Console.readLine(INPUT_MESSAGE.BUY, (amount) => {
      const lotteryTickets = new PurChase(amount).showLottoTickets(amount);
      this.money = amount;
      this.purChaseLottoNumber = lotteryTickets;
      this.printLotto(lotteryTickets);
    });
  }

  printLotto(lotteryTickets) {
    Console.print(PRINT_MESSAGE.PURCHASENUMBER(lotteryTickets.length));
    lotteryTickets.forEach((lottery) => Console.print(lottery));
    this.inputLottoNumber();
  }

  inputLottoNumber() {
    Console.readLine(INPUT_MESSAGE.LOTTONUMBER, (lottoInput) => {
      new Lotto(lottoInput);
      this.inputBonusLottoNumber(lottoInput);
    });
  }

  inputBonusLottoNumber(lottoInput) {
    Console.readLine(INPUT_MESSAGE.BONUSNUMBER, (bonusInput) => {
      const fullNumber = [lottoInput.split(','), bonusInput];
      this.fullLottoNumber = new BonusLotto(fullNumber) ? fullNumber : '';
      this.printStats();
    });
  }

  printStats() {
    Console.print(PRINT_MESSAGE.WINNING);
    Console.print(PRINT_MESSAGE.DIVIDE);
    const result = new Statistics(this.fullLottoNumber, this.purChaseLottoNumber).showResult();
    const profitList = Object.keys(RANKING).map((rank) => {
      const matchNumberInfo = RANKING[rank];
      const matchNumber = RANKING[rank]['MATCH'];
      const matchCount =
        result[matchNumber] && result[matchNumber]['bonus'] === matchNumberInfo['BONUS']
          ? result[matchNumber]['count']
          : 0;
      Console.print(`${matchNumberInfo.MESSAGE(matchCount)}`);
      return { matchCount, matchMoney: matchNumberInfo['PRICE'] };
    });
    this.printProFit(profitList);
  }

  printProFit(profitList) {
    const profitFigure = new Profit([this.money, profitList]).calculateProfit();
    Console.print(PRINT_MESSAGE.PROFIT(profitFigure));
    Console.close();
  }
}

new App().play();

// module.exports = App;
