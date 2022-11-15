const LOTTO_RESULT_MESSAGE = (resultNumber) => `
3개 일치 (5,000원) - ${resultNumber[0]}개
4개 일치 (50,000원) - ${resultNumber[1]}개
5개 일치 (1,500,000원) - ${resultNumber[2]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${resultNumber[4]}개
6개 일치 (2,000,000,000원) - ${resultNumber[3]}개
`;

const TOTAL_PROFIT_MESSAGE = (profit) => `총 수익률은 ${profit}%입니다.`;

const RANKING_2_CORRECT_NUMBER = 5;

const LOTTO_PROCEED_INDEX = {
  RANKING1: 3,
  RANKING2: 4,
  RANKING3: 2,
  RANKING4: 1,
  RANKING5: 0,
};

// 5,4,3,1,2등 순서
const LOTTO_PROCEEDS_INFO = [
  { ranking: 5, proceed: 5000 },
  { ranking: 4, proceed: 50000 },
  { ranking: 3, proceed: 1500000 },
  { ranking: 1, proceed: 2000000000 },
  { ranking: 2, proceed: 30000000 },
];

const GAME_MESSAGES = {
  ENTER_MONEY: "구입금액을 입력하세요 : ",
  PURCHASE_MESSAGE: (purChaseNumber) => `${purChaseNumber}개를 구매했습니다.`,
  ENTER_WINNING_NUMBER: "당첨 번호를 입력해 주세요. : ",
  ENTER_BONUS_NUMBER: "보너스 번호를 입력해 주세요. : ",
  WINNING_RESULT: "당첨 통계",
  RESULT_SEPARATOR: "---",
};

const LOTTO_PRICE = 1000;

const LOTTO_START_NUMBER = 1;

const LOTTO_END_NUMBER = 45;

const LOTTO_NUMBER = 6;

const INDEX_CORRECTION_VALUE = 3;

const ERROR_MESSAGES = {
  WRONG_UNIT_OF_MONEY: "[ERROR] 구입 금액은 천원 단위로 입력해주세요",
  WINNING_NUMBER_DUPLICATE: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
  WRONG_WINNING_NUMBER_RANGE:
    "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  WINNING_NUMBER_SHOULD_INTEGER: "[ERROR] 로또 번호는 정수여야 합니다.",
  WINNING_NUMBER_SHOULD_NUMBER_TYPE:
    "[ERROR] 로또 번호의 타입은 숫자여야 합니다.",
};

module.exports = {
  LOTTO_RESULT_MESSAGE,
  TOTAL_PROFIT_MESSAGE,
  LOTTO_PROCEEDS_INFO,
  GAME_MESSAGES,
  LOTTO_PRICE,
  LOTTO_START_NUMBER,
  LOTTO_END_NUMBER,
  LOTTO_NUMBER,
  RANKING_2_COLLECT_NUMBER: RANKING_2_CORRECT_NUMBER,
  LOTTO_PROCEED_INDEX,
  ERROR_MESSAGES,
  INDEX_CORRECTION_VALUE,
};
