const { Random } = require('@woowacourse/mission-utils');
const { AMOUNT_STANDARD } = require('./constants');
const Lotto = require('./Lotto');

const LottoNumberUtils = require('./LottoNumberUtil');

class LottoGame {
  #inputMoney;
  #lottoArray;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#inputMoney = 0;
    this.#lottoArray = [];
    this.#winningNumbers = [];
    this.#bonusNumber = 0;
  }

  // [x]사용자가 입력한 금액을 저장하는 기능
  setInputMoney(inputMoney) {
    LottoNumberUtils.validateMoney(inputMoney);
    this.#inputMoney = inputMoney;
  }

  getInputMoney() {
    return this.#inputMoney;
  }

  // [x]사용자가 입력한 금액만큼 로또를 만들어서 저장하는 기능
  setLottoGames() {
    const numberLottos = this.#inputMoney / AMOUNT_STANDARD.ONE_THOUSAND_WON;

    this.#lottoArray = [];
    for (let i = 0; i < numberLottos; i++) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottoArray.push(new Lotto(lottoNumbers));
    }
  }

  getLottoGames() {
    return this.#lottoArray;
  }

  // [x]사용자가 입력한 당첨 번호를 확인하고 저장하는 기능
  setWinningNumbers(winningNumbers) {
    LottoNumberUtils.validateLength(winningNumbers);
    LottoNumberUtils.validateDuplication(winningNumbers);
    winningNumbers.forEach((value) => LottoNumberUtils.validateRange(value));

    this.#winningNumbers = winningNumbers;
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  // [x]사용자가 입력한 보너스 번호를 확인하고 저장하는 기능
  setBonusNumbers(bonusNumber) {
    LottoNumberUtils.validateRange(bonusNumber);
    LottoNumberUtils.validateDuplication([
      ...this.#winningNumbers,
      bonusNumber,
    ]);

    this.#bonusNumber = bonusNumber;
  }
  getBonusNumbers() {
    return this.#bonusNumber;
  }

  // [x]저장된 로또들 등수 계산하고, 통계내는 기능
  getStatistics() {
    const rankingCountList = [0, 0, 0, 0, 0];

    for (let i = 0; i < this.#lottoArray.length; i++) {
      const countMatches = this.#lottoArray[i].getCountMatches(
        this.#winningNumbers,
        this.#bonusNumber
      );

      const index = this.convertToIndex(countMatches);
      if (index >= 0) rankingCountList[index] += 1;
    }

    const ratio = this.getRatio(rankingCountList);

    return [...rankingCountList, ratio];
  }

  // [x]당첨 숫자 갯수 -> 인덱스 변환하는 기능
  convertToIndex(countMatches) {
    if (countMatches < 3) return -1;
    if (countMatches < 4) return 0;
    if (countMatches < 5) return 1;
    if (countMatches < 5.5) return 2;
    if (countMatches < 6) return 3;
    return 4;
  }

  // [x]수익률 계산하는 기능
  getRatio(rankingCountList) {
    const totalBuy = this.#inputMoney;
    const totalPrize = this.getTotalPrize(rankingCountList);
    return LottoNumberUtils.roundCustom((totalPrize / totalBuy) * 100);
  }

  // [x]당첨 결과 받아서 총 상금을 계산하는 기능
  getTotalPrize(rankingCountList) {
    const prizeMoneyList = [5000, 50000, 1500000, 30000000, 200000000];

    let sumPrizeMoney = 0;
    for (let i = 0; i < prizeMoneyList.length; i++) {
      sumPrizeMoney += prizeMoneyList[i] * rankingCountList[i];
    }
    return sumPrizeMoney;
  }
}

module.exports = LottoGame;
