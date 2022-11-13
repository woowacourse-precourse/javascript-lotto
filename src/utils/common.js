/**
 * 숫자 문자열을 입력받아 숫자로 변환하는 함수
 * @param {string} string 정수형으로 변환할 문자열
 * @returns {number}
 */
const stringToNumber = (string) => {
  return Number(string);
};

module.exports = {
  stringToNumber,
};
