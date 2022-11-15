const Lotto = require("./Lotto");
const MissionUtils = require("@woowacourse/mission-utils");
const LOTTO = 1000;

class App {
  play() {
    lottoPrice();
  }
}

const lottoPrice = () => {
  MissionUtils.Console.readLine('구입금액을 입력해 주세요. \n', (answer) => {
    lottoPriceValidate(+answer);
    const lottoCnt = answer / LOTTO;
  })

}

const lottoPriceValidate = (lottoprice) => {
  if ((lottoprice % LOTTO) !== 0) {
    throw new Error("[ERROR] 올바른 금액을 입력 하세요.");
  }
}

const app = new App();
app.play();


module.exports = App;


