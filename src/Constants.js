import { MATCH, AMOUNT, COUNT, PROFIT } from "../src/App";

const ERROR_MESSAGE = Object.freeze({
  INPUT_TYPE: "입력값은 숫자여야 합니다.",
  INPUT_UNIT: "입력값은 1,000원 단위로 떨어져야 합니다.",
  INPUT_RANGE: "입력 요소의 범위는 숫자 1 ~ 45 입니다.",
  INPUT_LENGTH_ONE: "입력 요소의 갯수는 1개여야 합니다.",
  INPUT_LENGTH_SIX: "입력 요소의 갯수는 6개여야 합니다.",
  INPUT_DUPLICATION: "입력 요소는 중복되지 않는 수여야 합니다.",
  INPUT_FORMAT_ARRAY: "입력 형태는 [1,2,3,4,5,6] 꼴로 입력되어야 합니다.",
  INPUT_FORMAT_STRING: "입력 형태는 1,2,3,4,5,6 꼴로 입력되어야 합니다.",

  ISSUE: "입력 금액만큼 발행되지 않았습니다.",
});

const INGAME_MESSAGE = Object.freeze({
  INPUT_MONEY: "구입 금액을 입력해 주세요.",
  PURCHASED: "개를 구매했습니다.",
  INPUT_NUMBERS: "당첨 번호를 입력해 주세요.",
  INPUT_BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
  RESULT_TITLE: "당첨 통계",
  RESULT_STATS: `${MATCH}개 일치 (${AMOUNT}원) - ${COUNT}개`,
  RESULT_STATS_BONUS: `${MATCH}개 일치, 보너스 볼 일치 (${AMOUNT}원) - ${COUNT}개`,
  RESULT_PROFIT: `총 수익률은${PROFIT}%입니다.`,
});

module.exports = { ERROR_MESSAGE, INGAME_MESSAGE };
