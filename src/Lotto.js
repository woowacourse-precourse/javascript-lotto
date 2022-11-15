class Lotto {
  #numbers;

  constructor(numbers) {
    this.checkLotto(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  checkLotto(lottoNum) {
    if (lottoNum.length != 6) throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");

    let set = new Set(lottoNum);
    if (set.size != 6) throw new Error("[ERROR] 중복된 로또 번호 입니다. ")


    for (let i = 0; i < lottoNum.length; i++) {
      if (lottoNum[i] > 45 || lottoNum[i] < 1) {
        throw new Error("[ERROR] 로또 번호 사이는 1에서 45 사이 입니다. ");
      }
    }
  }

  winningConditionRate(winLottoNumArr) {
    let setNumbers = new Set(this.#numbers);
    winLottoNumArr[0].forEach(
      x => setNumbers.add(x)
    )
    return this.whatIsRank(setNumbers, winLottoNumArr[1])
  }

  whatIsRank(setNumbers, winLottoNum) {  //App.js의 rank(등수 Array) index 반환하기
    if(setNumbers.size == 9){
      return 4;
    }
    else if(setNumbers.size == 8){
      return 3;
    }
    else if(setNumbers.size == 7){
      if (setNumbers.has(winLottoNum)) 
        return 1; 
      return 2;
    }
    else if(setNumbers.size == 6){
      return 0;
    }
  }
}

module.exports = Lotto;