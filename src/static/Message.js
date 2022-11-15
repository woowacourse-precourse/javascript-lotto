const Message = {
  REQUEST: {
    PRICE: "구입금액을 입력해 주세요.",
    WINNING_NUMBER: "당첨 번호를 입력해 주세요.",
    BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
  },

  ERROR: {
    LOTTO_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
    LOTTO_DUPLICATED: "[ERROR] 중복되지 않은 숫자가 입력되어야 합니다.",
    NUMBER_RANGE: "[ERROR] 1 ~ 45 사이의 숫자가 입력되어야 합니다.",
    PRICE_UNIT: "[ERROR] 1000원 단위의 숫자가 입력되어야 합니다.",
  },
};

module.exports = { Message };
