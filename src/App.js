const MissionUtils = require("@woowacourse/mission-utils");
const { Random, Console } = require("@woowacourse/mission-utils");

let lottos = [];

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

const setLottoNumbers = () => {
  const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  lottoNumber.sort(function(a,b) {
    if(a > b) return 1;
    if(a === b) return 0;
    if(a < b) return -1;
  });
  return lottoNumber;
}

const showLottoNumber = (countLotto, throwInput) => {
  if(throwInput > 0) throw '[ERROR] 금액은 1,000원 단위로 입력해주세요';
  Console.print(`${countLotto}개를 구매했습니다.`);
  for(let i = 0; i<countLotto; i++){
    lottos[i] = setLottoNumbers()
    Console.print(lottos[i]);
  }
  inputLottoNumber();
}

const inputLottoNumber = () => {
  let inputSixNumber;
  Console.readLine('당첨 번호를 입력해 주세요.\n', (num) => {
    inputSixNumber = num.toString().split(",").map((str) => Number(str));
    console.log(inputSixNumber);
    inputBonusLotto(inputSixNumber);
  })
}

const inputBonusLotto = (inputSixNumber) => {
  let inputBonusNumber;
  Console.readLine('보너스 번호를 입력해 주세요.\n', (num) => {
    inputBonusNumber = Number(num);
    inputSixNumber.push(inputBonusNumber);
    console.log(inputSixNumber);
  })
}

class App {
  play() {
    buyLotto();
  }
}

const app = new App();
app.play()

module.exports = App;
