const Lotto = require('./Lotto');
const LottoList = require('./LottoList');
const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.makeLotto = new LottoList();
  }
  
  play() {
    this.buyLotto();
  }

  buyLotto() {
		Console.readLine("구입금액을 입력해주세요.\n", (amount) => {
      this.amount = Number(amount);
      this.total = this.makeLotto.isValidAmount(this.amount);
      [this.lottoLists, this.stringedLottoLists] = this.makeLotto.makeLottoList(this.total);
      this.makeLotto.printLottoList(this.total, this.stringedLottoLists);
      this.letWinningNumbers();
    });
	}

  letWinningNumbers() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", this.stringToNumbers);
  }

  stringToNumbers = (winningNumbers) => {
    this.winningList = winningNumbers.split(',').map(num => parseInt(num));
    this.startLotto = new Lotto(this.winningList);
    this.startLotto;
    this.letBonusNumber();
  }

  letBonusNumber() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (bonusNum) => {
      this.bonusNum = Number(bonusNum);
      this.startLotto.validateBonus(bonusNum);
      this.makeMatchList();
    });
  }

  makeMatchList() {
    this.match = Array(this.total).fill(0);
    this.bonusMatch = Array(this.total).fill(0);
    for(let i = 0; i < 6; i++) {
      this.compareWinningAndLists(this.winningList[i]);
    }
    console.log('match: ', this.match);
    this.makeMatchResult();
  }

  compareWinningAndLists(num) {
    for(let i = 0; i < this.total; i++) {
      if(this.lottoLists[i].includes(num)) {
        this.match[i] += 1;
      }
      if(this.lottoLists[i].includes(this.bonusNum)) {
        this.bonusMatch[i] = 1;
      }
    }
  }

  makeMatchResult() {
    let list = Array(8).fill(0);
    for(let i = 0; i < this.total; i++) {
      list[this.match[i]] += 1;
      if(this.match[i] === 5 && this.bonusMatch[i] === 1) {
        list[7] += 1;
      }
    }
    this.printResult(list);
  }

  printResult(list) {
    this.list = list;
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${list[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${list[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${list[5]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${list[7]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${list[6]}개`);
    this.printStatistic(list);
  }

  printStatistic(list) {
    const profit = this.calculateProfit(list);
    const profitRate = ((profit / this.amount) * 100).toFixed(1);
    const result = Number(profitRate);
    Console.print(`총 수익률은 ${result}%입니다.`)
    Console.close();
  }

  calculateProfit(list) {
    return(
      list[3] * 5000 +
      list[4] * 50000 +
      list[5] * 1500000 +
      list[6] * 2000000000 +
      list[7] * 30000000
    )
  }
  
}
const a = new App;
a.play();
module.exports = App;
