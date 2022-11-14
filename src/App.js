const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto')
const { isLengthError, isDuplicate, isNotRightBonus } = require("./utils");

const {UNITS, MESSAGE, ERROR_MESSAGE} = require('./constants')

class App {
  inputMoney = 0
  numberOfLotto;
  myLottos = [];
  luckyNumbers = [];
  bonusNumber;
  
  resultMap = {
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

  revenue = 0;
  profit = 0;

  play() {
    this.pay();
    this.setLuckyNumbers();
  }

  pay() {
    Console.readLine(MESSAGE.GUIDE_INPUT, (input) => {
      this.inputMoney = input;
      this.numberOfLotto = Number(this.inputMoney) / UNITS.LOTTO_PRICE;
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
    if (isLengthError(luckyNumbers)) {
      throw new Error(ERROR_MESSAGE.LENGTH_OF_LUCKY_NUMBERS);
    }

    if (isDuplicate(luckyNumbers)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_OF_LUCKY_NUMBERS);
    }

    if (isNotRightBonus(luckyNumbers, bonusNumber)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_OF_BONUS_NUMBER);
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
        this.resultMap.fifthPlace.count += 1;
      } else if (numberOfMatch === 4) {
        this.resultMap.fourthPlace.count += 1;
      } else if (numberOfMatch === 5 && !isBonus) {
        this.resultMap.thirdPlace.count += 1;
      } else if (numberOfMatch === 5 && isBonus) {
        this.resultMap.secondPlace.count += 1;
      } else if (numberOfMatch === 6) {
        this.resultMap.firstPlace.count += 1;
      }
    })
    this.calculateRevenue();
    this.calculateProfit();
    this.printResult();
    return;

  }

  calculateRevenue() {
    this.revenue = 
      (this.resultMap.fifthPlace.count * this.resultMap.fifthPlace.WINNING_AMOUNT)
      + (this.resultMap.fourthPlace.count * this.resultMap.fourthPlace.WINNING_AMOUNT)
      + (this.resultMap.thirdPlace.count * this.resultMap.thirdPlace.WINNING_AMOUNT)
      + (this.resultMap.secondPlace.count * this.resultMap.secondPlace.WINNING_AMOUNT)
      + (this.resultMap.firstPlace.count * this.resultMap.firstPlace.WINNING_AMOUNT)
  }

  calculateProfit() {
    this.profit = this.revenue / this.inputMoney * UNITS.PERCENTAGE
  }

  printResult () {
    Console.print(MESSAGE.WINNING_STATS(this.resultMap, this.profit))
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
