class Score {
    constructor () {
        this.userLotto = null
        this.correctNumber = null;
        this.bonusNumber = 0;
        this.score = new Array(5).fill(0);
        this.money = 0;
        this.profit = 0;
    }

    setUserLotto (userLotto) {
        this.userLotto = userLotto;
    }
    
    setCorrectNumber (correctNumber) {
        this.correctNumber = correctNumber;
    }

    setMoney (money) {
        this.money = money;
    }

    setBonusNumber (bonusNumber) {
        this.bonusNumber = bonusNumber;
    }

    setProfit (profit) {
        this.profit = profit;
    }

    getCorrectNumber () {
        return this.correctNumber;
    }

    getScore () {
        return this.score;
    }

    getProfit () {
        return this.profit;
    }
    
    calculateMatchCount (userOneLotto) {
        let count = 0;
        for(let userOneLottoNumber of userOneLotto) {
            if (this.correctNumber.includes(userOneLottoNumber)) {
                count++;
            }
        }
        if (count === 5 && this.isBonus(userOneLotto)) {
            count = 7;
        }
        return count;
    }

    calculateCount () {
        for(let userOneLotto of this.userLotto) {
            const count = this.calculateMatchCount(userOneLotto);
            this.calculateGrade(count);
        }
    }

    calculateSum () {
        return Calculate.calculateSum(this.score)
       
    }

}

module.exports = Score;