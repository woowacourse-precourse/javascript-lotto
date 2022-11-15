const LOTTO = {
  RANGE: {
    MIN: 1,
    MAX: 45,
  },
  LENGTH: 6,
};

const MESSAGE = {
  BUY: "구입금액을 입력해주세요.\n",
  LOTTO_QUANTITY: (count) => `${count}개를 구매했습니다.`,
  ERROR: {
    PRICE: "[ERROR] 구입 금액은 1000원 단위의 자연수로 입력해주세요.",
    LOTTO_LENGTH: `[ERROR] 로또 번호는 ${LOTTO.LENGTH}개여야 합니다.`,
    LOTTO_DUPLICATE: "[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.",
    
  },
};

module.exports = {
  MESSAGE: MESSAGE,
  LOTTO: LOTTO,
}