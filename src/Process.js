const { printMessage } = require("./Toolbox");

class Process {

    getMatchingResult(storeClass, lottoClasses) {
        lottoClasses.forEach(lottoClass => lottoClass.matching(storeClass.winningNumber, storeClass.bonusNumber));
    }

    getPrizeResult(lottoClasses) {
        lottoClasses.forEach(lottoClass => lottoClass.prize());
    }

    numberOfPrizes(prizeMoney, lottoClasses) {
        return lottoClasses.filter(lottoClass => lottoClass.prizeResult.money === prizeMoney).length;
    }

    getRecord(storeClass, lottoClasses) {
        storeClass.record.forEach(prize => {
            prize.numbers = this.numberOfPrizes(prize.money, lottoClasses);
        });
    }

    showMylottos(storeClass) {
        printMessage(`\n${storeClass.amount}개를 구매했습니다.`)
        storeClass.generatedSixNumbers.forEach(numbersArr => printMessage(`[${numbersArr.join(', ')}]`));
    }

    showRecord(storeClass) {
        printMessage('\n당첨통계');
        printMessage('---');
        storeClass.record.forEach(prize => printMessage(`${prize.text} - ${prize.numbers}개`));
    }

    showEarningRatio(storeClass) {
        printMessage(`총 수익률은 ${storeClass.earningRatio}%입니다.`)
    }
}

module.exports = Process;