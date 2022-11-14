const RULE = Object.freeze({
  RANGE_START: 1,
  RANGE_END: 45,
  LENGTH: 6,
  MONEY_UNIT: 1_000,
});

const GAME_MESSAGE = Object.freeze({
  MONEY_INPUT: '구입금액을 입력해 주세요.\n',
  COUNT: (number) => `${number}개`,
  BUY_COUNT: (number) => `${GAME_MESSAGE.COUNT(number)}를 구매했습니다.`,
  LOTTO_NUMBER_INPUT: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER_INPUT: '보너스 번호를 입력해 주세요.\n',
  RESULT_TITLE: '당첨 통계\n---',
  PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
});

const ERROR_MESSAGE = Object.freeze({
  EMPTY: '[ERROR] 빈 값을 입력하였습니다.',
  SPACE: '[ERROR] 공백을 포함해 입력하였습니다.',
  NOT_NUMBER: '[ERROR] 입력 값은 숫자여야 합니다.',
  RULE_MONEY: `[ERROR] 구입금액은 ${RULE.MONEY_UNIT.toLocaleString()}의 배수여야 합니다.`,
  RULE_LENGTH: `[ERROR] 로또 번호는 ${RULE.LENGTH}개여야 합니다.`,
  RULE_RANGE: `[ERROR] ${RULE.RANGE_START}-${RULE.RANGE_END} 사이의 숫자여야 합니다.`,
  DUPLICATE: '[ERROR] 중복된 번호를 입력하였습니다.',
  DUPLICATE_BONUS: '[ERROR] 로또 번호와 중복된 번호를 입력하였습니다.',
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
  FIFTH: `${RANK_LENGTH.FIFTH}개 일치 (${RANK_REWARDS.FIFTH.toLocaleString()}원) -`,
  FOURTH: `${RANK_LENGTH.FOURTH}개 일치 (${RANK_REWARDS.FOURTH.toLocaleString()}원) -`,
  THIRD: `${RANK_LENGTH.THIRD}개 일치 (${RANK_REWARDS.THIRD.toLocaleString()}원) -`,
  SECOND: `${
    RANK_LENGTH.THIRD
  }개 일치, 보너스 볼 일치 (${RANK_REWARDS.SECOND.toLocaleString()}원) -`,
  FIRST: `${RANK_LENGTH.FIRST}개 일치 (${RANK_REWARDS.FIRST.toLocaleString()}원) -`,
});

module.exports = {
  RULE,
  GAME_MESSAGE,
  ERROR_MESSAGE,
  RANK,
  RANK_LENGTH,
  RANK_REWARDS,
  RANK_MESSAGE,
};
