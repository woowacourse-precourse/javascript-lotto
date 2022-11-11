const { Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { NUMBERS } = require("./Constants");

class Game {
  //필드

  //생성자
  constructor() {
    this.lotto = new Lotto();
  }

  //메서드
  purchaseLotto() {
    Console.readLine("구입금액을 입력해 주세요.\n", (amount) => {
      checkAmountExceptions(amount);
      this.countLotto(amount);
    });
  }

  // 플레이어의 구매금액에 맞는 로또 갯수 세기
  countLottoTickets(amount) {
    const lottoQuantity = amount / 1000;
    return lottoQuantity;
  }

  /**
   * 플레이어가 구매 금액에 맞는 로또 수량, 로또 번호 출력합니다.
   * @param {number} lottoQuantity - 플레이어의 구매금액에 맞는 로또 갯수
   * @returns {array} - 로또 번호가 담긴 배열
   */
  issueLotto(lottoQuantity) {
    this.printLottoQuantity(lottoQuantity);
    this.showLottoNumbers(lottoQuantity);
  }

  printLottoQuantity(lottoQuantity) {
    Console.print(`${lottoQuantity}개를 구매했습니다.\n`);
  }

  showLottoNumbers(lottoQuantity) {
    const lottoNumbersArray = this.lotto.createLottoNumbers(lottoQuantity);
    lottoNumbersArray.forEach((lottoNumbers) => {
      Console.print(`${lottoNumbers}\n`);
    });
  }
}

module.exports = Game;
