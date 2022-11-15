const MONEY = {
  MIN: 1000,
};

const PUBLISH = {
  MIN_RANGE: 1,
  MAX_RANGE: 45,
  AMOUNT: 6,
};

const PRIZE = {
  FIRST: [6, 2000000000],
  SECOND: [5, 30000000],
  THIRD: [5, 1500000],
  FOURTH: [4, 50000],
  FIFTH: [3, 5000],
};

const DIVISION = ',';

const WINNING_TEXT = {
  FIRST: `${PRIZE.FIRST[0]}개 일치 (${PRIZE.FIRST[1].toLocaleString()}원) -`,
  SECOND: `${
    PRIZE.SECOND[0]
  }개 일치, 보너스 볼 일치 (${PRIZE.SECOND[1].toLocaleString()}원) -`,
  THIRD: `${PRIZE.THIRD[0]}개 일치 (${PRIZE.THIRD[1].toLocaleString()}원) -`,
  FOURTH: `${PRIZE.FOURTH[0]}개 일치 (${PRIZE.FOURTH[1].toLocaleString()}원) -`,
  FIFTH: `${PRIZE.FIFTH[0]}개 일치 (${PRIZE.FIFTH[1].toLocaleString()}원) -`,
};

const INPUT_TEXT = {
  COST: '구입금액을 입력해 주세요.',
  WINNING_NUMBER: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

const ERROR_TEXT = {
  MIN_PURCHASE: `[ERROR] 금액은 ${MONEY.MIN}원 단위로 입력해주세요.`,
  MIN_COUNT: `[ERROR] 로또 번호는 '${DIVISION}' 로 구분된 ${PUBLISH.AMOUNT}개의 숫자입니다.`,
  VALUE_BETWEEN: `[ERROR] ${PUBLISH.MIN_RANGE}부터 ${PUBLISH.MAX_RANGE} 사이의 숫자를 입력해주세요.`,
  DUPLICATE_VALUE: '[ERROR] 중복되지 않은 번호를 입력해주세요.',
  DUPLICATE_WINNING: '[ERROR] 당첨 번호와 중복되지 않는 숫자를 입력해주세요.',
};

module.exports = {
  MONEY,
  PUBLISH,
  PRIZE,
  WINNING_TEXT,
  INPUT_TEXT,
  ERROR_TEXT,
};
