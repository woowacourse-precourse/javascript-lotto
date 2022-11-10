const INGAME_MESSAGE = {
  buy: '구입금액을 입력해 주세요.\n',
  pickMain: '당첨 번호를 입력해 주세요.\n',
  pickBonus: '보너스 번호를 입력해 주세요.\n',
  statistic: '당첨 통계\n ---',
};

const PICK_TYPE = {
  main: 0,
  bonus: 1,
};

const PICK_LENGTH = {
  main: 6,
  bonus: 1,
};

const RANK_INDEX = {
  first: 4,
  second: 3,
  third: 2,
  fourth: 1,
  fifth: 0,
};

const RANK_PRIZE = {
  fitrst: 2000000000,
  second: 30000000,
  third: 15000000,
  fourth: 50000,
  fifth: 5000,
};

const RANK_PRINT = {
  first: '6개 일치 (2,000,000,000원) - ',
  second: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  third: '5개 일치 (1,500,000원) - ',
  fourth: '4개 일치 (50,000원) - ',
  fifth: '3개 일치 (5,000원) - ',
};

module.exports = {
  INGAME_MESSAGE,
  PICK_TYPE,
  PICK_LENGTH,
  RANK_INDEX,
  RANK_PRIZE,
  RANK_PRINT,
};
