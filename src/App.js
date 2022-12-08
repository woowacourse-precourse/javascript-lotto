const Lotto = require("./service/Lotto");
const Purchase = require("./service/Purchase");
const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGES } = require("./constants/constants");

class App {
  cost;
  lottoNumbers;
  winningNumbers;
  bonusNumber;

  play() {
    this.purchaseLotto();
  }

  purchaseLotto() {
    Console.readLine(GAME_MESSAGES.ASK_TO_PAY, (cost) => {
      this.lottoNumbers = new Purchase(cost);
      this.cost = cost;

      this.getWinningNum();
    });
  }

  getWinningNum() {
    Console.readLine(
      GAME_MESSAGES.ASK_FOR_WINNING_NUMBERS,
      (winningNumbers) => {
        const temp = [];

        if (winningNumbers.includes(","))
          winningNumbers.split(",").map((num) => temp.push(Number(num)));
        else winningNumbers.split("").map((num) => temp.push(Number(num)));

        this.winningNumbers = temp;
        Console.print(this.winningNumbers);

        this.getBonusNum();
      }
    );
  }
  getBonusNum() {
    Console.readLine(GAME_MESSAGES.ASK_FOR_BONUS_NUMBER, (bonusNumber) => {
      this.bonusNumber = Number(bonusNumber);
      Console.print(this.bonusNumber);

      this.getLottoResult();
    });
  }

  getLottoResult() {
    const lottoResult = new Lotto(
      this.lottoNumbers,
      this.winningNumbers,
      this.bonusNumber,
      this.cost
    );
  }
}

module.exports = App;
