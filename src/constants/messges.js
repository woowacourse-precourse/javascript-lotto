const INPUT = {
  BUY: "구입금액을 입력해 주세요.",
  WINNNG: "당첨 번호를 입력해 주세요.",
  BONUS: "보너스 번호를 입력해 주세요.",
};

const OUTPUT = {
  BUY: (quantity) => `${quantity}개를 구매했습니다.`,
  RESULT_TITLE: "당첨 통계\n---",
  RESULT: (match, reward, quantity) => `${match} (${reward}원) - ${quantity}개`,
  BENEFIT: (rate) => `총 수익률은 ${rate}%입니다.`,
  LINE: "\n",
};

const ERROR = {
  BONUS_NUMBER: "[ERROR] 보너스 번호는 숫자여야 합니다.",
  BONUS_RANGE: "[ERROR] 보너스 번호는 1과 45 사이의 숫자여야 합니다.",
  BONUS_DUPLICATE: "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.",
  LOTTO_NUMBER: "[ERROR] 로또 번호는 숫자여야 합니다.",
  LOTTO_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  LOTTO_RANGE: "[ERROR] 로또 번호는 1과 45 사이의 숫자여야 합니다",
  LOTTO_DUPLICATE: "[ERROR] 당첨 번호는 중복되지 않아야 합니다.",
  MONEY_NUMBER: "[ERROR] 구매 금액은 숫자여야 합니다.",
  MONEY_RANGE: "[ERROR] 구매 금액은 0원보다 커야 합니다.",
  MONEY_UNIT: "[ERROR] 구매 금액은 천원 단위여야 합니다.",
};

module.exports = {
  INPUT,
  OUTPUT,
  ERROR,
};
