const MissionUtils = require("@woowacourse/mission-utils");

class LottoManager {
  #winningNumbers;
  #bonusNumber;
  
  constructor() {
    // this.#winningNumbers = [];
    // this.#bonusNumber = 0;
  }

  start() {
    this.inputWinningNumbers();
  }

  inputWinningNumbers() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', (winningNumbers) => {
      winningNumbers = winningNumbers.split(',');
      this.#winningNumbers = winningNumbers.map((idx) => Number(idx));
      console.log(this.#winningNumbers);
    });
  }
}

const lottoManager = new LottoManager();
lottoManager.start();

module.exports = LottoManager;
