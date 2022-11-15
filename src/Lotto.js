let usersRank = {
  5: 0,
  4: 0,
  3: 0,
  2: 0,
  1: 0,
}

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    numbers.forEach(number =>{
      if (number < 0 || number > 45){
        throw new Error("[ERROR] 로또 번호는 1과 45 사이여야 합니다.");
      }
    });

    let delete_overlab = [...new Set(numbers)];
    if (delete_overlab.length != 6){
      throw new Error("[ERROR] 중복된 값이 입력되었습니다.");
    }
  }

  checkWinning(userArray, bonus){
    userArray.forEach(array => {
      this.checkRank(array,bonus);
    });
  }

  checkRank(lottoArray, bonus){
    let sameNumber = this.#numbers.filter(number => lottoArray.includes(number));
    let same = sameNumber.length;
    switch (same) {
      case 3:
        usersRank[5]++;
        break;
      case 4:
        usersRank[4]++;
        break;
      case 5:
        if(this.checkBonusNumber(bonus, oneArray)){
          usersRank[2]++;
          break;
        }
        usersRank[3]++;
        break;
      case 6:
        usersRank[1]++;
        break;      
    }
  }

  checkBonusNumber(number, userArray){
    if (userArray.includes(number)) return true;
    return false;
  }

  printResult(){
    MissionUtils.Console.print(`\n당첨 통계\n---`) 
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${usersRank[5]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${usersRank[4]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${usersRank[3]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${usersRank[2]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${usersRank[1]}개`);
  }

  countPrize(){
    const RANK = {
      5: 5000,
      4: 50000,
      3: 1500000,  
      2: 30000000,
      1: 2000000000,
    }

    let prize = 0;
    for(let i=1;i<6;i++){
      for(let j=0; j<usersRank[i];j++){
        prize += RANK[i];
      }
    }
    return prize;
  }

  calculateProfit(len){
    let profit = parseFloat(this.countPrize());
    let used = parseFloat(len*1000);
    let res = profit/used*100;
    res = Math.round(res * 100) / 100;
    MissionUtils.Console.print(`총 수익률은 ${res}%입니다.`);
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;