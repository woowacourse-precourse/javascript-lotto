class Calculate {
    static calculateLottoCount (money) {
        return money / 1000;
    }

    static divideByOneThousand (money) {
        return money % 1000;
    }

    static calculateProfit (sum, money) {
        return (sum / money) * 100;
    }

    static sortUserLotto (newLotto) {
        newLotto.sort((a,b) => a - b);
    }
    
}

module.exports = Calculate;