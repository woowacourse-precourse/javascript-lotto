const MissionUtils = require("@woowacourse/mission-utils");
const { ERROR, MESSAGE } = require('./Constants')
const Lotto = require('./Lotto');
const SYSTEM = Object.freeze({
    print(message) {
        MissionUtils.Console.print(message);
    },

    isCorrectCache(cache) {
        if (isNaN(cache)) {
            throw new Error(ERROR.CACHE_IS_NOT_NUMBER);
        }
        if (cache % 1000) {
            throw new Error(ERROR.INVAID_CACHE);
        }
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

    publishLotto(cache) {
        let maxCount = cache / 1000;
        return this.autoWrite(maxCount);
    },


    getResult(lottos, cache) {
        this.makeWinningLotto(lottos, cache);
    },

    makeWinningLotto(lottos, cache) {
        MissionUtils.Console.readLine(MESSAGE.ENTER_WINNING_LOTTO, (winningLotto) => {
            winningLotto = new Lotto(winningLotto.split(",").map(Number));
            this.makeBonusNumber(lottos, winningLotto.getNumber(), cache);
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

    makeBonusNumber(lottos, winningLotto, cache) {
        MissionUtils.Console.readLine(MESSAGE.ENTER_BOUNS_NUMBER, (bonusNumber) => {
            bonusNumber = Number(bonusNumber);
            this.isCorrectBonusNumber(bonusNumber, winningLotto);
            this.printResult(lottos, winningLotto, bonusNumber, cache);
        });
    },

    compare(lotto, winningLotto, bonusNumber) {
        let rank = 8;
        for (let number of lotto) {
            if (winningLotto.has(number)) rank--;
            if (rank === 3 && lotto.includes(bonusNumber)) rank--;
        }
        return rank - 1;
    },

    calulateRate(cache, result) {
        let winnings = [2_000_000_000, 30_000_000, 1_500_000, 50_000, 5_000];
        let revenue = winnings.reduce((sum, money, rank) => sum + (result[rank] * money), 0);
        return Math.round(revenue / cache * 100 * 10) / 10;

    },

    printResult(lottos, winningLotto, bonusNumber, cache) {
        let result = new Array(5).fill(0);

        for (let lotto of lottos) {
            let rankIndex = this.compare(lotto.getNumber(), new Set(winningLotto), bonusNumber);
            result[rankIndex]++;
        }

        for (let rank = 5; rank >= 1; rank--) {
            let rankIndex = rank - 1;
            SYSTEM.print(`${MESSAGE.RANK_TEXT[rankIndex]} - ${result[rankIndex]}개`)
        }
        let rate = this.calulateRate(cache, result);
        SYSTEM.print(`총 수익률은 ${rate}%입니다.`);
        this.exit();

    },

    exit() {
        MissionUtils.Console.close();
    }
})
module.exports = { MissionUtils, SYSTEM };