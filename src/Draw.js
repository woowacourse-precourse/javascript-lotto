const { Console } = require('@woowacourse/mission-utils');

const ERROR_MESSAGE = {
  NOT_6_NUMBERS: '[ERROR] 당첨 번호는 6개여야 합니다.',
  NOT_A_NUMBER: '[ERROR] 당첨/보너스 번호는 숫자여야 합니다.',
  OUT_OF_RANGE: '[ERROR] 당첨/보너스 번호는 1부터 45사이여야 합니다.',
  DUPLICATED: '[ERROR] 당첨/보너스 번호는 중복되지 않아야 합니다.',
};

class Draw {
  getWinningNumber() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (winningNumber) => {
      this.handleWinningNumber(
        winningNumber.split(',').map((number) => Number(number)),
      );
    });
  }

  handleWinningNumber(winningNumber) {
    this.checkWinningNumber(winningNumber);
    this.winningNumber = winningNumber;
    this.getBonusNumber();
  }

  checkWinningNumber(winningNumber) {
    if (winningNumber.length !== 6) {
      throw new Error(ERROR_MESSAGE.NOT_6_NUMBERS);
    } else if (winningNumber.some((number) => Number.isNaN(number))) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    } else if (winningNumber.some((number) => number < 1 || number > 45)) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
    } else if (new Set(winningNumber).size !== 6) {
      throw new Error(ERROR_MESSAGE.DUPLICATED);
    }
  }

  getBonusNumber() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (bonusNumber) => {
      this.handleBonusNumber(Number(bonusNumber));
    });
  }

  handleBonusNumber(bonusNumber) {
    this.checkBonusNumber(bonusNumber);
    this.bonusNumber = bonusNumber;
  }

  checkBonusNumber(bonusNumber) {
    if (Number.isNaN(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    } else if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
    } else if (this.winningNumber.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.DUPLICATED);
    }
  }
}

exports.Draw = Draw;
exports.ERROR_MESSAGE = ERROR_MESSAGE;
