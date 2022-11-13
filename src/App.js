const { Console } = require('@woowacourse/mission-utils');

const Lotto = require('./Lotto');
const MESSAGE = require('./utils/constants');
const RandomNumbers = require('./RandomNumbers');

class App {
  constructor() {
    this.lottoList = [];
  }

  play() {
    Console.readLine(MESSAGE.PURCHASE_AMOUT, (amount) => {
      this.amount = amount;
      this.#lotteryPurchase(amount);
      this.#inputLotteryWinnerNumber();
    });
  }

  #lotteryPurchase() {
    const lotteryNumber = parseInt(this.amount / 1000);

    this.print(`${lotteryNumber}개를 구매했습니다.`);
    for (let i = 0; i < lotteryNumber; i++) {
      const lotto = new Lotto(RandomNumbers.generate());
      this.lottoList.push(lotto);
    }
  }

  #inputLotteryWinnerNumber() {
    Console.readLine(MESSAGE.WINNING_NUMBER, (numbers) => {
      console.log(numbers);
      this.#parsingStringToArray(numbers);
      this.#inputLotteryBonusNumber();
    });
  }

  #inputLotteryBonusNumber() {
    Console.readLine(MESSAGE.BONUS_NUMBER, (bonusNumber) => {
      console.log(bonusNumber);
    });
  }

  #parsingStringToArray(numbers) {
    this.lotteryWinnerNumber = numbers.split(',').map(Number);
    console.log(this.lotteryWinnerNumber);
  }

  print(message) {
    Console.print(message);
  }
}

const app = new App();
app.play();

module.exports = App;
