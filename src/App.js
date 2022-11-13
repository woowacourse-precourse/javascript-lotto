const { Console } = require("@woowacourse/mission-utils");
const WinnerNumber = require("./WinnerNumber");
const MatchingNumber = require("./MatchingNumber");
const ProfitRate = require("./ProfitRate.");
const { LOTTO_RANGE, ERROR_MESSAGE, INPUT_MESSAGE, OUTPUT_MESSAGE } = require("./constants");
const Payment = require("./domain/Payment");

class App {
  constructor() {
    this.totalLottoNumber = [];
    this.winnerNumber = [];
    this.payMoney = 0;
    this.bonusNumber = 0;
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine(INPUT_MESSAGE.paymentAmount, (money) => {
      const lottoTickets = money / LOTTO_RANGE.pricePerLotto;

      this.payMoney = money;
      this.totalLottoNumber = new Payment(this.payMoney).getLottoNumber(lottoTickets);

      Console.print(OUTPUT_MESSAGE.amountLotto(lottoTickets));
      this.inputWinnerNumber();
    });
  }

  inputWinnerNumber() {
    Console.readLine(INPUT_MESSAGE.winnerNumber, (number) => {
      this.winnerNumber = new WinnerNumber(number).getNumberWithoutSpace();
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine(INPUT_MESSAGE.bonusNumber, (number) => {
      this.bonusNumber = number.replace(/\s/g, "").split(",");
      this.validateInputBonusNumber(this.bonusNumber);
      this.loadMatchingNumberAboutLotto();
    });
  }

  validateInputBonusNumber(number) {
    if (number < 1 || number > 45 || !new RegExp("^[0-9]+$").test(number)) {
      throw new Error(ERROR_MESSAGE.lottoRange);
    }
  }

  loadMatchingNumberAboutLotto() {
    Console.print(OUTPUT_MESSAGE.lottoResultAlarm);
    const matchingNumber = new MatchingNumber(
      this.totalLottoNumber,
      this.winnerNumber,
      this.bonusNumber
    );
    const lottoResult = matchingNumber.getResultOfThreeToFiveMatchingNumbers();
    matchingNumber.printLottoResult(lottoResult);
    this.loadLottoProfitRate(lottoResult);
  }

  loadLottoProfitRate(lottoResult) {
    const lottoProfitRate = new ProfitRate(lottoResult, this.payMoney).getProfitRate();
    Console.print(OUTPUT_MESSAGE.profitRate(lottoProfitRate));
    Console.close();
  }
}

const app = new App();
app.play();
module.exports = App;
