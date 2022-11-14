class Lotto {
  #numbers

  constructor(numbers) {
    this.validate(numbers)
    this.#numbers = numbers
  }

  validate(numbers) {

    this.validateForNumLength(numbers)

    this.validateForDuplication(numbers)
    
    this.validateForNumRange(numbers)

    
  }

  validateForNumLength(numbers){
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.')
    }
  }
  

  validateForDuplication(numbers){
    const set = new Set(numbers)
    if (numbers.length !== set.size) {
      throw new Error('[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.')
    }
  }

  validateForNumRange(numbers){
    let min=Math.min(...numbers)
    let max=Math.max(...numbers)

    if(min<=1 || max>45){
      throw new Error('[ERROR] 로또 번호는 1에서 45사이의 숫자여야 합니다')
    }

  }
  

  // TODO: 추가 기능 구현
}

module.exports = Lotto