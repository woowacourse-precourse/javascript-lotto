/* eslint-disable no-shadow */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-restricted-globals */
/* eslint-disable class-methods-use-this */
const MissionUtils = require('@woowacourse/mission-utils');
const {
  TICKET_NUMBER,
  DECIMAL_NUMBER,
  PRICE_PER_TICKET,
} = require('./Constant');
const Lotto = require('./Lotto');
const Bonus = require('./Bonus');

class TicketBox {
  #budget;

  #tickets = [];

  constructor(budget) {
    this.validate(budget);
    this.#budget = parseInt(budget, DECIMAL_NUMBER);
  }

  validate(budget) {
    if (isNaN(budget, DECIMAL_NUMBER)) {
      throw new Error('[ERROR] 숫자를 입력하여 주십시오.');
    }
    if (budget % PRICE_PER_TICKET) {
      throw new Error('[ERROR] 1000 단위로 입력하여 주십시오.');
    }
  }

  get budget() {
    return this.#budget;
  }

  inputBonusCallback(inputBonus) {
    this.bonus = new Bonus(inputBonus, this.lotto.numbers);
    MissionUtils.Console.print(this.bonus.bonusNumber);
    MissionUtils.Console.print(this.tickets);
    MissionUtils.Console.print(this.lotto.numbers);
    MissionUtils.Console.close();
  }

  lottoValidate(input) {
    const commaCount = (input.match(/,/g) || []).length;
    const notNumber = (input) =>
      input.split(',').filter((number) => isNaN(number, DECIMAL_NUMBER)).length;
    const isSpace = (input) => /[\s]/g.test(input);

    if (commaCount !== 5) {
      throw new Error('[ERROR] 당첨 번호를 쉼표(,)로 구분해주세요.');
    }
    if (notNumber(input)) {
      throw new Error('[ERROR] 숫자를 ,로 구분하여 입력하여 주십시오.');
    }
    if (isSpace(input)) {
      throw new Error('[ERROR] 공백없이 입력해주십시오');
    }
  }

  inputLottoCallback(input) {
    this.lottoValidate(input);
    const inputLotto = input
      .split(',')
      .map((number) => parseInt(number, DECIMAL_NUMBER));
    this.lotto = new Lotto(inputLotto);
    MissionUtils.Console.readLine(
      '보너스 번호를 입력해 주세요.\n',
      this.inputBonusCallback.bind(this),
    );
  }

  makeTickets() {
    const ticketCount = this.#budget / PRICE_PER_TICKET;
    while (this.#tickets.length < ticketCount) {
      const ticketNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        TICKET_NUMBER.RANGE_START,
        TICKET_NUMBER.RANGE_END,
        TICKET_NUMBER.COUNT_OF_NUMBER,
      );
      this.#tickets.push(ticketNumbers);
    }
    MissionUtils.Console.print(`\n${ticketCount}개를 구매했습니다.`);

    this.printTickets();

    MissionUtils.Console.readLine(
      '\n당첨 번호를 입력해 주세요.\n',
      this.inputLottoCallback.bind(this),
    );
  }

  get tickets() {
    return this.#tickets;
  }

  printTickets() {
    this.#tickets.forEach((ticket) =>
      MissionUtils.Console.print(`[${ticket.join(', ')}]`),
    );
  }
}

module.exports = TicketBox;
