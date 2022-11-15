const MissionUtils = require('@woowacourse/mission-utils')
const getInput = require('./getInput')
const Lotto = require('./Lotto')
const User = require('./User')
const {validateBonusNumberInput, validateMatchNumbersInput, validatePriceInput} = require('./validateInput')

class App {
  async play() {
    
    const priceInput = await getInput('구입금액을 입력해 주세요\n')
    validatePriceInput(priceInput)
    const price = parseInt(priceInput, 10)

    const user = new User(price)

    const lottoCount = price / 1000

    for (let index = 0; index < lottoCount; index++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
      user.addLotto(new Lotto(numbers))
    }

    user.printLottos()

    const matchNumbersInput = await getInput('당첨 번호를 입력해 주세요\n')
    validateMatchNumbersInput(matchNumbersInput)
    const matchNumbers = matchNumbersInput.split(',').map(n => parseInt(n, 10))

    const bonusNumberInput = await getInput('보너스 번호를 입력해 주세요\n')
    validateBonusNumberInput(bonusNumberInput, matchNumbers)
    const bonusNumber = parseInt(bonusNumberInput, 10)
    
    user.printMatches(matchNumbers, bonusNumber)
    user.printRateOfReturn()

    MissionUtils.Console.close()
  }
}

const app = new App()
app.play()

module.exports = App;
