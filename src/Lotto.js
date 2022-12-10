const {LOTTO_PRICE_UNIT, RANDOM_RANGE_NUM : {minInclusive,maxInclusive,numberCount}} = require('../src/Constant');
const {Random} = require("@woowacourse/mission-utils");

class Lotto {
  #numbers; // 당첨번호

  constructor(numbers) {
    // this.validate(numbers);
    this.#numbers = numbers;
    
  
  }

  purchaseQuantity(amount) {
    return amount/LOTTO_PRICE_UNIT
  }

  lottomaker (lottoQuantity) {
    const userLottoList = []
    for(let count = 0 ; count < lottoQuantity ; count++){
      let userLotto = Random.pickUniqueNumbersInRange(minInclusive,maxInclusive,numberCount)
      userLottoList.push(this.ascendingOrder(userLotto))
    }
    return userLottoList;
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