const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  LOTTO_PRICE = 1000;
  AWARD = [5000, 50000, 1500000, 30000000, 2000000000];
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
        this.printResult();
      });
    });
  }

  printResult() {
    const result = this.lottoMachine.calculateResult(this.lottos);

    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(
      `3개 일치 (${this.AWARD[0].toLocaleString()}원) - ${result[0]}개`
    );
    Console.print(
      `4개 일치 (${this.AWARD[1].toLocaleString()}원) - ${result[1]}개`
    );
    Console.print(
      `5개 일치 (${this.AWARD[2].toLocaleString()}원) - ${result[2]}개`
    );
    Console.print(
      `5개 일치, 보너스 볼 일치 (${this.AWARD[3].toLocaleString()}원) - ${
        result[3]
      }개`
    );
    Console.print(
      `6개 일치 (${this.AWARD[4].toLocaleString()}원) - ${result[4]}개`
    );
    Console.print(`총 수익률은 ${this.getProfit(result)}%입니다.`);

    Console.close();
  }

  getProfit(result) {
    return (
      Math.round(
        (result.reduce((total, count, i) => total + count * this.AWARD[i], 0) /
          this.price) *
          10000
      ) / 100
    );
  }
}

module.exports = App;
