const MissionUtils = require("@woowacourse/mission-utils");
const { BONUS_NUMBER } = require('../constant/constant');

const validationNumber = (numbers) => {
    if (numbers.length !== 1) {
        throw new Error("[ERROR] 1자리 숫자를 입력해주세요.");
    }
}

const bonusNumber = () => {
    let bonusNumber = 0;
    MissionUtils.Console.readLine(BONUS_NUMBER, (input) => {
        validationNumber(input);
        bonusNumber = input;
    });

    return bonusNumber;
}

module.exports = bonusNumber;