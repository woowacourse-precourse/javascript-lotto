const INPUT_TEXT = {
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
  WINNING_NUMBER: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  LINE_BREAK: '',
  EMPTY: '',
  BOUGHT(number) {
    return `${number}개를 구매했습니다.`;
  },
};

const STATS_TEXT = {
  WINNING_STATS: '당첨 통계',
  HORIZONTAL_LINE: '---',
  MATCH_THREE(number) {
    return `3개 일치 (5,000원) - ${number}개`;
  },
  MATCH_FOUR(number) {
    return `4개 일치 (50,000원) - ${number}개`;
  },
  MATCH_FIVE(number) {
    return `5개 일치 (1,500,000원) - ${number}개`;
  },
  MATCH_FIVE_BONUS(number) {
    return `5개 일치, 보너스 볼 일치 (30,000,000원) - ${number}개`;
  },
  MATCH_SIX(number) {
    return `6개 일치 (2,000,000,000원) - ${number}개`;
  },
  YIELD(number) {
    return `총 수익률은 ${number}%입니다.`;
  },
};

const ERROR = {
  AMOUNT: {
    UNDER_MONEY: '[ERROR] 1000원 이하의 금액은 입력할수 없습니다.',
    ONLY_NUMBER: '[ERROR] 숫자를 제외한 문자는 입력할수 없습니다.',
    NOT_EMPTY: '[ERROR] 공백은 입력할수 없습니다.',
  },
  BONUS: {
    NOT_OVERLAP: '[ERROR] 중복되지 않는 숫자만 입력할수 있습니다.',
    ONLY_SET_RANGE_NUMBER: '[ERROR] 1~45의 숫자만 입력할수 있습니다.',
  },
  LOTTO: {
    ONLY_SIX_NUMBER: '[ERROR] 로또 번호는 6개여야 합니다.',
    ONLY_SET_RANGE_NUMBER: '[ERROR] 로또 번호는 1~45자리의 숫자여야 합니다.',
  },
  WINNING: {
    NOT_EMPTY: '[ERROR] 공백은 입력할수 없습니다.',
    ONLY_NUMBER: '[ERROR] 숫자를 제외한 문자는 입력할수 없습니다.',
    COMMA_SEPARATED: '[ERROR] 1~45의 숫자만 쉼표로 구분하여 입력할수 있습니다.',
    NOT_OVERLAP_SIX_NUMBER:
      '[ERROR] 중복되지 않는 6개의 숫자만 입력할수있습니다.',
  },
};

const RANK = {
  ONE: 0,
  TWO: 1,
  THREE: 2,
  FOUR: 3,
  FIVE: 4,
};

const MATCH = {
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  FIVE_BONUS: 5.5,
  SIX: 6,
};

const MONEY = {
  RANK_ONE: 2000000000,
  RANK_TWO: 30000000,
  RANK_THREE: 1500000,
  RANK_FOUR: 50000,
  RANK_FIVE: 5000,
};

const NUMBER = {
  ZERO: 0,
  ZERO_POINT_FIVE: 0.5,
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  SEVEN: 7,
  EIGHT: 8,
  NINE: 9,
  FORTY_FIVE: 45,
  ONE_HUNDRED: 100,
  ONE_THOUSAND: 1000,
};

module.exports = { INPUT_TEXT, STATS_TEXT, ERROR, RANK, MATCH, MONEY, NUMBER };
