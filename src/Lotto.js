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
    const numSet = new Set(numbers);
    if(numSet.size != 6){
      throw new Error("[ERROR] 중복된 숫자가 포함되어 있습니다.");
    }
    //1-45 사이의 문자인지 보기
    if(!(parseInt(numbers) >= 1 && parseInt(numbers) <= 45)){
      throw new Error("[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.");
    }
    return numbers;
  }
  printRandom(){
    return `[${this.#numbers.join(", ")}]`;
  }

  numberObj() {
    const num = {};
    let i =1;
    while(i <= 45){
      num[i] = false;
    }
    return num;
  }

  winCheck(winNum) {
    let count = 0;
    const obj = this.numberObj();
    this.#numbers.forEach((number) => {
      obj[number] = true;
    });
    winNum.forEach((number) => {
      if (obj[number]) count++;
    });
    return count;
  }

  calculate(win, bonus) {
    const count = this.winCheck(win);
    switch (count) {
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        return this.#numbers.includes(bonus) ? 2 : 3;
      case 6:
        return 1;
    }
  }


  // TODO: 추가 기능 구현
}

module.exports = Lotto;
