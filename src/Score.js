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

}

module.exports = Score;