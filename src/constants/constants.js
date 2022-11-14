const ENTER_LOTTO_PURCHASE_AMOUNT = '구입금액을 입력해 주세요.\n';
const INCLUDE_NOT_NUMBER_ERROR = '[ERROR] 구입금액은 숫자여야 합니다.\n';
const START_WITH_ZERO_ERROR = '[ERROR] 구입금액의 첫 자리는 1이상 9이하의 숫자이여야 합니다.';
const NOT_DIVISIBLE_BY_THOUSAND_ERROR = '[ERROR] 구입금액은 1000으로 나누어 떨어져야 합니다.';
const SHOW_NUMBER_OF_LOTTOS = '개를 구매했습니다.\n';

module.exports = {
  GUIDE: { ENTER_LOTTO_PURCHASE_AMOUNT, SHOW_NUMBER_OF_LOTTOS },
  ERROR: { INCLUDE_NOT_NUMBER_ERROR, START_WITH_ZERO_ERROR, NOT_DIVISIBLE_BY_THOUSAND_ERROR },
};
