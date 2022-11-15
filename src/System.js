const MissionUtils = require("@woowacourse/mission-utils");
const {
    ERROR,
    MESSAGE,
    LOTTO_PRICE,
    WINNING_LOTTO,
    MIN_NUMBER,
    MAX_NUMBER,
    MAX_NUMBER_COUNT
} = require('./Constants')
const Lotto = require('./Lotto');
const SYSTEM = Object.freeze({
    print(message) {
        MissionUtils.Console.print(message);
    },

    // publishLotto callback chain start
    publishLotto(cash) {
        let maxCount = cash / LOTTO_PRICE;
        return this.autoWrite(maxCount);
    },

    makeLotto() {
        return new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, MAX_NUMBER_COUNT));
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
        this.print(MESSAGE.NEW_LINE);
    },

    // getResult() callback chain start
    getResult(lottos, cash) {
        this.makeWinningLotto(lottos, cash);
    },

    makeWinningLotto(lottos, cash) {
        MissionUtils.Console.readLine(MESSAGE.ENTER_WINNING_LOTTO, (winningLotto) => {
            this.print(MESSAGE.NEW_LINE);
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
        if (number < MIN_NUMBER || number > MAX_NUMBER) {
            throw new Error(ERROR.INVAID_NUMBER);
        }

    },

    makeBonusNumber(lottos, winningLotto, cash) {
        MissionUtils.Console.readLine(MESSAGE.ENTER_BOUNS_NUMBER, (bonusNumber) => {
            this.print(MESSAGE.NEW_LINE);
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
            if (rankIndex < 6) results[rankIndex]++;
        }

        return results;
    },

    compare(lotto, winningLotto, bonusNumber) {
        let rank = 7 - lotto.filter((number) => winningLotto.has(number)).length;
        if (rank === 1) return 0;
        if (rank === 2 && lotto.includes(bonusNumber)) rank--;
        return rank;
    },

    printWinningHistory(results) {
        for (let rank = 5; rank >= 1; rank--) {
            let rankIndex = rank - 1;
            SYSTEM.print(`${MESSAGE.RANK_TEXT[rankIndex]} - ${results[rankIndex]}개`)
        }
    },

    calulateRate(cash, results) {
        let winnings = WINNING_LOTTO;
        let revenue = winnings.reduce((sum, money, rank) => sum + (results[rank] * money), 0);
        return Math.round(revenue / cash * 100 * 10) / 10;
    },

    printRate(rate) {
        SYSTEM.print(`총 수익률은 ${rate.toLocaleString()}%입니다.`);
    },

    exit() {
        MissionUtils.Console.close();
    }
})
module.exports = { MissionUtils, SYSTEM };