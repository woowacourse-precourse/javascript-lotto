const {Random} = require("@woowacourse/mission-utils");
const {Console} = require("@woowacourse/mission-utils");

class CreateRandomLotto {
    constructor(){
        this.randomLotto = [];
    }

    pickRandomLotto(){
        const number = Random.pickUniqueNumbersInRange(1, 45, 6);
        this.randomLotto.push(number);
    }

    randomNumberSort(){
        this.randomLotto.sort((a,b) => {
            return a - b;
        })
    }

    issuedRandomNumber(number){
        let i =0 ;
        while( i < number){
            this.pickRandomLotto();
            this.randomNumberSort()
            Console.print(this.randomLotto);
            this.randomLotto.length = 0;
            i++;
        }
    }
}



module.exports = CreateRandomLotto;
