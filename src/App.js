const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto.js");

class App {
  constructor() {
    this.winningNumbers = [];
  }

  play() {
    inputPurchaseAmount();
  }

  setWinningNumbers(winningNumbers) {
    this.winningNumbers = winningNumbers;
  }
}

function inputPurchaseAmount() {
  MissionUtils.Console.readLine(
    "구입금액을 입력해 주세요.\n",
    (purchaseAmount) => {
      is1000Multiple(purchaseAmount);
    }
  );
}

function is1000Multiple(purchaseAmount) {
  if (purchaseAmount % 1000 !== 0) {
    throw new Error("[ERROR] 로또 구입 금액은 1000의 배수여야 합니다.");
  }
  makeCandidateNumberSets(parseInt(purchaseAmount / 1000));
}

function makeCandidateNumberSets(purchaseNumber) {
  MissionUtils.Console.print(`${purchaseNumber}개를 구매했습니다.`);
  let candidateNumberSets = [];
  for (let i = 0; i < purchaseNumber; i++) {
    candidateNumberSets.push(makeCandidateNumber());
  }
  printCandidateNumberSets(candidateNumberSets);
}

function makeCandidateNumber() {
  const candidateNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
    1,
    45,
    6
  );
  return candidateNumbers.sort(sortNumbers);
}

function printCandidateNumberSets(candidateNumberSets) {
  candidateNumberSets.forEach((eachSets) => {
    MissionUtils.Console.print(eachSets);
  });
  inputWinningNumbers();
}

function sortNumbers(a, b) {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }
}

function inputWinningNumbers() {
  MissionUtils.Console.readLine(
    "당첨 번호를 입력해 주세요.\n",
    (inputNumbers) => {
      const winningNumbers = inputNumbers.split(',').map(x => parseInt(x))
      app.setWinningNumbers(winningNumbers);
    }
  );
}

module.exports = App;

const app = new App();
app.play();
