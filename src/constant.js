const MESSAGE = {
  INPUT_AMOUNT: "구입금액을 입력해 주세요. ",
  INPUT_LOTTO: "당첨 번호를 입력해 주세요.",
  INPUT_BONUS: "보너스 번호를 입력해 주세요.",
};

const PRIZE = {
  FIRST: 2_000_000_000,
  SECOND: 30_000_000,
  THIRD: 1_500_000,
  FOURTH: 50_000,
  FIFTH: 5_000,
};

const RANK = {
  MESSAGE: `
당첨 통계
---
  `,
  FIRST(count) {
    return `6개 일치 (2,000,000,000원) - ${count}개`;
  },
  SECOND(count) {
    return `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`;
  },
  THIRD(count) {
    return `5개 일치 (1,500,000원) - ${count}개`;
  },
  FOURTH(count) {
    return `4개 일치 (50,000원) - ${count}개`;
  },
  FIFTH(count) {
    return `3개 일치 (5,000원) - ${count}개`;
  },
  RATE(rate) {
    return `총 수익률은 ${rate}%입니다.`;
  },
};

const ERROR = {
  AMOUNT_UNIT: "[ERROR] 천원 단위로만 구매 가능합니다.",
  AMOUNT_ISNAN: "[ERROR] 숫자만 입력 가능합니다.",
  BONUS_DUPLICATION:
    "[ERROR] 보너스 번호는 입력한 당첨 번호와 중복될 수 없습니다.",
  BONUS_RANGE: "[ERROR] 보너스 번호는 1부터 45까지의 수만 입력할 수 있습니다.",
  BONUS_ISNAN: "[ERROR] 보너스 번호는 숫자만 입력 가능합니다.",
  NUMBERS_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  NUMBERS_DUPLICATION: "[ERROR] 중복된 번호는 입력할 수 없습니다.",
  NUMBERS_RANGE: "[ERROR] 1부터 45까지의 번호만 입력할 수 있습니다.",
  NUMBERS_ISNAN: "[ERROR] 숫자만 입력 가능합니다.",
};

module.exports = {
  MESSAGE,
  PRIZE,
  RANK,
  ERROR,
};
