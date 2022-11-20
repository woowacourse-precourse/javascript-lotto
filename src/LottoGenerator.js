const { Console } = require('@woowacourse/mission-utils');
const { LOTTO_MSG } = require('./constants/lotto.constants');

const Lotto = require('./Lotto');
const BonusValidation = require('./validation/BonusValidation');

class LottoGenerator {
  static getWinnerNumbers(nextStep) {
    Console.readLine(LOTTO_MSG.INPUT_LOTTO_NUMBERS, (userInput) => {
      const winnerLotto = userInput.split(',').map((number) => Number(number));
      const winnerNumbers = new Lotto(winnerLotto).getNumbers();
      // this.bonusNumber = this.getBonusNumber;
      nextStep(winnerNumbers);
    });
  }
  static getBonusNumber(winnerNumbers, nextStep) {
    Console.readLine(LOTTO_MSG.INPUT_BONUS_NUMBERS, (userInput) => {
      const bonusNumber = Number(userInput);
      LottoGenerator.validateBonus(winnerNumbers, bonusNumber);
      nextStep(bonusNumber);
    });
  }
  static validateBonus(winnerNumbers, bonusNumber) {
    BonusValidation.isInteger(bonusNumber);
    BonusValidation.isOutOfRange(bonusNumber);
    BonusValidation.hasOverlapNumbers(winnerNumbers, bonusNumber);
  }
}

module.exports = LottoGenerator;
