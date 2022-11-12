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
    showLottoNumber(countLotto, throwInput);
  });
}

const setLottoNumbers = () => {
  const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  lottoNumber.sort(function (a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });
  return lottoNumber;
}

const showLottoNumber = (countLotto, throwInput) => {
  if (throwInput > 0) throw '[ERROR] 금액은 1,000원 단위로 입력해주세요';
  Console.print(`${countLotto}개를 구매했습니다.`);
  for (let i = 0; i < countLotto; i++) {
    lottos[i] = setLottoNumbers()
    Console.print(lottos[i]);
  }
  inputLottoNumber(lottos);
}

const inputLottoNumber = (lottos) => {
  let inputSixNumber;
  Console.readLine('당첨 번호를 입력해 주세요.\n', (num) => {
    inputSixNumber = num.toString().split(",").map((str) => Number(str));
    console.log(inputSixNumber);
    inputBonusLotto(inputSixNumber, lottos);
  })
}

const inputBonusLotto = (inputSixNumber, lottos) => {
  let inputBonusNumber;
  Console.readLine('보너스 번호를 입력해 주세요.\n', (num) => {
    inputBonusNumber = Number(num);
    inputSixNumber.push(inputBonusNumber);
    console.log(inputSixNumber);
    compareLotto(inputSixNumber, lottos);
  })
}

const compareLotto = (inputSixNumber, lottos) => {
  let checkLength = [];
  let last = inputSixNumber.pop();
  console.log(last);
  for (let i = 0; i < lottos.length; i++) {
    checkLength[i] = inputSixNumber.filter(num => lottos[i].includes(num)).length;
  }
  countScore(checkLength,lottos,last);
}

const countScore = (checkLength,lottos, last) => {
  let second = 0;
  for(let i = 0; i < lottos.length; i++){
    if (lottos[i].includes(last) && checkLength[i] === 4) {
      second++;
    }
  }
  let first = checkLength.filter(num => 6 === num).length;
  let third = checkLength.filter(num => 5 === num).length;
  let fourth = checkLength.filter(num => 4 === num).length;
  let fiveth = checkLength.filter(num => 3 === num).length;
  showCount(first,second,third,fourth,fiveth);
}

const showCount = (first, second, third, fourth, fiveth) => {
  Console.print("당첨 통계\n---");
  Console.print(`3개 일치 (5,000원) - ${fiveth}개`);
  Console.print(`4개 일치 (50,000원) - ${fourth}개`);
  Console.print(`5개 일치 (1,500,000원) - ${third}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${second}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${first}개`);
}

class App {
  play() {
    buyLotto();
  }
}

const app = new App();
app.play()

module.exports = App;
