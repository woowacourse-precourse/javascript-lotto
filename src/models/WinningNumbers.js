const Lotto = require("../Lotto");

class WinningNumbers {
  #winningNumbers;

  constructor(input) {
    this.validWinningNumbers(input);
  }

  get winningNumbers() {
    return this.#winningNumbers;
  }

  winningNumbersConverter(numbers) {
    const winningNumberArray = numbers.split(',').map((item) => parseInt(item));
    return winningNumberArray;
  }

  validWinningNumbers(input) {
    this.validFormat(input);

    const validLotto = new Lotto(this.winningNumbersConverter(input));
    this.#winningNumbers = validLotto.lottoNumber;
  }

  validFormat(input) {
    const reg = /^([0-9]+,){5}([0-9]+){1}$/;
    if (!reg.test(input)) {
      throw new Error('[ERROR] 당첨 숫자 입력의 형식이 잘못되었습니다.');
    }
  }
}

module.exports = WinningNumbers;