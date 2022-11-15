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

    const arr = new Set(numbers);
		if (numbers.length !== [...arr].length) {
      throw new Error("[ERROR] 중복된 숫자가 있으면 안 됩니다.");
    }
    
  }

  compareNumbers(publishNumbers, bonusNumber) {
    let matchCountArr = [0,0,0,0,0];

    publishNumbers.forEach(element => {
      const matchCount = this.calcCount(element);

      switch(matchCount){
        case 3:
          matchCountArr[0]++;
          break;
        case 4:
          matchCountArr[1]++;
          break;
        case 5:
          if(this.#numbers.includes(bonusNumber)){
            matchCountArr[3]++;
            break;
          }else{
            matchCountArr[2]++;
            break;
          }
        case 6:
          matchCountArr[4]++;
          break;
      }
    });

    return matchCountArr;
  }

  calcCount(numbers) {
    let count = 0;
		for (let num of numbers) {
			if (this.#numbers.includes(num)) count++;
		}
    return count;
  }
}

module.exports = Lotto;
