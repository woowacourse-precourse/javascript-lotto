const Random = require("@woowacourse/mission-utils");
class CreateRandomLotto {
    constructor(){
        this.randomLotto = [];
    }

    pickRandomLotto(){
        while(this.randomLotto.length < 6){
            let computerNumber = Random.pickNumberInRange(1, 45);
            if(!this.randomLotto.includes(computerNumber)){
                this.randomLotto.push(computerNumber)
            }
        }
    }
}

module.exports = CreateRandomLotto;
