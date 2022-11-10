const MissionUtils = require("@woowacourse/mission-utils");
const { WINNING_NUMBERS } = require('../constant/constant');

const validationNumbers = (numbers) => {
    if (numbers.length !== 6) {
        throw new Error("[ERROR] 6자리를 입력해주세요.");
    }

    const numberSet = new Set(numbers);
    if (numberSet.size !== numbers.length) {
        throw new Error("[ERROR] 중복되지 않은 수를 입력해주세요.");
    }
}

const winningNumbers = () => {
    MissionUtils.Console.readLine(WINNING_NUMBERS, (input) => {
        validationNumbers(input);
        userBuyAmount = input;
    });
}

module.exports = winningNumbers;