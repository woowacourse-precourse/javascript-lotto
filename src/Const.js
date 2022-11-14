const UNIT = Object.freeze({
  LOTTO: '개',
  MONEY: '원',
});

const FORMAT = Object.freeze({
  LOCALE: 'ko-KR',
  MATCH: '개 일치',
  MATCH_BONUS: ', 보너스 볼 일치',
});

const MESSAGE = Object.freeze({
  INPUT_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  INPUT_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
});

const PRIZE = Object.freeze({
  [`0${FORMAT.MATCH}`]: 0,
  [`1${FORMAT.MATCH}`]: 0,
  [`2${FORMAT.MATCH}`]: 0,
  [`3${FORMAT.MATCH}`]: 5000,
  [`4${FORMAT.MATCH}`]: 50000,
  [`5${FORMAT.MATCH}`]: 1500000,
  [`5${FORMAT.MATCH}${FORMAT.MATCH_BONUS}`]: 30000000,
  [`6${FORMAT.MATCH}`]: 2000000000,
});

module.exports = {
  UNIT,
  FORMAT,
  MESSAGE,
  PRIZE,
};
