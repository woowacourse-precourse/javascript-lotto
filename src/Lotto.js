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

  checkCorrect(winningAndBonusNum, makedLottos){
    const winningNum = winningAndBonusNum[0];
    const bonusNum = winningAndBonusNum[1];
    const correctNums = [];
    let correctBonus = 0;
    this.#numbers = makedLottos.length;

    for (let i = 0; i < makedLottos.length; i++) {
      const correctNum = makedLottos[i].filter(number => winningNum.includes(String(number)));
      const matchBonus = this.checkBonus(makedLottos[i], ...bonusNum)

      if (correctNum.length == 5 && matchBonus) correctBonus += 1;
      else correctNums.push(correctNum.length);
    }
    this.checkResult(correctNums, correctBonus);
    return [correctNums, correctBonus]
  }

  checkBonus(correctFiveNumLottos, bonusNum) {
    return correctFiveNumLottos.includes(Number(bonusNum))
  }

  checkResult(correctNums, correctBonus) {
    const correctCount = [{'3개':0},{'4개':0},{'5개':0},{'6개':0}];

    correctNums.forEach(correctLength => {
      if(correctLength === 3) correctCount[0]['3개'] += 1;
      if(correctLength === 4) correctCount[1]['4개'] += 1;
      if(correctLength === 5) correctCount[2]['5개'] += 1;
      if(correctLength === 6) correctCount[3]['6개'] += 1;
    });
    const result = this.preparePrint(correctCount, correctBonus);

    this.printResult(result);
    this.printEarningsRate(result);
    return [correctCount, correctBonus]
  }

  preparePrint(correctCount, correctBonus) {
    const result = [];
    result.push(correctCount[0]['3개'])
    result.push(correctCount[1]['4개'])
    result.push(correctCount[2]['5개'])
    result.push(correctBonus)
    result.push(correctCount[3]['6개'])
    return result
  }

  printResult(result) {
    return MissionUtils.Console.print(
      '\n당첨 통계\n'+
      '---\n'+
      `3개 일치 (5,000원) - ${result[0]}개\n`+
      `4개 일치 (50,000원) - ${result[1]}개\n`+
      `5개 일치 (1,500,000원) - ${result[2]}개\n`+
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[3]}개\n`+
      `6개 일치 (2,000,000,000원) - ${result[4]}개`
      )
  }

  printEarningsRate(result) {

  }

}

module.exports = Lotto;
