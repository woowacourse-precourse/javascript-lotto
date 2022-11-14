const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto.js");

class App {
  play() {
    this.inputPurchaseAmount();
  }

  setPurchaseAmount(purchaseAmount) {
    this.purchaseAmount = purchaseAmount;
  }

  setWinningNumbers(winningNumbers) {
    this.winningNumbers = winningNumbers;
  }

  setBonusNumber(bonusNumber) {
    this.setBonusNumber = bonusNumber;
  }

  setCandidateNumbers(candidateNumbers) {
    this.candidateNumbers = candidateNumbers;
  }

  inputPurchaseAmount() {
    MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요.\n",
      (purchaseAmount) => {
        this.is1000Multiple(purchaseAmount);
      }
    );
  }

  is1000Multiple(purchaseAmount) {
    // console.log("is1000Multiple");
    if (purchaseAmount % 1000 !== 0 || parseInt(purchaseAmount / 1000) === 0) {
      throw new Error("[ERROR] 로또 구입 금액은 1000의 배수여야 합니다.");
    }
    this.makeCandidateNumberSets(purchaseAmount);
  }

  makeCandidateNumberSets(purchaseAmount) {
    // console.log("makeCandidateNumberSets");
    this.setPurchaseAmount(purchaseAmount);
    const purchase = parseInt(purchaseAmount / 1000);
    MissionUtils.Console.print(`${purchase}개를 구매했습니다.`);
    let candidateNumberSets = [];
    for (let i = 0; i < purchase; i++) {
      candidateNumberSets.push(this.makeCandidateNumber());
    }
    this.setCandidateNumbers(candidateNumberSets);
    this.printCandidateNumberSets(candidateNumberSets);
  }

  makeCandidateNumber() {
    const candidateNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      45,
      6
    );
    return candidateNumbers.sort(this.sortNumbers);
  }

  printCandidateNumberSets(candidateNumberSets) {
    candidateNumberSets.forEach((eachSets) => {
      MissionUtils.Console.print(`[${eachSets.join(", ")}]`);
    });
    this.inputWinningNumbers();
  }

  sortNumbers(a, b) {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  }

  inputWinningNumbers() {
    // console.log("inputWinningNumbers");
    MissionUtils.Console.readLine(
      "당첨 번호를 입력해 주세요.\n",
      (inputNumbers) => {
        const winningNumbers = inputNumbers.split(",").map((x) => parseInt(x));
        this.setWinningNumbers(winningNumbers);
        const lotto = new Lotto(winningNumbers);
        this.inputBonusNumber(lotto);
      }
    );
  }

  inputBonusNumber(lotto) {
    // console.log("inputBonusNumber");
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.\n",
      (bonusNumber) => {
        this.setBonusNumber(parseInt(bonusNumber));
        lotto.validateBonus(
          parseInt(bonusNumber),
          this.candidateNumbers,
          this.purchaseAmount
        );
        MissionUtils.Console.close();
      }
    );
  }
}

module.exports = App;
