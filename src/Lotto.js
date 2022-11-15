const { Console } = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const numbersinrange = numbers.filter((a) => Number(a) >= 1 && Number(a) <= 45);
    if (numbers.length !== 6) throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    if (numbers.length !== new Set(numbers).size) throw new Error("[ERROR] 로또 번호는 중복되서는 안됩니다.");
    if (numbers.length !== numbersinrange.length) throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  }

  bonusNumber(sixlotterynumber,money) {
    Console.readLine("보너스 번호를 입력해 주세요", (bonusnumber) => {
      this.validateBonusNumber(bonusnumber);
      this.printResult(sixlotterynumber,bonusnumber,money);
    });
  }

  validateBonusNumber(bonusNumber) {
    if (isNaN(bonusNumber)) throw new Error("[ERROR] 보너스 번호는 숫자여야합니다.");
    if (this.#numbers.includes(bonusNumber)) throw new Error("[ERROR] 로또 번호와 중복된 숫자입니다.");
    if (bonusNumber <= 0 || bonusNumber > 45) throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
  }

  printResult(sixlotterynumbers,bonusnumber,purchasemoney){
    const winningarray = this.countMatchingNumbers(this.matchingNumbers(sixlotterynumbers,bonusnumber))
    Console.print("\n당첨 통계\n\n---");
    this.printMatchingNumbers(winningarray);
    this.printProfit(winningarray,purchasemoney);
    Console.close();
  }

  matchingNumbers(sixlotterynumbers,bonusnumber){
    let matchednumbers = [];
    for (let s of sixlotterynumbers) {
      let count = 0;
      let hasbonusnumber = false;
      for(let n of this.#numbers){
        if(s.includes(n)) count+=1;
        if(s.includes(bonusnumber)) hasbonusnumber = true;
      }
      matchednumbers.push({count,hasbonusnumber});
    }
    return matchednumbers;
  }

  countMatchingNumbers(matchednumbers){
    let winningArray = [0,0,0,0,0];
    matchednumbers.forEach((result) => {
      const { count, hasBonusNumber } = result;
      if (count == 3) winningArray[0] += 1;
      else if (count === 4) winningArray[1] += 1;
      else if (count === 5) winningArray[2] += 1;
      else if (count === 5 && hasBonusNumber) winningArray[3] += 1;
      else if (count === 6) winningArray[4] += 1;
    });
    return winningArray;
  }

  printMatchingNumbers(winningArray){
    Console.print(`3개 일치 (5,000원) - ${winningArray[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${winningArray[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${winningArray[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningArray[3]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${winningArray[4]}개`);
  }

  printProfit(winningarray,purchasemoney){
    const result = winningarray[0] * 5000 + winningarray[1] * 50000 + winningarray[2] * 1500000 + winningarray[3] * 30000000 + winningarray[4] * 2000000_000
    const profit = ((result/purchasemoney) * 100).toFixed(1);
    Console.print(`총 수익률은 ${profit}%입니다.`)
  }

}

module.exports = Lotto;
