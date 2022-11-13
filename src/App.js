const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  constructor() {
    this.LOTTO_TICKET_PRICE = 1000;
    this.money = 0;
    this.lottoCount = 0;
    this.lottoNumber = [];
    this.winNumber = [];
    this.bonusNumber = [];
    this.winRank = {
      threeMatch: [5000, 0],
      fourMatch: [50000, 0],
      fiveMatch: [1500000, 0],
      fiveBonusMatch: [300000000, 0],
      sixMatch: [2000000000, 0],
    };
  }
  play() {
    this.injectMoney();
  }

  injectMoney() {
    Console.readLine(`구입금액을 입력해 주세요.\n`, money => {
      if (money % 1000 !== 0) {
        throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
      }
      this.lottoCount += Number(money) / this.LOTTO_TICKET_PRICE;
      this.money += Number(money);
      this.makeRandomLottoNumber();
    });
  }

  makeRandomLottoNumber() {
    for (let i = 0; i < this.lottoCount; i++) {
      const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      const updateNumber = [...this.lottoNumber];
      updateNumber.push(lottoNumber.sort((a, b) => a - b));
      this.lottoNumber = updateNumber;
    }
    this.printLotto();
  }

  printLotto() {
    const lottoList = this.lottoNumber
      .map((x, index) => '[' + this.lottoNumber[index].join(', ') + ']')
      .join('\n');
    Console.print(`\n${this.lottoCount}개를 구매했습니다.\n${lottoList}`);
    this.enterWinNumber();
  }

  enterWinNumber() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', input => {
      const inputNumber = input.split(',').map(num => Number(num));
      const lotto = new Lotto(inputNumber);
      lotto.validate(inputNumber);
      this.winNumber = inputNumber;
      this.enterBonusNumber();
    });
  }

  enterBonusNumber() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', input => {
      const inputNumber = Number(input);
      this.bonusNumber.push(inputNumber);
      this.matchLottoNumber();
    });
  }

  matchLottoNumber() {
    for (let i = 0; i < this.lottoNumber.length; i++) {
      let match = 0;
      if (this.lottoNumber[i].includes(this.winNumber[0])) match++;
      if (this.lottoNumber[i].includes(this.winNumber[1])) match++;
      if (this.lottoNumber[i].includes(this.winNumber[2])) match++;
      if (this.lottoNumber[i].includes(this.winNumber[3])) match++;
      if (this.lottoNumber[i].includes(this.winNumber[4])) match++;
      if (this.lottoNumber[i].includes(this.winNumber[5])) match++;
      if (match > 2 && match !== 5) this.setRank(match);
      if (match === 5) this.matchBonusNumber(this.lottoNumber[i]);
    }
  }

  matchBonusNumber(lotto) {
    const fiveMatchLotto = lotto;
    const bonusAndWinNumber = this.winNumber.concat(this.bonusNumber);
    let match = 0;
    for (let i = 0; i < 7; i++) {
      if (fiveMatchLotto.includes(bonusAndWinNumber[i])) match++;
    }
    if (match === 5) this.setRank(5);
    if (match === 6) this.setRank(7);
  }

  setRank(match) {
    if (match === 3) this.winRank.threeMatch[1] += 1;
    if (match === 4) this.winRank.fourMatch[1] += 1;
    if (match === 5) this.winRank.fiveMatch[1] += 1;
    if (match === 6) this.winRank.sixMatch[1] += 1;
    if (match === 7) this.winRank.fiveBonusMatch[1] += 1;
    this.findLottoProfit();
  }

  findLottoProfit() {
    const profit =
      String(
        ((this.winRank.threeMatch[0] * this.winRank.threeMatch[1] +
          this.winRank.fourMatch[0] * this.winRank.fourMatch[1] +
          this.winRank.fiveMatch[0] * this.winRank.fiveMatch[1] +
          this.winRank.sixMatch[0] * this.winRank.sixMatch[1] +
          this.winRank.fiveBonusMatch[0] * this.winRank.fiveBonusMatch[1]) /
          this.money) *
          100,
      ) + '%';
    this.winningStatistics(profit);
  }

  winningStatistics(profit) {
    Console.print(
      `\n당첨 통계\n---\n3개 일치 (5,000원) - ${this.winRank.threeMatch[1]}개\n4개 일치 (50,000원) - ${this.winRank.fourMatch[1]}개\n5개 일치 (1,500,000원) - ${this.winRank.fiveMatch[1]}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.winRank.fiveBonusMatch[1]}개\n6개 일치 (2,000,000,000원) - ${this.winRank.sixMatch[1]}개\n총 수익률은 ${profit}입니다.`,
    );
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
