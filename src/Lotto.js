class Lotto {
  #numbers;

  constructor(numbers) {
    this.checkLength(numbers);
    this.checkRedundancy(numbers);
    this.checkNumberRange(numbers);

    this.#numbers = numbers;
  }

  checkLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  checkRedundancy(numbers){//중복성
    const setNumbers = new Set(numbers);
    if (numbers.length !== [...setNumbers].length){
      throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.")
    }
  }

  checkNumberRange(numbers){
    numbers.forEach((number)=>{
      if(number<1 || number>45){
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.")
      }
    })
  }

}

module.exports = Lotto;
