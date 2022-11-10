const MissionUtils = require("@woowacourse/mission-utils");

const lottoRandomNumber = (lottoAmount) => {
    let userAnswer = [];
    for (let i = 0; i < lottoAmount; i++) {
        const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        userAnswer.push(numbers);
    }

    return userAnswer;
}

module.exports = lottoRandomNumber