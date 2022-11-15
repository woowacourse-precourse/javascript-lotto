const BuyLotto = require("./BuyLotto");
const Lotto = require("./Lotto");
const Winning = require("./Winning");

class App {
  play() {
    // 로또 구매
    const buy = new BuyLotto();
    const amount = buy.inputAmount();
    const numberOfLotto = buy.getNumberOfLotto(amount);
    buy.printNumberOfLotto(numberOfLotto);
    const randomLottos = buy.createRandomLotto(numberOfLotto); 
    buy.printRandomLotto(randomLottos);

    // 당첨 번호 및 보너스 번호 입력
    const winningNumbers = buy.inputLottoNumbers();
    const bonusNumber = buy.inputBonusNumber();
    new Lotto(winningNumbers, bonusNumber); // 유효성 검사

    // 당첨 통계 출력
    new Winning(amount, randomLottos, winningNumbers, bonusNumber);
  }
}

module.exports = App;
