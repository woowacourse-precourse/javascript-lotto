const MissionUtils = require("@woowacourse/mission-utils");
const GenerateLottoNum = require("./generateLottoNum");
const IsResult = require("./isResult");
const Lotto = require("../Lotto");

class IsLottoGame {
  GenerateLottoNum = {};
  isResult = [];
  winningNum = [];
  bonusNum = null;
  userLotto = [];
  userCost = 0;

  constructor() {
    this.GenerateLottoNum = new GenerateLottoNum();
  }
  createStart() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (userCost) => {
      if (isNaN(userCost)) throw new Error("[ERROR] 올바른 숫자를 입력해 주세요.");
      const money = parseInt(userCost);
      if (money % 1000 !== 0 || money === 0) throw new Error("[ERROR] 1,000원 단위로 구매해야 합니다.");

      this.userCost = userCost;
      this.lottoBuy(userCost);
    });
  }

  lottoBuy(lottoCost) {
    const [lottoCount, lottoArr] = this.GenerateLottoNum.lottoDetail(lottoCost);
    MissionUtils.Console.print("");
    MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
    lottoArr.map((lotto) => {
      MissionUtils.Console.print(new Lotto(lotto).toString())});
    this.userLotto = lottoArr;
    this.sayWinning();
  }

  sayWinning() {
    MissionUtils.Console.print("");
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (userInput) => {
        const numbers = userInput.split(",").map((number) => {
          if (number < 1 || number > 45) throw new Error( "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
          return parseInt(number);
        });
        new Lotto(numbers);
        this.winningNum = numbers;
        this.sayBonus();
      }
    );
  }
  sayBonus() {
    MissionUtils.Console.print("");
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.\n",(userInput) => {
        if (isNaN(userInput)) throw new Error("[ERROR] 보너스 번호의 형식이 올바르지 않습니다.");
        const number = parseInt(userInput);
        if (number < 1 || number > 45) throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
        if (this.winningNum.includes(number)) throw new Error("[ERROR] 보너스 번호가 입력한 당첨 번호에 있습니다.");
        this.bonusNum = number;
        this.isResult = new IsResult(this.userLotto,this.winningNum,this.bonusNum,this.userCost);
        this.isResult.resultProcess();
      }
    );
  }
}

module.exports = IsLottoGame;
