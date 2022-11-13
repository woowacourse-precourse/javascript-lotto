const { Console } = require('@woowacourse/mission-utils');
const Player = require('./Player');

class App {
  constructor() {
    this.player = new Player();
    this.winNumbers = [];
  }

  play() {
    this.askForPayment();
  }

  askForPayment() {
    Console.print('구입금액을 입력해 주세요.');
    Console.readLine('', (input) => {
      const money = Number(input);
      this.player.buyLottos(money);
      this.printPlayerLottos();
    });
  }

  printPlayerLottos() {
    const lottoCount = this.player.spentMoney / 1000;

    Console.print('');
    Console.print(`${lottoCount}개를 구매했습니다.`);

    this.player.lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers();
      const lottoMessage = `[${numbers.join(', ')}]`;

      Console.print(lottoMessage);
    });

    this.askWinNumbers();
  }

  askWinNumbers() {
    Console.print('');
    Console.print('당첨번호를 입력해주세요.');
    Console.readLine('', (input) => {
      this.winNumbers = input.split(',').map(Number);
    });
  }
}

module.exports = App;
