const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const UI = require('./UI');
const WinningTicket = require('./WinningTicket');
const { LOTTO, PRIZE, INPUT, PRINT } = require('./Constants');
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
    this.#lottoCount = 0;
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
      LOTTO.start,
      LOTTO.end,
      LOTTO.length,
    );
    lotto = lotto.sort((currentNumber, nextNumber) => {
      return currentNumber - nextNumber;
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
      this.#revenue += PRIZE[key].revenue * value;
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
    ui.print(PRINT.analysis);
    ui.print(PRINT.divideLine);
    LOTTO.resultPrintOrder.forEach((order) => {
      ui.print(`${PRIZE[order].message} - ${this.#result[order]}개`);
    });
  }

  #matchLotto() {
    this.#lottos.forEach((lotto) => {
      const matchCount = lotto.countMatchNumbers(
        this.#winningTicket.getWinningNumbers(),
        this.#winningTicket.getBonusNumber(),
      );

      if (matchCount >= LOTTO.minimumMatchCount || matchCount === '5B') {
        this.#result[matchCount] += 1;
      }
    });
  }

  #getBonusNumber() {
    ui.input(`${INPUT.bonusNumber}\n`, (bonusNumber) => {
      const bonusNumberInput = Number(bonusNumber);
      this.#winningTicket.setBonusNumber(bonusNumberInput);
      this.#matchLotto();
      this.#printAnalysis();
      this.#printRevenuePercentage();
      ui.end();
    });
  }

  #getWinningNumber() {
    ui.input(`${INPUT.winningNumber}\n`, (winningNumbers) => {
      const winningNumberInput = winningNumbers.split(',').map(Number);
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
    ui.input(`${INPUT.money}\n`, (money) => {
      this.#money = new Money(money);
      this.#lottoCount = this.#money.getMoneyDivideByPrice(LOTTO.price);
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
