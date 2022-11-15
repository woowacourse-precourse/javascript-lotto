const MissionUtils = require("@woowacourse/mission-utils");

const lottoRandomNumber = () => {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

    return numbers;
}

const sortedLottoNumbers = () => {
    const lottoNumbers = lottoRandomNumber();
    const sortedNumbers = lottoNumbers.sort((a, b) => a - b);

    return sortedNumbers;
}

module.exports = sortedLottoNumbers;