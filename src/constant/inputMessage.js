const THOUSAND = 1000;

const GAME_START_MESSAGE = "구입금액을 입력해 주세요.\n";
const WIN_NUMBERS_MESSAGE = "\n당첨 번호를 입력해 주세요.\n";
const BONUS_NUMBERS_MESSAGE = "\n보너스 번호를 입력해 주세요.\n";

const BUY_LOTTOS_MESSAGE = (count) => `${count}개를 구매했습니다.`;
const SHOW_LOTTOS = (lottos) =>
  `[${lottos.sort((a, b) => a - b)}]`.replaceAll(",", ", ");
const TOTAL_MEESAGE = (number) => `
당첨 통계
---
3개 일치 (5,000원) - ${number.three}개
4개 일치 (50,000원) - ${number.four}개
5개 일치 (1,500,000원) - ${number.five}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${number.sixWithBouns}개
6개 일치 (2,000,000,000원) - ${number.six}개
총 수익률은 ${number.total}%입니다.
`;

const RANGE = {
  START: 1,
  END: 45,
  COUNT: 6,
};

module.exports = {
  BUY_LOTTOS_MESSAGE,
  TOTAL_MEESAGE,
  SHOW_LOTTOS,
  GAME_START_MESSAGE,
  WIN_NUMBERS_MESSAGE,
  BONUS_NUMBERS_MESSAGE,
  THOUSAND,
  RANGE,
};
