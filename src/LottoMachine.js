const MissionUtils = require("@woowacourse/mission-utils");
const RandomNumberGenerator = require("./RandomNumberGenerator");
const PrintResult = require("./PrintResult");
const ErrorList = require("./ErrorList");
const Lotto = require("./Lotto");

class LottoMachine {
  MONEY = 0;
  LOTTO_ARRAY = [];
  WIN_LOTTO_ARRAY = [];
  BONUS_LOTTO_ARRAY = [];

  constructor() {
    this.ErrorList = new ErrorList();
    this.RandomNumberGenerator = new RandomNumberGenerator();
    this.PrintResult = new PrintResult();
  }

  insertMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.ErrorList.checkMoney(money) && this.checkTickets(money);
    });
  }

  checkTickets(money) {
    const LOTTO_TICKETS = money / 1000;
    this.MONEY = money;
    MissionUtils.Console.print(`\n${LOTTO_TICKETS}개를 구매했습니다.`);
    return this.makeLotto(LOTTO_TICKETS);
  }

  makeLotto(LOTTO_TICKETS) {
    let whileCount = 0;
    while (whileCount < LOTTO_TICKETS) {
      const LOTTO = new Lotto(this.RandomNumberGenerator.randomNumber());
      LOTTO.printLottoNumber();
      this.LOTTO_ARRAY.push(LOTTO);
      whileCount += 1;
    }
    return this.winLottoNumber();
  }

  winLottoNumber() {
    MissionUtils.Console.readLine(
      "\n당첨 번호를 입력해 주세요.\n",
      (winNumber) => {
        this.WIN_LOTTO_ARRAY = winNumber.split(",");
        this.ErrorList.errorCheckLottoSixNumber(this.WIN_LOTTO_ARRAY) &&
          this.winLottoBonusNumber();
      }
    );
  }
  winLottoBonusNumber() {
    MissionUtils.Console.readLine(
      "\n보너스 번호를 입력해 주세요.\n",
      (bonusNumber) => {
        this.BONUS_LOTTO_ARRAY.push(bonusNumber);
        this.ErrorList.errorCheckLottoBonusNumber(
          this.WIN_LOTTO_ARRAY,
          this.BONUS_LOTTO_ARRAY
        ) && this.checkWinLotto();
      }
    );
  }

  checkWinLotto() {
    this.LOTTO_ARRAY.forEach((lotto) => {
      const LOTTERY_RANKING = lotto.lotteryCheck(
        this.WIN_LOTTO_ARRAY,
        this.BONUS_LOTTO_ARRAY
      );
      this.PrintResult.lottoStatistics(LOTTERY_RANKING);
    });
    return this.PrintResult.printResult(this.MONEY);
  }
}

module.exports = LottoMachine;
