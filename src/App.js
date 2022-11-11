const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const { printError, isPositiveInteger, isDuplicated } = require('./Utils');
const {
  LOTTO_END,
  LOTTO_PRICE,
  LOTTO_START,
  REVENUE,
  LOTTO_NUMBER_COUNT,
  MINIMUM_MATCH_COUNT,
} = require('./Constants');
const UI = require('./UI');

const ui = new UI();

class App {
  #money;
  #lottos;
  #winningNumber;
  #bonusNumber;
  #result;
  #revenue;

  constructor() {
    this.#money = 0;
    this.#lottos = [];
    this.#result = {
      3: 0,
      4: 0,
      5: 0,
      '5B': 0,
      6: 0,
    };
    this.#revenue = 0;
  }

  #validate(money) {
    if (!isPositiveInteger(money)) {
      printError('금액을 숫자로 입력해주세요.');
    }
    if (money % LOTTO_PRICE !== 0) {
      printError('1000원 단위로 입력해주세요.');
    }

    return true;
  }

  #publishLotto() {
    let lotto = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO_START,
      LOTTO_END,
      LOTTO_NUMBER_COUNT,
    );
    lotto = lotto.sort(function (a, b) {
      return a - b;
    });
    this.#lottos.push(new Lotto(lotto));
    return lotto;
  }

  #printLotto() {
    const lottoCount = parseInt(this.#money / LOTTO_PRICE, 10);
    ui.print(`${lottoCount}개를 구매했습니다.`);
    for (let count = 0; count < lottoCount; count += 1) {
      const lotto = this.#publishLotto();
      ui.print(`[${lotto.join(', ')}]`);
    }
  }

  #getRevenue() {
    Object.entries(this.#result).forEach(([key, value]) => {
      this.#revenue += REVENUE[key].revenue * value;
    });
    const revenuePercentage = (this.#revenue / this.#money) * 100;
    const roundNumber = Math.round(revenuePercentage * 10) / 10;
    return roundNumber;
  }

  #printResult() {
    ui.print('당첨 통계');
    ui.print('---');
    const orders = [3, 4, 5, '5B', 6];
    orders.forEach((order) => {
      ui.print(`${REVENUE[order].message} - ${this.#result[order]}개`);
    });
    ui.print(`총 수익률은 ${this.#getRevenue()}%입니다.`);
  }

  #matchLotto() {
    this.#lottos.forEach((lotto) => {
      const matchCount = lotto.countMatchNumbers(
        this.#winningNumber,
        this.#bonusNumber,
      );
      if (matchCount >= MINIMUM_MATCH_COUNT || matchCount === '5B') {
        this.#result[matchCount] += 1;
      }
    });
  }

  #getBonusNumber() {
    ui.input('보너스 번호를 입력해 주세요.\n', (bonusNumber) => {
      if (!isPositiveInteger(bonusNumber)) {
        printError('양의 정수만 입력해주세요.');
      }
      this.#bonusNumber = Number(bonusNumber);
      this.#matchLotto();
      this.#printResult();
      ui.end();
    });
  }

  #getWinningNumber() {
    ui.input('당첨 번호를 입력해 주세요.\n', (winningNumber) => {
      this.#winningNumber = winningNumber.split(',').map(Number);
      if (isDuplicated(this.#winningNumber)) {
        printError('당첨 번호가 중복되었습니다.');
      }
      this.#getBonusNumber();
    });
  }

  #startLotto() {
    this.#printLotto();
    this.#getWinningNumber();
  }

  #getMoney() {
    ui.input('구입금액을 입력해 주세요.\n', (money) => {
      if (this.#validate(money)) {
        this.#money = money;
        this.#startLotto();
      }
    });
  }

  play() {
    this.#getMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
