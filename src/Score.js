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
    
}

module.exports = Score;