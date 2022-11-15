/**
 * 구입금액 관련 메세지
 * @type {Readonly<{INPUT: string, CONFIRMATION: string, AMOUNT_ERROR: string}>}
 */
const PURCHASE_MESSAGE = Object.freeze({
  INPUT: "구입금액을 입력해 주세요.\n",
  AMOUNT_ERROR:
    "[ERROR] 구입 금액은 1,000원 단위여야 하며, 1,000원으로 나누어 떨어져야 합니다.",
  CONFIRMATION: "개를 구매했습니다.",
});

/**
 * 당첨번호 관련 메세지
 * @type {Readonly<{INPUT: string, RANGE_ERROR: string, UNIQUE_ERROR: string, COMMA_NUMBER_ERROR: string}>}
 */
const WINNING_NUMBER_MESSAGE = Object.freeze({
  INPUT: "\n당첨 번호를 입력해 주세요.\n",
  COMMA_NUMBER_ERROR:
    "[ERROR] 당첨번호는 ,(콤마) 로 나누어진 6개의 숫자이어야 합니다.",
  RANGE_ERROR: "[ERROR] 당첨번호는 1~45 사이의 숫자로 이루어져야 합니다.",
  UNIQUE_ERROR:
    "[ERROR] 당첨번호는 겹치지 않는 6개의 숫자로 이루어져야 합니다.",
});

/**
 * 보너스 번호 관련 메세지
 * @type {Readonly<{INPUT: string, NUMBER_ERROR: string}>}
 */
const BONUS_NUMBER_MESSAGE = Object.freeze({
  INPUT: "\n보너스 번호를 입력해 주세요.\n",
  NUMBER_ERROR: "[ERROR] 보너스 번호는 1~45 사이의 숫자이어야 합니다.",
  UNIQUE_ERROR: "[ERROR] 보너스 번호는 당첨번호에 없는 숫자이어야 합니다.",
});

/**
 * 통계 관련 메세지
 * @type {Readonly<{THIRD: string, OPENING: string, SECOND: string, FIFTH: string, FIRST: string, FOURTH: string}>}
 */
const STATISTICS_MESSAGE = Object.freeze({
  OPENING: "\n당첨 통계\n---",
  FIFTH: "3개 일치 (5,000원) - ",
  FOURTH: "4개 일치 (50,000원) - ",
  THIRD: "5개 일치 (1,500,000원) - ",
  SECOND: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  FIRST: "6개 일치 (2,000,000,000원) - ",
});

module.exports = {
  PURCHASE_MESSAGE,
  WINNING_NUMBER_MESSAGE,
  BONUS_NUMBER_MESSAGE,
  STATISTICS_MESSAGE,
};
