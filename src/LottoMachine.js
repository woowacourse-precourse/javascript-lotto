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
    let winningNumbers = [];

    this.#console.readLine('당첨 번호를 입력해 주세요.\n', (rawWinningNumbers) => {
      this.#validateRawWinningNumbers(rawWinningNumbers);
      winningNumbers = rawWinningNumbers.split(',');
      winningNumbers = winningNumbers.map((number) => parseInt(number));
      this.#validateWinningNumbers(winningNumbers);
    });

    this.#console.close();
    return winningNumbers;
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
    let bonusNumber;
    this.#console.readLine('보너스 번호를 입력해주세요.\n', (takenBonusNumber) => {
      this.#validateBonusNumber(takenBonusNumber, winningNumbers);
      bonusNumber = parseInt(takenBonusNumber);
    });
    this.#console.close();
    return bonusNumber;
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
