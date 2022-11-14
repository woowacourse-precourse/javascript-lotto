const { Console } = require("@woowacourse/mission-utils");
const {
  GAME_MESSAGE,
  ERROR_MESSAGE,
  LOTTO_VALUE,
} = require("./constants/index");
const Lotto = require("./Lotto");
const {
  isNumberType,
  isThousandUnits,
  isValuesNumberType,
  isValuesValidRange,
  isValuesValidLength,
  inputUserValue,
  printMessage,
  generateRandomNumbers,
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
        this.inputBonusNumber();
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
      }

      this.inputBonusNumber();
    });
  }

  isWinningNumbersValid(winningNumbersList) {
    if (!isValuesNumberType(winningNumbersList)) {
      throw ERROR_MESSAGE.TYPE_ERROR;
    }

    if (!isValuesValidRange(winningNumbersList)) {
      throw ERROR_MESSAGE.RANGE_ERROR;
    }

    if (!isValuesValidLength(winningNumbersList)) {
      throw ERROR_MESSAGE.WINNER_NUMBERS_LENGTH_ERROR;
    }
  }

  inputBonusNumber() {
    inputUserValue(GAME_MESSAGE.INPUT_BONUS_NUMBER, (bonusNumber) => {
      if (this.isBonusNumberValid(bonusNumber)) {
        this.#bonusNumber = bonusNumber;
        console.log(this.#bonusNumber);
      }
    });
  }

  isBonusNumberValid(bonusNumber) {
    if (!isNumberType(bonusNumber)) {
      throw ERROR_MESSAGE.TYPE_ERROR;
    }

    if (!isValuesValidRange([bonusNumber])) {
      throw ERROR_MESSAGE.RANGE_ERROR;
    }
  }
}

module.exports = LottoGame;
