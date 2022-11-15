const MissionUtils = require("@woowacourse/mission-utils");

class LottoMachine {
  #random = MissionUtils.Random;
  #console = MissionUtils.Console;
  
  constructor() {
  }

  generateNumbers() {
    let numbers = this.#random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => {
      return a - b;
    });
  }
  
  takeWinningNumbers() {
    this.#console.readLine('당첨 번호를 입력해 주세요.\n', (rawWinningNumbers) => {
      this.#validateRawWinningNumbers(rawWinningNumbers);
      const winningNumbers = rawWinningNumbers.split(',');
      this.#validateWinningNumbers(winningNumbers);
      return winningNumbers;
    });
    this.#console.close();
  }
  
  #validateRawWinningNumbers(rawWinningNumbers) {
    if (rawWinningNumbers.match(/[ ]/g)) {
      throw new Error('[ERROR] 당첨 번호에는 공백이 없어야 합니다.');
    }
    if (rawWinningNumbers.match(/[^0-9,]/g)) {
      throw new Error('[ERROR] 유효하지 않은 값을 입력하였습니다.');
    }
  }

  #validateWinningNumbers(winningNumbers) {
    if (winningNumbers.length !== 6) {
      throw new Error('[ERROR] 입력한 수가 6개가 아닙니다.');
    }
    winningNumbers.forEach((winningNumber) => {
      if (winningNumber < 1 || winningNumber > 45) {
        throw new Error('[ERROR] 1에서 45까지의 수가 아닌 수를 입력하였습니다.');
      }
    });
  }

  takeBonusNumberExcept(winningNumbers) {
    this.#console.readLine('보너스 번호를 입력해주세요.\n', (bonusNumber) => {
      this.#validateBonusNumber(bonusNumber, winningNumbers);
      return bonusNumber;
    });
    this.#console.close();
  }

  #validateBonusNumber(bonusNumber, winningNumbers) {
    if (bonusNumber.match(/[^0-9]/g)) {
      throw new Error('[ERROR] 보너스 번호는 숫자만 입력해야 합니다.');
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('[ERROR] 보너스 번호는 1에서 45사이의 숫자여야 합니다.');
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복이 되지 않아야 합니다.');
    }
  }
}

module.exports = LottoMachine;
