/**
 * 배열의 요소들을 문자 형태로 변환하는 함수
 * @param {*} arr 변환할 배열
 * @returns {string} 변환된 문자열
 */
function convertArrayToString(arr) {
    let str = "[";
    str += arr.join(", ");
    str += "]";

    return str;
}

/**
 * 특정 숫자가 로또 유효 범위(1-45)인지 판단 결과를 반환하는 함수
 * @param {number} number 
 * @returns {boolean} 로또 유효 범위를 벗어났다
 */
function outofLottoNumberRange(number) {
    const LEFT_BOUNDARY = 1, RIGHT_BOUNDARY = 45;
    return !(number >= LEFT_BOUNDARY && number <= RIGHT_BOUNDARY)
}

module.exports = {
    convertArrayToString,
    outofLottoNumberRange
}