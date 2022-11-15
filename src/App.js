const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js")
const Messages = require("./Messages.js")
const Errors = require("./Error.js")

class App {
  constructor() {
    this.Lotto() = new Lotto()
    this.raffleNumber = [];
  }
  play() {
    MissionUtils.Console.readLine(Messages.INPUT_MONEY, (money) => {
      this.inputNumber()
      this.inputIsValid(money)
      this.createRandomNumber(money)
    });
  }

  inputIsValid(money) {
    if (money % 1000 != 0) {
      throw Errors.UNIT_ERROR;
    }
  }
  inputNumber() {
    MissionUtils.Console.readLine(Messages.INPUT_NUMBER, (numbers) => {
      this.winNumber(numbers)
    });
  }
  inputBonusNumber() {
    MissionUtils.Console.readLine(Notice.INPUT_BONUSNUMBER, (numbers) => {
      this.Lotto.bonusIsValid(numbers)
      this.bonusnumber = numbers
      this.checkNumber()
    });
  }
  winNumbers(numbers) {
    numbers = numbers.split(',')
    this.numbersRange(numbers)
    this.Lotto.validate(numbers)
    this.winNumber = numbers
    this.checkNumber()
    this.inputBonusNumber()
  }
  createRandomNumber(number) {
    const lottoLength = money / 1000;
    MissionUtils.Console.print(lottoLength + Messages.BUY_LOTTO)

    for (let i = 0; i < lottoLength; i++) {
      let randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      MissionUtils.Console.print(`[${randomNumber.join(',')}]`);
      this.Lotto.validate(randomNumber);
      this.raffleNumber.push(randomNumber)
    }
  }
  numbersRange(numbers) {
    for (let i in numbers) {
      numbers[i] = parseInt(numbers[i])
    }
    const max = Math.max(...numbers)
    const min = Math.min(...numbers)

    this.Lotto.rangeIsValid(max, min)
  }
  checkNumber() {
    console.log(this.raffleNumber)

    for (let i = 0; i < this.raffleNumber.length; i++) {
      let winningNumber = this.raffleNumber[i].filter(x => this.Winnumber.includes(x))
      console.log(winningNumber)
    }
  }
}

const app = new App();
app.play();

module.exports = App;