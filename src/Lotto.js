const { Console, Random } = require('@woowacourse/mission-utils');
const { MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, LOTTO_LENGTH } = require('./settings');
const Message = require('./Message');
const ErrorHandling = require('./ErrorHandling');

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers, '로또 번호는');
    this.#numbers = numbers;
  }

  static validate(numbers, messageSubject) {
    const { handleException, checkIsNaturalNumber, checkIsLottoNumberInRange } = ErrorHandling;

    const lottoLength = numbers.length;
    const isLengthInvalid = lottoLength !== LOTTO_LENGTH;
    const isDuplicate = lottoLength !== new Set(numbers).size;

    handleException(isLengthInvalid, `${messageSubject} ${LOTTO_LENGTH}개여야 합니다.`);
    handleException(isDuplicate, `${messageSubject} 중복되지 않는 숫자여야 합니다.`);

    numbers.forEach((number) => {
      checkIsNaturalNumber(number, messageSubject);
      checkIsLottoNumberInRange(number, messageSubject);
    });
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
