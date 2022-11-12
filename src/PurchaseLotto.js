const MissionUtils = require('@woowacourse/mission-utils');

class PurchaseLotto {
  totalTicketNumbers = 0;

  purchasedLottoNumbers = [];

  constructor(userMoneyInput) {
    this.userMoneyInputExceptionHandler(userMoneyInput);
    this.totalTicketNumbers = +(userMoneyInput) / 1000;
    this.setPurchasedLottoNumbers();
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

  setPurchasedLottoNumbers() {
    for (let count = 0; count < this.totalTicketNumbers; count += 1) {
      const LOTTO_NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      // Sort by increasing order
      LOTTO_NUMBERS.sort((a, b) => a - b);
      this.purchasedLottoNumbers.push(LOTTO_NUMBERS);
    }
  }

  printPurchaseHistory() {
    const INFORM_PURCHASE_HISTORY = `\n${this.totalTicketNumbers}개를 구매했습니다.`;
    MissionUtils.Console.print(INFORM_PURCHASE_HISTORY);

    const printNumbers = (lotto) => {
      const LOTTO_NUMBERS = lotto.join(', ');
      MissionUtils.Console.print(`[${LOTTO_NUMBERS}]`);
    };

    this.purchasedLottoNumbers.forEach(printNumbers);
  }

  get PurchasedLottoNumbers() {
    return this.purchasedLottoNumbers;
  }
}

module.exports = PurchaseLotto;
