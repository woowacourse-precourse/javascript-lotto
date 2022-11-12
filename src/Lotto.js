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

  // TODO: 추가 기능 구현
  calculate_cnt(solution, bouns){
    solution = solution.split(",").map((e)=>parseInt(e))
    bouns = [bouns]
    let match_cnt = 0
    let bouns_cnt = 0
    for (let i = 0; i < this.#numbers.length; i++) {
      if (solution.includes(this.#numbers[i])){
        match_cnt += 1
      }
      if (bouns.includes(this.#numbers[i])){
        bouns_cnt += 1
      }
    }
    return this.calculate_expectation(match_cnt, bouns_cnt)
  }

  calculate_expectation(match_cnt, bouns_cnt){
    let money_result = 0
    if (match_cnt === 6){
      money_result = 2000000000
    } else if (match_cnt === 5 && bouns_cnt === 1){
      money_result = 30000000
    } else if (match_cnt === 4){
      money_result = 50000
    } else if (match_cnt === 3){
      money_result = 5000
    }
    return money_result
  }
}

module.exports = Lotto;
