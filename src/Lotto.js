const { Console, Random } = require('@woowacourse/mission-utils');
const { MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, LOTTO_LENGTH } = require('./settings');
const Message = require('./Message');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  static #issueSingleLotto() {
    const numbers = Random.pickUniqueNumbersInRange(
      MIN_LOTTO_NUMBER,
      MAX_LOTTO_NUMBER,
      LOTTO_LENGTH,
    );

    return new Lotto(numbers).#numbers;
  }

  static issueAllLottos(count) {
    return new Array(count).fill([]).map(() => Lotto.#issueSingleLotto());
  }

  static #printPurchaseLog(count, issuedLottos) {
    let purchaseLog = `\n${count}${Message.PURCHASE}`;

    issuedLottos.forEach((lotto) => {
      purchaseLog += `\n[${lotto.sort((a, b) => a - b).join(', ')}]`;
    });

    Console.print(purchaseLog);
  }

  static issue(count) {
    const issuedLottos = Lotto.issueAllLottos(count);

    Lotto.#printPurchaseLog(count, issuedLottos);

    return issuedLottos;
  }
}

module.exports = Lotto;
