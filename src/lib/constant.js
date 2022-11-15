const MESSAGES = {
  TAKE_MONEY: "구입금액을 입력해 주세요.\n",
  TAKE_WINNING_NUMBERS: "당첨번호를 입력해 주세요.\n",
  TAKE_BONUS_NUMBERS: "보너스 번호를 입력해 주세요.\n",
};

const RESULT_MESSAGE = {
  COUNT_MESSAGE: (lottoCount) => `${lottoCount}개를 구매했습니다.`,
  WIN_MESSAGES: (winCount, winPrice, count) =>
    `${winCount}개 일치 (${winPrice}원) - ${count}개`,
  BONUS_WIN_MESSAGE: (winCount, winPrice, count) =>
    `${winCount}개 일치, 보너스 볼 일치 (${winPrice}원) - ${count}개`,
};

const WIN_CONDITIONS = [
  { winCount: 3, checkBonus: false, winPrice: 5000, count: 0 },
  { winCount: 4, checkBonus: false, winPrice: 50000, count: 0 },
  {
    winCount: 5,
    checkBonus: true,
    isBonus: false,
    winPrice: 1500000,
    count: 0,
  },
  {
    winCount: 5,
    checkBonus: true,
    isBonus: true,
    winPrice: 30000000,
    count: 0,
  },
  { winCount: 6, checkBonus: false, winPrice: 2000000000, count: 0 },
];

module.exports = {
  MESSAGES,
  WIN_CONDITIONS,
  RESULT_MESSAGE,
};
