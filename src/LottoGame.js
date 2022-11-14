const {
  GAME_MESSAGE,
  ERROR_MESSAGE,
  LOTTO_VALUE,
} = require("./constants/index");
const Lotto = require("./Lotto");
const {
  isNumberType,
  isValidRange,
  isValidUnique,
  isThousandUnits,
  isValuesNumberType,
  isValuesValidRange,
  isValuesValidLength,
  inputUserValue,
  printMessage,
  generateRandomNumbers,
  close,
} = require("./utils/index");

class LottoGame {
  #purchaseAmount;
  #lottoCnt;
  #lottoList;
  #winningNumbers;
  #bonusNumber;

  playLottoGame() {
    inputUserValue(GAME_MESSAGE.INPUT_PURCHASE_AMOUNT, (inputAmount) => {
      if (this.isPurchaseAmountValid(inputAmount)) {
        this.#purchaseAmount = inputAmount;
        this.generateLottoList();
        this.printLottoList();
        this.inputWinningNumbers();
      }
    });
  }

  isPurchaseAmountValid(purchaseAmount) {
    if (!isNumberType(purchaseAmount)) {
      throw ERROR_MESSAGE.TYPE_ERROR;
    }

    if (!isThousandUnits(purchaseAmount)) {
      throw ERROR_MESSAGE.UNIT_ERROR;
    }
    return true;
  }

  generateLottoList() {
    this.#lottoCnt = Math.floor(this.#purchaseAmount / LOTTO_VALUE.UNIT);
    this.#lottoList = [];

    for (let i = 0; i < this.#lottoCnt; i++) {
      this.#lottoList.push(new Lotto(generateRandomNumbers()));
    }
  }

  printLottoList() {
    printMessage(`${this.#lottoCnt}${GAME_MESSAGE.LOTTO_CNT}`);
    this.#lottoList.forEach((lotto) => {
      printMessage(lotto.getLottoNumbers());
    });
  }

  inputWinningNumbers() {
    inputUserValue(GAME_MESSAGE.INPUT_WINNING_NUMBERS, (winningNumbers) => {
      let winningNumbersList = winningNumbers.split(",");

      if (this.isWinningNumbersValid(winningNumbersList)) {
        this.#winningNumbers = winningNumbers;
        this.inputBonusNumber();
      }
    });
  }

  isWinningNumbersValid(winningNumbersList) {
    if (!isValuesValidLength(winningNumbersList)) {
      throw ERROR_MESSAGE.LENGTH_ERROR;
    }

    if (!isValuesNumberType(winningNumbersList)) {
      throw ERROR_MESSAGE.TYPE_ERROR;
    }

    if (!isValuesValidRange(winningNumbersList)) {
      throw ERROR_MESSAGE.RANGE_ERROR;
    }
    return true;
  }

  inputBonusNumber() {
    inputUserValue(GAME_MESSAGE.INPUT_BONUS_NUMBER, (bonusNumber) => {
      if (this.isBonusNumberValid(bonusNumber)) {
        this.#bonusNumber = bonusNumber;
        this.printResult();
      }
    });
  }

  isBonusNumberValid(bonusNumber) {
    if (!isNumberType(bonusNumber)) {
      throw ERROR_MESSAGE.TYPE_ERROR;
    }

    if (!isValidUnique(this.#winningNumbers, bonusNumber)) {
      throw ERROR_MESSAGE.UNIQUE_ERROR;
    }

    if (!isValidRange(bonusNumber)) {
      throw ERROR_MESSAGE.RANGE_ERROR;
    }
    return true;
  }

  countMatchedNumbers(lottoNumbers, winningNumbers) {
    return lottoNumbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  getLottoMatchedResult() {
    return this.#lottoList
      .map((lotto) => [
        this.countMatchedNumbers(lotto.getLottoNumbers(), this.#winningNumbers),
        lotto.getLottoNumbers().includes(Number(this.#bonusNumber)),
      ])
      .filter((num) => num[0] >= LOTTO_VALUE.WINNER_MIN_CNT);
  }

  getLottoResult() {
    const lottoResult = { 3: 0, 4: 0, 5: 0, "5-bonus": 0, 6: 0 };

    this.getLottoMatchedResult().forEach((result) => {
      if (result[0] === 5 && result[1]) {
        lottoResult["5-bonus"] += 1;
        return;
      }
      lottoResult[result[0]] += 1;
    });

    return lottoResult;
  }

  printResult() {
    printMessage(GAME_MESSAGE.LOTTO_RESULT);
    printMessage("---");

    const lottoResult = this.getLottoResult();
    this.printLottoResult(lottoResult);
    this.printEarning(this.getEarningRate(this.calculateEarning(lottoResult)));
  }

  printLottoResult(lottoResult) {
    Object.keys(lottoResult)
      .sort()
      .forEach((result) => {
        switch (result) {
          case "3":
            printMessage(`${GAME_MESSAGE.RANK_FOUR}${lottoResult[result]}개`);
            break;
          case "4":
            printMessage(`${GAME_MESSAGE.RANK_THREE}${lottoResult[result]}개`);
            break;
          case "5":
            printMessage(`${GAME_MESSAGE.RANK_TWO}${lottoResult[result]}개`);
            break;
          case "5-bonus":
            printMessage(
              `${GAME_MESSAGE.RANK_TWO_BONUS}${lottoResult[result]}개`
            );
            break;
          case "6":
            printMessage(`${GAME_MESSAGE.RANK_ONE}${lottoResult[result]}개`);
            break;
        }
      });
  }

  calculateEarning(lottoResult) {
    const priceValues = [
      LOTTO_VALUE.FOUR_PRICE,
      LOTTO_VALUE.THREE_PRICE,
      LOTTO_VALUE.TWO_PRICE,
      LOTTO_VALUE.ONE_PRICE,
      LOTTO_VALUE.TWO_BONUS_PRICE,
    ];
    let earning = 0;

    Object.keys(lottoResult).forEach((result, idx) => {
      earning += priceValues[idx] * lottoResult[result];
    });
    return earning;
  }

  getEarningRate(earning) {
    return ((earning / this.#purchaseAmount) * 100).toFixed(1);
  }

  printEarning(earningRate) {
    printMessage(`${GAME_MESSAGE.EARNING_RATE}${earningRate}%입니다.`);
    close();
  }
}

module.exports = LottoGame;
