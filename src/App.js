const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  getCount() {
    Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
      this.lottoCount = input / 1000;
    });
  }

  generateLottos() {
    const { lottoCount } = this;
    let lottos = [];

    while (lottos.length < lottoCount) {
      let numbers = Random.pickUniqueNumbersInRange(1, 45, 6);

      lottos.push(numbers.sort((num1, num2) => num1 - num2));
    }
    this.lottos = lottos;
  }

  printLottos() {
    const { lottoCount, lottos } = this;

    Console.print(`${lottoCount}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(lotto);
    });
  }

  play() {}
}

module.exports = App;
