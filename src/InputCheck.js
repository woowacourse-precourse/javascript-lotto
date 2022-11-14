class InputCheck {
  priceCheck(input){
    if(isNaN(input)){
      throw new Error("[ERROR] 로또 구입 금액 단위는 숫자입니다.");
    }
    if(input%1000!=0){
      throw new Error("[ERROR] 로또 구입 금액은 1000원 단위 입니다.");
    }
  }

  hasDuplicate(arr){
    return new Set(arr).size != arr.length;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
		if(numbers.forEach(element => {
			if(isNaN(element)){
				throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
			}
		}));
    if(this.hasDuplicate(numbers)){
      throw new Error("[ERROR] 로또 번호는 중복되지 않는 숫자여야 합니다.");
    }
    if(numbers.forEach(element => {
      if(element>45 || element<0){
        throw new Error("[ERROR] 로또 번호의 범위는 1에서 45까지 입니다.");
      }
    }));
  }

	bonusCheck(bonus){
		if(isNaN(bonus)){
			throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.")
		}
	}
}
module.exports = InputCheck;