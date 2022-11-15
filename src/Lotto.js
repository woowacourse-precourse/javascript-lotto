const MissionUtils = require("@woowacourse/mission-utils");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const numSet = new Set(numbers);
    if(numSet.size != 6){
      throw new Error("[ERROR] 중복된 숫자가 포함되어 있습니다.");
    }
    if (Array.from(numSet).length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    //1-45 사이의 문자인지 보기
    if(!(parseInt(numbers) >= 1 && parseInt(numbers) <= 45)){
      throw new Error("[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.");
    }
    return numbers;
  }
  printRandom(){
    return `[${this.#numbers.sort((a, b) => a - b).join(", ")}]`;
  }

  numberObj() {
    const num = {};
    for (let i = 1; i <= 45; i++) {
      num[i] = false;
    }
    return num;
  }

  winCheck(winNum, bonusNum) {
    let count = 0;
    const obj = this.numberObj();
    this.#numbers.forEach((number) => {
      obj[number] = true;
    });
    winNum.forEach((number) => {
      if (obj[number]) count++;
    });
    let bonus = this.#numbers.includes(bonusNum) ? 2 : 0; //6당첨과 겹치지 않게 보너스는 2점으로 계산
    count += bonus;
    return count;
  }

  calculate(win, bonus) {
    const count = this.winCheck(win, bonus);

    if(count === 3) return 1;
    if(count === 4) return 2;
    if(count === 5) return 3;
    if(count === 6) return 4;
    if(count === 7) return 5; //5개 일치, 보너스 일치
  }


  // TODO: 추가 기능 구현
}

module.exports = Lotto;
