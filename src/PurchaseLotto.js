const MissionUtils = require('@woowacourse/mission-utils');
const GenreateLotto = require('./GenerateLotto');

class PurchaseLotto {
  totalTicketNumbers = 0;

  purchasedLottoTickets = [];

  constructor(userMoneyInput) {
    this.userMoneyInputExceptionHandler(userMoneyInput);
    this.totalTicketNumbers = +(userMoneyInput) / 1000;
    this.setPurchasedLottoTickets();
    this.printPurchaseHistory();
  }

  userMoneyInputExceptionHandler(userMoneyInput) {
    const VALID_INPUT_REGEX = /^[\d]+$/;
    const IS_VALID_NUMBER = VALID_INPUT_REGEX.test(userMoneyInput) && userMoneyInput[0] !== '0';
    if (!IS_VALID_NUMBER) {
      throw new Error('[ERROR] 올바른 입력이 아닙니다.');
    }
    // Total price to purchase lotto must be divisible by 1000
    // Below codes also can catch the case that (total price to purchase lotto) < 1000
    const IS_DIVISIBLE = !(+(userMoneyInput) % 1000);
    if (!IS_DIVISIBLE) {
      throw new Error('[ERROR] 1000원 단위의 금액을 입력해야 합니다.');
    }
  }

  setPurchasedLottoTickets() {
    const GENERTATE_LOTTO = new GenreateLotto();
    GENERTATE_LOTTO.generateLottoTickets(this.totalTicketNumbers);
    this.purchasedLottoTickets = GENERTATE_LOTTO.lottoTickets;
  }

  printPurchaseHistory() {
    const INFORM_PURCHASE_HISTORY = `\n${this.totalTicketNumbers}개를 구매했습니다.`;
    MissionUtils.Console.print(INFORM_PURCHASE_HISTORY);

    const printNumbers = (lotto) => {
      const LOTTO_NUMBERS = lotto.join(', ');
      MissionUtils.Console.print(`[${LOTTO_NUMBERS}]`);
    };

    this.purchasedLottoTickets.forEach(printNumbers);
  }
}

module.exports = PurchaseLotto;
