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
    const set = new Set(numbers);
    if (set.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
  }

  compare_result(bonus, lotto_list) {
    let result = [0, 0, 0, 0, 0];

    for (let val of lotto_list) {
      let count = 0;

      for (let ele of this.#numbers) {
        if (val.includes(ele)) {
          count += 1;
        }
      }

      switch (count) {
        case 3:
          result[0] += 1;
          break;
        case 4:
          result[1] += 1;
          break;
        case 5:
          if (val.includes(bonus)) {
            result[2] += 1;
          }
          else {
            result[3] += 1;
          }
          break;
        case 6:
          result[4] += 1;
          break;
        default:
          break;
      }
    }
    return result;
  }
}

module.exports = Lotto;