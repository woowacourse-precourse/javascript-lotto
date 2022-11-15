const { Console } = require('@woowacourse/mission-utils')

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

    this.validateForNotNumber(numbers)
  }

  validateForNumLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.')
    }
  }

  validateForDuplication(numbers) {
    this.validateForNotNumber(numbers)
    //숫자가 아닌 값이 들어오면 set로직이 이상해지므로 여기서 미리 체크

    const set = new Set(numbers)
    if (numbers.length !== set.size) {
      throw new Error('[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.')
    }
  }

  validateForNumRange(numbers) {
    let min = Math.min(...numbers)
    let max = Math.max(...numbers)

    if (min < 1 || max > 45) {
      throw new Error('[ERROR] 로또 번호는 1에서 45사이의 숫자여야 합니다')
    }
  }

  validateForNotNumber(numbers) {
    numbers.map((i) => {
      if (isNaN(i)) {
        throw new Error('[ERROR] 로또 번호는 숫자로 이뤄진 값이어야 합니다.')
      }
    })
  }

  resultPrint(){
    //출력 형식에 맞추기 위해 문자열 처리
    Console.print(`[${String(this.#numbers).split(',').join(', ')}]`)
  }

  showLottoNum(){
    return this.#numbers
  }

}

module.exports = Lotto
