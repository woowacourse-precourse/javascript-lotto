const { LOTTO_PICKER } = require('../constants');
const Io = require('../infrastructure/io');
const { validateWinningNumbers, validateBonuesNumber } = require('../utils/validators/InputValidator');

class LottoPicker {
  static #winnigNumbers = [];
  static #bonusNumber = 0;

  static pickLottoNumbers(callback) {
    LottoPicker.pickWinningNumbers(LOTTO_PICKER.ASK_WINNING_NUMBER, (winningNumbers) => {
      LottoPicker.pickBonusNumber(LOTTO_PICKER.ASK_BONUS_NUMBER, (bonusNumber) => {
        callback({ winningNumbers, bonusNumber });
      });
    });
  }

  static pickWinningNumbers(message, callback) {
    Io.input(message, (inputedWinningNumbers) => {
      validateWinningNumbers(inputedWinningNumbers);
      LottoPicker.#winnigNumbers = LottoPicker.refineInputWinningNumbers(inputedWinningNumbers);
      callback(LottoPicker.#winnigNumbers);
    });
  }

  static pickBonusNumber(message, callback) {
    Io.input(message, (inputedBonusNumber) => {
      validateBonuesNumber(inputedBonusNumber, LottoPicker.#winnigNumbers);
      LottoPicker.#bonusNumber = Number(inputedBonusNumber);
      callback(LottoPicker.#bonusNumber);
    });
  }

  static refineInputWinningNumbers(userInput) {
    return userInput.split(',').map(Number);
  }
}

module.exports = LottoPicker;
