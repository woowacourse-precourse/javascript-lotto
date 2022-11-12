class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.checkUniqueRange(numbers);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    
  }
  // TODO: 추가 기능 구현
  checkUniqueRange(winningArr){
    const setWinningArr=new Set(winningArr);
    if(setWinningArr.size==6){
        return true;
    }
    throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.");
}
}

module.exports = Lotto;
