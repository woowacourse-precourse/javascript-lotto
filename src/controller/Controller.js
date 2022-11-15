const { Console } = require("@woowacourse/mission-utils");
const View = require("../view/View");
const UserNumber = require("../model/UserNumber");
const Lotto = require("../model/Lotto");
const Statistics = require("../model/Statistics");
const LottoMachine = require("../model/LottoMachine");

class Controller {
  constructor() {
    this.view = new View(this);
    this.userNumber = new UserNumber(this);
    this.statistics = new Statistics(this);
    this.lottoMachine = new LottoMachine(this);
  }

  // 유저 구입금액 입력 연결 메서드
  getPurchasingAmountFromUser() {
    this.view.getPurchasingAmountFromUser();
  }

  /**
   * 유저에게 받은 구입 금액을 저장하는 연결 메서드
   * @param userPurchasingAmount {string} [유저 구입 금액 input]
   */
  setPurchasingAmount(userPurchasingAmount) {
    this.userNumber.setPurchasingAmount(userPurchasingAmount);
  }

  /**
   * 발행된 로또번호 출력 연결 메서드
   * @param issuedLotto {number[][]} [발행된 로또 배열]
   */
  printIssuedLotto(issuedLotto) {
    this.view.printUserIssuedLotto(issuedLotto);
  }

  // 유저 당첨번호 입력 연결 메서드
  getWinningNumberFromUser() {
    this.view.getWinningNumberFromUser();
  }

  /**
   * 유저에게 받은 당첨번호를 저장하는 연결 메서드
   * @param userInput {string} [유저 당첨번호 input]
   */
  setWinningNumberFromUser(userInput) {
    const userSplitInput = userInput.split(",");
    this.setLottoToUse(new Lotto(userSplitInput).getLottoNumbers()
      .map(Number));
  }

  /**
   * userNumber 에게 저장할 값을 넘겨주고 유저 보너스 번호 받는 연결 메서드
   * @param lotto {number[]} [유저 당첨번호]
   */
  setLottoToUse(lotto) {
    this.lottoMachine.setLottoToUse(lotto);
    this.getBonusNumberFromUser();
  }

  // 유저 보너스 번호 연결 메서드
  getBonusNumberFromUser() {
    this.view.getBonusNumberFromUser();
  }

  /**
   * 유저에게 받은 보너스 번호를 저장하는 연결 메서드
   * @param bonusNumber {string} [유저에게 받은 보너스 번호]
   */
  setBonusNumberFromUser(bonusNumber) {
    this.lottoMachine.setBonusNumber(Number(bonusNumber));
  }

  /**
   * 통계에 필요한 값들을 전달하는 메서드
   * @return {{winningNumber: number[], bonusNumber: number, userIssuedLotto: number[][], purchasingAmount: number}}
   */
  getOverallInformationForStatistics() {
    return {
      winningNumber: this.lottoMachine.getLottoToUse(),
      bonusNumber: this.lottoMachine.getBonusNumber(),
      userIssuedLotto: this.userNumber.getUserIssuedLotto(),
      purchasingAmount: this.userNumber.getPurchasingAmount(),
    };
  }

  // 통계를 구하는 연결 (trigger) 메서드
  getStatistics() {
    this.statistics.getStatistics();
  }

  /**
   * 통계를 출력하는 연결 메서드
   * @param ranks {{first: number, second: number, third: number, fourth: number, fifth: number}} [등수 통계]
   * @param rateOfReturn {number} [수익률]
   */
  printStatistics(ranks, rateOfReturn) {
    this.view.printStatistics(ranks, rateOfReturn);
  }

  // 게임을 종료하는 메서드
  finishGame() {
    Console.close();
  }

  // 초기 게임 시작 메서드
  init() {
    this.getPurchasingAmountFromUser();
  }
}

module.exports = Controller;
