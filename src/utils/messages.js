const GUIDE_MESSAGES = {
  PURCHASE: "구입 금액을 입력해주세요.\n",
  WINNING_NUMS: `\n당첨 번호를 입력해 주세요.\n`,
  BONUS_NUM: `\n보너스 번호를 입력해 주세요.\n`,
};

const ERROR_MESSAGES = {
  WRONG_PRICE: "[ERROR] 구입 금액은 1000원 단위의 숫자로 입력해야 합니다.",
  WRONG_WINNING_NUMS: `[ERROR] 당첨 번호는 중복되지 않는 1 ~ 45 사이의 숫자 6개를 ','로 구분하여 입력해야 합니다.`,
  WRONG_BOUNS_NUM: `[ERROR] 보너스 번호는 당첨 번호와 중복되지 않는 1 ~ 45 사이의 숫자 1개를 입력해야 합니다.`,
};

module.exports = {
  GUIDE_MESSAGES,
  ERROR_MESSAGES,
};
