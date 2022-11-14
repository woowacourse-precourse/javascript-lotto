const { Console } = require('@woowacourse/mission-utils')

class WinningNum {
  #inputs

  constructor(inputs) {
    
    this.validate(inputs)
    this.#inputs = inputs
    console.log(this.#inputs)
  }
  validate(inputs) {
    this.validateForNumLength(inputs)

    this.validateForDuplication(inputs)

    this.validateForNumRange(inputs)

    this.validateForNotNumber(inputs)
  }


    validateForNumLength(input) {
      if (input.length !== 6) {
        throw new Error('[ERROR] 로또 번호는 6개여야 합니다.')
      }
    }

    validateForDuplication(input) {
      this.validateForNotNumber(input)
      //숫자가 아닌 값이 들어오면 set로직이 이상해지므로 여기서 미리 체크

      const set = new Set(input)
      if (input.length !== set.size) {
        throw new Error('[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.')
      }
    }

    validateForNumRange(input) {
      let min = Math.min(...input)
      let max = Math.max(...input)

      if (min < 1 || max > 45) {
        throw new Error('[ERROR] 로또 번호는 1에서 45사이의 숫자여야 합니다')
      }
    }

    validateForNotNumber(input) {
      input.map((i) => {
        if (isNaN(i)) {
          throw new Error('[ERROR] 로또 번호는 숫자로 이뤄진 값이어야 합니다.')
        }
      })
    }


  resultPrint(){
    Console.print(`${this.#inputs}`)
  }


  showWinningNum(){
    return this.#inputs
  }


}

module.exports = WinningNum
