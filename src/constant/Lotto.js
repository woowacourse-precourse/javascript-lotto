const NUMBER = Object.freeze({
  START: 1,
  END: 45,
  LIMIT: 6,
  MONEY: 1000,
});
const MESSAGE = Object.freeze({
  INPUT_MONEY: "구입금액을 입력해 주세요.",
  PURCHASE_RESULT: (number) => `${number}개를 구매했습니다.`,
  INPUT_NUMBER: "당첨 번호를 입력해 주세요.",
  INPUT_BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
  RESULT: "당첨 통계\n---",
  WIN_FIRST: (number) => `6개 일치 (2,000,000,000원) - ${number}개`,
  WIN_SECOND: (number) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${number}개`,
  WIN_THIRD: (number) => `5개 일치 (1,500,000원) - ${number}개`,
  WIN_FOURTH: (number) => `4개 일치 (50,000원) - ${number}개`,
  WIN_FIFTH: (number) => `3개 일치 (5,000원) - ${number}개`,
  RATES_OF_RETURN: (number) => `총 수익률은 ${number}%입니다.`,
});
module.exports = {
  NUMBER,
  MESSAGE,
};
