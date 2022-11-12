const Validation = require("./Validation.js");
const MissionUtils = require("@woowacourse/mission-utils");
const QuestionText = Object.freeze({
  inputText: "구입금액을 입력해 주세요.",
  bonusText: "보너스 번호를 입력해 주세요.",
  resultText: "당첨 번호를 입력해 주세요.",
});

class LottoBuild {
  setTargetLength(length) {
    //함수 중간함수를 통해 숫자를 전달
    this.setTargetLength = length;
    return this;
  }
  build() {
    return new Game(this.setTargetLength);
  }
}
class Game {
  constructor(targetLength) {
    this.buyingPrice;
    this.targetLength = targetLength;
    this.target = undefined; //무엇을 위한 target ..?
    this.io = MissionUtils.Console;
    this.CreateNum;
    this.lottoNum = []; //당첨숫자
    this.bonuslottoNum = []; //보너스숫자
    this.commonNum = []; //공통숫자
    this.scoreArray = { "1등": 0, "2등": 0, "3등": 0, "4등": 0, "5등": 0 };
    this.totalValue;
    // this.validation = new Validation(this.targetLength); //Validation 거르기
  }
  play() {
    this.start(QuestionText.inputText, this.onGame); // (구입금액을 입력해 주세요., 본게임)
    //로또 구입 금액을 입력 받는다. 구입 금액은 1,000원 단위로 입력 받으며 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.
  }
  start(text, callback) {
    this.onInput(text, callback);
  }
  onInput(text, callback) {
    this.io.print(text);
    this.io.readLine("", callback.bind(this)); //this가 onGame인자로 들어감
  }
  validate(input) {
    if (input % 1000 > 0) {
      throw new Error("[ERROR] 입력금액 단위는 1,000입니다. ");
    }
    return input;
  }
  validate2(input, n) {
    let result = [];
    console.log(input.split(","));
    console.log(n);
    if (input.split(",").length !== n) {
      throw new Error("[ERROR] 숫자 6개를 , 로 구분해주세요 ");
    }
    result = input.split(",");
    for (let i = 0; i < result.length; i++) {
      //형변환
      result[i] = Number(result[i]);
    }
    if (result.includes(NaN) == true) {
      throw new Error("숫자로만 입력하세요");
    }
    let splitArray = input.split(",");
    // console.log(splitArray);
    const setCollection = new Set(splitArray);
    // console.log(setCollection);
    const isDuplicate = setCollection.size < splitArray.length;
    // console.log(isDuplicate);
    if (isDuplicate) {
      throw new Error("중복된값");
    }

    return result;
  }

  RadomSet() {
    const computer = [];
    while (computer.length < this.targetLength) {
      //6자리생성
      const number = MissionUtils.Random.pickNumberInRange(1, 45);
      if (!computer.includes(number)) computer.push(Number(number));
    }
    return computer;
  }
  ResultedNum(input) {
    // 당첨숫자
    console.log(); //띄어쓰기 있으면
    if (input.includes(" ")) {
      input = input.replace(/ /gi, "");
    }
    this.validate2(input, 6);
    this.start(QuestionText.bonusText, this.ResultedBonusNum); //보너스 번호를 입력해 주세요.
    this.lottoNum += input;
  }
  ResultedBonusNum(input) {
    //보너스숫자
    if ([Number(input)].includes(NaN) == true) {
      throw new Error("숫자로만 입력하세요");
    }

    this.bonuslottoNum += input; //보너스 숫자를 당첨숫자배열에 추가
    this.lottoNum += "," + input; //보너스 숫자를 당첨숫자배열에 추가

    this.commonNum = this.CommonResult(this.lottoNum, this.CreateNum);
    this.viewResult(this.commonNum);
  }
  onGame(input) {
    this.validate(input);
    this.buyingPrice = input;
    let buyingNum = input / 1000;
    this.CreateNum = this.buyingLotto(buyingNum); //n개
    this.start(QuestionText.resultText, this.ResultedNum); //당첨 번호를 입력해 주세요
  }
  buyingLotto(num) {
    //로또 구매후 구매만큼 랜덤숫자 출력
    this.io.print(`${num}개를 구매했습니다.`);
    let result = [];
    let count = 0;
    for (let i = 0; i < num; i++) {
      result[count++] = this.RadomSet().sort((a, b) => a - b);
    }
    return result;
  }
  CommonResult(loNum, creNum) {
    console.log("loNum : ", loNum);
    //공통숫자 출력
    this.validate2(loNum, 7);
    // 교집합(Intersection)
    let result = [];
    for (let i of creNum) {
      result.push(i.filter((x) => loNum.includes(x)));
    }
    return result;
  }

  ROEcalc(score) {
    let result = [];
    result.push(score["1등"] * 2000000000);
    result.push(score["2등"] * 30000000);
    result.push(score["3등"] * 1500000);
    result.push(score["4등"] * 50000);
    result.push(score["5등"] * 5000);
    let totalValue = result.reduce(function (accumulator, currentValue, index) {
      // console.log(`*****${index}번째 index*****`);
      // console.log(`accumulator : ${accumulator}`);
      // console.log(`currentValue : ${currentValue}`);
      // console.log("\n");
      return accumulator + currentValue;
    });
    this.totalValue = totalValue;
    let calValue = (this.totalValue / this.buyingPrice) * 100;
    calValue = Math.round(calValue * 10) / 10;
    this.io.print(`총 수익률은 ${calValue}%입니다.`);
  }
  viewResult(commonNum) {
    let bonusCorret = false;
    if (commonNum.includes(this.bonuslottoNum) == true) bonusCorret = true;
    for (let i of commonNum) {
      if (i.length == 6) this.scoreArray["1등"] += 1;
      if (i.length == 5 && bonusCorret) this.scoreArray["2등"] += 1;
      if (i.length == 5) this.scoreArray["3등"] += 1;
      if (i.length == 4) this.scoreArray["4등"] += 1;
      if (i.length == 3) this.scoreArray["5등"] += 1;
    }
    this.io.print(`당첨 통계
3개 일치 (5,000원) -${this.scoreArray["5등"]}개
4개 일치 (50,000원) - ${this.scoreArray["4등"]}개
5개 일치 (1,500,000원) - ${this.scoreArray["3등"]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.scoreArray["2등"]}개
6개 일치 (2,000,000,000원) - ${this.scoreArray["1등"]}개`);
    this.ROEcalc(this.scoreArray);
  }
}
module.exports = LottoBuild;
