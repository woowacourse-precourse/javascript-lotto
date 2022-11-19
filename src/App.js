const { Console } = require("@woowacourse/mission-utils");
const Money = require("./Money");
const UserLotto = require("./UserLotto");
const Lotto = require("./Lotto");
const BonusNumber = require("./BonusNumber");
const LottoResult = require("./LottoResult");
const ProfitResult = require("./ProfitResult");

const INPUT_MONEY_MESSAGE = "구입금액을 입력해 주세요.\n";
const INPUT_WIN_LOTTO_MESSAGE = "\n당첨 번호를 입력해 주세요.\n";
const INPUT_BONUS_NUMBER_MESSAGE = "\n보너스 번호를 입력해 주세요.\n";

class App {

  constructor() {
    this.UserLotto;
    this.Money;
    this.Lotto;
    this.BonusNumber;
    this.LottoResult;
    this.ProfitResult;
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine(INPUT_MONEY_MESSAGE, (money) => {
      this.Money = new Money(money);
      this.buyLotto();
    });
  }
  
  buyLotto() {
    const numOfLotto = this.Money.getNumOfLotto();
    this.UserLotto = new UserLotto(numOfLotto);
    this.inputWinLotto();
  }

  inputWinLotto() {
    Console.readLine(INPUT_WIN_LOTTO_MESSAGE, (winLotto) => {
      let lotto = winLotto.split(',');
      for(let i = 0; i < lotto.length; i++) {
        lotto[i] = Number(lotto[i]);
      }
      this.Lotto = new Lotto(lotto);
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine(INPUT_BONUS_NUMBER_MESSAGE, (bonusNumber) => {
      const winLotto = this.Lotto.getWinLotto();
      this.BonusNumber = new BonusNumber(bonusNumber, winLotto);
      this.deriveLottoResult();
    });
  }

  deriveLottoResult() {
    const numOfLotto = this.Money.getNumOfLotto();
    const userLotto = this.UserLotto.getUserLotto();
    const winLotto = this.Lotto.getWinLotto();
    const bonusNumber = this.BonusNumber.getBonusNumber();
    this.LottoResult = new LottoResult(numOfLotto, userLotto, winLotto, bonusNumber);
    this.deriveProfitResult();
  }

  deriveProfitResult() {
    const lottoPrizeResult = this.LottoResult.getLottoPrizeResult();
    const money = this.Money.getMoney();
    this.ProfitResult = new ProfitResult(lottoPrizeResult, money);
    this.endLotto();
  }

  endLotto() {
    Console.close();
  }
}

module.exports = App;
