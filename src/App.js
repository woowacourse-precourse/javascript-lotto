const { Console } = require('@woowacourse/mission-utils');
const BonusLotto = require('./BonusLotto');
const { RANKING } = require('./constant');
const Lotto = require('./Lotto');
const Profit = require('./Profit');
const PurChase = require('./Purchase');
const Statistics = require('./Statistics');

class App {
  constructor() {
    this.money;
    this.purChaseLotto;
    this.fullLottoNumber;
  }

  play() {
    this.purChaseLotto();
  }

  purChaseLotto() {
    Console.readLine('구입금액을 입력해 주세요.\n', (amount) => {
      const lotteryTickets = new PurChase(amount).showLottoTickets(amount);
      this.money = amount;
      this.purChaseLotto = lotteryTickets;
      this.printLotto(lotteryTickets);
    });
  }

  printLotto(lotteryTickets) {
    Console.print(`${lotteryTickets.length}개를 구매했습니다.`);
    lotteryTickets.forEach((lottery) => Console.print(lottery));
    this.inputLottoNumber();
  }

  inputLottoNumber() {
    Console.readLine('당첨 번호를 입력해 주세요.\n', (lottoInput) => {
      new Lotto(lottoInput);
      Console.readLine('보너스 번호를 입력해 주세요.\n', (bonusInput) => {
        this.fullLottoNumber = new BonusLotto([lottoInput.split(','), bonusInput])
          ? [lottoInput.split(','), bonusInput]
          : '';
        this.printStats();
      });
    });
  }

  printStats() {
    Console.print('당첨 통계');
    Console.print('---');
    const result = new Statistics(this.fullLottoNumber, this.purChaseLotto).showResult();
    const rankKeys = Object.keys(RANKING);
    const profitList = rankKeys.map((rank) => {
      const matchNumberInfo = RANKING[rank];
      const matchNumber = RANKING[rank]['MATCH'];
      const matchCount =
        result[matchNumber] && result[matchNumber]['bonus'] === matchNumberInfo['BONUS']
          ? result[matchNumber]['count']
          : 0;
      Console.print(`${matchNumberInfo['MESSAGE']}${matchCount}${matchNumberInfo['COUNTUNIT']}`);
      return { matchCount, matchMoney: matchNumberInfo['PRICE'] };
    });
    this.printProFit(profitList);
  }

  printProFit(profitList) {
    Console.print(`총 수익률은 ${new Profit([this.money, profitList]).calculateProfit()}% 입니다.`);
  }
}

new App().play();

// module.exports = App;
