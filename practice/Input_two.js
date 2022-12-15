const { MONEY, ALL_LOTTO, USER_LOTTO, ERROR_MESSAGE, INPUT_MESSAGE } = require("./Constant_two");
const { errorPrint } = require("./Output_two") ;
const { Console } = require("@woowacourse/mission-utils");

const Input = {
    buyLotto(callback){
        Console.readLine(INPUT_MESSAGE.BUY, (money) => {
        try {
            this.buyLottoValidate(+money) ;
            callback(+money) ;
        } catch(error) {
            errorPrint(error) ;
            Input.buyLotto(callback) ;
        }
        })
    },

    buyLottoValidate(money){
        if (money < MONEY.MIN )  throw new Error (ERROR_MESSAGE.MONEY) ;
        if ((money / MONEY.UNIT) == 0 ) throw new Error ( ERROR_MESSAGE.MONEY );
        return money
    },

    userLottoInput(callback){
        Console.readLine(INPUT_MESSAGE.USER_LOTTO, (number) => {
            try {
                this.userLotto = this.userLottoValidate(number) ;
                callback(this.userLotto) ;
            } catch(error){
                errorPrint(error)
                Input.userLottoInput(callback) ;
            }
      })
    },

    userLottoValidate(number){
        const userLotto = number.split(",").map(Number) ;
        if (userLotto.length !== USER_LOTTO.COUNT )  throw new Error (ERROR_MESSAGE.LOTTO) ;
        userLotto.forEach( x => {
            if (!Number.isInteger(x)) throw new Error ( ERROR_MESSAGE.LOTTO ) ;
            if ( ALL_LOTTO.MIN > x || ALL_LOTTO.MAX < x )  throw new Error ( ERROR_MESSAGE.LOTTO ) ;
        })
        return userLotto ;
    },

    bonusLottoInput(callback){
        Console.readLine(INPUT_MESSAGE.BONUS, (number) => {
            try {
                const bonus = this.bonusLottoValidate(+number) ;
                callback(bonus) ;
            } catch(error){
                errorPrint(error)
                Input.bonusLottoInput(callback) ;
            }
        })
    },

    bonusLottoValidate(number){
        if (this.userLotto.includes(number)) throw new Error ( ERROR_MESSAGE.BONUS ) ; 
        if ( !Number.isInteger(number) ) throw new Error ( ERROR_MESSAGE.BONUS ) ;
        if ( ALL_LOTTO.MIN > number || ALL_LOTTO.MAX < number )  throw new Error ( ERROR_MESSAGE.BONUS ) ;
        return number ;
    },
}

module.exports = Input ; 