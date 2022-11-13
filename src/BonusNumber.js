class BonusNumber{
    bonusnumber;
  
    constructor(bonusnumber, numbers) {
      this.validate(bonusnumber, numbers);
      this.bonusnumber = bonusnumber;
    }
  
    validate(bonusnumber, numbers) {
        if(isNaN(bonusnumber))
            throw new Error("[ERROR] 숫자를 입력해 주세요.");
        if(bonusnumber < 0)
            throw new Error("[ERROR] 양수를 입력해 주세요.");
        if(!(bonusnumber % 1 === 0))
            throw new Error("[ERROR] 정수를 입력해 주세요.");
        if(bonusnumber<1 || bonusnumber>45)
            throw new Error("[ERROR] 1부터 45까지 범위의 숫자를 입력해 주세요."); 
        if(numbers.includes(bonusnumber))
            throw new Error("[ERROR] 로또 번호와 보너스 숫자는 서로 중복되지 않아야 합니다.");
    }
    
    getNumber(){
      return this.bonusnumber;
    }
  }
  
  module.exports = BonusNumber;
  