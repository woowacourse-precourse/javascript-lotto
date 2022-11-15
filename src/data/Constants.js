const INPUT = Object.freeze({
  INPUT_USER_MONEY: `구매금액을 입력해 주세요.\n`,
  INPUT_USER_WINNING_NUM: `당첨 번호를 입력해 주세요.\n`,
  INPUT_USER_BONUS_NUM: `보너스 번호를 입력해 주세요.\n`,
});

const ERROR = Object.freeze({
  ERROR_WINNING_NUM_ONLY_NUM: `[ERROR] 0이 아닌 숫자만 입력이 가능합니다.`,
  ERROR_WINNING_NUM_COMMA: `[ERROR] ,이 연속으로 입력되었습니다.`,
  ERROR_WINNING_NUM_RANGE: `[ERROR] 당첨 번호는 1~45 사이에 있습니다.`,
  ERROR_WINNING_NUM_LENGTH: `[ERROR] 당첨 번호는 6개만 입력이 가능합니다.`,
  ERROR_WINNING_NUM_DUPLICATION: `[ERROR] 당첨 번호에 중복이 있을 수 없습니다.`,

  ERROR_MONEY_UNIT: `[ERROR] 돈은 1000원 단위로 입력이 가능합니다.`,
  ERROR_MONEY_MINIMUM: `[ERROR] 돈은 1000원부터 입력이 가능합니다.`,

  ERROR_BONUS_RANGE: `[ERROR] 1~45사이의 번호를 입력해주세요`,
  ERROR_BONUS_NUMBER: `[ERROR] 숫자만을 입력해주세요`,
  ERROR_BONUS_DUPLICATION: `[ERROR] 당첨번호에 입력한 숫자를 보너스 번호에 입력할 수 없습니다.`,
});

const RESULT = Object.freeze({
  RESULT_LOTTO_5CLASS: `3개 일치 (5,000원) - `,
  RESULT_LOTTO_4CLASS: `4개 일치 (50,000원) - `,
  RESULT_LOTTO_3CLASS: `5개 일치 (1,500,000원) - `,
  RESULT_LOTTO_2CLASS: `5개 일치, 보너스 볼 일치 (30,000,000원) - `,
  RESULT_LOTTO_1CLASS: `6개 일치 (2,000,000,000원) - `,
});

module.exports = { INPUT, ERROR, RESULT };
