const ERROR_NOT_NUMBER = "주어진 값이 숫자가 아닙니다.";
const ERROR_NOT_NUMBER_ARRAY = "주어진 값이 숫자 배열이 아닙니다.";
const ERROR_NOT_IN_RANGE_NUMBER = "주어진 값이 1~45 사이의 숫자가 아닙니다.";
const ERROR_NOT_LOTTO_NUMBER = "로또 번호가 아닙니다.";
const ERROR_NOT_BONUS_NUMBER = "보너스 번호 숫자가 아닙니다.";
const ERROR_NOT_POSITIVE_NUMBER = "주어진 값이 양수가 아닙니다.";
const ERROR_NOT_LOTTERY_NUMBER = "추첨 번호 양식이 아닙니다.";
const ERROR_NOT_SORTED_NUMBERLIST = "당첨번호 숫자가 정렬되어 있지 않습니다";
const ERROR_OVERLAP_NUMBER = "중복된 숫자가 입력되었습니다.";
const ERROR_PARAM_NOT_NUMBER_ARRAY = "주어진 파라미터가 숫자 배열이 아닙니다.";
const ERROR_NUMBER_LUST_LENGTH_MUST_SIX = "로또 번호는 6개여야 합니다.";
const ERROR_NUMBER_NONEXISTENCE = "저장된 번호가 없습니다.";

module.exports = {
  notNumber: ERROR_NOT_NUMBER,
  notNumberArray: ERROR_NOT_NUMBER_ARRAY,
  notNumberInRange: ERROR_NOT_IN_RANGE_NUMBER,
  notLottoNumber: ERROR_NOT_LOTTO_NUMBER,
  notBonusNumber: ERROR_NOT_BONUS_NUMBER,
  notPositiveNumber: ERROR_NOT_POSITIVE_NUMBER,
  notLotteryNumber: ERROR_NOT_LOTTERY_NUMBER,
  overLapNumber: ERROR_OVERLAP_NUMBER,
  paramNotNumberArray: ERROR_PARAM_NOT_NUMBER_ARRAY,
  notSortedNumberList: ERROR_NOT_SORTED_NUMBERLIST,
  numberListLengthMustSix: ERROR_NUMBER_LUST_LENGTH_MUST_SIX,
  lottoNumberNonexistence: ERROR_NUMBER_NONEXISTENCE,
};
