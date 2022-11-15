const MESSAGE = Object.freeze({
  START: "구입금액을 입력해주세요.\n",
  PURCHASE: (count) => `${count}개를 구매했습니다.`,
  WINNING: "당첨 번호를 입력해주세요.\n",
  BONUS: "보너스 번호를 입력해주세요.\n",
  RESULT: "당첨통계\n---",
  RANK: (rank, total, count) => {
    if (rank === "FIRST_RANK") {
      return `6개 일치 (${total}원) - ${count}개`;
    }
    if (rank === "SECOND_RANK") {
      return `5개 일치, 보너스 볼 일치 (${total}원) - ${count}개`;
    }
    if (rank === "THIRD_RANK") {
      return `5개 일치 (${total}원) - ${count}개`;
    }
    if (rank === "FOURTH_RANK") {
      return `4개 일치 (${total}원) - ${count}개`;
    }
    if (rank === "FIFTH_RANK") {
      return `3개 일치 (${total}원) - ${count}개`;
    }
  },
  YIELD: (revenue) => `총 수익률은 ${revenue}%입니다.`,

  ERROR: {
    PURCHASE_INTEGER: "[ERROR] 구입 금액은 정수여야 합니다.",
    PURCHASE_RANGE: "[ERROR] 구입 금액은 1000원 이상이어야 합니다.",
    PURCHASE_UNIT: "[ERROR] 구입 금액은 1000원 단위여야 합니다.",

    NUMBER_RANGE: "[ERROR] 로또 번호는 1 ~ 45 사이여야 합니다.",
    NUMBER_INTEGER: "[ERROR] 로또 번호는 정수여야 합니다.",
    NUMBER_DUPLICATE: "[ERROR] 로또 번호는 중복될 수 없습니다.",

    WINNING_NUMBER_LENGTH: "[ERROR] 당첨 번호는 6개여야 합니다.",
    BONUS_NUMBER_LENGTH: "[ERROR] 보너스 번호는 1개여야 합니다.",
  },
});

module.exports = MESSAGE;
