const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");
class App {
  price;
  auto;
  manual;
  bonus;

  // 유저가 낸 금액 입력받는 메서드
  userPaid() {
    MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요.",
      (userInputAmount) => {
        if (this.userPaidValid(userInputAmount)) {
          this.price = userInputAmount;
          this.userLottoNum(this.price);
          this.inputLottoNum();
          // MissionUtils.Console.print(`${price / 1000}개를 구매했습니다.`);
          // return price;
        }
      }
    );
  }

  // 유저가 낸 금액 확인하는 메서드
  userPaidValid(userInputAmount) {
    for (let i = 0; i < userInputAmount.length; i++) {
      if (isNaN(parseInt(userInputAmount[i]))) {
        throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.");
      }
    }
    if (userInputAmount % 1000 || userInputAmount < 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.");
    }
    return true;
  }

  // 로또 번호 자동 생성
  lottoAuto() {
    let autoLottoNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    autoLottoNum.sort((a, b) => a - b);
    return autoLottoNum;
  }

  // 유저가 입력한 금액의 개수만큼 로또 번호를 출력하는 메서드
  userLottoNum(userPrice) {
    let userLottoNum = [];
    const gameTime = parseInt(userPrice / 1000);
    MissionUtils.Console.print(`${gameTime}개를 구매했습니다.`);
    for (let i = 0; i < gameTime; i++) {
      userLottoNum.push(this.lottoAuto());
      let result = this.arrayToString(userLottoNum[i]);
      MissionUtils.Console.print(result);
    }
    this.auto = userLottoNum;
  }

  arrayToString(arr) {
    let result = "[";
    for (let i = 0; i < arr.length; i++) {
      result += arr[i] + ", ";
    }
    // result = result.trim();
    result = result.slice(0, -2);
    result += "]";
    return result;
  }

  //당첨 로또 번호 입력받는 메서드
  inputLottoNum() {
    MissionUtils.Console.readLine(
      "당첨 번호를 입력해 주세요.",
      (inputLottoNum) => {
        let inputLotto = inputLottoNum.split(",");
        let NEW_LOTTO = new Lotto(inputLotto);
        this.manual = NEW_LOTTO.manual();
        this.inputBonusLottoNum();
      }
    );
  }

  //당첨 보너스 번호 입력받는 메서드
  inputBonusLottoNum() {
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.",
      (inputBonus) => {
        if (this.bonusValid(inputBonus)) {
          this.bonus = Number(inputBonus);
          this.lottoResult();
        }
      }
    );
  }

  bonusValid(inputBonus) {
    if (isNaN(inputBonus)) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
    if (inputBonus < 0 || inputBonus > 46) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자입니다.");
    }
    if (this.manual.includes(inputBonus)) {
      throw new Error("[ERROR] 보너스 번호는 로또 번호와 중복돼서는 안됩니다.");
    }
    return true;
  }

  //당첨 통계
  lottoResult() {
    let won = new Array(8).fill(0);
    let lottoPrize = [5000, 50000, 1500000, 2000000000, 30000000];
    for (let i = 0; i < this.auto.length; i++) {
      won[this.calculateLotto(i)] += 1;
    }
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${won[3]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${won[4]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${won[5]}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${won[7]}개`
    );
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${won[6]}개`);
    MissionUtils.Console.print(
      `총 수익률은 ${this.winnings(lottoPrize, won)}%입니다.`
    );
  }

  winnings(lottoPrize, won) {
    let winnings = 0;
    for (let i = 0; i < 5; i++) {
      winnings += lottoPrize[i] * won[i + 3];
    }
    if (winnings !== 0) winnings = ((winnings / this.price) * 100).toFixed(1);
    return winnings;
  }

  calculateLotto(num) {
    let count = 0;
    for (let i = 0; i < 6; i++) {
      if (this.auto[num].includes(this.manual[i])) {
        count++;
      }
    }
    if (count === 5) {
      if (this.auto[num].includes(this.bonus)) {
        count += 2;
      }
    }
    return count;
  }

  play() {
    this.userPaid();
  }
}

module.exports = App;
