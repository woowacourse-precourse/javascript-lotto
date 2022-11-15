const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const UI = require('./UI');
const WinningTicket = require('./WinningTicket');
const {
  LOTTO_END,
  LOTTO_PRICE,
  LOTTO_START,
  REVENUE,
  LOTTO_NUMBER_COUNT,
  MINIMUM_MATCH_COUNT,
  INPUT,
  PRINT_ORDER,
} = require('./Constants');
const Money = require('./Money');

const ui = new UI();

class App {
  #money;
  #lottoCount;
  #lottos;
  #result;
  #revenue;
  #winningTicket;

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
    this.#winningTicket = new WinningTicket();
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
    PRINT_ORDER.forEach((order) => {
      ui.print(`${REVENUE[order].message} - ${this.#result[order]}개`);
    });
  }

  #matchLotto() {
    this.#lottos.forEach((lotto) => {
      const matchCount = lotto.countMatchNumbers(
        this.#winningTicket.getWinningNumbers(),
        this.#winningTicket.getBonusNumber(),
      );

      if (matchCount >= MINIMUM_MATCH_COUNT || matchCount === '5B') {
        this.#result[matchCount] += 1;
      }
    });
  }

  #getBonusNumber() {
    ui.input(`${INPUT.BONUS_NUMBER}\n`, (bonusNumber) => {
      const bonusNumberInput = Number(bonusNumber);
      this.#winningTicket.setBonusNumber(bonusNumberInput);
      this.#matchLotto();
      this.#printAnalysis();
      this.#printRevenuePercentage();
      ui.end();
    });
  }

  #getWinningNumber() {
    ui.input(`${INPUT.WINNING_NUMBER}\n`, (winningNumbers) => {
      const winningNumberInput = winningNumbers.split(',').map(Number);
      console.log(winningNumberInput);
      this.#winningTicket.setWinningNumbers(winningNumberInput);
      this.#getBonusNumber();
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

module.exports = App;
