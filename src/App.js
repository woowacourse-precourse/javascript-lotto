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


}
const a = new App;
a.play();
module.exports = App;
