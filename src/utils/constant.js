const LOTTO_RULE = Object.freeze({
  WINNING_NUMBERS_MIN_NUMBER: 1,
  WINNING_NUMBERS_MAX_NUMBER: 45,
  WINNING_NUMBERS_LENGTH: 6,
  INPUT_WINNING_NUMBERS_SPLIT: ',',
  MONEY_UNIT: 1000,
  PROFIT_RATE_PERCENT: 100,
  PROFIT_RATE_TO_FIXED: 1,
});

const PRIZE_MONEY = Object.freeze({
  FIRST_PLACE: 2000000000,
  SECOND_PLACE: 30000000,
  THIRD_PLACE: 1500000,
  FOURTH_PLACE: 50000,
  FIFTH_PLACE: 5000,
});

const MATCHING_NUMBERS_COUNT = Object.freeze({
  FIRST_PLACE: 6,
  SECOND_PLACE: 5,
  SECOND_PLACE_BONUS: 1,
  THIRD_PLACE: 5,
  FOURTH_PLACE: 4,
  FIFTH_PLACE: 3,
});

const INPUT_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  PURCHASE: (lotto) => `${lotto.length}개를 구매했습니다.`,
  NUMBERS: (numbers) => `[${numbers.join(', ')}]`,
  FIRST_PLACE: (firstPlace) =>
    `${MATCHING_NUMBERS_COUNT.FIRST_PLACE}개 일치 (${PRIZE_MONEY.FIRST_PLACE.toLocaleString()}원) - ${firstPlace}개`,

  SECOND_PLACE: (secondPlace) =>
    `${MATCHING_NUMBERS_COUNT.SECOND_PLACE}개 일치, 보너스 볼 일치 (${PRIZE_MONEY.SECOND_PLACE.toLocaleString()}원) - ${secondPlace}개`,

  THIRD_PLACE: (thirdPlace) =>
    `${MATCHING_NUMBERS_COUNT.THIRD_PLACE}개 일치 (${PRIZE_MONEY.THIRD_PLACE.toLocaleString()}원) - ${thirdPlace}개`,

  FOURTH_PLACE: (fourthPlace) =>
    `${MATCHING_NUMBERS_COUNT.FOURTH_PLACE}개 일치 (${PRIZE_MONEY.FOURTH_PLACE.toLocaleString()}원) - ${fourthPlace}개`,

  FIFTH_PLACE: (fifthPlace) =>
    `${MATCHING_NUMBERS_COUNT.FIFTH_PLACE}개 일치 (${PRIZE_MONEY.FIFTH_PLACE.toLocaleString()}원) - ${fifthPlace}개`,
  PROFIT: (profitRate) => `총 수익률은 ${profitRate.toFixed(LOTTO_RULE.PROFIT_RATE_TO_FIXED)}%입니다.`,
  STATISTICS: '\n당첨 통계\n---',
});

const ERROR_MESSAGE_HEADER = '[ERROR]';

const ERROR_MESSAGE_PURCHASE_AMOUNT = Object.freeze({
  NOT_VALID_BLANK: `${ERROR_MESSAGE_HEADER} 로또 구입 금액에 공백이 포함되어 있습니다.`,
  NOT_VALID_TYPE: `${ERROR_MESSAGE_HEADER} 로또 구입 금액이 숫자가 아닙니다`,
  NOT_VALID_UNIT: `${ERROR_MESSAGE_HEADER} 로또 구입 금액이 ${LOTTO_RULE.MONEY_UNIT}원 단위가 아닙니다.`,
});

const ERROR_MESSAGE_WINNING_NUMBER = Object.freeze({
  NOT_VALID_BLANK: `${ERROR_MESSAGE_HEADER} 로또 번호에 공백이 포함되어 있습니다.`,
  NOT_VALID_RANGE: `${ERROR_MESSAGE_HEADER} 로또 번호는 ${LOTTO_RULE.WINNING_NUMBERS_MIN_NUMBER}부터 ${LOTTO_RULE.WINNING_NUMBERS_MAX_NUMBER} 사이의 숫자여야 합니다.`,
  NOT_VALID_DUPLICATE: `${ERROR_MESSAGE_HEADER} 로또 번호에 중복된 수가 존재하면 안됩니다.`,
  NOT_VALID_TYPE: `${ERROR_MESSAGE_HEADER} 로또 번호는 숫자여야 합니다.`,
  NOT_VALID_LENGTH: (length) => `${ERROR_MESSAGE_HEADER} 로또 번호는 ${length}개여야 합니다`,
});

module.exports = {
  LOTTO_RULE,
  PRIZE_MONEY,
  MATCHING_NUMBERS_COUNT,
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  ERROR_MESSAGE_PURCHASE_AMOUNT,
  ERROR_MESSAGE_WINNING_NUMBER,
};
