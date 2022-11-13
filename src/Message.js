const { Console } = require('@woowacourse/mission-utils');
const Money = require('./Money');

class Message {
  constructor() {}

  static REQUEST_PURCHASE_MONEY_INPUT = '구입금액을 입력해 주세요.\n';
  static REQUEST_WINNING_NUMBERS_INPUT = '\n당첨 번호를 입력해 주세요.\n';
  static REQUEST_BONUS_NUMBER_INPUT = '\n보너스 번호를 입력해 주세요.\n';

  static ERROR_MINIMUM_MONEY_INPUT = '[ERROR] 최소 구입금액은 1,000원입니다.';
  static ERROR_NUMBER_ONLY = '[ERROR] 구입금액은 숫자만 입력해야 합니다.';
  static ERROR_1000_UNIT_ONLY = '[ERROR] 구입금액은 1,000원 단위로 입력해야 합니다.';
  static ERROR_LOTTO_NUMBERS_LENGTH = '[ERROR] 로또 번호는 6개여야 합니다.';
  static ERROR_LOTTO_NUMBER_ONLY = '[ERROR] 로또 번호는 정수여야 합니다.';
  static ERROR_LOTTO_NUMBER_RANGE = '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.';
  static ERROR_LOTTO_NUMBER_DUPLICATE = '[ERROR] 로또 번호는 서로 중복되지 않아야 합니다.';
  static ERROR_BONUS_NUMBER_RANGE = '[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.';
  static ERROR_BONUS_NUMBER_DUPLICATE = '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.';

  static printPurchase(number) {
    Console.print(`\n${number}개를 구매했습니다.`);
  }

  static printLottos(lottos) {
    lottos.forEach((lotto) => {
      const numbers = lotto.join(', ');
      const numbersWithBrackets = `[${numbers}]`;
      Console.print(numbersWithBrackets);
    });
  }

  static printResult(purchaseMoney, result) {
    const totalPrize = Money.getTotalPrize(result);
    const rateOfReturn = (totalPrize / purchaseMoney * 100).toFixed(1);
    const resultMessage = (
      `\n당첨 통계\n`
      + `---\n`
      + `3개 일치 (5,000원) - ${result.fifth}개\n`
      + `4개 일치 (50,000원) - ${result.fourth}개\n`
      + `5개 일치 (1,500,000원) - ${result.third}개\n`
      + `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.second}개\n`
      + `6개 일치 (2,000,000,000원) - ${result.first}개\n`
      + `총 수익률은 ${rateOfReturn}%입니다.`
    );
    Console.print(resultMessage);
  }
}

module.exports = Message;
