const { INPUT_MESSAGE, PRINT_MESSAGE, LOTTO_INFO, LIBRARY_URL } = require('./constant');
const { Console } = require(LIBRARY_URL);
const BonusLotto = require('./BonusLotto');
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
    lotteryTickets.forEach((lottery) => Console.print(PRINT_MESSAGE.LOTTERY(lottery)));
    this.inputLottoNumber();
  }

  inputLottoNumber() {
    Console.readLine(INPUT_MESSAGE.LOTTONUMBERS, (lottoInput) => {
      new Lotto(lottoInput);
      this.inputBonusLottoNumber(lottoInput);
    });
  }

  inputBonusLottoNumber(lottoInput) {
    Console.readLine(INPUT_MESSAGE.BONUSNUMBERS, (bonusInput) => {
      const fullNumber = [lottoInput.split(LOTTO_INFO.SPLITUNIT), bonusInput];
      this.fullLottoNumber = new BonusLotto(fullNumber) ? fullNumber : '';
      this.printStats();
    });
  }

  printStats() {
    Console.print(PRINT_MESSAGE.WINNING);
    Console.print(PRINT_MESSAGE.DIVIDE);
    const result = new Statistics(this.fullLottoNumber, this.purChaseLottoNumber).showResult();
    result.forEach((x) => Console.print(x.matchNumberInfo.MESSAGE(x.matchCount)));
    this.printProFit(result);
  }

  printProFit(profitList) {
    const profitFigure = new Profit([this.money, profitList]).calculateProfit();
    Console.print(PRINT_MESSAGE.PROFIT(profitFigure));
    this.gameEnd();
  }

  gameEnd() {
    Console.close();
  }
}

new App().play();

module.exports = App;
