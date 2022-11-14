const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto')
const { validator } = require("./utils");

const {FORMULA,UNITS, MESSAGE, ERROR_MESSAGE} = require('./constants')

class App {
  inputMoney = 0
  numberOfLotto = 0;
  myLottos = [];
  luckyNumbers = [];
  bonusNumber;
  revenue = 0;
  profit = 0;
  winningMap = {
    firstPlace: {
      count: 0,
      WINNING_AMOUNT: 2000000000
    },
    secondPlace: {
      count: 0,
      WINNING_AMOUNT: 30000000
    },
    thirdPlace: {
      count: 0,
      WINNING_AMOUNT: 1500000
    },
    fourthPlace: {
      count: 0,
      WINNING_AMOUNT: 50000
    },
    fifthPlace: {
      count: 0,
      WINNING_AMOUNT: 5000
    },
  };

  play() {
    this.pay();
    this.setLuckyNumbers();
  }

  pay() {
    Console.readLine(MESSAGE.GUIDE_INPUT, (input) => {
      this.inputMoney = Number(input);

      if (validator.isNotRightPay(this.inputMoney)) {
        throw new Error(ERROR_MESSAGE.PAY_AMOUNT);
      }

      this.numberOfLotto = this.inputMoney / UNITS.LOTTO_PRICE;
      this.publish();
    });
  }

  publish() {
    Console.print(MESSAGE.GUIDE_NUMBER_OF_LOTTO(this.numberOfLotto));
    for(let i = 0; i < this.numberOfLotto; i++) {
      const lotto = new Lotto(Random.pickUniqueNumbersInRange(
        UNITS.MIN, 
        UNITS.MAX, 
        UNITS.LIMIT_LOTTO
      ));
      this.myLottos.push(lotto);
    }
    this.printLottos();
    this.setLuckyNumbers();
    return;
  }

  printLottos() {
    this.myLottos.map(myLotto => {
      Console.print(myLotto.getNumbers());
    })
    return;
  }

  validate(luckyNumbers, bonusNumber) {
    if (validator.isLengthError(luckyNumbers)) {
      throw new Error(ERROR_MESSAGE.LENGTH_OF_LUCKY_NUMBERS);
    }
    if (validator.isDuplicate(luckyNumbers)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_OF_LUCKY_NUMBERS);
    }
    if (validator.isNotRightBonus(luckyNumbers, bonusNumber)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_OF_BONUS_NUMBER);
    }
    if (validator.isDigitError(luckyNumbers)) {
      throw new Error(ERROR_MESSAGE.DIGIT_OF_LOTTO);
    }
    if (validator.isDigitError([bonusNumber])) {
      throw new Error(ERROR_MESSAGE.DIGIT_OF_LOTTO);
    }
  }

  setLuckyNumbers() {
    Console.readLine(MESSAGE.REQUEST_LUCKY_NUMBERS, (input) => {
      this.luckyNumbers = input.split(",").map(Number);
      this.setBonusNumber();
    });

    return;
  }

  setBonusNumber() {
    Console.readLine(MESSAGE.REQUEST_BONUS_NUMBER, (input) => {
      this.bonusNumber = Number(input)
      this.validate(this.luckyNumbers, this.bonusNumber)
      this.winning();
    });

    return;
  }

  winning () {
    this.myLottos.map(myLotto => {
      let numberOfMatch = myLotto.countNumberOfMatches(this.luckyNumbers);
      let isBonus = myLotto.isBonus(this.bonusNumber);
      if (numberOfMatch === 3) {
        this.winningMap.fifthPlace.count += 1;
      } else if (numberOfMatch === 4) {
        this.winningMap.fourthPlace.count += 1;
      } else if (numberOfMatch === 5 && !isBonus) {
        this.winningMap.thirdPlace.count += 1;
      } else if (numberOfMatch === 5 && isBonus) {
        this.winningMap.secondPlace.count += 1;
      } else if (numberOfMatch === 6) {
        this.winningMap.firstPlace.count += 1;
      }
    })

    this.calculateRevenue();
    this.calculateProfit();
    this.printResult();
    return;

  }

  calculateRevenue() {
    for (let [rank, pair] of Object.entries(this.winningMap)) {
      this.revenue += (pair.count * pair.WINNING_AMOUNT)
    }
  }

  calculateProfit() {
    this.profit = FORMULA.PROFIT(this.revenue, this.inputMoney)
  }

  printResult () {
    Console.print(MESSAGE.WINNING_STATS(this.winningMap, this.profit))
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
