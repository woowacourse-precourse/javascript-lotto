const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Validator = require('./Validator');

class LottoDrawer {
  #result;

  constructor(numbersCount) {
    this.numbersCount = numbersCount;
    this.validator = new Validator();
  }

  set result(value) {
    this.#result = value;
  }

  get result() {
    return this.#result;
  }

  setLottoWinner(input) {
    this.validator.isValidInput(input);

    const winnerNumbers = input.split(',').map(Number);

    this.result = { numbers: new Lotto(winnerNumbers).numbers };
  }

  setBonusNumber(winner) {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (input) => {
      this.validator.isValidInput(input);
      this.validator.isValidNumber(input);

      const bonus = Number(input);

      Lotto.isValidBonusNumber(bonus, this.result.numbers);
      this.result = { ...this.result, bonus };
      // TODO: 호출위치 변경
      winner.announce(this.result);
    });
  }

  drawLotto(winner) {
    Console.readLine('\n당첨 번호를 입력해 주세요. (,로 구분하여 입력하세요.)\n', (numbers) => {
      this.setLottoWinner(numbers);
      this.setBonusNumber(winner);
    });
  }
}

module.exports = LottoDrawer;
