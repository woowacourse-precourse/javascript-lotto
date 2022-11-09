const MissionUtils = require("@woowacourse/mission-utils");

const PROMPT_MONEY = '구입금액을 입력해 주세요.';
const LOTTO_PRICE = 1000;

class App {
  play() {
    userInput(PROMPT_MONEY, countLotto);
  }
}

const userInput = (prompt, callback) => {
  MissionUtils.Console.readLine(`${prompt}\n`, (input) => {
    callback(input);
  });
};

const printOutput = (output) => {
  MissionUtils.Console.print(`${output}\n`);
};

const countLotto = (money) => {
  const amountLotto = money / LOTTO_PRICE;
};

let app = new App();
app.play();

module.exports = App;
