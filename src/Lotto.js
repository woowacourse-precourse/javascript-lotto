class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }if(!numbers.every(Number)){
      throw new Error("[ERROR] 숫자를 입력하세요");
    }if(numbers.filter((number) => number <0 && number >45 )) {
      throw new Error('[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다');
    }
    const set = new Set(numbers); 
    if(numbers.length !== set.size) {
      throw new Error('[ERROR] 중복 된 번호는 선택하실 수 없습니다.'); //true
    }
  }

  //당첨 번호와 사용자의 로또 번호 비교하기
  checkLotto(lottoNum, jackPotNum, bonusNum) {
    let matchCount = new Array();
    let bonusMath = new Array();
    for( let i = 0; i< lottoNum; i++) {
      var lottoPart = lottoNum[i];
      var matchNum = jackPotNum.filter((x) => lottoPart.includes(x));
    }

    if (matchNum.length ===5 && lottoNum[i].includes(bonusNum)){
      bonusMath.pusch(bonusNum);
    }else {
      matchCount.pusch(matchNum.length);
    }
    return [matchcount, bonusMath];
  }
}

module.exports = Lotto;
