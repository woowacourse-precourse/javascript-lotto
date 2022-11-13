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
  }

  createLottoNumber(){
    let lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNumber=this.sortNumber(lottoNumber);
  }

  sortNumber(numberArray){
    numberArray.sort((a, b) => a - b);
    return numberArray;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
