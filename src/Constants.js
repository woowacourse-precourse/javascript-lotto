const LOTTO = {
  PRICE: 1000,
  NUMBER_START: 1,
  NUMBER_END: 45,
  NUMBER_SELECT: 6,
};

const PRIZE_MONEY = {
  RANKING1: 2000000000,
  RANKING2: 30000000,
  RANKING3: 1500000,
  RANKING4: 50000,
  RANKING5: 5000,
};

const MESSAGE = {
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
  WINNING_NUMBER: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

const ERROR = {
  AMOUNT: `[ERROR] ${LOTTO.PRICE}원 단위로만 구매할 수 있습니다.`,
  SELECT: `[ERROR] 로또 번호는 ${LOTTO.NUMBER_SELECT}개여야 합니다.`,
  NUMBER: `[ERROR] 로또 번호는 ${LOTTO.NUMBER_START}부터 ${LOTTO.NUMBER_END} 사이의 중복되지 않은 숫자여야 합니다.`,
  BONUS: '[ERROR] 당첨 번호에 있는 숫자는 보너스 번호로 입력할 수 없습니다.',
};

module.exports = { LOTTO, PRIZE_MONEY, MESSAGE, ERROR };
