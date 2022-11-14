const MissionUtils = require("@woowacourse/mission-utils");
const Constant = require("./Constant");

/**
 * @param message:출력하고자 하는 문자열
 * 문자열을 출력해주는 함수
 */
function print(message){
    MissionUtils.Console.print(message);
}

/**
 * @param message: 입력값앞에 출력할 message
 */
function scan(message){
    let result = null;
    MissionUtils.Console.readLine(message, (input) => {
        result = input;
    });
    return result;
}

// 오름차순 정렬 함수
function ascSort(a,b) {
    return a-b;
}

function validateLength(numbers) {
    if (numbers.length !== Constant.LOTTO_LENGTH) {
        throw new Error("[ERROR] 로또 번호는 "+Constant.LOTTO_LENGTH+"개여야 합니다.");
    }
}

function validateOverlap(numbers){
    const set = new Set(numbers);
    if(set.size !== Constant.LOTTO_LENGTH) throw new Error("[ERROR] 로또 번호가 중복되었습니다.");
}

function validateNumber(numbers) {
    for(let i = 0 ; i < Constant.LOTTO_LENGTH ; i++){
        if(numbers[i] <= 0 || numbers[i] >= 46) throw new Error("[ERROR] 로또 번호는 1~45사이어야 합니다.");
    }
}

function validateLotto(numbers){
    validateLength(numbers);
    validateNumber(numbers);
    validateOverlap(numbers);
}

function onlyNumber(x){
    if(isNaN(Number(x))) throw new Error("[ERROR] 숫자가 아닙니다.");
}

function arrayPrint(array){
    let result = '[';
    for(let i = 0 ; i < array.length-1 ; i++){
        result += array[i]+', ';
    }
    result += array[array.length-1]+']';
    print(result);
}


module.exports = {print, scan, ascSort, validateLotto, onlyNumber, arrayPrint};
