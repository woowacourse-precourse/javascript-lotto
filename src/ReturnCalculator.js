const PRIZE_MONEY = require('./constants').PRIZE_MONEY;
class ReturnCalculator {
    static getReturn(result, purchaseAmount) {
        const prizeMoneyList = [PRIZE_MONEY.FIFTH, PRIZE_MONEY.FOURTH, PRIZE_MONEY.THIRD, PRIZE_MONEY.SECOND, PRIZE_MONEY.FIRST];
        let totalPrize = 0;
        for (let i = 0; i < result.length; i++) {
            totalPrize += result[i] * prizeMoneyList[i];
        }
        const totalReturn = totalPrize / purchaseAmount;
        return (totalReturn * 100).toFixed(1);
    }
}

module.exports = ReturnCalculator;