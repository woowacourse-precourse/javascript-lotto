const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  LOTTO_PRICE = 1000;
  price = 0;
  lottos = [];
  lottoMachine;

  play() {
    this.purchaseLottos();
  }

  validate(price) {
    if (!/^[0-9]+$/.test(price)) {
      throw new TypeError('[ERROR] 금액은 숫자만 입력할 수 있습니다.');
    }
    if (+price % this.LOTTO_PRICE) {
      throw new RangeError(
        '[ERROR] 금액은 1,000원 단위로 나누어 떨어져야 합니다.'
      );
    }
  }

  purchaseLottos() {
    Console.readLine('구입금액을 입력해 주세요.\n', (price) => {
      this.validate(price);
      this.price = price;
      Array.from({ length: this.price / 1000 }).forEach(() => {
        this.lottos = [...this.lottos, Lotto.issueLotto()];
      });
      this.printLottos();
    });
  }

  printLottos() {
    Console.print(`\n${this.price / this.LOTTO_PRICE}개를 구매했습니다.`);
    this.lottos.forEach((lotto) => {
      lotto.sort((a, b) => a - b);
      Console.print('[' + lotto.join(', ') + ']');
    });
    this.setWinning();
  }

  setWinning() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (numbers) => {
      this.lottoMachine = new Lotto(numbers.split(',').map(Number));

      Console.readLine('\n보너스 번호를 입력해 주세요.\n', (number) => {
        this.lottoMachine.bonus = +number;
      });
    });
  }
}

module.exports = App;
