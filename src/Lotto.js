const { ERROR_MESSAGE } = require('./common/contants')

const PRIZE_MONEY = {
  TREE: 5000,
  FOUR: 50000,
  FIVE: 1500000,
  FIVE_LUCKY: 30000000,
  SIX: 2000000000
}
class Lotto {
  #numbers

  constructor(numbers) {
    this.validate(numbers)
    this.#numbers = numbers
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.NUMBERS_LENGTH)
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR_MESSAGE.DUPLICATION)
    }
    if (numbers.some( number => {
      return isNaN(number)
    })) {
      throw new Error(ERROR_MESSAGE.ONLY_NUMBER)
    }
    if (numbers.some( number => {
      return number < 1 || number > 45 || number === 0
    })) {
      throw new Error(ERROR_MESSAGE.NUMBER_RANGE)
    }
  }

  judge(boughtGames, purchasePrice, luckyNumber) {
    let result = {
      three : 0,
      four : 0,
      five : 0,
      fiveLucky : 0,
      six : 0,
      yield : 0
    }

    for (let i = 0; i < boughtGames.getGameCount(); i++) {
      const count = boughtGames.getGameAt(i).filter(number => 
        this.#numbers.includes(number)
      ).length

      if (count === 3) {
        result.three += 1
        continue
      }

      if (count === 4) {
        result.four += 1
        continue
      }

      if (count === 6) {
        result.six += 1
        continue
      }

      if (count === 5) {
        if (boughtGames.getGameAt(i).includes(luckyNumber)) {
          result.fiveLucky += 1
          continue
        }
        result.five += 1
      }
    }

    result.yield = (
      result.three * PRIZE_MONEY.TREE + result.four * PRIZE_MONEY.FOUR 
      + result.five * PRIZE_MONEY.FIVE + result.fiveLucky * PRIZE_MONEY.FIVE_LUCKY 
      + result.six * PRIZE_MONEY.SIX
      ) / purchasePrice * 100

    return result
  }
}

module.exports = Lotto
