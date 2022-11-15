const MESSAGE = {
  MONEY_INPUT: "구입금액을 입력해 주세요.",
  LOTTO_NUMBER_INPUT: "당첨 번호를 입력해 주세요.",
  BONUS_NUMBER_INPUT: "보너스 번호를 입력해 주세요.",
  RESULT: "당첨 통계",
  LINE_STROKE: "---",
  LOTTO_AMOUNT: (count) => `${count}개를 구매했습니다.`,
};

const RANK_MESSAGE = {
  5: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  4: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  3: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  2: (count) => `4개 일치 (50,000원) - ${count}개`,
  1: (count) => `3개 일치 (5,000원) - ${count}개`,
  REVENUE_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
};

const EXCEPTION_MESSAGE_BONUS = {
  INPUT_ERROR: "[ERROR] 보너스 번호는 1에서 45 사이의 숫자만 가능합니다.",
  INPUT_OVERLAPPED: "[ERROR] 보너스 번호는 로또 번호와 중복될 수 없습니다.",
  INPUT_INTEGER: "[ERROR] 보너스 번호는 정수만 가능합니다.",
};

const EXCEPTION_MESSAGE = {
  INPUT_ERROR: "[ERROR] 로또 번호는 1에서 45 사이의 숫자만 가능합니다.",
  INPUT_LENGTH_ERROR: "[ERROR] 로또 번호는 6개여야 합니다.",
  INPUT_OVERLAPPED: "[ERROR] 로또 번호는 중복될 수 없습니다.",
  INPUT_INTEGER: "[ERROR] 로또 번호는 정수만 가능합니다.",
};

const EXCEPTION_MONEY = {
  MONEY_UNIT_INCORRECT: `[ERROR] 금액은 1000원으로 나누어져야 합니다.`,
  INPUT_ERROR: "[ERROR] 금액은 1000원 이상이어야 합니다.",
  INPUT_INTEGER: "[ERROR] 금액은 정수여야 합니다.",
};

const REWARDS = [0, 5000, 50000, 1500000, 30000000, 2000000000];

module.exports = {
  MESSAGE,
  RANK_MESSAGE,
  REWARDS,
  EXCEPTION_MESSAGE,
  EXCEPTION_MESSAGE_BONUS,
  EXCEPTION_MONEY,
};
