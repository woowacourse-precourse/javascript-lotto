const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto.js");

class App {
  play() {
    inputPurchaseAmount();
  }

  setPurchaseAmount(purchaseAmount) {
    this.purchaseAmount = purchaseAmount;
  }

  setCandidateNumbers(candidateNumbers) {
    this.candidateNumbers = candidateNumbers;
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
  if (purchaseAmount % 1000 !== 0 || parseInt(purchaseAmount / 1000) === 0) {
    throw new Error("[ERROR] 로또 구입 금액은 1000의 배수여야 합니다.");
  }
  makeCandidateNumberSets(purchaseAmount);
}

function makeCandidateNumberSets(purchaseAmount) {
  app.setPurchaseAmount(purchaseAmount)
  const purchase = parseInt(purchaseAmount/1000)
  MissionUtils.Console.print(`${purchase}개를 구매했습니다.`);
  let candidateNumberSets = [];
  for (let i = 0; i < purchase; i++) {
    candidateNumberSets.push(makeCandidateNumber());
  }
  printCandidateNumberSets(candidateNumberSets);
  app.setCandidateNumbers(candidateNumberSets);
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
      const winningNumbers = inputNumbers.split(",").map((x) => parseInt(x));
      const lotto = new Lotto(winningNumbers, null, app.candidateNumbers, app.purchaseAmount);
      inputBonusNumber(winningNumbers, lotto);
    }
  );
}

function inputBonusNumber(winningNumbers, lotto) {
  MissionUtils.Console.readLine(
    "보너스 번호를 입력해 주세요.\n",
    (bonusNumber) => {
      lotto.setBonusNumber(winningNumbers, parseInt(bonusNumber));
    }
  );
}

module.exports = App;

const app = new App();
app.play();
