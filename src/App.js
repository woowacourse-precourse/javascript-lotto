const MissionUtils = require("@woowacourse/mission-utils");


class App {
  play() {
    lottoNumber()
  }
}

function lottoNumber () {
  let numbers = MissionUtils.Console.pickUniqueNumbersInRange(1, 45, 7);
  const LOTTO_NUMBER = numbers.slice(0,5)
  const BONUS_NUMBER = numbers.slice(5,)
  console.log(LOTTO_NUMBER)
  console.log(BONUS_NUMBER)
}

module.exports = App;
