const {LOTTO_PRICE_UNIT} = require('../src/Constant');


class Lotto {
  #numbers; // 당첨번호

  constructor(numbers) {
    // this.validate(numbers);
    this.#numbers = numbers;
    this.userLottoList = [];
    this.result = { first : 0, second : 0, third : 0, fourth : 0, fifty : 0}
  }

  findMatchCount(winningLotto,bonusNumber) {
    this.userLottoList.forEach((lottoNums) => {
      let isMatch = lottoNums.filter((nums) => winningLotto.includes(nums)).length;
      
      if(isMatch === 6) this.result.first += 1 ;
      if(isMatch === 5) {
        if(lottoNums.includes(bonusNumber)) this.result.second += 1;
        else this.result.third += 1;
      }
      if(isMatch === 4) this.result.fourth += 1 ;
      if(isMatch === 3) this.result.fifty += 1 ;
    })
    return this.result;
  }

  purchaseQuantity(amount) {
    return amount/LOTTO_PRICE_UNIT
  }

  lottomaker(lottoQuantity,generateRandomNumber) {
    for(let count = 0 ; count < lottoQuantity ; count++){
      let userLotto = generateRandomNumber()
      this.userLottoList.push(this.ascendingOrder(userLotto))
    }
    return this.userLottoList;
  } 

  ascendingOrder(numbersList) {
    return numbersList.sort((a,b) => a-b)
  }



  // validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;