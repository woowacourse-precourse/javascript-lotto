const setting = require('./LottoGame');
const ErrorMsg = require('./ErrorMsg');

class Validation {


    validate() {
        
        if(arguments.length == 2) this.#validateBonusNumber(arguments[0], arguments[1]);

        if(arguments.length == 1 && !Array.isArray(arguments[0])) this.#validatePurchasePrice(arguments[0]);

        if(arguments.length == 1 && Array.isArray(arguments[0])) this.#validateLottoNumbers(arguments[0]);
    }

    #validateLottoNumbers(numbers) {
  
        if (numbers.length !== setting.gameSetting.length) {
          throw new Error(ErrorMsg.lottoRange);
        } 
        
        if(numbers.length !== new Set(numbers).size) {
          throw new Error(ErrorMsg.duplicatedNumber);
        }
        
    }

    #validatePurchasePrice(number) {
        let num = Number(number);

        if(number.includes(',')) throw new Error(ErrorMsg.noComma);

        if(Number.isNaN(num)) throw new Error(ErrorMsg.minUnitPrice);
    
        if(num < setting.gameSetting.minPrice) throw new Error(ErrorMsg.minLottoPrice);
        
    }

    #validateBonusNumber(number, targetNumbers) {
        
        if(Number.isNaN(number) || number > setting.gameSetting.maxNumber || number < 1) throw new Error(ErrorMsg.bonusRange);

        if(targetNumbers.includes(number)) throw new Error(ErrorMsg.duplicatedBonus);
    }
}

module.exports = new Validation();