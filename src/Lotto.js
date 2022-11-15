const { Console } = require('@woowacourse/mission-utils');
const { LOTTO_ERROR_MESSAGE, LOTTO_OUTPUT, LOTTO_WINNING_PRICE } = require('./constants');

class Lotto {
  #numbers;
  #bonusNumber;
  #purchaseLottoList;

  constructor(numbers, bonusNumber, purchaseLottoList) {
    this.validate(numbers);
    this.validateBonusNumber(numbers, bonusNumber);
    this.#numbers = numbers;
    this.#bonusNumber = bonusNumber;
    this.#purchaseLottoList = purchaseLottoList;
    this.winngLotto();
  }

  validate(numbers) {
    if (numbers.length !== 6) throw new Error(LOTTO_ERROR_MESSAGE.LENGTH);
    if (new Set(numbers).size !== 6) throw new Error(LOTTO_ERROR_MESSAGE.DUPLICATE);
    const inRangeNumber = numbers.filter(x => x >= 1 && x <= 45).length;
    if (inRangeNumber !== 6) throw new Error(LOTTO_ERROR_MESSAGE.OUT_OF_RANGE);
  }
  
  validateBonusNumber(numbers, bonusNumber) {
    if (numbers.includes(bonusNumber)) throw new Error(LOTTO_ERROR_MESSAGE.BONUS_DUPLICATE);
  }

  winngLotto() {
    const numberInput = this.#numbers.map(Number)
    let matchNumber = [];
    let matchBonus = false;
    for (let i=0; i<this.#purchaseLottoList.length; i++) {
      matchNumber.push(this.#purchaseLottoList[i].filter(x => numberInput.includes(x)).length);
      if (this.#purchaseLottoList[i].includes(Number(this.#bonusNumber))) matchBonus = true;
    }
    
    this.rankLottoResult(matchNumber, matchBonus);
  }

  rankLottoResult(matchNumber, matchBonus) {
    let fifthCount = 0;
    let fourthCount = 0;
    let thirdCount = 0;
    let secondCount = 0;
    let firstCount = 0;
    for (let i=0; i<matchNumber.length; i++) {
      if (matchNumber[i] === 6) firstCount++;
      if (matchNumber[i] === 5 && matchBonus === true) secondCount++;
      if (matchNumber[i] === 5 && matchBonus === false) thirdCount++;
      if (matchNumber[i] === 4) fourthCount++;
      if (matchNumber[i] === 3) fifthCount++;
    }
    const totalYeild = (((firstCount * LOTTO_WINNING_PRICE.FIFTH_REWARD) + (secondCount * LOTTO_WINNING_PRICE.SECOND_REWARD) + (thirdCount * LOTTO_WINNING_PRICE.THIRD_REWARD) + (fourthCount * LOTTO_WINNING_PRICE.FOURTH_REWARD) + (fifthCount * LOTTO_WINNING_PRICE.FIFTH_REWARD)) / (matchNumber.length * 1000)) * 100;

    this.printLottoResult(firstCount, secondCount, thirdCount, fourthCount, fifthCount, totalYeild);
  }

  printLottoResult(firstCount, secondCount, thirdCount, fourthCount, fifthCount) {
    Console.print(LOTTO_OUTPUT.SUMMARY_LOTTO);
    Console.print(LOTTO_OUTPUT.HYPHEN);
    Console.print(`${LOTTO_OUTPUT.FIFTH_PLACE}${fifthCount}개`);
    Console.print(`${LOTTO_OUTPUT.FOURTH_PLACE}${fourthCount}개`);
    Console.print(`${LOTTO_OUTPUT.THIRD_PLACE}${thirdCount}개`);
    Console.print(`${LOTTO_OUTPUT.SECOND_PLACE}${secondCount}개`);
    Console.print(`${LOTTO_OUTPUT.FIRST_PLACE}${firstCount}개`);
    Console.print(`${LOTTO_OUTPUT.TOTAL_YIELD}${totalYeild.toFixed(1)}%입니다.`);
    Console.close();
  }
}


module.exports = Lotto;
