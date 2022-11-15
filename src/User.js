const { Random } = require('@woowacourse/mission-utils');
const Calculate = require('./Calculate.js');
const Message = require('./Message.js');
const InputOutput = require('./InputOutput.js')
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

    makeUserRandomOneLotto () {
        const oneLotto = Random.pickUniqueNumbersInRange(1, 45, 6);
        Calculate.sortUserLotto(oneLotto);
        return oneLotto;
    };   
}

module.exports = User;