const MissionUtils = require("@woowacourse/mission-utils");
const { WINNING_NUMBERS } = require('../constant/constant');

const validationNumbers = (numbers) => {
    if (!numbers.includes(',')) {
        throw new Error("[ERROR] (,)로 구분하여 6자리 숫자를 입력해주세요.");
    }

    const numberSplit = numbers.split(',');
    const numberSet = new Set(numberSplit);
    if (numberSet.size !== 6) {
        throw new Error("[ERROR] (,)로 구분하여 중복되지 않는 숫자를 입력해주세요.");
    }

    const commaLength = numberSplit.length - 1;
    if (commaLength !== 5) {
        throw new Error("[ERROR] (,)로 구분하여 6자리 숫자를 입력해주세요. (예. 1,2,3,4,5,6)");
    }
}

const winningNumbers = () => {
    let userNumberInput = '';
    MissionUtils.Console.readLine(WINNING_NUMBERS, (input) => {
        validationNumbers(input);
        userNumberInput = input;
    });

    return userNumberInput;
}

module.exports = winningNumbers;