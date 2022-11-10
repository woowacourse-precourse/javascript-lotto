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
    this.lottoNum = []; //빈배열 무엇을위한 ..?
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
    this.validate2(input, 6);
    this.start(QuestionText.bonusText, this.ResultedBonusNum);
    this.lottoNum += input;
  }
  ResultedBonusNum(input) {
    //보너스숫자
    if ([Number(input)].includes(NaN) == true) {
      throw new Error("숫자로만 입력하세요");
    }
    this.lottoNum += "," + input;
    this.scoreResult(this.lottoNum, this.CreateNum);
  }
  onGame(input) {
    this.validate(input);
    let buyingNum = input / 1000;
    console.log(buyingNum);
    this.CreateNum = this.buyingLotto(buyingNum); //n개
    this.start(QuestionText.resultText, this.ResultedNum);
  }
  buyingLotto(num) {
    this.io.print(`${num}개를 구매했습니다.`);
    let result = [];
    let count = 0;
    for (let i = 0; i < num; i++) {
      result[count++] = this.RadomSet().sort((a, b) => a - b);
    }
    console.log(...result);
    return result;
  }

  scoreResult(loNum, creNum) {
    let newLoNum = this.validate2(loNum, 7);
    console.log(newLoNum);
    for (let i = 0; i < loNum.length; i++) {}
  }
}
module.exports = LottoBuild;
