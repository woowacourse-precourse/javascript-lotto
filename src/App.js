const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto')
const { isLengthError, isDuplicate } = require("./utils");


class App {
  inputMoney = 0
  numberOfLotto;
  myLottos = [];
  luckyNumbers = [];
  bonusNumber;
  resultMap = {
    firstPlace: 0,
    secondPlace: 0,
    thirdPlace: 0,
    fourthPlace: 0,
    fifthPlace: 0,
  };
  yield = 0;

  play() {
    this.pay();
    this.draw();
  }

  pay() {
    Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
      this.inputMoney = input;
      this.numberOfLotto = Number(input) / 1000;
      this.publish();
    });
  }

  publish() {
    Console.print(`\n${this.numberOfLotto}개를 구매했습니다.`);
    for(let i = 0; i < this.numberOfLotto; i++) {
      const lotto = new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6))
      this.myLottos.push(lotto);
    }
    this.printLottos();
    this.draw();
    return;
    
  }

  printLottos() {
    this.myLottos.map(myLotto => {
      Console.print(myLotto.getNumbers());
    })
    return;
  }

  validate(numbers) {
    if (isLengthError(numbers)) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }

    if (isDuplicate(numbers)) {
      throw new Error("[ERROR] 당첨 번호는 중복이 없어야 합니다.");
    }
  }

  draw() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (input) => {
      this.luckyNumbers = input.split(",").map(Number);
      this.validate(this.luckyNumbers)
      this.setBonus();
    });
    return;
  }
  setBonus() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (input) => {
      this.bonusNumber = Number(input)
      this.winning();
    });

    return;
  }

  winning () {
    this.myLottos.map(myLotto => {
      myLotto
        .setNumberOfMatches(this.luckyNumbers)
        .setIsBonus(this.bonusNumber);

      if (myLotto.numberOfMatches === 3) {
        this.resultMap.fifthPlace += 1;
      } else if (myLotto.numberOfMatches === 4) {
        this.resultMap.fourthPlace += 1;
      } else if (myLotto.numberOfMatches === 5) {
        this.resultMap.thirdPlace += 1;
      } else if (myLotto.numberOfMatches === 5 && myLotto.isBonus) {
        this.resultMap.secondPlace += 1;
      } else if (myLotto.numberOfMatches === 6) {
        this.resultMap.firstPlace += 1;
      }


    })
    this.getYield();
    this.printResult();
    return;

  }
  
  printResult () {
    Console.print("\n당첨통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${this.resultMap.fifthPlace}개`);
    Console.print(`4개 일치 (50,000원) - ${this.resultMap.fourthPlace}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.resultMap.thirdPlace}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.resultMap.secondPlace}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.resultMap.firstPlace}개`);
    Console.print(`총 수익률은 ${this.yield / this.inputMoney * 100}%입니다.`);

    Console.close();
  }

  getYield() {
    this.yield = 
      (this.resultMap.fifthPlace * 5000)
      + (this.resultMap.fourthPlace * 50000)
      + (this.resultMap.thirdPlace * 1500000)
      + (this.resultMap.secondPlace * 30000000)
      + (this.resultMap.firstPlace * 2000000000)
  }
}

const app = new App();
app.play();

module.exports = App;
