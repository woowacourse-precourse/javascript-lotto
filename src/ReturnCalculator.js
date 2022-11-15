class ReturnCalculator {
    static getReturn(result, purchaseAmount) {
        const prizeMoneyList = [5000, 50000, 1500000, 30000000, 2000000000];
        let totalPrize = 0;
        for (let i = 0; i < result.length; i++) {
            totalPrize += result[i] * prizeMoneyList[i];
        }
        const totalReturn = totalPrize / purchaseAmount;
        return totalReturn.toFixed(1) * 100;
    }
}

module.exports = ReturnCalculator;