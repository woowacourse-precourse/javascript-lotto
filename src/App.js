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

}
const a = new App;
a.play();
module.exports = App;
