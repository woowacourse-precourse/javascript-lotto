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

    setUserLotto (userLottoList) {
        this.userLotto = userLottoList;
    }

}

module.exports = User;