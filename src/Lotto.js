class Lotto {
  #numbers;

  constructor(numbers, bonus) {
    isValidBonus(numbers, bonus);
    this.#numbers = {
      numbers: numbers,
      bonus: bonus
    };
  }

  getNumbers(){
    return this.#numbers;
  }

  isValidBonus(numbers, bonus){
    if(numbers.includes(bonus)){
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }
}

module.exports = Lotto;
