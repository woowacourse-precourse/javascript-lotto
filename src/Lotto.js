class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    numbers = this.toNumbers(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const set = new Set(numbers);
    const not_overlap = [...set];
    if(not_overlap.length != numbers.length)
      throw new Error("[ERROR] 로또 번호는 서로 중복되지 않아야 합니다.");

    for(const number of numbers){
      this.validate_EachNumber(number);
    }
  }

  validate_EachNumber(number){
    if(isNaN(number))
      throw new Error("[ERROR] 숫자를 입력해 주세요.");
    if(number < 0)
      throw new Error("[ERROR] 양수를 입력해 주세요.");
    if(!(number % 1 === 0))
      throw new Error("[ERROR] 정수를 입력해 주세요.");    
    if(number<1 || number>45)
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");   
  }

  toNumbers(numbers){
    for(let i=0; i < numbers.length; i++)
      numbers[i] = Number(numbers[i]);
    return numbers;
  }
  
  getNumbers(){
    return this.#numbers;
  }
}

module.exports = Lotto;
