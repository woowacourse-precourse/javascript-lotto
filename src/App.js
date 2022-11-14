const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const UI = require('./UI');
const Validation = require('./Validation');
const {
  LOTTO_END,
  LOTTO_PRICE,
  LOTTO_START,
  REVENUE,
  LOTTO_NUMBER_COUNT,
  MINIMUM_MATCH_COUNT,
  INPUT,
} = require('./Constants');
const Money = require('./Money');

const ui = new UI();
const validation = new Validation();

class App {
  #money;
  #lottoCount;
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

  #validateWinningNumbers() {
    try {
      validation.checkArrayLength(this.#winningNumber, LOTTO_NUMBER_COUNT);
      validation.checkDuplication(this.#winningNumber);
      this.#winningNumber.forEach((number) => {
        validation.checkPositiveInteger(number);
        validation.checkNumberIncludeInRange(number, LOTTO_START, LOTTO_END);
      });
    } catch (error) {
      ui.printError(error);
    }

    return true;
  }

  #validateBonusNumber() {
    try {
      validation.checkPositiveInteger(this.#bonusNumber);
      validation.checkNumberIncludeInRange(
        this.#bonusNumber,
        LOTTO_START,
        LOTTO_END,
      );
      validation.checkDuplication([...this.#winningNumber, this.#bonusNumber]);
    } catch (error) {
      ui.printError(error);
    }

    return true;
  }

  #publishLotto() {
    let lotto = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO_START,
      LOTTO_END,
      LOTTO_NUMBER_COUNT,
    );
    lotto = lotto.sort((a, b) => {
      return a - b;
    });
    this.#lottos.push(new Lotto(lotto));
    return lotto;
  }

  #printLotto() {
    ui.print(`${this.#lottoCount}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();
      ui.print(`[${lottoNumbers.join(', ')}]`);
    });
  }

  #getRevenue() {
    Object.entries(this.#result).forEach(([key, value]) => {
      this.#revenue += REVENUE[key].revenue * value;
    });
    const revenuePercentage = (this.#revenue / this.#money.getMoney()) * 100;
    const roundNumber = Math.round(revenuePercentage * 10) / 10;
    return roundNumber;
  }

  #printRevenuePercentage() {
    const revenuePercentage = this.#getRevenue();
    ui.print(`총 수익률은 ${revenuePercentage}%입니다.`);
  }

  #printAnalysis() {
    ui.print('당첨 통계');
    ui.print('---');
    const orders = [3, 4, 5, '5B', 6];
    orders.forEach((order) => {
      ui.print(`${REVENUE[order].message} - ${this.#result[order]}개`);
    });
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
    ui.input(`${INPUT.BONUS_NUMBER}\n`, (bonusNumber) => {
      this.#bonusNumber = Number(bonusNumber);

      if (this.#validateBonusNumber(bonusNumber)) {
        this.#matchLotto();
        this.#printAnalysis();
        this.#printRevenuePercentage();
        ui.end();
      }
    });
  }

  #getWinningNumber() {
    ui.input(`${INPUT.WINNING_NUMBER}\n`, (winningNumber) => {
      this.#winningNumber = winningNumber.split(',').map(Number);
      if (this.#validateWinningNumbers()) this.#getBonusNumber();
    });
  }

  #startLotto() {
    for (let count = 0; count < this.#lottoCount; count += 1) {
      this.#publishLotto();
    }

    this.#printLotto();
    this.#getWinningNumber();
  }

  #getMoney() {
    ui.input(`${INPUT.MONEY}\n`, (money) => {
      this.#money = new Money(money);
      this.#lottoCount = this.#money.getMoneyDivideByPrice(LOTTO_PRICE);
      this.#startLotto();
    });
  }

  play() {
    this.#getMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
