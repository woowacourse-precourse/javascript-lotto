const ConsoleWork = require('./ConsoleWork');
const Message = require('./Message');
const RandomWork = require('./RandomWork');
const LottoMain = require('./LottoMain');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateMoney(numbers);
    this.#numbers = numbers;
  }

  startGame() {
    ConsoleWork.print(`\n${this.#numbers / 1000}${Message.PURCHASE_MESSAGE}`);
    const lottoList = this.makeLottoList(this.#numbers / 1000);
    this.printLotttoList(lottoList);
    this.takePrizeNumber(lottoList);
  }

  makeLottoList(numberOfLotto) {
    const result = [];
    for (let i = 0; i < numberOfLotto; i++) {
      const lotto = this.makeOneLotto();
      result.push(lotto);
    }
    return result;
  }

  makeOneLotto() {
    const result = [];
    while (result.length < 6) {
      const number = RandomWork.makeRandom(1, 45);
      if (!result.includes(number)) {
        result.push(number);
      }
    }
    result.sort((a, b) => a - b);
    return result;
  }

  printLotttoList(lottoList) {
    for (let i = 0; i < lottoList.length; i++) {
      ConsoleWork.print(lottoList[i]);
    }
  }

  takePrizeNumber(lottoList) {
    ConsoleWork.takeInput(
      `\n${Message.PRIZENUMBER_MESSAGE}\n`,
      function (prize) {
        LottoMain.takeBonus(lottoList, prize);
      }
    );
  }

  validateMoney(money) {
    if (money % 1000 !== 0) {
      throw new Error(Message.ERROR_MONEY);
    }
  }
}

module.exports = Lotto;
