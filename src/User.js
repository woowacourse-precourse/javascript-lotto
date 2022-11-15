class User {
    constructor () {
        this.lottoCount = 0;
        this.userLotto = null;
    }

    getUserLottoCount () {  
        return this.lottoCount;
    }

}

module.exports = User;