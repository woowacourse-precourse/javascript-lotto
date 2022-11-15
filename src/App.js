const MissionUtils = require('@woowacourse/mission-utils')
const getInput = require('./getInput')
const {validateBonusNumberInput, validateMatchNumbersInput, validatePriceInput} = require('./validateInput')

class App {
  async play() {
    const priceInput = await getInput('구입금액을 입력해 주세요\n')
    validatePriceInput(priceInput)
    const price = parseInt(priceInput, 10)
    MissionUtils.Console.print(priceInput)

    const matchNumbersInput = await getInput('당첨 번호를 입력해 주세요\n')
    validateMatchNumbersInput(matchNumbersInput)
    const matchNumbers = matchNumbersInput.split(',').map(n => parseInt(n, 10))
    MissionUtils.Console.print(matchNumbersInput)

    const bonusNumberInput = await getInput('보너스 번호를 입력해 주세요\n')
    validateBonusNumberInput(bonusNumberInput, matchNumbers)
    const bonusNumber = parseInt(bonusNumberInput, 10)
    MissionUtils.Console.print(bonusNumberInput)
    
    MissionUtils.Console.close()
  }
}

const app = new App()
app.play()

module.exports = App;
