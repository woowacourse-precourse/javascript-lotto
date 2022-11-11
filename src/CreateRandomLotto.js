const {Random} = require("@woowacourse/mission-utils");
const {Console} = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class CreateRandomLotto {
    constructor(){
        this.lotto = new Lotto();
        this.randomLotto;
        this.saveRandomLotto = [];
    }

    pickRandomLotto(){
        this.randomLotto = Random.pickUniqueNumbersInRange(1, 45, 6);
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
            this.randomNumberSort();
            this.lotto.validate();
            Console.print(this.randomLotto);
            this.saveRandomLotto.push(this.randomLotto);
            this.randomLotto.length = 0;
            i++;
        }
    }
    getLottoRandom(){
        return this.saveRandomLotto;
    }
}



module.exports = CreateRandomLotto;