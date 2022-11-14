const LOTTO = Object.freeze({
  PRICE: 1000,
  START: 1,
  END: 45,
  LENGTH: 6,
  SIX: 6,
  FIVE: 5,
  FOUR: 4,
  THREE: 3,
  FIRST_PLACE: 1,
  SECOND_PLACE: 2,
  THIRD_PLACE: 3,
  FOURTH_PLACE: 4,
  FIFTH_PLACE: 5,
  FIRST_PLACE_WINNINGS: 2000000000,
  SECOND_PLACE_WINNINGS: 30000000,
  THIRD_PLACE_WINNINGS: 1500000,
  FOURTH_PLACE_WINNINGS: 50000,
  FIFTH_PLACE_WINNINGS: 5000,
});

const MESSAGE = Object.freeze({
  START_GAME: '로또 게임을 시작합니다.',
  FINISH_GAME: '로또 게임을 종료합니다.',
  ENTER_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  ENTER_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  ENTER_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  WINNING_STATISTICS: '\n당첨 통계\n---',
  FIRST_PLACE: '6개 일치 (2,000,000,000원) - ',
  SECOND_PLACE: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  THIRD_PLACE: '5개 일치 (1,500,000원) - ',
  FOURTH_PLACE: '4개 일치 (50,000원) - ',
  FIFTH_PLACE: '3개 일치 (5,000원) - ',
  EA: '개',
  PURCHASE_QUANTITY: (quantity) => `\n${quantity}개를 구매했습니다.`,
  TOTAL_RATE_OF_RETURN: (rateOfReturn) => `총 수익률은 ${rateOfReturn}%입니다.\n`,
});

const ERROR_MESSAGE = Object.freeze({
  NON_NUMERIC_INPUT: '[ERROR] 구입금액은 숫자로만 입력해야 합니다.',
  NON_POSITIVE_INPUT: '[ERROR] 구입금액은 0보다 커야 합니다.',
  ZERO_START_INPUT: '[ERROR] 구입금액은 0으로 시작할 수 없습니다.',
  NON_DIVISIBLE_INPUT: '[ERROR] 구입금액은 1,000원 단위로 입력해야 합니다.',
  INVALID_LENGTH_LOTTO: '[ERROR] 로또 번호는 6개여야 합니다.',
  OUT_OF_RANGE_LOTTO: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  HAS_DUPLICATE_NUMBERS: '[ERROR] 로또 번호 6개는 서로 달라야 합니다.',
  INVALID_WINNING_NUMBERS:
    '[ERROR] 당첨 번호 입력은 "숫자,숫자,숫자,숫자,숫자,숫자"형식이어야 합니다.',
  INVALID_BONUS_NUMBER: '[ERROR] 보너스 번호는 당첨 번호와 다른 숫자여야 합니다.',
});

module.exports = {
  LOTTO,
  MESSAGE,
  ERROR_MESSAGE,
};
