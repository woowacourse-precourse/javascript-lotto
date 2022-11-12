const LOTTO = {
  PRICE: 1000,
  NUMBER_START: 1,
  NUMBER_END: 45,
  NUMBER_SELECT: 6,
};

const MESSAGE = {
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
};

const ERROR = {
  AMOUNT: `[ERROR] ${LOTTO.PRICE}원 단위로만 구매할 수 있습니다.`,
  SELECT: `[ERROR] 로또 번호는 ${LOTTO.NUMBER_SELECT}개여야 합니다.`,
  NUMBER: `[ERROR] 로또 번호는 ${LOTTO.NUMBER_START}부터 ${LOTTO.NUMBER_END} 사이의 숫자여야 합니다.`,
};

module.exports = { LOTTO, MESSAGE, ERROR };
