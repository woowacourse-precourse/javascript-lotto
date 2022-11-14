const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    // this.validate(numbers)
    this.#numbers = numbers;
  }

  validate(numbers, limit) {
    if (numbers.length !== limit) {
      throw new Error(`[ERROR] 입력 번호는 ${limit}개여야 합니다.`);
    }
    numbers.forEach(number => {
      if (number > 45 || number < 1) {
        throw new Error("[ERROR] 번호의 범위는 1~45 입니다.");}
    })
    const orderedNumbers = new Set(numbers)
    if(Array.from(orderedNumbers).length !== limit){
      throw new Error("[ERROR] 중복된 숫자가 있습니다.")
    }

    return 
  }

  validateBonus(winningNumber,bonusNumber){
    winningNumber.forEach(number => {
      if(number == bonusNumber[0])
      throw new Error(`[ERROR] 당첨 번호와 중복됩니다.`);
    });
  }

  checkCorrect(winAndBonusNum, makedLots){
    const winningNumLs = winAndBonusNum[0];
    const bonusNum = winAndBonusNum[1];
    const correctLists = [];
    let secondPrize = 0;
    this.savePurchaseQuantity(makedLots);

    for (let i = 0; i < makedLots.length; i++) {
      const winNumInLot = this.checkWinNumInlot(makedLots[i], winningNumLs);
      const is2ndPrize = this.check2ndPrize(winNumInLot, makedLots[i], ...bonusNum);
      is2ndPrize ? secondPrize += 1 : correctLists.push(winNumInLot.length);
    }
    this.checkResult(correctLists, secondPrize);
    return [correctLists, secondPrize]
  }

  savePurchaseQuantity(makedLots) {
    this.#numbers = makedLots.length;
  }

  checkWinNumInlot(makedLots, winningNumLs) {
    return makedLots.filter(number => winningNumLs.includes(String(number)));
  }

  check2ndPrize(winNumInLot, makedLotto, bonusNum){
    if (winNumInLot.length == 5) {
      if (this.checkHasBonusNum(makedLotto, bonusNum)) return true
      else return false
    }
    return false
  }

  checkHasBonusNum(correctFiveNumLottos, bonusNum) {
    return correctFiveNumLottos.includes(Number(bonusNum))
  }

  checkResult(correctLists, secondPrize) {
    const winningList = [{'3개':0},{'4개':0},{'5개':0},{'6개':0}];

    correctLists.forEach(correctLength => {
      if(correctLength === 3) winningList[0]['3개'] += 1;
      if(correctLength === 4) winningList[1]['4개'] += 1;
      if(correctLength === 5) winningList[2]['5개'] += 1;
      if(correctLength === 6) winningList[3]['6개'] += 1;
    });
    const totalResult = this.preparePrint(winningList, secondPrize);

    this.printResult(totalResult);
    this.printEarningsRate(totalResult);
    return [winningList, secondPrize]
  }

  preparePrint(winningList, secondPrize) {
    const totalResult = [];
    totalResult.push(winningList[0]['3개'])
    totalResult.push(winningList[1]['4개'])
    totalResult.push(winningList[2]['5개'])
    totalResult.push(secondPrize)
    totalResult.push(winningList[3]['6개'])
    return totalResult
  }

  printResult(totalResult) {
    return MissionUtils.Console.print(
      '\n당첨 통계\n'+
      '---\n'+
      `3개 일치 (5,000원) - ${totalResult[0]}개\n`+
      `4개 일치 (50,000원) - ${totalResult[1]}개\n`+
      `5개 일치 (1,500,000원) - ${totalResult[2]}개\n`+
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${totalResult[3]}개\n`+
      `6개 일치 (2,000,000,000원) - ${totalResult[4]}개`
      )
  }

  printEarningsRate(totalResult) {
    let earnings = 0;
    earnings += 5000 * totalResult[0];
    earnings += 50000 * totalResult[1];
    earnings += 1500000 * totalResult[2];
    earnings += 30000000 * totalResult[3];
    earnings += 2000000000 * totalResult[4];

    const earningsRate = earnings / (this.#numbers*10);

    return MissionUtils.Console.print(`총 수익률은 ${earningsRate.toFixed(1)}%입니다.`)
  }

}

module.exports = Lotto;
