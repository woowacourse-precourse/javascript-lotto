const { Random } = require('@woowacourse/mission-utils');

class AutoNumber {
    #quantity;

    constructor(quantity) {
        this.create(quantity);
        this.#quantity = quantity;
    }

    create(quantity) {
        for(let count = 0; count < quantity; count++){
    
        }
        let random = [];
        Random.pickNumberInRange(1, 45);
    }

    // TODO: 추가 기능 구현
    }

module.exports = AutoNumber;
