const ConsoleWork = require('./ConsoleWork');
const Message = require('./Message');
const RandomWork = require('./RandomWork');
const LottoMain = require('./LottoMain');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.checkErrorMoneyInput(numbers);
    this.#numbers = numbers;
  }

  startGame() {
    ConsoleWork.print(`\n${this.#numbers / 1000}${Message.PURCHASE_MESSAGE}.`);
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
    const lotto = RandomWork.makeRandom(1, 45, 6);
    lotto.sort((a, b) => a - b);
    return lotto;
  }

  printLotttoList(lottoList) {
    const forPrint = this.makeLottoListForPrint(lottoList);
    for (let i = 0; i < lottoList.length; i++) {
      ConsoleWork.print(`[${forPrint[i]}]`);
    }
  }

  makeLottoListForPrint(lottoList) {
    let result = lottoList.map((x) => [...x]); // 2중 배열인 lottoList를 깊은 복사
    for (let i = 0; i < result.length; i++) {
      for (let j = 1; j < 6; j++) {
        result[i][j] = ' ' + result[i][j];
      }
    }
    return result;
  }

  takePrizeNumber(lottoList) {
    ConsoleWork.takeInput(
      `\n${Message.PRIZENUMBER_MESSAGE}\n`,
      function (prize) {
        checkErrorPrizeInput(prize);
        LottoMain.takeBonus(lottoList, prize);
      }
    );
  }

  checkErrorMoneyInput(money) {
    if (money % 1000 !== 0) {
      throw new Error(Message.ERROR_MONEY);
    }
  }
}

function checkErrorPrizeInput(prize) {
  const prizeArrayWithNumberType = prize.split(',').map(Number);
  if (
    !prize.includes(',') ||
    prize.split(',').length !== 6 ||
    prizeArrayWithNumberType.every((number) => number < 46) == false ||
    prizeArrayWithNumberType.every((number) => 0 < number) == false
  ) {
    throw new Error(Message.ERROR_PRIZE);
  }
}

module.exports = Lotto;
