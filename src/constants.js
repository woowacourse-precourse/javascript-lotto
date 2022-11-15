const CONFIG = Object.freeze({
  START: 1,
  END: 45,
  COUNT: 6,
});

const ERROR_INPUT_MESSAGE = Object.freeze({
  TYPE: "[ERROR] 입력값은 숫자여야 합니다.",
  UNIT: "[ERROR] 입력값은 1,000원 단위로 떨어져야 합니다.",
  RANGE: "[ERROR] 입력 요소의 범위는 숫자 1 ~ 45 입니다.",
  LENGTH_ONE: "[ERROR] 입력 요소의 갯수는 1개여야 합니다.",
  LENGTH_SIX: "[ERROR] 입력 요소의 갯수는 6개여야 합니다.",
  DUPLICATION: "[ERROR] 입력 요소는 중복되지 않는 수여야 합니다.",
  FORMAT_ARRAY: "[ERROR] 입력 형태는 [1,2,3,4,5,6] 꼴로 입력되어야 합니다.",
  FORMAT_STRING: "[ERROR] 입력 형태는 1,2,3,4,5,6 꼴로 입력되어야 합니다.",
  FORMAT_STRING_ONE: "[ERROR] 한 개만 입력 되어야 합니다.",
});

const ERROR_LOGIC_MESSAGE = Object.freeze({
  ISSUE: "[ERROR] 입력 금액만큼 발행되지 않았습니다.",
});

const INGAME_INPUT = Object.freeze({
  AMOUNT: "구입 금액을 입력해 주세요.",
  WINNING_NUMBERS: "당첨 번호를 입력해 주세요.",
  WINNING_BONUS: "보너스 번호를 입력해 주세요.",
});

const INGAME_INFORM = Object.freeze({
  PURCHASED: "개를 구매했습니다.",
});

const INGAME_RESULT = Object.freeze({
  TITLE: "당첨 통계\n---",
  STATS_1: (count) => `3개 일치 (5,000원) -${count}개`,
  STATS_2: (count) => `4개 일치 (50,000원) -${count}개`,
  STATS_3: (count) => `5개 일치 (1,500,000원) -${count}개`,
  STATS_4: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) -${count}개`,
  STATS_5: (count) => `6개 일치 (2,000,000,000원) -${count}개`,
  PROFIT: (profit) => `총 수익률은 ${profit}%입니다.`,
});

module.exports = {
  CONFIG,
  ERROR_INPUT_MESSAGE,
  ERROR_LOGIC_MESSAGE,
  INGAME_INPUT,
  INGAME_INFORM,
  INGAME_RESULT,
};
