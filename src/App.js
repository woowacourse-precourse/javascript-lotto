const MissionUtils = require('@woowacourse/mission-utils')
const getInput = require('./getInput.js')

class App {
  async play() {
    const price = await getInput('구입금액을 입력해 주세요\n')
    MissionUtils.Console.print(price)

    const matchNumbers = await getInput('당첨 번호를 입력해 주세요\n')
    MissionUtils.Console.print(matchNumbers)

    const bonusNumber = await getInput('보너스 번호를 입력해 주세요\n')
    MissionUtils.Console.print(bonusNumber)
    
    MissionUtils.Console.close()
  }
}

const app = new App()
app.play()

module.exports = App;
