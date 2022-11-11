const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const { printError, isPositiveInteger } = require('./Utils');

const LOTTO_PRICE = 1000;
const LOTTO_START = 1;
const LOTTO_END = 45;
class App {
  #money;
  #lottos;
  #winningNumber;
  #bonusNumber;
  #result;

  constructor() {
    this.#money = 0;
    this.#lottos = [];
    this.#result = {
      '3개 일치 (5000원)': 0,
      '4개 일치 (50,000원)': 0,
      '5개 일치 (1,500,000원)': 0,
      '5개 일치, 보너스 볼 일치 (30,000,000원)': 0,
      '6개 일치 (2,000,000,000원)': 0,
    };
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

  // FIXME: 15줄 아래가 되도록 변경할 것, 보너스 볼 추가할 것
  #storeResult(matchCount) {
    switch (matchCount) {
      case 3:
        this.#result['3개 일치 (5000원)'] += 1;
        break;
      case 4:
        this.#result['4개 일치 (50,000원)'] += 1;
        break;
      case 5:
        this.#result['5개 일치 (1,500,000원)'] += 1;
        break;
      case 6:
        this.#result['6개 일치 (2,000,000,000원)'] += 1;
        break;
      default:
        null;
    }
  }

  #printResult() {
    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');
    Object.keys(this.#result).forEach((rank) => {
      MissionUtils.Console.print(`${rank} - ${this.#result[rank]}개`);
    });
  }

  #matchLotto() {
    this.#lottos.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();
      const matchNumbers = lottoNumbers.filter((number) =>
        this.#winningNumber.includes(number),
      );
      this.#storeResult(matchNumbers.length);
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
