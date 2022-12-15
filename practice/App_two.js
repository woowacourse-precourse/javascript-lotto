const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto_two") ;
const Input = require("./Input_two") ;
const Output = require("./Output_two") ;

class App {
    #randomLottos ;

    constructor(){
        this.#randomLottos = [] ;
        this.money = 0 ;
    }

    play(){
        Input.buyLotto(this.buyLottoCallback.bind(this)) ;
    }

    buyLottoCallback(money){
        this.money = money ;
        Output.lottoCountPrint(money/1000) ;
        for (let i = 0 ; i < money/1000; i++){
        this.#randomLottos.push(new Lotto( Random.pickUniqueNumbersInRange(1, 45, 6)) ) ;
        }
        this.#randomLottos.forEach( ele => {
            ele.printNumber() ;
        })
        Input.userLottoInput(this.userLottoCallback.bind(this)) ;
    }

    userLottoCallback(userLotto){ //arr상태
        this.userLotto = [userLotto] ;
        Input.bonusLottoInput(this.bonusLottoCallback.bind(this)) ;
    }

    bonusLottoCallback(bonus){
        this.userLotto.push(bonus) ;
        const rank = [0,0,0,0,0] ;
        this.#randomLottos.forEach( ele => {
            const index = ele.compareCorrectLotto(this.userLotto) ;
            if (index !== undefined ) rank[index]++ ;
        })
        Output.resultPrint(rank, this.makeRate(rank)) ;
    }

    makeRate(rank){
        let reward = rank[0] * 5000 ;
        reward += rank[1] * 50000 ;
        reward += rank[2] * 1500000 ;
        reward += rank[3] * 30000000 ;
        reward += rank[4] * 2000000000 ;
        return Math.round(reward/this.money * 10)/10 ;
    }

    
}

// const app = new App();
// app.play() ;

module.exports = App ;