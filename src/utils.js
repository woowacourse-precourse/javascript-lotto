const MissionUtils = require("@woowacourse/mission-utils");

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

module.exports = {print, scan};
