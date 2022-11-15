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
  }

  // TODO: 추가 기능 구현
  checkDuplicated(numbers){
    const tmp = [];
    for(let i=0; i<6; i++){
      if(tmp.includes(i)){
        return 0;
      }
      tmp.push(numbers[i]);
    }
    return 1;
  }
}

module.exports = Lotto;
