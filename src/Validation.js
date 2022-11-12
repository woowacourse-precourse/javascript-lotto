class Validation {

    validate() {
        
        if(arguments.length == 2) this.#validateBonusNumber(arguments[0], arguments[1]);

        if(arguments.length == 1 && !Array.isArray(arguments[0])) this.#validatePurchasePrice(arguments[0]);

        if(arguments.length == 1 && Array.isArray(arguments[0])) this.#validateLottoNumbers(arguments[0]);
    }

    #validateLottoNumbers(numbers) {
  
        if (numbers.length !== 6) {
          throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
        } 
        
        if(numbers.length !== new Set(numbers).size) {
          throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
        }
        
    }

    #validatePurchasePrice(number) {
        let num = Number(number);

        if(number.includes(',')) throw new Error('[ERROR] 구입 금액 입력 시 콤마(,)는 제외하고 입력해주세요.');

        if(Number.isNaN(num)) throw new Error('[ERROR] 금액은 1000원 단위로 숫자만 입력해주세요.');
    
        if(num < 1000) throw new Error('[ERROR] 로또 구입의 최소 금액은 1000원 입니다.');
        
    }

    #validateBonusNumber(number, targetNumbers) {
        
        if(Number.isNaN(number) || number > 45 || number <= 0) throw new Error('[ERROR] 보너스 번호는 1~45사이의 숫자이여야 합니다.');

        if(targetNumbers.includes(number)) throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복이 되어서는 안됩니다.');
    }
}

module.exports = new Validation();