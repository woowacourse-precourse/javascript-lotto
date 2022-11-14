const MissionUtils = require("@woowacourse/mission-utils");
const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require('./Lotto.js');

class App {

buyLotto() {
  let countLotto;
  let throwInput;
  let input;
  let numberReg = /^[0-9]+$/;
  Console.readLine('구입금액을 입력해 주세요.\n', (num) => {
    if(!numberReg.test(num)) throw '[ERROR] 숫자만 입력 가능합니다.';
    countLotto = Number(num) / 1000;
    throwInput = Number(num) % 1000;
    Console.print(`${countLotto}개를 구매했습니다.`);
    this.showLottoNumber(countLotto, throwInput);
  });
}

setLottoNumbers(){
  const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  const checkLotto = new Lotto(lottoNumber);
  checkLotto.checkNum();
  lottoNumber.sort(function (a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });
  return lottoNumber;
}

showLottoNumber(countLotto, throwInput){
  let lottos = [];
  if (throwInput > 0) throw '[ERROR] 금액은 1,000원 단위로 입력해주세요';
  for (let i = 0; i < countLotto; i++) {
    lottos[i] = this.setLottoNumbers();
    Console.print(lottos[i]);
  }
  this.inputLottoNumber(lottos);
}

inputLottoNumber(lottos){
  let inputSixNumber;
  Console.readLine('당첨 번호를 입력해 주세요.\n', (num) => {
    inputSixNumber = num.toString().split(",").map((str) => Number(str));
    console.log(inputSixNumber);
    const lottoCheck = new Lotto(inputSixNumber);
    lottoCheck.checkNum();
    lottoCheck.checkOther(inputSixNumber);
    // const lengthThrow = new Set(inputSixNumber);
    // const uniqueNumber = [...lengthThrow];
    // if(uniqueNumber.length != inputSixNumber.length) throw '[ERROR] 중복된 로또 번호가 있습니다.';
    // console.log(uniqueNumber);
    this.inputBonusLotto(inputSixNumber, lottos);
  });
}

inputBonusLotto(inputSixNumber, lottos){
  let inputBonusNumber;
  Console.readLine('보너스 번호를 입력해 주세요.\n', (num) => {
    inputBonusNumber = Number(num);
    inputSixNumber.push(inputBonusNumber);
    console.log(inputSixNumber);
    this.compareLotto(inputSixNumber, lottos);
  });
}

compareLotto(inputSixNumber, lottos){
  let checkLength = [];
  let last = inputSixNumber.pop();
  console.log(last);
  for (let i = 0; i < lottos.length; i++) {
    checkLength[i] = inputSixNumber.filter(num => lottos[i].includes(num)).length;
  }
  this.countScore(checkLength,lottos,last);
}

countScore(checkLength,lottos,last){
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
  this.showCount(first,second,third,fourth,fiveth,lottos);
}

showCount(first, second, third, fourth, fiveth,lottos){
  Console.print("당첨 통계\n---");
  Console.print(`3개 일치 (5,000원) - ${fiveth}개`);
  Console.print(`4개 일치 (50,000원) - ${fourth}개`);
  Console.print(`5개 일치 (1,500,000원) - ${third}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${second}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${first}개`);
  let fivethMoney = fiveth * 5000;
  let fourthMoney = fourth * 50000;
  let thirdMoney = third * 1500000;
  let secondMoney = second * 30000000;
  let firstMoney = first * 2000000000;
  this.plusRate(fivethMoney,fourthMoney,thirdMoney,secondMoney,firstMoney,lottos);
}

plusRate(first, second, third, fourth, fiveth,lottos){
  let allPlus = first + second + third + fourth + fiveth;
  let lottoLength = lottos.length;
  let returnRate = (allPlus/lottoLength)/10;
  Console.print(`총 수익률은 ${returnRate.toFixed(1)}%입니다.`);
}


play() {
    this.buyLotto();
  }
}

module.exports = App;
