const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const { printError, isPositiveInteger, isDuplicated } = require('./Utils');
const { LOTTO_END, LOTTO_PRICE, LOTTO_START, REVENUE } = require('./Constants');
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
      6,
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
    Object.keys(this.#result).forEach((rank) => {
      this.#revenue += REVENUE[rank].revenue * this.#result[rank];
    });
    const revenuePercentage = (this.#revenue / this.#money) * 100;
    const roundNumber = Math.round(revenuePercentage * 10) / 10;
    return roundNumber;
  }

  #printResult() {
    ui.print('당첨 통계');
    ui.print('---');
    ui.print(`3개 일치 (5,000원) - ${this.#result[3]}개`);
    ui.print(`4개 일치 (50,000원) - ${this.#result[4]}개`);
    ui.print(`5개 일치 (1,500,000원) - ${this.#result[5]}개`);
    ui.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#result['5B']}개`,
    );
    ui.print(`6개 일치 (2,000,000,000원) - ${this.#result[6]}개`);
    ui.print(`총 수익률은 ${this.#getRevenue()}%입니다.`);
    MissionUtils.Console.close();
  }

  #matchLotto() {
    this.#lottos.forEach((lotto) => {
      const matchCount = lotto.countMatchNumbers(
        this.#winningNumber,
        this.#bonusNumber,
      );
      if (matchCount >= 3) {
        this.#result[matchCount] += 1;
      }
    });
  }

  #getBonusNumber() {
    ui.input('보너스 번호를 입력해 주세요.\n', (bonusNumber) => {
      if (!isPositiveInteger(bonusNumber)) {
        printError('양의 정수만 입력해주세요.');
      }
      this.#bonusNumber = bonusNumber;
      this.#matchLotto();
      this.#printResult();
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
