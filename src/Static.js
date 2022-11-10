const MESSAGE = {
  START: "구입금액을 입력해 주세요.",
  BUY: "개를 구매했습니다.",
  LUCKY: "당첨 번호를 입력해 주세요.",
  BONUS: "보너스 번호를 입력해 주세요",
  STATISTIC: "당첨 통계",
  CORRECT: "개 일치",
  EANR: "총 수익률은 ",
  ERR_INPUT: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
};

const LOTTERY_AMOUNT = {
  THREE: 5000,
  FOUR: 50000,
  FIVE: 1500000,
  FIVE_BONUS: 30000000,
  SIX: 2000000000,
};

const LOTTOVALUE = {
  LENGTH: 6,
  MIN: 1,
  MAX: 45,
};

module.exports = MESSAGE;
module.exports = LOTTERY_AMOUNT;
module.exports = LOTTOVALUE;
