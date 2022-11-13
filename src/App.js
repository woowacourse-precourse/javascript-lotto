const Lotto = require('../src/Lotto');
const { Random, Console } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.lottoList = [];
  }
  play() {
    this.inputMoney();
  }
  inputMoney() {
    Console.readLine('구입금액을 입력해주세요.\n', (cost) => {
      if (cost % 1000 !== 0) {
        throw new Error('[ERROR] 1,000원 단위 금액을 입력해주세요.');
      }
      this.countLotto(cost);
    });
  }
  countLotto(input) {
    const cntLotto = input / 1000;
    Console.print(`\n${cntLotto}개를 구매했습니다.`);
    this.printLotto(cntLotto);
  }
  printLotto(cntLotto) {
    for (let i = 0; i < cntLotto; i++) {
      this.lottoList.push(Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
      Console.print(this.lottoList[i]);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
