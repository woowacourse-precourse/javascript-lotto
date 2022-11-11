const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const { printError, isPositiveInteger, isDuplicated } = require('./Utils');
const { LOTTO_END, LOTTO_PRICE, LOTTO_START, REVENUE } = require('./Constants');

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
      printError('금액을 양수로 입력해주세요.');
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
    MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
    for (let count = 0; count < lottoCount; count += 1) {
      const lotto = this.#publishLotto();
      MissionUtils.Console.print(lotto);
    }
  }

  #storeResult(matchCount) {
    if (matchCount !== 5) {
      this.#result[matchCount] += 1;
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
    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');
    // FIXME: 객체는 순서대로 안 나옴 - 순서대로 나오게 할 것
    Object.keys(this.#result).forEach((rank) => {
      MissionUtils.Console.print(
        `${REVENUE[rank].message} - ${this.#result[rank]}개`,
      );
    });
    MissionUtils.Console.print(`총 수익률은 ${this.#getRevenue()}%입니다.`);
    MissionUtils.Console.close();
  }

  #matchLotto() {
    this.#lottos.forEach((lotto) => {
      const matchCount = lotto.countMatchNumbers(this.#winningNumber);
      if (matchCount >= 3) {
        this.#storeResult(matchCount);
      }
    });
  }

  #getBonusNumber() {
    MissionUtils.Console.readLine(
      '보너스 번호를 입력해 주세요.\n',
      (bonusNumber) => {
        this.#bonusNumber = bonusNumber;
        this.#matchLotto();
        this.#printResult();
      },
    );
  }

  #getWinningNumber() {
    MissionUtils.Console.readLine(
      '당첨 번호를 입력해 주세요.\n',
      (winningNumber) => {
        if (isDuplicated(winningNumber)) {
          printError('당첨 번호가 중복되었습니다.');
        }
        this.#winningNumber = winningNumber;
        this.#getBonusNumber();
      },
    );
  }

  #startLotto() {
    this.#printLotto();
    this.#getWinningNumber();
  }

  #getMoney() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
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
