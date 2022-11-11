// 추가 상수 메세지 업데이트 예정

const LOTTO_USER_INPUT = {
  PURCHASE_LOTTO: '구입금액을 입력해 주세요.\n',
  WIN_LOTTO_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  BONUS_LOTTO_NUMBER: '보너스 번호를 입력해 주세요.\n',
};

const LOTTO_OUTPUT = {
  LOTTO_QUANTITY: '개를 구매했습니다.\n',
  SUMMARY_LOTTO: '당첨 통계\n',
  HYPHEN: '---\n',
  FIFTH_PLACE: '3개 일치 (5,000원) - ',
  FOURTH_PLACE: '4개 일치 (5,0000원) - ',
  THIRD_PLACE: '5개 일치 (1,500,000원) - ',
  SECOND_PLACE: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  FIRST_PLACE: '6개 일치 (2,000,000,000원) - ',
  TOTAL_YIELD: '총 수익률은 ',
};

const LOTTO_ERROR_MESSAGE = {
  LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  DUPLICATE: '[ERROR] 로또 번호는 중복될 수 없습니다.',
  BONUS_DUPLICATE: '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
  NOT_DIVIDE: '[ERROR] 1,000원 단위의 금액을 입력해야 합니다.',
  NOT_NUMBER: '[ERROR] 로또 구입은 숫자를 입력해야 합니다.',
  OUT_OF_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  BONUS_OUT_OF_RANGE: '[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
  NOT_REST: '[ERROR] 당첨 번호는 쉼표로 구분되어야 합니다.',
};

module.exports = { LOTTO_USER_INPUT, LOTTO_OUTPUT, LOTTO_ERROR_MESSAGE };
