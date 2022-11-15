const MissionUtils = require("@woowacourse/mission-utils");
const MyLotto = require("./MyLotto");
const Lotto = require("./Lotto");
const BonusNumber = require("./BonusNumber");

class App {
  money;
  myLotto;
  lotto;
  bonusNumber;
  result = {'1등': 0, '2등': 0, '3등': 0, '4등': 0, '5등': 0, 'none': 0}
  reward = {'1등': 2000000000, '2등': 30000000, '3등': 1500000, '4등': 50000, '5등': 5000, 'none': 0}

  play() {
    this.inputBuyLottoMoney();
  }

  inputBuyLottoMoney() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.validateIsNumber(money);

      this.money = parseInt(money);
      this.myLotto = new MyLotto(this.money);

      this.printLottoList(this.myLotto.getMyLottoList());

      this.inputLottoNumbers();
    });
  }

  inputLottoNumbers() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', (numbersString) => {
      let numbers = numbersString.split(',').map((number) => {
        this.validateIsNumber(number);
        return parseInt(number);
      })
      this.lotto = new Lotto(numbers);

      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.\n', (number) => {
      this.validateIsNumber(number);

      this.bonusNumber = new BonusNumber(parseInt(number), this.lotto.getLottoNumbers());

      this.checkAllLottoResult(this.myLotto.getMyLottoList(), this.lotto.getLottoNumbers(), this.bonusNumber.getBonusNumber());
    });
  }

  printLottoList(lottoList) {
    MissionUtils.Console.print(lottoList.length + '개를 구매했습니다.');
    for (const lotto of lottoList) {
      MissionUtils.Console.print(lotto);
    }
  }

  validateIsNumber(money) {
    if (isNaN(money)) {
      throw new Error("[ERROR] 숫자만 입력 가능합니다.");
    }
  }

  checkAllLottoResult(myLottoNumbersList, lottoNumbers, bonusNumber) {
    for (const myLottoNumbers of this.myLotto.getMyLottoList()) {
      let [lottoCount, bonus] = this.checkLottoResult(myLottoNumbers, lottoNumbers, bonusNumber);
      let rank = this.getRank(lottoCount, bonus)
      this.result[rank] += 1
      this.revenue += this.reward[rank]
    }
  }

  checkLottoResult(myLottoNumbers, lottoNumbers, bonusNumber) {
    let lottoCount = 0;
    for (const number of myLottoNumbers) {
      lottoCount += this.checkMatchingNumber(lottoNumbers, number)
    }
    let bonus = this.checkMatchingNumber(myLottoNumbers, bonusNumber)
    return [lottoCount, bonus];
  }

  checkMatchingNumber(lottoNumbers, number) {
    return lottoNumbers.includes(number);
  }

  getRank(lottoCount, bonus) {
    if (lottoCount === 3) {
      return '5등'
    }
    if (lottoCount === 4) {
      return '4등'
    }
    if (lottoCount === 5 && !bonus) {
      return '3등'
    }
    if (lottoCount === 5 && bonus) {
      return '2등'
    }
    if (lottoCount === 6) {
      return '1등'
    }
    return 'none'
  }
}

module.exports = App;
