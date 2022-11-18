const { Console } = require("@woowacourse/mission-utils");
const {
  MESSAGES,
  LOTTO_RANK,
  LOTTO_PRIZE,
  LOTTO_STATS_MESSAGES,
} = require("./Utils/Constants");
const Validation = require("./Validation");
const LottoGameOperator = require("./LottoGameOperator");

class LottoGame {
  #purchaseAmount;
  #LottoList;
  #winningNumbers;
  #bonusNumber;
  #lottoRanking;

  constructor() {
    this.operator = new LottoGameOperator();
    this.#lottoRanking = {
      boom: 0,
      firstPlace: 0,
      secondPlace: 0,
      thirdPlace: 0,
      fourthPlace: 0,
      fifthPlace: 0,
    };
  }

  play() {
    this.purchaseLotto();
  }

  purchaseLotto() {
    Console.readLine(MESSAGES.ENTER_PURCHASE_AMOUNT, (amount) => {
      Validation.validatePurchaseAmount(amount);
      this.#purchaseAmount = Number(amount);
      const lottoQuantity = this.operator.countLottoTickets(
        this.#purchaseAmount
      );

      this.operator.showLottoQuantity(lottoQuantity);
      this.#LottoList = this.operator.createLottoNumbers(lottoQuantity);
      this.makeWinningNumbers();
    });
  }

  makeWinningNumbers() {
    Console.readLine(MESSAGES.INPUT_WINNING_NUMBERS, (input) => {
      const winningNumbersArray = input.split(",");
      Validation.validateWinningNumbers(winningNumbersArray);

      this.#winningNumbers = winningNumbersArray.map(Number);
      this.makeBonusNumber();
    });
  }

  makeBonusNumber() {
    Console.readLine(MESSAGES.INPUT_BONUS_NUMBER, (input) => {
      const inputBonusNumber = Number(input);

      Validation.validateBonusNumber(Number(input), this.#winningNumbers);
      this.#bonusNumber = inputBonusNumber;

      return this.showLottoStats();
    });
  }

  showLottoStats() {
    Console.print(MESSAGES.LOTTO_STATS);

    this.calculateTotalProfit(
      this.#LottoList,
      this.#winningNumbers,
      this.#bonusNumber
    );
  }

  calculateTotalProfit(lottoList, winningNumbers, bonusNumber) {
    lottoList.map((lottoNumber) => {
      const result = this.compareLottoNumbers(
        lottoNumber.getLottoNumbers(),
        winningNumbers,
        bonusNumber
      );

      this.#lottoRanking[result] += 1;
    });

    this.calculateTotalPrizeMoney();
  }

  compareLottoNumbers(lottoNumber, winningNumbers, bonusNumber) {
    const ranking = lottoNumber.filter((number) =>
      winningNumbers.includes(number)
    );

    switch (ranking.length) {
      case LOTTO_RANK.firstPlace:
        return "firstPlace";
      case (LOTTO_RANK.secondPlace, LOTTO_RANK.thirdPlace):
        if (lottoNumber.includes(bonusNumber)) return "secondPlace";
        return "thirdPlace";
      case LOTTO_RANK.fourthPlace:
        return "fourthPlace";
      case LOTTO_RANK.fifthPlace:
        return "fifthPlace";
      default:
        return "boom";
    }
  }

  calculateTotalPrizeMoney() {
    let totalPrizeMoney = 0;
    for (const [prize, count] of Object.entries(this.#lottoRanking)) {
      let prizeMoney = LOTTO_PRIZE[prize] * count;
      totalPrizeMoney += prizeMoney;
    }
    const totalProfitRate = this.calculateTotalProfitRate(totalPrizeMoney);

    this.showLottoResult(totalProfitRate);
  }

  calculateTotalProfitRate(totalPrizeMoney) {
    const totalProfitRate = (
      (totalPrizeMoney / this.#purchaseAmount) *
      100
    ).toFixed(1);
    return totalProfitRate;
  }

  showLottoResult(totalProfitRate) {
    Console.print(`
    3개 일치 (5,000원) - ${this.#lottoRanking["fifthPlace"]}개\n
    4개 일치 (50,000원) - ${this.#lottoRanking["fourthPlace"]}개\n
    5개 일치 (1,500,000원) - ${this.#lottoRanking["thirdPlace"]}개\n
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${
      this.#lottoRanking["secondPlace"]
    }개\n
    6개 일치 (2,000,000,000원) - ${this.#lottoRanking["firstPlace"]}개\n`);
    this.showTotalProfitRate(totalProfitRate);

    this.endGame();
  }

  showTotalProfitRate(totalProfitRate) {
    Console.print(LOTTO_STATS_MESSAGES.TOTAL_PROFIT_RATE(totalProfitRate));
  }

  endGame() {
    Console.close();
  }
}

module.exports = LottoGame;
