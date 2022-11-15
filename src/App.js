const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
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
    if (+price % Lotto.LOTTO_PRICE) {
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
    Console.print(`\n${this.price / Lotto.LOTTO_PRICE}개를 구매했습니다.`);
    this.lottos.forEach((lotto) => {
      lotto.sort((a, b) => a - b);
      Console.print(`[${lotto.join(', ')}]`);
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

  calculateResult(lottos) {
    const result = [0, 0, 0, 0, 0];

    lottos.forEach((lotto) => {
      const count = this.lottoMachine.getMatchedCount(lotto);

      if (count === 5 && this.lottoMachine.isBonusMatched(lotto)) {
        result[3] += 1;
      } else if (count > 2) {
        result[count - 3] += 1;
      }
    });

    return result;
  }

  getProfit(result) {
    return (
      Math.round(
        (result.reduce((total, count, i) => total + count * Lotto.AWARD[i], 0) /
          this.price) *
          10000
      ) / 100
    );
  }

  printResult() {
    const result = this.calculateResult(this.lottos);

    Console.print('\n당첨 통계');
    Console.print('---');
    [
      '3개 일치',
      '4개 일치',
      '5개 일치',
      '5개 일치, 보너스 볼 일치',
      '6개 일치',
    ].forEach((stat, i) => {
      Console.print(
        `${stat} (${Lotto.AWARD[i].toLocaleString()}원) - ${result[i]}개`
      );
    });

    Console.print(`총 수익률은 ${this.getProfit(result)}%입니다.`);

    Console.close();
  }
}

module.exports = App;
