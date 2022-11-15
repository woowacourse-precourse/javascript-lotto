const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const { RANK, MESSAGE, ERROR_MESSAGE } = require('./utils/CONSTANT');
const { countTickets, generateRandomNumbers, profitRate } = require('./utils/lottery');
const { convertNumberToComma } = require('./utils/string');
const { validateNumbers, validateNumber } = require('./utils/validation');

class App {
  #paid;

  #answerNumbers;

  #bonusNumber;

  #tickets = [];

  #totalResults;

  play() {
    this.inputMoney();
  }

  inputMoney() {
    MissionUtils.Console.readLine(`${MESSAGE.inputMoney}\n`, (answer) => {
      const money = Number(answer);
      this.#paid = money;
      this.generateTickets();
    });
  }

  generateTickets() {
    const money = this.#paid;
    const ticketsCount = countTickets(money);
    for (let i = 0; i < ticketsCount; i += 1) {
      this.#tickets.push(new Lotto(generateRandomNumbers().sort((a, b) => a - b)));
    }
    MissionUtils.Console.print(`\n${this.#tickets.length}${MESSAGE.paid}`);
    this.#tickets.map((ticket) => MissionUtils.Console.print(`[${ticket.getTicketNumbers().join(', ')}]`));
    this.setLottoNumbers();
  }

  setLottoNumbers() {
    MissionUtils.Console.readLine(`\n${MESSAGE.inputNumbers}\n`, (answer) => {
      const numbers = answer.split(',').map((i) => Number(i));
      validateNumbers(numbers.sort((a, b) => a - b));
      this.#answerNumbers = numbers;
      this.setBonusNumber();
    });
  }

  setBonusNumber() {
    MissionUtils.Console.readLine(`\n${MESSAGE.inputBonusNumber}\n`, (answer) => {
      const bonus = Number(answer);
      if (this.#answerNumbers.includes(bonus)) {
        throw new Error(`[ERROR] ${ERROR_MESSAGE.duplicated}`);
      }
      validateNumber(bonus);
      this.#bonusNumber = bonus;
      this.calculateTickets();
    });
  }

  calculateTickets() {
    MissionUtils.Console.print(`\n${MESSAGE.calculateTickets}\n---`);
    this.#totalResults = this.#tickets
      .map((ticket) => ticket.calculateNumbers(this.#answerNumbers, this.#bonusNumber));
    let rewards = 0;
    RANK.forEach((rank) => {
      const count = this.#totalResults.filter((result) => result === rank.rank).length;
      MissionUtils.Console.print(`${rank.hit}${MESSAGE.hit}${rank.bonus ? MESSAGE.bonus : ''} (${convertNumberToComma(rank.money)}원) - ${count}개`);
      rewards += rank.money * count;
    });
    this.calculateProfits(rewards);
  }

  calculateProfits(rewards) {
    MissionUtils.Console.print(`${MESSAGE.profitPrefix}${convertNumberToComma(profitRate(rewards, this.#paid))}${MESSAGE.profitPostfix}`);
    this.destroyGame();
  }

  destroyGame() {
    MissionUtils.Console.close();
  }
}

module.exports = App;
