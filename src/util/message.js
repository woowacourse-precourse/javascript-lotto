const CONSOLE_MESSAGE = {
  Enter: "구입금액을 입력해 주세요.\n",
  Purchase: "개를 구매했습니다.",
  Numbers: "당첨 번호를 입력해주세요.\n",
  BonusNumber: "보너스 번호를 입력해주세요.\n",
  Stats: "당첨 통계\n---",
  Rate: (n) => `총 수익률은 ${n}%입니다.`,
};

const CONSOLE_MATCH_MESSAGE = [
  (n) => `3개 일치 (5,000원) - ${n}개`,
  (n) => `4개 일치 (50,000원) - ${n}개`,
  (n) => `5개 일치 (1,500,000원) - ${n}개`,
  (n) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${n}개`,
  (n) => `6개 일치 (2,000,000,000원) - ${n}개`,
];

const ERROR_MESSAGE = {
  Enter: "[ERROR] 잘못된 금액입니다.",
  Duplicate: "[ERROR] 중복된 숫자입니다.",
  NaN: "[ERROR] 숫자가 아닌 값입니다.",
};

module.exports = { ERROR_MESSAGE, CONSOLE_MATCH_MESSAGE, CONSOLE_MESSAGE };
