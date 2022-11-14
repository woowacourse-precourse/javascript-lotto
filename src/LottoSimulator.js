const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto.js');
const { validateMoney, validateBonusNumber, getLottoRanking } = require('./Utils.js');
const { LOTTO_PRICE, LOTTO_PRIZE } = require('./Constants.js');

class LottoSimulator {
  #money = 0;
  #profit = 0;
  #lottos = [];
  #winningNumbers;
  #bounsNumber;
  #result;

  start() {
    Console.readLine('구입금액을 입력해 주세요.', input => {
      validateMoney(input);
      this.#money = Number(input);
    });

    this.buyingLotto();
  }

  buyingLotto() {
    for (let money = this.#money; money >= LOTTO_PRICE; money -= LOTTO_PRICE) {
      this.#lottos.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
    }

    this.printLottos();
  }

  printLottos() {
    Console.print(`${this.#lottos.length}개를 구매했습니다.`);
    this.#lottos.forEach(lotto => lotto.print());

    this.setWinningNumbers();
  }

  setWinningNumbers() {
    Console.readLine('당첨 번호를 입력해 주세요.', input => {
      const numbers = input.split(',').map(Number);
      this.#winningNumbers = new Lotto(numbers).getNumbers();
    });

    this.setBonusNumber();
  }

  setBonusNumber() {
    Console.readLine('보너스 번호를 입력해 주세요.', input => {
      validateBonusNumber(input, this.#winningNumbers);
      this.#bounsNumber = Number(input);
    });

    this.calculateResult();
  }

  calculateResult() {
    const result = [0, 0, 0, 0, 0];
    this.#lottos.forEach(lotto => {
      const rank = getLottoRanking(lotto.getNumbers(), this.#winningNumbers, this.#bounsNumber);
      if (rank > 0) {
        result[rank - 1] += 1;
      }
    });

    this.#result = result;
    this.calculateProfits();
  }

  calculateProfits() {
    let sum = 0;
    Object.values(LOTTO_PRIZE).forEach((prize, idx) => {
      if (this.#result[idx] > 0) {
        sum += prize * this.#result[idx];
      }
    });

    this.#profit = ((sum / this.#money) * 100).toFixed(1);
    this.printResult();
  }

  printResult() {
    const str = [
      '당첨 통계\n---',
      `3개 일치 (${LOTTO_PRIZE.FIFTH.toLocaleString('ko-KR')}원) - ${this.#result[4]}개`,
      `4개 일치 (${LOTTO_PRIZE.FOURTH.toLocaleString('ko-KR')}원) - ${this.#result[3]}개`,
      `5개 일치 (${LOTTO_PRIZE.THIRD.toLocaleString('ko-KR')}원) - ${this.#result[2]}개`,
      `5개 일치, 보너스 볼 일치 (${LOTTO_PRIZE.SECOND.toLocaleString('ko-KR')}원) - ${this.#result[1]}개`,
      `6개 일치 (${LOTTO_PRIZE.FIRST.toLocaleString('ko-KR')}원) - ${this.#result[0]}개`,
      `총 수익률은 ${this.#profit}%입니다.`,
    ].join('\n');

    Console.print(str);
    Console.close();
  }
}

module.exports = LottoSimulator;
