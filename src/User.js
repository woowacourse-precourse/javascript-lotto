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

}

module.exports = User;