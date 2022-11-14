const validateMoney = (money) => {
    if(isNaN(money) || money === "" || money === " "){
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
    if(Number(money) % 1 !== 0){
      throw new Error("[ERROR] 실수가 아닌 금액을 입력해주세요.")
    }
    if(Number(money) < 1000){
         throw new Error("[ERROR] 천원 이상의 금액을 입력해주세요.");
    }
    if(Number(money) % 1000 !== 0){
      throw new Error("[ERROR] 천원 단위의 금액으로 입력해주세요.");
    }
}

module.exports = { validateMoney };