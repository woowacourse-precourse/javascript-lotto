const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");

class App {
  price;
  auto;
  manual;
  bonus;

  purchasePrice() { // 구입 금액을 입력받는 메서드
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (price) => {
      if (this.checkPrice(price)) {
        this.price = price;
        this.autoLotto(price);
        this.manualLotto();
      }
    })
  }

  checkPrice(price) { // 구입 금액이 조건에 맞게 입력했는지 확인하는 메서드
    for (let i = 0; i < price.length; i++) {
      if (isNaN(parseInt(price[i]))) {
        throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.");
      }
    }
    if ((Number(price) === 0) || (price % 1000 !== 0)) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.");
    }
    return true;
  }

  lottoGame() { // 1부터 45까지의 숫자 중 6개를 자동으로 고르고 오름차순으로 정렬하는 메서드
    const LOTTO_RESULT = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    LOTTO_RESULT.sort((a, b) => {
      return a - b;
    });
    return LOTTO_RESULT;
  }

  autoLotto(price) { // 입력한 금액의 개수만큼 로또 번호를 출력하는 메서드
    const LOTTO_AUTO = [];
    const GAME_NUMBER = parseInt(price / 1000);
    MissionUtils.Console.print(`\n${GAME_NUMBER}개를 구매했습니다.`);
    for (let i = 0; i < GAME_NUMBER; i++) {
      LOTTO_AUTO.push(this.lottoGame());
      MissionUtils.Console.print(this.printFormat(LOTTO_AUTO[i]));
    }
    this.auto = LOTTO_AUTO;
  }

  printFormat(lotto) { // 발행한 로또를 형식에 맞게 출력하는 메서드
    let result = '[';
    for (let i = 0; i < 6; i++) {
      if (i === 5) {
        result += `${lotto[i]}`;
      } else {
        result += `${lotto[i]}, `;
      }
    }
    result += ']';
    return result;
  }

  manualLotto() { // 당첨 번호를 입력 받고 유효성을 확인하는 메서드
    MissionUtils.Console.readLine('\n당첨 번호를 입력해 주세요.\n', (manual) => {
      const NUMBERS = manual.split(',');
      const NEW_LOTTO = new Lotto(NUMBERS);
      this.manual = NEW_LOTTO.manual();
      this.bonusNumber();
    })
  }

  bonusNumber() { // 보너스 번호를 입력받는 메서드
    MissionUtils.Console.readLine('\n보너스 번호를 입력해 주세요.\n', (bonus) => {
      if (this.checkBonus(bonus)) {
        this.bonus = parseInt(bonus);
        this.lottoResult();
        MissionUtils.Console.close();
      }
    })
  }

  checkBonus(number) { // 보너스 번호의 유효성을 판단하는 메서드
    if ((isNaN(number)) || (!Number.isInteger(Number(number)))) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    } else if ((parseInt(number) < 1) || (45 < parseInt(number))) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    } else if (this.manual.includes(parseInt(number))) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 다른 숫자여야 합니다.");
    }
    return true;
  }

  lottoResult() { // 당첨 내역을 확인하고 수익률을 출력하는 메서드
    let prize = new Array(8).fill(0);
    const LOTTO_PRIZE = [5000, 50000, 1500000, 2000000000, 30000000];
    for (let i = 0; i < this.auto.length; i++) {
      prize[this.compareLotto(i)] += 1;
    }
    MissionUtils.Console.print('\n당첨 통계\n---');
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${prize[3]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${prize[4]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${prize[5]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${prize[7]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${prize[6]}개`);
    MissionUtils.Console.print(`총 수익률은 ${this.lottoyield(LOTTO_PRIZE, prize)}%입니다.`);
  }

  lottoyield(LOTTO_PRIZE, prize) { // 로또의 수익률을 계산하는 메서드
    let lottoyield = 0;
    for (let i = 0; i < 5; i++) {
      lottoyield += LOTTO_PRIZE[i] * prize[i + 3];
    }
    if (lottoyield !== 0) {
      lottoyield = ((lottoyield / this.price) * 100).toFixed(1);
    }
    return lottoyield;
  }

  compareLotto(num) { // 각 로또에 대해 당첨번호와 몇개가 일치하는지 확인하는 메서드
    let count = 0;
    for (let i = 0; i < 6; i++) {
      if (this.auto[num].includes(this.manual[i])) {
        count += 1;
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
    this.purchasePrice();
  }
}

module.exports = App;