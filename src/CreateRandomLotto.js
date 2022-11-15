const {Random} = require("@woowacourse/mission-utils");
const {Console} = require("@woowacourse/mission-utils");

class CreateRandomLotto {
    constructor(){
        this.randomLotto;
        this.saveRandomLotto = [];
    }

    pickRandomLotto(){
        this.randomLotto = Random.pickUniqueNumbersInRange(1, 45, 6);
    }

    randomNumberSort(){
        this.saveRandomLotto.sort((a,b) => {
            return a - b;
        })
    }

    issuedRandomNumber(number){
        let i = 0 ;
        while( i < number){
            this.pickRandomLotto();
            this.saveRandomLotto.push(this.randomLotto);
            Console.print(`[${this.saveRandomLotto[this.saveRandomLotto.length -1].join(', ')}]`);
            i++;
        }
        this.randomNumberSort();
        return this.saveRandomLotto;
    }
}



module.exports = CreateRandomLotto;