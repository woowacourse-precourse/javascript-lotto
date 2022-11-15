const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Validator = require('./Validator');
const View = require('./View');

class LottoDrawer {
  #result;

  constructor(numbersCount, winnerSelector) {
    this.numbersCount = numbersCount;
    this.winnerSelector = winnerSelector;
    this.validator = new Validator();
  }

  set result(value) {
    this.#result = value;
  }

  get result() {
    return this.#result;
  }

  printWinner() {
    View.print(this.winnerSelector);
    Console.close();
  }

  selectWinner() {
    this.winnerSelector.setWinnerNumber(this.result);
    this.winnerSelector.setResultData();
  }

  setWinnerNumber(input) {
    this.validator.isValidInput(input);

    const winnerNumbers = input.split(',').map(Number);

    this.result = { numbers: new Lotto(winnerNumbers).numbers };
  }

  setBonusNumber() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (input) => {
      Lotto.isValidBonusNumber(input, this.result.numbers);

      const bonus = Number(input);

      this.result = { ...this.result, bonus };
      this.selectWinner();
      this.printWinner();
    });
  }

  run(lottos) {
    this.winnerSelector.setPurchasedLottos(lottos);

    Console.readLine('\n당첨 번호를 입력해 주세요. (,로 구분하여 입력하세요.)\n', (numbers) => {
      this.setWinnerNumber(numbers);
      this.setBonusNumber();
    });
  }
}

module.exports = LottoDrawer;
