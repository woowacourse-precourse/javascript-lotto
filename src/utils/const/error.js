const ERROR_NOT_NUMBER = "주어진 값이 숫자가 아닙니다.";
const ERROR_NOT_NUMBER_ARRAY = "주어진 값이 숫자 배열이 아닙니다.";
const ERROR_NOT_IN_RANGE_NUMBER = "주어진 값이 1~45 사이의 숫자가 아닙니다.";
const ERROR_NOT_LOTTO_NUMBER = "로또 번호가 아닙니다.";
const ERROR_NOT_BONUS_NUMBER = "보너스 번호 숫자가 아닙니다.";
const ERROR_NOT_POSITIVE_NUMBER = "주어진 값이 양수가 아닙니다.";
const ERROR_NOT_LOTTERY_NUMBER = "추첨 번호 양식이 아닙니다.";
const ERROR_NOT_SORTED_NUMBERLIST = "당첨번호 숫자가 정렬되어 있지 않습니다";
const ERROR_NOT_OBJECT = "주어진 값이 객체가 아닙니다.";
const ERROR_NOT_ARRAY = "주어진 값이 배열이 아닙니다.";
const ERROR_NOT_HAS_PROPERTY = "주어진 프로퍼티가 존재하지 않습니다.";
const ERROR_NOT_WINNING_RESULT = "주어진 숫자가 당첨 결과가 아닙니다.";
const ERROR_NOT_BOOLEAN = "주어진 값이 불리언이 아닙니다.";
const ERROR_OVERLAP_NUMBER = "중복된 숫자가 입력되었습니다.";
const ERROR_PARAM_NOT_NUMBER_ARRAY = "주어진 파라미터가 숫자 배열이 아닙니다.";
const ERROR_NUMBER_LUST_LENGTH_MUST_SIX = "로또 번호는 6개여야 합니다.";
const ERROR_NUMBER_NONEXISTENCE = "저장된 번호가 없습니다.";
const ERROR_PRARM_INVALID = "유효한 파라미터값이 아닙니다";
const ERROR_BUY_LOTTO_COUNT_MUST_MORE_THAN_ONE =
  "로또는 반드시 하나 이상 구입해야합니다.";
module.exports = {
  notNumber: ERROR_NOT_NUMBER,
  notNumberArray: ERROR_NOT_NUMBER_ARRAY,
  notNumberInRange: ERROR_NOT_IN_RANGE_NUMBER,
  notLottoNumber: ERROR_NOT_LOTTO_NUMBER,
  notBonusNumber: ERROR_NOT_BONUS_NUMBER,
  notPositiveNumber: ERROR_NOT_POSITIVE_NUMBER,
  notLotteryNumber: ERROR_NOT_LOTTERY_NUMBER,
  notSortedNumberList: ERROR_NOT_SORTED_NUMBERLIST,
  notObject: ERROR_NOT_OBJECT,
  notArray: ERROR_NOT_ARRAY,
  notBoolean: ERROR_NOT_BOOLEAN,
  notWinningResult: ERROR_NOT_WINNING_RESULT,
  notHasProperty: ERROR_NOT_HAS_PROPERTY,
  overLapNumber: ERROR_OVERLAP_NUMBER,
  paramNotNumberArray: ERROR_PARAM_NOT_NUMBER_ARRAY,
  paramInvalid: ERROR_PRARM_INVALID,
  numberListLengthMustSix: ERROR_NUMBER_LUST_LENGTH_MUST_SIX,
  lottoNumberNonexistence: ERROR_NUMBER_NONEXISTENCE,
  buyLottoCountMustMoreThanOne: ERROR_BUY_LOTTO_COUNT_MUST_MORE_THAN_ONE,
};
