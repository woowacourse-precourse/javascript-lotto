const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  #lottos // Array[Lotto]
  constructor() {
    this.#lottos = []
  }
  
  play() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", money => {
      if (money % 1000 !== 0) throw new Error("[ERROR] 천 원 단위로 넣어주세요.")
      this.money = money;
      MissionUtils.Console.print(`${money / 1000}개를 구매했습니다.`);
      this.makeUserLotto(); 
      this.makeWinningLotto(); 
    });
  }

  makeUserLotto() {
    for (let i = 0; i < this.money / 1000; i++) {
      let randomArr = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      let lotto = new Lotto(randomArr.sort((a, b) => a - b));
      MissionUtils.Console.print(`[${lotto.numbers.join(", ")}]`);
      this.#lottos.push(lotto)
    }
  }

  makeWinningLotto() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", winningLotto => {
      winningLotto = winningLotto.split(",").map(Number);
      this.winningLottoArr = [this.winningLottoValidate(winningLotto)]; 
      MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", winningLottoBonus => {
        winningLottoBonus = +winningLottoBonus;
        this.winningLottoArr.push(this.winningLottoBonusValidate(winningLottoBonus)) //뒤에 예외처리하기
        //여기에 랜덤번호랑 당첨번호랑 비교해서 결과 내보내는 함수 입력하기
        MissionUtils.Console.close();
      });
    });
  }

  winningLottoValidate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    numbers.forEach(x => {
      if (x < 1 || x > 45) throw new Error("[ERROR] 로또 번호는 0보다 크고 46보다 작아야 합니다.");
    })
    let set = new Set(numbers);
    if (set.size !== 6) throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.")
    return numbers
  }

  winningLottoBonusValidate(num) {
    if (num < 1 || num > 45) {
      throw new Error("[ERROR] 로또 번호는 0보다 크고 46보다 작아야 합니다.");
    }
    if (this.winningLottoArr[0].indexOf(num) !== -1) {
      throw new Error("[ERROR] 보너스 번호는 로또번호와 중복되지 않아야 합니다.")
    }
    return num
  }
  
}

module.exports = App;
