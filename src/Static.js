const MESSAGE = {
  BUYMONEY: "구입금액을 입력해 주세요.",
  BUYNUM: "개를 구매했습니다.",
  LUCKY: "당첨 번호를 입력해 주세요.",
  BONUS: "보너스 번호를 입력해 주세요",
  STATISTIC: "당첨 통계",
  CORRECT: "개 일치",
  CORRECT_BONUS: "개 일치, 보너스 볼 일치 ",
  YIELD: "총 수익률은 ",
  ERR_INPUT: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  ERR_BUY: "[ERROR] 금액은 1000원단위여야 합니다.",
  ERR_DUPLICATE: "[ERROR] 로또 번호는 중복되면 안됩니다.",
  ERR_BONUSCNT: "[ERROR] 보너스 번호는 1개여야 합니다.",
};

const LOTTERY_AMOUNT = {
  THREE: "5,000원",
  FOUR: "50,000원",
  FIVE: "1,500,000원",
  FIVE_BONUS: "30,000,000원",
  SIX: "2,000,000,000원",
};

const LOTTERY_PRIZE = {
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

module.exports = { MESSAGE, LOTTERY_AMOUNT, LOTTOVALUE, LOTTERY_PRIZE };
