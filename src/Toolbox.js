const { Console, Random } = require('@woowacourse/mission-utils');

function printMessage(sentence) {
    Console.print(sentence);
}

function generateRandomNumbers(min, max, numbers) {
    let randoms = Random.pickUniqueNumbersInRange(min, max, numbers);
    return randoms.map(x => Number(x)).sort((i, j) => i - j);
}

module.exports = {
    printMessage,
    generateRandomNumbers,
}