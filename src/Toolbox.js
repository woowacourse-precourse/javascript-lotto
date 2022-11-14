const { Console, Random } = require('@woowacourse/mission-utils');

function printMessage(sentence) {
    Console.print(sentence);
}

function generateRandomNumbers(min, max, numbers) {
    let randoms = Random.pickUniqueNumbersInRange(min, max, numbers);
    return randoms.map(x => Number(x)).sort((i, j) => i - j);
}

function showMylottos(storeClass) {
    printMessage(`\n${storeClass.amount}개를 구매했습니다.`)
    storeClass.generatedLottos.forEach(numbersArr => printMessage(`[${numbersArr.join(', ')}]`));
}

module.exports = {
    showMylottos,
    printMessage,
    generateRandomNumbers,
}