const Lotto = require("./service/Lotto");
const Purchase = require("./service/Purchase");
const WinningNumbers = require("./service/WinningNumbers");
const BonusNumber = require("./service/BonusNumber");
const Result = require("./service/Result");
const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGES } = require("./constants/constants");

class App {
  play = () => {
    Console.readLine(GAME_MESSAGES.ASK_TO_PAY, (price) => {
      this.purchaseLotto(price);
    });
  };

  purchaseLotto = (priceStr) => {
    const price = Purchase.refinePrice(priceStr);
    Purchase.validatePrice(price);
    Purchase.setPrice(price);

    const amountOfLotto = Purchase.getAmountOfLotto(price);
    Purchase.setAmountOfLotto(amountOfLotto);

    this.generateLottoNumbers(amountOfLotto);
  };

  generateLottoNumbers = (amountOfLotto) => {
    const lottoNumbers = Lotto.generateAllLottoNumbers(amountOfLotto);
    Lotto.setLottoNumbers(lottoNumbers);

    Console.readLine(GAME_MESSAGES.ASK_FOR_WINNING_NUMBERS, (winningNums) =>
      this.getWinningNumbers(winningNums)
    );
  };

  getWinningNumbers = (numbersStr) => {
    const numbersArr = WinningNumbers.refineWinningNumbers(numbersStr);
    WinningNumbers.validateWinningNumbers(numbersArr);
    WinningNumbers.setWinningNumbers(numbersArr);

    Console.readLine(GAME_MESSAGES.ASK_FOR_BONUS_NUMBER, (bonusNum) =>
      this.getBonusNumber(bonusNum)
    );
  };

  getBonusNumber = (numberStr) => {
    const number = BonusNumber.refineBonusNumber(numberStr);
    BonusNumber.validateBonusNumber(number);
    BonusNumber.setBonusNumber(number);

    this.getLottoResult();
  };

  getLottoResult = () => {
    const resultMessage = Result.generateTotalResult();
    this.end(resultMessage);
  };

  end = (result) => {
    Console.print(result + GAME_MESSAGES.GAME_OVER);
  };
}

const app = new App();
app.play();

module.exports = App;
