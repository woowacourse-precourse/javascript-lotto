const MissionUtils = require('@woowacourse/mission-utils')
const { Console, Random } = MissionUtils

class Lotto {
  // Lotto class 내에 filed 추가 금지
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    console.log(this.#numbers)
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.")
    }
  }

  // numbers = [1,2,3,4,5,6]
  // games = [[1,2,3,4,5,6], [2,7,5,34,38,45]]
  // luckyNumber = 7
  judge(games, luckyNumber, purchasePrice) {
    let result = {
      three : 0,
      four : 0,
      five : 0,
      fiveLucky : 0,
      six : 0,
      yield : 0
      // 당첨금 / 구입액 * 100
    }

    for (let i = 0; i < games.length; i++) {
      let count = games[i].filter(number => 
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
        games[i].includes(luckyNumber)
        ? result.fiveLucky += 1
        : result.five += 1
      }
    }
    // 당첨금 / 구입액 * 100 
    // TODO: 3자리마다 쉼표, 소수점은 두자리까지만
    result.yield = (result.three * 5000 + result.four * 50000 + result.five * 1500000 + result.fiveLucky * 30000000 + result.six * 2000000000) / purchasePrice * 100
    console.log(result)
  }
}

module.exports = Lotto;
