const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
class App {
  // 유저가 낸 금액
  userPaid() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (userInput) => {
      if (this.userPaidValid(userInput)) {
        let userPrice = userInput;
        MissionUtils.Console.print(
          `${Number(userPrice) / 1000}개를 구매했습니다.`
        );
        // this.userLottoNum(userPrice);
        return userPrice;
      }
    });
  }

  //당첨 로또 번호
  inputLottoNum() {
    const inputLotto = [];
    MissionUtils.Console.readLine(
      "당첨 번호를 입력해 주세요.",
      (inputLottoNum) => {
        inputLotto.push(inputLottoNum);
        const inputLottoResult = Lotto.validate(inputLotto);
        this.inputBonusLottoNum();
        MissionUtils.Console.close();
      }
    );
    return inputLotto;
  }

  //당첨 보너스 로또 번호
  inputBonusLottoNum() {
    let bonus;
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (bonus) => {
      if (bunusValid(Number(bonus))) {
        bonus = Number(bonus);
        MissionUtils.Console.print(bonus);
      }
    });
    return bonus;
  }

  bunusValid(bonus) {
    if (isNaN(bonus)) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
    if (bonus < 0 || bonus > 46) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자입니다.");
    }
    if (inputLottoResult.inclue(bonus)) {
      throw new Error("[ERROR] 보너스 번호는 로또 번호와 중복되서는 안됩니다.");
    }
    return true;
  }

  //당첨 통계
  lottoResult(bonus) {
    let won = new Array(8).fill(0);
    let lottoPrize = [5000, 50000, 1500000, 2000000000, 30000000];
    for (let i = 0; i < userLottoNum.length; i++) {
      won[this.calculateLotto(i, bonus)] += 1;
    }
    MissionUtils.Console.print("당첨 통계\n---");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${won[3]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${won[4]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${won[5]}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${won[7]}개`
    );
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${won[6]}개`);
    MissionUtils.Console.print(
      `총 수익률은 ${winnings(lottoPrize, won)}%입니다.`
    );
  }

  winnings(lottoPrize, won) {
    let winnings = 0;
    for (let i = 0; i < 5; i++) {
      winnings += lottoPrize[i] * won[i + 3];
    }
    winnings = ((winnings / won) * 100).toFixed(1);
    return winnings;
  }

  calculateLotto(number, bonus) {
    let count = 0;
    for (let i = 0; i < 6; i++) {
      if (this.userLottoNum[number].includes(inputLotto[i])) {
        count++;
      }
    }
    if (count === 5) {
      if (this.userLottoNum[number].includes(bonus)) {
        count += 2;
      }
    }
    return count;
  }

  // 유저가 낸 금액 확인하는 메서드
  userPaidValid(userInput) {
    if (userInput % 1000 || userInput < 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.");
    }
  }

  // 당첨 번호
  userLottoNum(userPrice) {
    const userLottoNum = [];
    const gameTime = Number(userPrice) / 1000;
    for (let i = 0; i < gameTime; i++) {
      userLottoNum.push(this.lottoAuto());
      MissionUtils.Console.print(userLottoNum);
    }
    return userLottoNum;
  }

  // 로또 번호 자동 생성
  lottoAuto() {
    const autoLottoNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    autoLottoNum.sort((a, b) => a - b);
    return autoLottoNum;
  }

  play() {
    let userPaid = this.userPaid();
    let userLottoNum = this.userLottoNum(userPaid);
    let inputLottoNum = this.inputLottoNum();
    let inputBonusLottoNum = this.inputBonusLottoNum();
    let lottoResult = this.lottoResult(inputBonusLottoNum);
  }
}

module.exports = App;
