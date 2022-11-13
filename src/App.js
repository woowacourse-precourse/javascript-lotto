import Lotto from "./Lotto.js";
import MissionUtils from "@woowacourse/mission-utils";

class App {
  play() {
    this.buy();
  }
  buy() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요. ", (input) => {
      console.log(input);
    });
  }
}

const app = new App();
app.play();

export default App;
