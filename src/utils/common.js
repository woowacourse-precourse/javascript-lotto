/**
 * 소수 둘째자리까지 반올림하여 반환하는 함수
 * @param {number} number
 * @returns {number} 반올림된 숫자
 */
const roundNumber = (number) => {
  return Math.round(number * 100) / 100;
};

/**
 * 숫자 문자열을 입력받아 숫자로 변환하는 함수
 * @param {string} string 정수형으로 변환할 문자열
 * @returns {number}
 */
const stringToNumber = (string) => {
  return Number(string);
};

/**
 * 3자리마다 콤마를 찍어주는 함수
 * @param {number} number
 * @returns {string} 콤마로 구분된 문자열
 */
const commaizeNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

module.exports = {
  roundNumber,
  stringToNumber,
  commaizeNumber,
};
