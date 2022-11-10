const MissionUtils = require("@woowacourse/mission-utils");
const { Random, Console } = require("@woowacourse/mission-utils");

const buyLotto = () => {
  let countLotto;
  let throwInput;
  let input;
  Console.readLine('구입금액을 입력해 주세요.\n', (num) => {
    countLotto = Number(num) / 1000;
    throwInput = Number(num) % 1000;
    showLottoNumber(countLotto,throwInput);
    });
}

const setLottoNumber = () => {
  const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  lottoNumber.sort(function(a,b) {
    if(a > b) return 1;
    if(a === b) return 0;
    if(a < b) return -1;
  });
  Console.print(lottoNumber);
}

const showLottoNumber = (countLotto, throwInput) => {
  if(throwInput > 0) throw '금액은 1,000원 단위로 입력해주세요';
  Console.print(`${countLotto}개를 구매했습니다.`);
  for(let i = 0; i<countLotto; i++){
    setLottoNumber()
  }
}


class App {
  play() {
    buyLotto();
  }
}

const app = new App();
app.play()

module.exports = App;
