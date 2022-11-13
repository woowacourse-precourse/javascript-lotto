const RULE = Object.freeze({
  RANGE_START: 1,
  RANGE_END: 45,
  LENGTH: 6,
});

const GAME_MESSAGE = Object.freeze({
  MONEY_INPUT: '구입금액을 입력해 주세요.\n',
  BUY_COUNT: '개를 구매했습니다.',
  LOTTO_NUMBER_INPUT: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER_INPUT: '보너스 번호를 입력해 주세요.\n',
  RESULT_TITLE: '당첨 통계\n---',
});

const RANK = Object.freeze({
  FIFTH: 'fifth',
  FOURTH: 'fourth',
  THIRD: 'third',
  SECOND: 'second',
  FIRST: 'first',
});

const RANK_LENGTH = Object.freeze({
  FIFTH: 3,
  FOURTH: 4,
  THIRD: 5,
  FIRST: 6,
});

const RANK_REWARDS = Object.freeze({
  FIFTH: 5_000,
  FOURTH: 50_000,
  THIRD: 1_500_000,
  SECOND: 30_000_000,
  FIRST: 2_000_000_000,
});

const RANK_MESSAGE = Object.freeze({
  FIFTH: `3개 일치 (${RANK_REWARDS.FIFTH.toLocaleString()}원) -`,
  FOURTH: `4개 일치 (${RANK_REWARDS.FOURTH.toLocaleString()}원) -`,
  THIRD: `5개 일치 (${RANK_REWARDS.THIRD.toLocaleString()}원) -`,
  SECOND: `5개 일치, 보너스 볼 일치 (${RANK_REWARDS.SECOND.toLocaleString()}원) -`,
  FIRST: `6개 일치 (${RANK_REWARDS.FIRST.toLocaleString()}원) -`,
});

module.exports = { RULE, GAME_MESSAGE, RANK, RANK_LENGTH, RANK_REWARDS, RANK_MESSAGE };
