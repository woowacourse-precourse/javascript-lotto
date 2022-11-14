const MissionUtils = require("@woowacourse/mission-utils");
const { ERROR, MESSAGE, WINNING_LOTTO } = require('./Constants')
const Lotto = require('./Lotto');
const SYSTEM = Object.freeze({
    print(message) {
        MissionUtils.Console.print(message);
    },

    // publishLotto callback chain start
    publishLotto(cash) {
        let maxCount = cash / 1000;
        return this.autoWrite(maxCount);
    },

    makeLotto() {
        return new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
    },

    autoWrite(maxCount) {
        let lottos = [];
        for (let count = 0; count < maxCount; count++) {
            let lotto = this.makeLotto();
            lottos.push(lotto);
        }

        this.printLottos(lottos, maxCount);
        return lottos;
    },

    printLottos(lottos, maxCount) {
        this.print(`${maxCount}${MESSAGE.BUY_LOTTOS_COUNT}`);
        lottos.forEach(lotto => { SYSTEM.print(`[${lotto.getNumber().join(', ')}]`); });
    },

    // getResult() callback chain start
    getResult(lottos, cash) {
        this.makeWinningLotto(lottos, cash);
    },

    makeWinningLotto(lottos, cash) {
        MissionUtils.Console.readLine(MESSAGE.ENTER_WINNING_LOTTO, (winningLotto) => {
            winningLotto = new Lotto(winningLotto.split(",").map(Number));
            this.makeBonusNumber(lottos, winningLotto.getNumber(), cash);
        });
    },

    isCorrectBonusNumber(number, winningLotto) {
        let uniqueNumbers = new Set(winningLotto);

        if (uniqueNumbers.has(number)) {
            throw new Error(ERROR.HAS_NUMBER);
        }
        if (isNaN(number)) {
            throw new Error(ERROR.NOT_NUMBER);
        }
        if (number < 1 || number > 45) {
            throw new Error(ERROR.INVAID_NUMBER);
        }

    },

    makeBonusNumber(lottos, winningLotto, cash) {
        MissionUtils.Console.readLine(MESSAGE.ENTER_BOUNS_NUMBER, (bonusNumber) => {
            bonusNumber = Number(bonusNumber);
            this.isCorrectBonusNumber(bonusNumber, winningLotto);
            this.printResult(lottos, winningLotto, bonusNumber, cash);
        });
    },


    printResult(lottos, winningLotto, bonusNumber, cash) {
        let results = this.makeResults(lottos, winningLotto, bonusNumber);
        this.printWinningHistory(results);

        let rate = this.calulateRate(cash, results);
        this.printRate(rate);

        this.exit();
    },

    makeResults(lottos, winningLotto, bonusNumber) {
        let results = new Array(5).fill(0);

        for (let lotto of lottos) {
            let rankIndex = this.compare(lotto.getNumber(), new Set(winningLotto), bonusNumber);
            results[rankIndex]++;
        }

        return results;
    },

    compare(lotto, winningLotto, bonusNumber) {
        let rank = 8;
        for (let number of lotto) {
            if (winningLotto.has(number)) rank--;
            if (rank === 3 && lotto.includes(bonusNumber)) rank--;
        }
        return rank - 1;
    },

    printWinningHistory(results) {
        for (let rank = 5; rank >= 1; rank--) {
            let rankIndex = rank - 1;
            SYSTEM.print(`${MESSAGE.RANK_TEXT[rankIndex]} - ${results[rankIndex]}개`)
        }
    },

    calulateRate(cash, result) {
        let winnings = WINNING_LOTTO;
        let revenue = winnings.reduce((sum, money, rank) => sum + (result[rank] * money), 0);
        return Math.round(revenue / cash * 100 * 10) / 10;
    },

    printRate(rate) {
        SYSTEM.print(`총 수익률은 ${rate}%입니다.`);
    },

    exit() {
        MissionUtils.Console.close();
    }
})
module.exports = { MissionUtils, SYSTEM };