class User {
    constructor () {
        this.lottoCount = 0;
        this.userLotto = null;
    }

    getUserLottoCount () {  
        return this.lottoCount;
    }

    getUserLotto () {
        return this.userLotto;
    }

    setUserLottoCount (input) {
        this.lottoCount = Math.floor(Calculate.calculateLottoCount(input));
        
    }

}

module.exports = User;