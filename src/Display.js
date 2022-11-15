const { Random } = require('@woowacourse/mission-utils');

class Display {
  static guidance(type) {
    switch (type) {
      case 'PAYMENT':
        return '구입금액을 입력해 주세요.\n';
      case 'WINNING_NUMBER_INPUT':
        return '당첨 번호를 입력해 주세요.\n';
      case 'BONUS_NUMBER_INPUT':
        return '보너스 번호를 입력해 주세요.\n';
      case 'RESULT':
        return '당첨 통계\n---';
    }
  }

  static statistics(type, info) {
    switch (type) {
      case 'QUANTITY':
        return `${info}개를 구매했습니다.`;
      case 'PROFITS':
        return `총 수익률은 ${info}%입니다.`;
    }
  }

  static info(type) {
    switch (type) {
      case 'PRICE':
        return 1000;
      case 'VOLUME':
        return 6;
      case 'RANGE_START':
        return 1;
      case 'RANGE_END':
        return 45;
    }
  }

  static error(type) {
    switch (type) {
      case 'UNACCEPTABLE_PAYMENT':
        return '[ERROR] 금액은 1000원으로 나눠 떨어져야 합니다.';
      case 'DUPLICATED':
        return '[ERROR] 중복된 숫자가 입력되었습니다.';
      case 'OUT_OF_RANGE':
        return `[ERROR] ${Display.info('RANGE_START')}부터 ${Display.info('RANGE_END')}까지의 숫자만 입력해주세요.`;
      case 'OUT_OF_VOLUME':
        return '[ERROR] 당첨 및 로또 번호의 경우 6개의 숫자, 보너스 번호의 경우 1개의 숫자만 입력해주세요.';
    }
  }

  static rankingInfo(ranking) {
    switch (ranking) {
      case 'FIFTH':
        return { winning: 3, prize: '5,000' };
      case 'FOURTH':
        return { winning: 4, prize: '50,000' };
      case 'THIRD':
        return { winning: 5, bonus: 0, prize: '1,500,000' };
      case 'SECOND':
        return { winning: 5, bonus: 1, prize: '30,000,000' };
      case 'FIRST':
        return { winning: 6, prize: '2,000,000,000' };
    }
  }

  static rankingStatistics(ranking, rankingCount) {
    const info = Display.rankingInfo(ranking);

    if (ranking === 'SECOND') {
      return `${info.winning}개 일치, 보너스 볼 일치 (${info.prize}원) - ${rankingCount}개`;
    }
    return `${info.winning}개 일치 (${info.prize}원) - ${rankingCount}개`;
  }

  static lottoFormat(numbers) {
    return `[${numbers.join(', ')}]`;
  }

  static randomNumbers() {
    return Random.pickUniqueNumbersInRange(
      Display.info('RANGE_START'),
      Display.info('RANGE_END'),
      Display.info('VOLUME')
    );
  }
}

module.exports = Display;
