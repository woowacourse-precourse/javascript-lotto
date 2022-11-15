const UTILS = Object.freeze({
  EMPTY_PRICE: 0,
  EMPTY_DRAW: 0,
  LOTTO_MIN: 1,
  LOTTO_MAX: 45,
  LOTTO_COUNT: 6,
  PERCENT: 100,
  LOTTO_PRICE: 1000,
});

const CONDITION = Object.freeze({
  FIRST_PLACE: 6,
  THIRD_PLACE: 5,
  FOURTH_PLACE: 4,
  FIFTH_PLACE: 3,
});

const INPUT = Object.freeze({
  GET_PURCHASE: '구입금액을 입력해 주세요.\n',
  GET_WIN_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  GET_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

const OUTPUT_PURCHASE = (count) => `\n${count}개를 구매했습니다.`;
const OUTPUT_STATISTICS = (winPlace) =>
  `\n당첨 통계
---
3개 일치 (5,000원) - ${winPlace.fifthPlace || 0}개
4개 일치 (50,000원) - ${winPlace.fourthPlace || 0}개
5개 일치 (1,500,000원) - ${winPlace.thirdPlace || 0}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${winPlace.secondPlace || 0}개
6개 일치 (2,000,000,000원) - ${winPlace.firstPlace || 0}개`;
const OUTPUT_EARNING_RATE = (earningRate) =>
  `총 수익률은 ${earningRate}%입니다.`;

const PRIZE = Object.freeze({
  FIRST_PLACE: 2000000000,
  SECOND_PLACE: 30000000,
  THIRD_PLACE: 1500000,
  FOURTH_PLACE: 50000,
  FIFTH_PLACE: 5000,
});

const ERROR = Object.freeze({
  LOTTO_PRICE: '[ERROR] 구입 금액은 1000원 단위로만 입력할 수 있습니다.',
  PURCHASE_ONLY_NUMBER: '[ERROR] 구입 금액은 숫자만 입력할 수 있습니다.',
  LOTTO_MUST_SIX: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_MUST_UNIQUE: '[ERROR] 로또 번호는 중복될 수 없습니다.',
  LOTTO_BETWEEN: '[ERROR] 로또 번호는 1에서 45사이 값이어야 합니다.',
  LOTTO_ONLY_NUMBER: '[ERROR] 로또 번호는 숫자만 가능합니다.',
  BONUS_ONLY_NUMBER: '[ERROR] 보너스 번호는 숫자만 입력할 수 있습니다.',
  BONUS_BETWEEN: '[ERROR] 보너스 번호는 1에서 45사이 값이어야 합니다.',
});

module.exports = {
  UTILS,
  CONDITION,
  INPUT,
  OUTPUT_PURCHASE,
  OUTPUT_STATISTICS,
  OUTPUT_EARNING_RATE,
  PRIZE,
  ERROR,
};
