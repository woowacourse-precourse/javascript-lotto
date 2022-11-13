const Lotto = require('../src/Lotto');
const { Random, Console } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.lottoList = [];
    this.winningLotto = [];
    this.bonusLotto = 0;
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
    this.inputLotto();
  }
  inputLotto() {
    Console.readLine('\n당첨 번호를 입력해주세요.\n', (input) => {
      this.winningLotto = input.split(',').map(Number);
      new Lotto(this.winningLotto);
      this.inputBonus();
    });
  }
  inputBonus() {
    Console.readLine('\n보너스 번호를 입력해주세요.\n', (input) => {
      this.bonusLotto = parseInt(input);
      this.validBonus(this.bonusLotto);
    });
  }
  validBonus(bonusLotto) {
    if (bonusLotto < 1 && bonusLotto > 45) {
      throw new Error('로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
    if (this.winningLotto.includes(bonusLotto)) {
      throw new Error('당첨 번호와 중복되지 않은 숫자여야 합니다.');
    }
  }
}

const app = new App();
app.play();

module.exports = App;
