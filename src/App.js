const LottoDrawer = require('./Components/LottoDrawer/LottoDrawer');
const LottoNumbersValidator = require('./Components/LottoNumbersValidator/LottoNumbersValidator');
const LottoNumberValidator = require('./Components/LottoNumberValidator/LottoNumberValidator');
const LottoSeller = require('./Components/LottoSeller/LottoSeller');
const UserInterface = require('./Components/UserInterface/UserInterface');
const UserMoney = require('./Components/UserMoney/UserMoney');

class App {
  lottoNumbersValidator = LottoNumbersValidator;
  lottoNumberValidator = LottoNumberValidator;
  userInterface = new UserInterface();
  lottoDrawer;
  lottos;
  lottoNumbers;
  bonusNumber;
  money;

  play() {
    const INPUT_MONEY_MESSAGE = '구입금액을 입력해 주세요.\n';
    const INPUT_LOTTO_NUMBERS_MESSAGE = '\n당첨 번호를 입력해 주세요.\n';
    const INPUT_BONUS_NUMBER_MESSAGE = '\n보너스 번호를 입력해 주세요.\n';

    this.userInterface.chainInput([
      [INPUT_MONEY_MESSAGE, this.buyLotto.bind(this)],
      [null, this.viewLottos.bind(this)],
      [INPUT_LOTTO_NUMBERS_MESSAGE, this.setLottoNumbers.bind(this)],
      [INPUT_BONUS_NUMBER_MESSAGE, this.setBonusNumber.bind(this)],
      [null, this.viewTotalResult.bind(this)],
    ]);
  }

  buyLotto(amount) {
    const lottoSeller = new LottoSeller();
    this.money = new UserMoney(Number(amount));
    this.lottos = lottoSeller.sellLotto(this.money);

    this.userInterface.printLottoCount(this.lottos);
  }

  viewLottos() {
    this.userInterface.printLottos(this.lottos);
  }

  setLottoNumbers(numberWithComma) {
    const numbers = numberWithComma.split(',').map(Number);
    this.lottoNumbersValidator.execute(numbers);

    this.lottoNumbers = numbers;
  }

  setBonusNumber(number) {
    const bonusNumber = Number(number);
    this.lottoNumberValidator.execute(bonusNumber);

    this.bonusNumber = bonusNumber;
  }

  viewTotalResult() {
    const lottoResults = this.lottos.map((lotto) =>
      lotto.compareTo(this.lottoNumbers, this.bonusNumber)
    );
    this.lottoDrawer = new LottoDrawer(lottoResults);
    this.userInterface.printWinningResult(this.lottoDrawer);

    const totalWinningMoney = this.lottoDrawer.getTotalWinningMoney();
    const earningRate = this.money.calculateEarningRate(totalWinningMoney);
    this.userInterface.printEarningRate(earningRate);
  }
}

module.exports = App;
