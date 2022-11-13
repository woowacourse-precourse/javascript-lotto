class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }
  
  validate(numbers) {
    const numbersSet = new Set(numbers); //배열을 집합으로 변환
    const IS_DUPLICATE = numbersSet.size < numbers.length; //배열의 원소 중복 여부    
    
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    } 
    if (IS_DUPLICATE) {
      throw new Error("[ERROR] 로또 번호에 중복된 번호가 있습니다.")
    }

  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
