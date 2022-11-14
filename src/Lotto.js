class Lotto {
  #numbers;

  constructor(numbers) {
    this.checkLotto(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  checkLotto(numbers) {
    if (numbers.length != 6) throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    
    for(let i=0; i<numbers.length; i++){
      if(numbers[i]>45 || numbers[i]<1 ){
        throw new Error("[ERROR] 로또 번호 사이는 1에서 45 사이 입니다");
      }
    }
    let set = new Set(numbers);
    if (set.size !== 6) throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.")
  }

  userLottoWinningLottoCompare(winningLottoArr) {
    let set = new Set(this.#numbers);
    winningLottoArr[0].forEach(x => set.add(x))
    return this.setSizeCount(set, winningLottoArr[1])
  }

  setSizeCount(set, standardBonus) {  //App.js의 rank(등수 Array) index 반환하기
    switch (set.size) {
      case 9:   //3개 일치 = 중복제외 합 9개
        return 0;
      case 8:    //4개 일치 = 중복제외 합 8개
        return 1;
      case 6:    //6개 일치 = 중복제외 합 6개
        return 4;
      case 7:    //5개 일치 = 중복제외 합 7개
        if (set.has(standardBonus)) return 3;  //보너스 일치
        else return 2; //보너스 불일치
    }
  }

}

module.exports = Lotto;