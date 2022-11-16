const CONFIG = Object.freeze({
  START: 1,
  END: 45,
  COUNT: 6,
});

const ERROR_INPUT_MESSAGE = Object.freeze({
  ZERO: "[ERROR] 최소 1,000 이상 입력해야 합니다.",
  TYPE: "[ERROR] 입력값은 숫자여야 합니다.",
  UNIT: "[ERROR] 입력값은 1,000원 단위로 떨어져야 합니다.",
  RANGE: "[ERROR] 입력 요소의 범위는 숫자 1 ~ 45 입니다.",
  LENGTH_ONE: "[ERROR] 입력 요소의 갯수는 1개여야 합니다.",
  LENGTH_SIX: "[ERROR] 입력 요소의 갯수는 6개여야 합니다.",
  DUPLICATION: "[ERROR] 입력 요소는 중복되지 않는 수여야 합니다.",
  DUPLICATION_ONE: "[ERROR] 보너스 넘버는 당첨 번호와 중복될 수 없습니다.",
  FORMAT_ARRAY: "[ERROR] 입력 형태는 [1,2,3,4,5,6] 꼴로 입력되어야 합니다.",
  FORMAT_STRING: "[ERROR] 입력 형태는 1,2,3,4,5,6 꼴로 입력되어야 합니다.",
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
  STATS: (hit3, hit4, hit5, hitBonus, hitAll, profit) =>
    `당첨 통계\n---\n` +
    `3개 일치 (5,000원) - ${hit3}개\n` +
    `4개 일치 (50,000원) - ${hit4}개\n` +
    `5개 일치 (1,500,000원) - ${hit5}개\n` +
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${hitBonus}개\n` +
    `6개 일치 (2,000,000,000원) - ${hitAll}개\n` +
    `총 수익률은 ${profit}%입니다.`,
});

module.exports = {
  CONFIG,
  ERROR_INPUT_MESSAGE,
  ERROR_LOGIC_MESSAGE,
  INGAME_INPUT,
  INGAME_INFORM,
  INGAME_RESULT,
};
