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
    
    static calculateSum(score) {
        const money = [5000, 50000, 1500000, 2000000000, 30000000];
        let sum = 0;
        for(let i = 0; i < score.length; i++) {
            sum += money[i] * score[i];
        }
        return sum;
    }
}

module.exports = Calculate;