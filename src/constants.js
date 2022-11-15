const INPUT_MESSAGE = Object.freeze({
  INPUT_PRICE: "구입 금액을 입력해 주세요",
  INPUT_SUCCESS: "개를 구매했습니다.",
  INPUT_NUMBER: "당첨 번호를 입력해 주세요.",
  INPUT_BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
});
const MESSAGE = Object.freeze({});

const LOTTO_NUMBER = Object.freeze({});

const LOTTO_PRICE = 1000;
const FIVE = 5;

const RESULT_MESSAGE = Object.freeze({
  START: "\n당첨 통계\n---",
  THREE: (number) => `3개 일치 (5,000원) - ${number}개`,
  FIVE: (number) => `5개 일치 (1,500,000원) - ${number}개`,
  FIVE_BONUS: (number) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${number}개`,
  SIX: (number) => `6개 일치 (2,000,000,000원) - ${number}개`,
  PURCHASE: (number_Purchase) => `\n${number_Purchase}개를 구매했습니다.`,
  PROFIT: (profit) => `총 수익률은 ${profit}%입니다.`,
});

const ERROR_MESSAGE = Object.freeze({
  NUMBER: "[ERROR] 입력값이 숫자가 아닙니다.",
  UNIT: "[ERROR] 구입금액의 단위는 1000원입니다.",
  ZERO: "[ERROR] 구입금액은 0원보다 커야 합니다.",
  LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  RANGE: "[ERROR] 로또 번호는 1~45범위의 숫자여야 합니다.",
  DUPLICATE: "[ERROR] 로또 번호에 중복된 숫자가 있습니다.",
  BONUS_DUPLICATE: "[ERROR] 보너스 번호가 당첨 번호에 중복되는 값입니다.",
});

module.exports = { INPUT_MESSAGE, LOTTO_PRICE, FIVE, RESULT_MESSAGE, ERROR_MESSAGE };
