const MissionUtils = require("@woowacourse/mission-utils");

class LottoManager {
  #winningNumbers;
  #bonusNumber;
  
  start() {
    this.inputWinningNumbers();
  }

  inputWinningNumbers() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', (winningNumbers) => {
      winningNumbers = winningNumbers.split(',');
      this.#winningNumbers = winningNumbers.map((idx) => Number(idx));
      this.checkInputWinningNumbers();

      this.inputBonusNumber();
      this.checkInputBonusNumber();

    });
  }

  checkInputWinningNumbers() {
    const winningNumbers = new Set(this.#winningNumbers);
    const filteredWinningNumbers = this.filterRange(this.#winningNumbers, 1, 45)
  
    if (this.#winningNumbers.includes(NaN) === true) {
      throw Error("[ERROR] 숫자를 입력해주세요.");
    }

    if (this.#winningNumbers.length !== 6) {
      throw Error("[ERROR] 6개의 당첨 번호를 입력해주세요.");
    }

    if (winningNumbers.size !== 6) {
      throw Error("[ERROR] 당첨 번호를 중복 없이 입력해주세요.");
    }

    if (filteredWinningNumbers.length !== 6) {
      throw Error("[ERROR] 1부터 45사이의 숫자를 입력해주세요.");
    }
  }

  filterRange(arr, a, b) {
    return arr.filter(arr => (arr >= a && arr <= b));
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine('\n보너스 번호를 입력해 주세요.\n', (bonusNumber) => {
      this.#bonusNumber = Number(bonusNumber);
      this.checkInputBonusNumber();
    });
  }

  checkInputBonusNumber() { 
    if (Number.isNaN(this.#bonusNumber) === true) {
      throw Error("[ERROR] 숫자를 입력해주세요.");
    }

    if ((this.#bonusNumber < 1) || (45 < this.#bonusNumber)) {
      throw Error("[ERROR] 1부터 45사이의 숫자를 입력해주세요.");
    }

    if (this.#winningNumbers.includes(this.#bonusNumber)) {
      throw Error("[ERROR] 당첨 번호와 중복되지 않게 입력해주세요.");
    }
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

}

const lottoManager = new LottoManager();
lottoManager.start();

module.exports = LottoManager;
