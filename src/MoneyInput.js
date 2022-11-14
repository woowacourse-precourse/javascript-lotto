const LottoNumbers = require("./LottoNumbers");

const {
  CONSOLE_UTIL,
  THOUSAND,
  ERROR_MESSAGES,
  INPUT_MONEY_MESSAGE,
  NUMBER_OF_TICKETS_MESSAGE,
} = require("./Constants");

const { NOT_MULTIPLES_OF_THOUSAND } = ERROR_MESSAGES;

class MoneyInput {
  constructor() {
    this.userMoney = 0;
    this.numberOfTickets = 0;
  }

  buyLotteryTickets() {
    CONSOLE_UTIL.readLine(INPUT_MONEY_MESSAGE, (userMoney) => {
      this.vaildateMoney(userMoney);
    });
  }

  vaildateMoney(userMoney) {
    if (userMoney % THOUSAND !== 0 || userMoney < THOUSAND) {
      throw new Error(NOT_MULTIPLES_OF_THOUSAND);
    }
    this.userMoney = userMoney;
    this.printNumberOfTickets(userMoney);
  }

  printNumberOfTickets(userMoney) {
    this.numberOfTickets = userMoney / THOUSAND;
    CONSOLE_UTIL.print(`\n${this.numberOfTickets}${NUMBER_OF_TICKETS_MESSAGE}`);

    new LottoNumbers(this.userMoney, this.numberOfTickets).makeTickets();
  }
}

module.exports = MoneyInput;
