const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottoStore {
  makeLotto(moneyString) {
    this.isIncludeStringValidate(moneyString);
    const money = parseInt(moneyString);
    this.isMoneyValidate(money);
    const count = this.calculateLottoCount(money);
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);
    const lottos = this.generateLottoNumber(count);
    return lottos;
  }

  isIncludeStringValidate(string) {
    const regex = /[^0-9]/g;
    if (string.match(regex) !== null)
      throw new Error("[ERROR] 입력한 값에 숫자가 아닌 값이 있습니다.");
  }

  isMoneyValidate(string) {
    const money = parseInt(string);
    if (money % 1000 !== 0)
      throw new Error("[ERROR] 구입 금액이 천원 단위가 아닙니다.");
  }

  calculateLottoCount(money) {
    return money / 1000;
  }

  generateLottoNumber(count) {
    const lottoInstanceArray = [];
    let LOTTO_MAKE_COUNT = count;
    while (LOTTO_MAKE_COUNT > 0) {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      const lottoInstance = new Lotto(lottoNumbers);
      this.makeLottoString(lottoInstance.getLottos);
      lottoInstanceArray.push(lottoInstance.getLottos);
      LOTTO_MAKE_COUNT--;
    }

    return lottoInstanceArray;
  }

  makeLottoString(lottoNumbers) {
    let printLottos = lottoNumbers.reduce((pre, cur, index) => {
      if (index !== lottoNumbers.length - 1) return pre + cur + ", ";
      return pre + cur;
    }, "[");
    printLottos += "]";
    MissionUtils.Console.print(printLottos);
  }

  analyzeLotto(lottos, winningLotto) {
    const lottoStatisticArray = this.analyzeLottoStatistic(
      lottos,
      winningLotto
    );

    this.printLottoStatistic(lottoStatisticArray);
    this.calculateLottoYield(lottoStatisticArray, lottos.length * 1000);
  }

  analyzeLottoStatistic(lottos, winningLotto) {
    let lottoStatisticArray = [0, 0, 0, 0, 0, 0, 0];
    let correct5NumberWithBonus = 0;
    const FIVE_NUMBERS_WITH_BONUS = 7;

    lottos.forEach((array) => {
      const result = this.findWinningNumbers(array, winningLotto);
      if (result !== FIVE_NUMBERS_WITH_BONUS) lottoStatisticArray[result]++;
      if (result === FIVE_NUMBERS_WITH_BONUS) correct5NumberWithBonus++;
    });

    const lottoResult = this.makeLottoStatisticArray(
      lottoStatisticArray,
      correct5NumberWithBonus
    );

    return lottoResult;
  }

  findWinningNumbers(array, winningNumbers) {
    let bonusNumber = winningNumbers[winningNumbers.length - 1];
    let correctNumberCount = 0;
    let correctBonus = false;

    winningNumbers.forEach((element) => {
      if (array.includes(element)) correctNumberCount++;
    });

    if (array.includes(bonusNumber)) correctBonus = true;

    if (correctBonus && correctNumberCount === 5) return 7;
    return correctNumberCount;
  }

  makeLottoStatisticArray(lottoStatisticArray, correct5NumberWithBonus) {
    const lottoResult = lottoStatisticArray.slice(3, 6);
    lottoResult.push(
      correct5NumberWithBonus,
      lottoStatisticArray[lottoStatisticArray.length - 1]
    );

    return lottoResult;
  }

  printLottoStatistic(lottoStatisticArray) {
    MissionUtils.Console.print("");
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");

    this.correctThreeNumbers(lottoStatisticArray[0]);
    this.correctFourNumbers(lottoStatisticArray[1]);
    this.correctFiveNumbers(lottoStatisticArray[2]);
    this.correctFiveNumbersWithBonus(lottoStatisticArray[3]);
    this.correctSixNumbers(lottoStatisticArray[4]);
  }

  correctThreeNumbers(count) {
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${count}개`);
  }
  correctFourNumbers(count) {
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${count}개`);
  }
  correctFiveNumbers(count) {
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${count}개`);
  }
  correctFiveNumbersWithBonus(count) {
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`
    );
  }
  correctSixNumbers(count) {
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${count}개`);
  }

  calculateLottoYield(lottoStatisticArray, payMoney) {
    const winningLottoPrices = [5000, 50000, 1500000, 30000000, 2000000000];
    const allLottoPrices = lottoStatisticArray.reduce((pre, cur, index) => {
      return pre + cur * winningLottoPrices[index];
    }, 0);
    const lottoYield = (allLottoPrices / payMoney) * 100;
    this.printLottoYield(lottoYield);
    return lottoYield;
  }

  printLottoYield(lottoYield) {
    MissionUtils.Console.print(`총 수익률은 ${lottoYield}%입니다.`);
  }
}

module.exports = LottoStore;
