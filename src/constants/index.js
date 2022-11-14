const ERROR_MESSAGES = Object.freeze({
  // 사용자 입력 예외 에러 메세지
  INVALID_MONEY_UNIT: '[ERROR] 1,000원 단위로 입력해 주세요.',
  INVALID_LOTTO_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  INVALID_LOTTO_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  INVALID_BONUS_LENGTH: '[ERROR] 보너스 번호 1자리를 입력해 주세요.',
  NOT_DUPLICATE_NUMBER: '[ERROR] 로또 번호는 중복될 수 없습니다.',

  // 예외 에러 메세지
  EMPTY_NUMBERS: '[ERROR] 랜덤 로또 번호가 생성되지 않았습니다.',
});

const MESSAGES = Object.freeze({
  INPUT_MONEY: '구입금액을 입력해 주세요.\n',
  BUY_COUNT: (count) => `\n${count}개를 구매했습니다.`,
  INPUT_LOTTO_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  WINNING_STATS: (
    [correct3, correct4, correct5, correct5Bonus, correct6],
    rate
  ) => `\n당첨 통계
---
3개 일치 (5,000원) - ${correct3}개
4개 일치 (50,000원) - ${correct4}개
5개 일치 (1,500,000원) - ${correct5}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${correct5Bonus}개
6개 일치 (2,000,000,000원) - ${correct6}개
총 수익률은 ${rate}%입니다.
  `,
});

module.exports = { ERROR_MESSAGES, MESSAGES };
