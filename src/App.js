const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { PrizeInformation } = require("./LottoInfo");
const { outofLottoNumberRange } = require("./utils");

class App {
  play() {
    this.getInputCost();
  }

  /**
   * 비용 입력을 받고 처리하는 함수
   */
  getInputCost() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (answer) => {
      this.checkCost(answer);

      const COST = parseInt(answer);
      let lottos = this.publishLottos(COST); // 로또 발급
      this.printMyLottos(lottos);

      this.getInputWinningNumbers(lottos, COST);
    })
  }

  /**
   * 비용 입력을 받은 뒤, 당첨 번호를 입력받는 함수
   * @param {Lotto[]} lottos 구매한 로또 객체들
   * @param {number} cost 로또 구매 비용
   */
  getInputWinningNumbers(lottos, cost) {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (answer) => {
      const WINNING_NUMBERS = this.convertSixInputsToNumbers(answer);
      const WON_LOTTO = new Lotto(WINNING_NUMBERS); // 당첨 번호를 담은 로또 객체
      this.getInputBonusNumber(lottos, cost, WON_LOTTO);
    })
  }

  /**
   * 당첨 번호 입력을 받은 뒤, 보너스 번호를 입력받고 마무리하는 함수
   * @param {Lotto[]} lottos 구매한 로또 객체들
   * @param {number} cost 로또 구매 비용
   * @param {Lotto} WON_LOTTO 당첨 번호가 담긴 로또 객체
   */
  getInputBonusNumber(lottos, cost, WON_LOTTO) {
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.\n", (answer) => {
      this.checkBonusNumber(answer, WON_LOTTO);
      const BONUS = parseInt(answer);

      const PRIZE_INFORMATION = new PrizeInformation();
      this.compareMyLottosWithWinningNumbers(lottos, WON_LOTTO, BONUS, PRIZE_INFORMATION);
      PRIZE_INFORMATION.printPrizes(); // 당첨 통계 출력

      const INCOME_RATE = this.getIncomeRate(cost, PRIZE_INFORMATION);
      this.printIncomeRate(INCOME_RATE);
      MissionUtils.Console.close();
    })
  }

  /**
   * 비용 입력이 올바른 입력인지 판단하는 함수
   * @param {string} cost 입력한 비용
   */
  checkCost(cost) {
    if (isNaN(cost)) {
      throw new Error("[ERROR] 로또 구입 금액은 숫자여야 합니다.");
    }

    const COST_IN_NUMBER = parseInt(cost);

    if (this.cannotPurchaseWith(COST_IN_NUMBER)) {
      throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.");
    }
  }

  /**
   * 입력된 비용이 로또 하나의 비용으로 나뉘어 떨어지지 않는지를 반환하는 함수
   * @param {number} cost 입력된 로또 구매 비용
   * @returns {boolean} 거스름돈 없이 로또를 살 수 없다
   */
  cannotPurchaseWith(cost) {
    const EACH_LOTTO_COST = 1000;
    return (cost % EACH_LOTTO_COST !== 0);
  }

  /**
   * 입력한 당첨 번호를 각각 숫자 형태로 반환하는 함수
   * @param {string} input 입력한 당첨 번호 문자열
   * @returns {number[]} 각 번호를 숫자 형태로 저장한 배열
   */
  convertSixInputsToNumbers(input) {
    let elements = input.split(",");
    let numbers = [];
    elements.forEach((element) => {
      this.checkIfElementIsNumber(element);
      numbers.push(parseInt(element));
    })

    return numbers;
  }

  /**
   * 보너스 번호 입력이 올바른지 판단하는 함수
   * @param {string} number 입력한 보너스 번호
   * @param {Lotto} wonLotto 현재 저장된 당첨 번호에 대한 로또 객체
   */
  checkBonusNumber(number, wonLotto) {
    this.checkIfElementIsNumber(number);
    const NUMBER = parseInt(number);
    if (outofLottoNumberRange(NUMBER))
      throw new Error("[ERROR] 보너스 번호는 1-45 범위 숫자여야 합니다.");
    if (wonLotto.includesNumber(NUMBER))
      throw new Error("[ERROR] 보너스 번호는 기존 당첨 번호와 중복될 수 없습니다.");
  }

  /**
   * 입력으로 받은 요소가 숫자가 맞는지 확인하는 함수
   * @param {string} element 입력에 담긴 특정 요소
   */
  checkIfElementIsNumber(element) {
    if (isNaN(element))
      throw new Error("[ERROR] 번호 입력은 숫자여야 합니다.");
    if (element === "")
      throw new Error("[ERROR] 입력된 데이터 중 빈 데이터가 없어야 합니다.");
  }

  /**
   * 구매 비용에 따라 로또 여러 장을 발급하는 함수
   * @param {number} cost 로또 구매 비용
   * @returns {Lotto[]} 구매한 로또 객체들이 담긴 배열
   */
  publishLottos(cost) {
    const PURCHASE_QUANTITY = cost / 1000;
    let lottos = []; // 구매한 로또들

    for (let i = 0; i < PURCHASE_QUANTITY; i++) {
      const LOTTO = this.publishOneLotto();
      lottos.push(LOTTO);
    }

    return lottos;
  }

  /**
   * 하나의 로또를 발급하는 함수
   * @returns {Lotto} 발급된 로또 객체
   */
  publishOneLotto() {
    const NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    NUMBERS.sort((a, b) => (a - b)); // 오름차순 정렬
    const LOTTO = new Lotto(NUMBERS);

    return LOTTO;
  }

  /**
   * 구매한 로또 번호들을 출력하는 함수
   * @param {Lotto[]} lottos 구매한 로또 객체들이 담긴 배열
   */
  printMyLottos(lottos) {
    MissionUtils.Console.print(`${lottos.length}개를 구매했습니다.`);

    lottos.forEach((lotto) => {
      lotto.printNumbers();
    })
  }

  /**
   * 구매한 로또 번호들을 당첨 번호와 보너스 볼과 비교하고 결과를 저장하는 함수
   * @param {Lotto[]} lottos 구매한 로또 객체들이 담긴 배열
   * @param {Lotto} WON_LOTTO 당첨 번호가 담긴 로또 객체
   * @param {number} bonus 보너스 번호
   * @param {PrizeInformation} PRIZE_INFORMATION 당첨에 대한 정보가 담긴 객체 
   */
  compareMyLottosWithWinningNumbers(lottos, WON_LOTTO, bonus, PRIZE_INFORMATION) {
    lottos.forEach((lotto) => {
      const PLACE = lotto.compareWithWinningNumbers(WON_LOTTO, bonus);
      PRIZE_INFORMATION.quantity[PLACE]++;
    })
  }

  /**
   * 구매 비용과 총 수익을 바탕으로 총 수익률을 계산하는 함수
   * @param {number} cost 로또 구매 비용
   * @param {PrizeInformation} PRIZE_INFORMATION 로또 당첨 정보
   * @returns {number} 총 수익률
   */
  getIncomeRate(cost, PRIZE_INFORMATION) {
    const INCOME_RATE = PRIZE_INFORMATION.getTotalPrize() * 100 / cost;

    return Math.round(INCOME_RATE * 10) / 10; // 소수점 둘째 자리에서 반올림
  }

  /**
   * 계산한 총 수익률을 출력하는 함수
   * @param {number} incomeRate 총 수익률
   */
  printIncomeRate(incomeRate) {
    MissionUtils.Console.print(`총 수익률은 ${incomeRate.toFixed(1)}%입니다.`);
  }
}

const APP = new App();
APP.play();

module.exports = App;
