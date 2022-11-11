const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { PrizeInformation } = require("./LottoInfo");

class App {
  play() {

  }

  /**
   * 비용 입력이 올바른 입력인지 판단하는 함수
   * @param {string} cost 입력한 비용
   */
  checkCost(cost) {
    if (isNaN(cost)) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 로또 구입 금액은 숫자여야 합니다.");
    }

    const COST_IN_NUMBER = parseInt(cost);

    if (COST_IN_NUMBER % 1000 !== 0) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.");
    }
  }

  /**
   * 입력한 당첨 번호를 각각 숫자 형태로 반환하는 함수
   * @param {string} input 입력한 당첨 번호 문자열
   * @returns 각 번호를 숫자 형태로 오름차순으로 저장한 배열
   */
  convertSixInputsToNumbers(input) {
    let elements = input.split(",");
    let numbers = [];
    elements.forEach((element) => {
      // TODO: 예외 처리 부분은 따로 함수로 리팩토링하는 것이 좋겠다.
      if (isNaN(element))
        throw new Error("[ERROR] 당첨 번호는 숫자여야 합니다.");
      if (element === "")
        throw new Error("[ERROR] 숫자들이 ,로 올바르게 나뉘지 않았습니다.");
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
    if (isNaN(number) || number === "")
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    const NUMBER = parseInt(number);
    if (NUMBER < 1 || NUMBER > 45)
      throw new Error("[ERROR] 보너스 번호는 1-45 범위 숫자여야 합니다.");
    if (wonLotto.includesNumber(NUMBER))
      throw new Error("[ERROR] 보너스 번호는 기존 당첨 번호와 중복될 수 없습니다.");
  }

  /**
   * 구매 비용에 따라 로또 여러 장을 발급하는 함수
   * @param {number} pay 로또 구매 비용
   * @returns 구매한 로또 객체들이 담긴 배열
   */
  publishLottos(pay) {
    const PURCHASE_QUANTITY = pay / 1000;
    let lottos = []; // 구매한 로또들

    for (let i = 0; i < PURCHASE_QUANTITY; i++) {
      const NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      NUMBERS.sort((a, b) => (a - b)); // 오름차순 정렬
      lottos.push(new Lotto(NUMBERS));
    }

    return lottos;
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
   * @param {number} pay 로또 구매 비용
   * @param {PrizeInformation} PRIZE_INFORMATION 로또 당첨 정보
   * @returns {number} 총 수익률
   */
  getIncomeRate(pay, PRIZE_INFORMATION) {
    const INCOME_RATE = PRIZE_INFORMATION.getTotalPrize() * 100 / pay;

    return Math.round(INCOME_RATE * 10) / 10; // 소수점 둘째 자리에서 반올림
  }
}

module.exports = App;
