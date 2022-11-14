const { FORMAT } = require('./Setting');

const MESSAGE = Object.freeze({
  INPUT_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  INPUT_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  TITLE_STATISTICS: '당첨 통계\n---',
});

const MATCH = Object.freeze({
  5: `3${FORMAT.MATCH}`,
  4: `4${FORMAT.MATCH}`,
  3: `5${FORMAT.MATCH}`,
  2: `5${FORMAT.MATCH}${FORMAT.MATCH_BONUS}`,
  1: `6${FORMAT.MATCH}`,
});

const RANK = Object.freeze({
  [MATCH[5]]: 5,
  [MATCH[4]]: 4,
  [MATCH[3]]: 3,
  [MATCH[2]]: 2,
  [MATCH[1]]: 1,
});

module.exports = {
  MESSAGE,
  MATCH,
  RANK,
};
