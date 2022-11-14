module.exports = {
  BUY_LOTTO: Object.freeze({
    ANNOUNCEMENT: "구입금액을 입력해 주세요",
    PURCHASE: "개를 구매했습니다.",
  }),

  ERROR: Object.freeze({
    NAN: "[ERROR] 입력값은 반드시 숫자여야헙니다.",
    IS_LOTTO_MONEY: "[ERROR] 로또 구입 비용은 반드시 1000의 배수여야헙니다.",
    IS_LOTTO_NUMBER: "[ERROR] 1부터 45사이의 값을 입력해 주세요.",
    IS_LOTTO_INPUT: "[ERROR] 로또 번호 6개와 구분자 ,를 다 넣어주세요.",
    IS_OVERLAP: "[ERROR] 중복되지 않은 숫자를 입력해주세요.",
  }),

  LOTTO: Object.freeze({
    ANNOUNCEMENT: "당첨 번호를 입력해 주세요.",
    BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
  }),

  LOTTO_DETAILS: Object.freeze({
    PRICE: 1000,
    MIN: 1,
    MAX: 45,
    EA: 6,
  }),
};
