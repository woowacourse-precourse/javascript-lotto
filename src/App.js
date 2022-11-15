const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require('./Lotto');
const User = require('./User');
const { BUY_LOTTO, WINNING_NUMBERS, BONUS_NUMBER } = require('./constant/constant');
const errorBuyHandling = require('./error/userInputHandling');
const bonusNumberCheck = require('./error/bonusNumber');
const lottoGame = require('./game/lottoGame');

class App {
  constructor() {
    this.user = new User();
  }

  play() {
    this.userBuyLotto();
  }

  userBuyLotto() {
    MissionUtils.Console.readLine(BUY_LOTTO, (buyInput) => {
      errorBuyHandling(buyInput);
      this.user.lottoBuy(buyInput);
      this.userInputLottoNumbers();
    });
  }

  userInputLottoNumbers() {
    MissionUtils.Console.readLine(WINNING_NUMBERS, (lottoNumber) => {
      this.lotto = new Lotto(lottoNumber);
      this.userInputBonusNumber(this.lotto.getNumber());
    });
  }

  userInputBonusNumber(lottoNumber) {
    MissionUtils.Console.readLine(BONUS_NUMBER, (bonusNumber) => {
      bonusNumberCheck(bonusNumber, lottoNumber);
      this.user.saveBonusNumber(bonusNumber);
      this.lottoGameStart(lottoNumber);
    });
  }

  lottoGameStart(lottoNumber) {
    const numbers = lottoNumber;
    const { lottoArray, bonusNumber, userBuyMoney } = this.user;
    lottoGame(numbers, lottoArray, bonusNumber, userBuyMoney);
  }
}

module.exports = App;
