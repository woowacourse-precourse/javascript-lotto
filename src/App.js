const Lotto = require('./Lotto');
const User = require('./User');
const { BUY_LOTTO, WINNING_NUMBERS, BONUS_NUMBER } = require('../constant/constant');
const errorBuyHandling = require('./error/userInputHandling');
const bonusNumberCheck = require('./error/bonusNumber');

class App {
  play() {
    this.userBuyLotto();
    this.userInputLottoNumbers();
    this.userInputBonusNumber();
  }

  userBuyLotto() {
    MissionUtils.Console.readLine(BUY_LOTTO, (buyInput) => {
      errorBuyHandling(buyInput);
      this.user = new User(buyInput);
      this.user.lottoBuy();
    });
  }

  userInputLottoNumbers() {
    MissionUtils.Console.readLine(WINNING_NUMBERS, (lottoNumber) => {
      this.lotto = new Lotto(lottoNumber);
      this.lotto.validate(lottoNumber);
    });
  }

  userInputBonusNumber() {
    MissionUtils.Console.readLine(BONUS_NUMBER, (bonusNumber) => {
      bonusNumberCheck(bonusNumber);
    });
  }

  
}

module.exports = App;
