const LOTTO = {
  RANGE: {
    MIN: 1,
    MAX: 45,
  },
  LENGTH: 6,
};

const MESSAGE = {
  BUY: "구입금액을 입력해 주세요.\n",
  LOTTO_QUANTITY: (count) => `${count}개를 구매했습니다.`,
  WINNING: "당첨 번호를 입력해 주세요. (ex. 1,3,12,23,38,41)\n",
  BONUS: "보너스 번호를 입력해 주세요.\n",
  RANK: {
    FIRST : (rank) => `6개 일치 (2,000,000,000원) - ${rank}개`,
    SECOND : (rank) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rank}개`,
    THIRD : (rank) => `5개 일치 (1,500,000원) - ${rank}개`,
    FOURTH : (rank) => `4개 일치 (50,000원) - ${rank}개`,
    FIFTH : (rank) => `3개 일치 (5,000원) - ${rank}개`,
  },
  RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
  ERROR: {
    PRICE: "[ERROR] 구입 금액은 1000원 단위의 자연수로 입력해 주세요.",
    LOTTO_LENGTH: `[ERROR] 로또 번호는 ${LOTTO.LENGTH}개여야 합니다.`,
    NUMBER_DUPLICATE: "[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.",
    NUMBER_RANGE: `[ERROR] 로또 번호는 ${LOTTO.RANGE.MIN}~${LOTTO.RANGE.MAX} 사이의 정수만 입력해주세요.`,
    BONUS_DUPLICATE: "[ERROR] 보너스 번호는 당첨 번호에 있는 숫자와 중복되지 않아야 합니다.",
  },
};

module.exports = {
  MESSAGE: MESSAGE,
  LOTTO: LOTTO,
}