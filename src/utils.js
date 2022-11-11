/**
 * 배열의 요소들을 문자 형태로 변환하는 함수
 * @param {*} arr 변환할 배열
 * @returns 변환된 문자열
 */
function convertArrayToString(arr) {
    let str = "[";
    str += arr.join(", ");
    str += "]";

    return str;
}

module.exports = {
    convertArrayToString
}