const { Console, Random } = require('@woowacourse/mission-utils');

function showMylottos(storeClass) {
    printMessage(`\n${storeClass.amount}개를 구매했습니다.`)
    storeClass.generatedLottos.forEach(numbersArr => printMessage(`[${numbersArr.join(', ')}]`));
}

function printMessage(sentence) {
    Console.print(sentence);
}

function generateRandomNumbers(min, max, numbers) {
    let randoms = Random.pickUniqueNumbersInRange(min, max, numbers);
    return randoms.map(x => Number(x)).sort((i, j) => i - j);
}

function getMatchingResult(storeClass, lottoClasses) {
    lottoClasses.forEach(lottoClass => lottoClass.matching(storeClass.winningNumbers, storeClass.bonusNumber));
}

function getPrizeResult(lottoClasses) {
    lottoClasses.forEach(lottoClass => lottoClass.prize());
}

function numberOfPrizes(prizeMoney, lottoClasses) {
    return lottoClasses.filter(lottoClass => lottoClass.prizeResult.money === prizeMoney).length;
}

function getRecord(storeClass, lottoClasses) {
    storeClass.record.forEach(prize => {
        prize.numbers = numberOfPrizes(prize.money, lottoClasses);
    });
}


module.exports = {
    showMylottos,
    printMessage,
    generateRandomNumbers,
    getMatchingResult,
    getPrizeResult,
    numberOfPrizes,
    getRecord,
}