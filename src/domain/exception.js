

class Exceptions{

    constructor(){
        this.exception = [];
    }

    priceNotThousands(price){
        if(price % 1000 !== 0) throw new Error("[ERROR] 금액이 1000원 단위가 아님")
    }
    inputNotNumber(input){
        if(!Number(input)) throw new Error("[ERROR] 입력값에 숫자만 입력해주세요")
    }
}

module.exports = Exceptions;