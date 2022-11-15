const INPUT_TEXT = {
  PRICE: "구입금액을 입력해주세요.",
  WIN: "당첨 번호를 입력해주세요.",
  BONUS: "보너스 번호를 입력해주세요.",
};

const ERROR_TEXT = {
  BLANK: "[ERROR] 숫자를 입력해주세요.",
  LIMIT: "[ERROR] 1 ~ 45사이의 번호여야 합니다",
  DIVISION: "[ERROR] 단위는 천원으로 입력해야 합니다",
  REPEAT: "[ERROR] 번호는 중복될 수 없습니다",
  COMMA: "[ERROR] 당첨번호는 숫자와 숫자사이에는 ,로 확실히 구분해주세요",
};

const WIN_TEXT = [
  "3개 일치 (5,000원) -",
  "4개 일치 (50,000원) -",
  "5개 일치 (1,500,000원) -",
  "5개 일치, 보너스 볼 일치 (30,000,000원) -",
  "6개 일치 (2,000,000,000원) - 0개",
];

const OTHER_TEXT = {
  BLANK: "---",
  AMOUNT: "개를 구매했습니다.",
  RESULT: "당첨 통계",
};

module.exports = { INPUT_TEXT, ERROR_TEXT, WIN_TEXT, OTHER_TEXT };
