const MissionUtils = require("@woowacourse/mission-utils");
const MyLotto = require("./MyLotto");
const Lotto = require("./Lotto");

class App {
  money;
  myLotto;

  play() {
    this.inputBuyLottoMoney();
  }

  inputBuyLottoMoney() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.validateIsNumber(money);

      this.money = parseInt(money);
      this.myLotto = new MyLotto(this.money);

      this.printLottoList(this.myLotto.getMyLottoList());
    });
  }

  inputLottoNumbers() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', (numbersString) => {
      let numbers = numbersString.split(',').map((number) => {
        this.validateIsNumber(number);
        return parseInt(number);
      })
      this.lotto = new Lotto(numbers);
    });
  }

  validateIsNumber(money) {
    if (isNaN(money)) {
      throw new Error("[ERROR] 숫자만 입력 가능합니다.");
    }
  }

  printLottoList(lottoList) {
    MissionUtils.Console.print(lottoList.length + '개를 구매했습니다.');
    for (const lotto of lottoList) {
      MissionUtils.Console.print(lotto);
    }
  }

}

module.exports = App;
