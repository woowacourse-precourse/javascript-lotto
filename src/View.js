const { INPUT_MESSAGE, PRINT_MESSAGE, LOTTO_INFO, LIBRARY_URL } = require('./constant');
const { Console } = require(LIBRARY_URL);
const BonusLotto = require('./BonusLotto');
const Lotto = require('./Lotto');
const Profit = require('./Profit');
const PurChase = require('./Purchase');
const Statistics = require('./Statistics');

class View {
  constructor() {
    this.amount;
    this.lotteryTickets;
    this.fullLottoNumbers;
    this.inputLottoAmount();
  }

  inputLottoAmount() {
    Console.readLine(INPUT_MESSAGE.BUY, (amount) => {
      const generateTickets = new PurChase(amount).showLotteryTickets();
      this.amount = amount;
      this.lotteryTickets = generateTickets;
      this.printLotteryTickets(this.lotteryTickets);
    });
  }

  printLotteryTickets(lotteryTickets) {
    Console.print(PRINT_MESSAGE.PURCHASENUMBER(lotteryTickets.length));
    lotteryTickets.forEach((lottery) => Console.print(PRINT_MESSAGE.LOTTERY(lottery)));
    this.inputLottoNumbers();
  }

  inputLottoNumbers() {
    Console.readLine(INPUT_MESSAGE.LOTTONUMBERS, (lottoNumbers) => {
      const lottoNumbersList = lottoNumbers.split(LOTTO_INFO.SPLITUNIT);
      new Lotto(lottoNumbersList);
      this.inputBonusLottoNumbers(lottoNumbersList);
    });
  }

  inputBonusLottoNumbers(lottoNumbersList) {
    Console.readLine(INPUT_MESSAGE.BONUSNUMBERS, (bonusNumber) => {
      const fullNumbers = [lottoNumbersList, bonusNumber];
      this.fullLottoNumbers = new BonusLotto(fullNumbers) ? fullNumbers : '';
      this.printStats();
    });
  }

  printStats() {
    Console.print(PRINT_MESSAGE.WINNING);
    Console.print(PRINT_MESSAGE.DIVIDE);
    const stats = new Statistics(this.fullLottoNumbers, this.lotteryTickets).showMatchResult();
    stats.forEach((result) => Console.print(result.rankMessage(result.matchCount)));
    this.printProFit(stats);
  }

  printProFit(profitList) {
    const profitFigure = new Profit([this.amount, profitList]).calculateProfit();
    Console.print(PRINT_MESSAGE.PROFIT(profitFigure));
    this.gameEnd();
  }

  gameEnd() {
    Console.close();
  }
}

module.exports = View;
