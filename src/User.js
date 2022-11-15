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

    makeUserLotto () {
        const userLottoList = [];

        for( let i = 0; i < this.lottoCount; i++) {
            userLottoList.push(this.makeUserRandomOneLotto());
        }

        this.setUserLotto(userLottoList);
    }

}

module.exports = User;