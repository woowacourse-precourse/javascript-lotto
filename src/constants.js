const MATCH_MSG = [
  "\n당첨 통계\n---\n3개 일치 (5,000원) - ",
  "4개 일치 (50,000원) - ",
  "5개 일치 (1,500,000원) - ",
  "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  "6개 일치 (2,000,000,000원) - ",
];

const PAYOUT = [5000, 50000, 1500000, 30000000, 2000000000];

const ERROR_MSG = {
  NOT_SIX_NUMBERS: "[ERROR] 로또 번호는 6개여야 합니다.",
  LOTTO_DUPLICATED: "[ERROR] 로또 번호는 중복되어서는 안 됩니다.",
  LOTTO_NOT_A_NUMBER: "[ERROR] 로또 번호는 숫자여야 합니다.",
  BONUS_NOT_A_NUMBER: "[ERROR] 보너스 번호는 숫자여야 합니다.",
  BONUS_DUPLICATED: "[ERROR] 보너스 번호는 당첨 번호와 중복되어서는 안 됩니다.",
  OUT_OF_RANGE: "[ERROR] 1 ~ 45 사이의 숫자를 입력해주세요.",
};

const MIN_MATCH = 3;
const MAX_MATCH = 7;

const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

module.exports = {
  MATCH_MSG,
  PAYOUT,
  MIN_MATCH,
  MAX_MATCH,
  MIN_NUMBER,
  MAX_NUMBER,
  ERROR_MSG,
};
