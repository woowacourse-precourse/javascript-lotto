const { REQUIREMENT, WINNINGNUMERROR } = require('./constant/Constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.validateNaNAndRange(numbers);
    if (numbers.length !== REQUIREMENT.LENGTH) {
      throw new Error(WINNINGNUMERROR.LENGTH);
    }
    if (new Set(numbers).size !== REQUIREMENT.LENGTH) {
      throw new Error(WINNINGNUMERROR.DUPLICATE);
    }  
  }

  validateNaNAndRange(numbers){
    numbers.forEach((number) => {
      if (Number.isNaN(number)) {
        throw new Error(WINNINGNUMERROR.NaN);
      }
      if (number < REQUIREMENT.MIN || number > REQUIREMENT.MAX) {
        throw new Error(WINNINGNUMERROR.RANGE);
      }
    });
  }

  comparisonNumbers(publishedlottos, bonusNumber) {
    let arr = [0, 0, 0, 0, 0, 0, 0, 0];
    
    publishedlottos.forEach((lotto) => {    
      const { cnt, bonusCnt } = this.comparisonEachLotto(lotto, bonusNumber);
      const idx = this.calcRank(cnt, bonusCnt);
      arr[idx] += 1;
    });
    
    return { three: arr[3], four: arr[4], five: arr[5], bonus: arr[7], six: arr[6]};
  }

  comparisonEachLotto(lotto, bonusNumber){
    let cnt = 0;
    let bonusCnt = 0;

    this.#numbers.forEach((cur) => {
      if (lotto.includes(cur)) {
        cnt += 1;
      }
    });

    if (lotto.includes(bonusNumber)) {
      bonusCnt += 1;
    }

    return { cnt, bonusCnt };
  };

  calcRank(cnt, bonusCnt) {
    if (cnt === 5 && bonusCnt === 1) {
      return 7;
    }
    return cnt;
  };

}


module.exports = Lotto;
