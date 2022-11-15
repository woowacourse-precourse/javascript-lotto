const { Console } = require("@woowacourse/mission-utils");
const { MESSAGES, LOTTO_RANK, LOTTO_PRIZE } = require("./Constants/Constants");
const Validation = require("./Validation");
const LottoGameOperator = require("./LottoGameOperator");
const LottoStats = require("./LottoStats");

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
      this.#bonusNumber,
      this.#purchaseAmount
    );
  }

  calculateTotalProfit(lottoList, winningNumbers, bonusNumber, purchaseAmount) {
    lottoList.map((lottoNumber) => {
      const result = this.compareLottoNumbers(
        lottoNumber.getLottoNumbers(),
        winningNumbers,
        bonusNumber
      );

      this.#lottoRanking[result] += 1;
    });
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
}

module.exports = LottoGame;
