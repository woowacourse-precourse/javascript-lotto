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
            console.print(this.randomLotto);
            this.randomLotto.length = 0;
            i++;
        }
    }
}


module.exports = CreateRandomLotto;
