const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto')

class App {
  numberOfLotto;

  play() {
    this.pay();
  }

  pay() {
    Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
      this.numberOfLotto = Number(input) / 1000;
      this.publish();
    });
  }

  publish() {
    Console.print(`${this.numberOfLotto}개를 구매했습니다.`);
    for(let i = 0; i < this.numberOfLotto; i++) {
      const lotto = new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6))
      Console.print(lotto.getNumbers());
    }
  }

  
}

const app = new App();
app.play();

module.exports = App;
