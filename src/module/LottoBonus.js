const Validation = require("./Validation");

class LottoBonus {
    number;

    constructor(bonusNumber) {
        this.validate(bonusNumber);
        this.number = bonusNumber;
    }

    validate(bonusNumber) {
        Validation.checkRange(bonusNumber);
        Validation.checkNumber(bonusNumber);
    }
}

module.exports = LottoBonus;
