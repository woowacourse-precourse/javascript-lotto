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

  // TODO: 추가 기능 구현
}

module.exports = Lotto;