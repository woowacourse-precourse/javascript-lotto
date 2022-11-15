class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const numbersSet = new Set(numbers);
    if (numbersSet.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
    if(numbersSet.has(NaN)){
      throw new Error("[ERROR] 로또 번호는 양의 정수만 가능합니다.");
    }
    if(Math.min(...numbersSet) < 1 || 46 < Math.max(...numbersSet)){
      throw new Error("[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.");
    }
  }

  validateBonusBallNumber(bonusBall){
    if(this.#numbers.includes(bonusBall)){
      throw new Error("[ERROR] 보너스 번호가 다른 번호와 중복되지 않게 해주세요.");
    }
    if(1 > bonusBall || 45 < bonusBall){
      throw new Error("[ERROR] 보너스 번호는 1부터 45사이의 숫자여야 합니다.");
    }
  }

  compareLottoNumber(userLotto, bonusBall){
    const hit = this.countMatchNumber(userLotto);
    
    if(hit == 5 && this.includeBonusNumber(userLotto, bonusBall)){
      return 3;
    }
    if(hit == 6){
      return 4;
    }
    if(2 < hit && hit < 6) {
      return hit - 3;
    }
    return -1;
  }

  countMatchNumber(userLotto){
    let hit = 0;
    for(let index = 0; index < userLotto.length; index++){
      if(userLotto.includes(this.#numbers[index])){
        hit += 1;
      }
    }
    return hit;
  }

  includeBonusNumber(userLotto, bonusBall){
    return userLotto.includes(bonusBall)
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
