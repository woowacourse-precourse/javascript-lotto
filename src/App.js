const MissionUtils = require("@woowacourse/mission-utils");
const { Random, Console } = require("@woowacourse/mission-utils");

const buyLotto = () => {
  let countLotto;
  let throwInput;
  let input;
  Console.readLine('구입금액을 입력해 주세요.\n', (num) => {
    countLotto = Number(num) / 1000;
    throwInput = Number(num) % 1000;
    input = num.toString().split('').map((str) => Number(str));
    });
}

const setLottoNumber = () => {
  const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  return lottoNumber;
}


class App {
  play() {}
}
const app = new App();
app.play()

module.exports = App;
