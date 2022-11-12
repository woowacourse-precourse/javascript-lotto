const THOUSAND = 1000;

const GAME_START_MESSAGE = "구입금액을 입력해 주세요.\n";
const WIN_NUMBERS_MESSAGE = "당첨 번호를 입력해 주세요.\n";
const BONUS_NUMBERS_MESSAGE = "보너스 번호를 입력해 주세요.\n";
const BUY_LOTTOS_MESSAGE = (count) => `${count}개를 구매했습니다.`;

const RANGE = {
  START: 1,
  END: 45,
  COUNT: 6,
};

module.exports = {
  GAME_START_MESSAGE,
  BUY_LOTTOS_MESSAGE,
  WIN_NUMBERS_MESSAGE,
  BONUS_NUMBERS_MESSAGE,
  THOUSAND,
  RANGE,
};
