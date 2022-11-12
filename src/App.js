const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto')

class App {
  numberOfLotto;
  myLottos = [];
  luckyNumbers = [];
  bonusNumber;

  play() {
    this.pay();
    this.draw();
  }

  pay() {
    Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
      this.numberOfLotto = Number(input) / 1000;
      this.publish();
    });
  }

  publish() {
    Console.print(`\n${this.numberOfLotto}개를 구매했습니다.`);
    for(let i = 0; i < this.numberOfLotto; i++) {
      const lotto = new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6))
      this.myLottos.push(lotto.getNumbers());
    }
    this.printLottos();
    this.draw();
  }

  printLottos() {
    this.myLottos.map(myLotto => {
      Console.print(myLotto);
    })
  }

  draw() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (input) => {
      this.luckyNumbers = input.split(",").map(Number);
      this.setBonus();

    });
  }
  setBonus() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (input) => {
      this.bonusNumber = Number(input)
      console.log(this.luckyNumbers, this.bonusNumber)
    });
  }
  
}

const app = new App();
app.play();

module.exports = App;
