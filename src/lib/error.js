const ERROR = {
  CHECK_PAIDAMOUNT: (input) => {
    if (Number.isNaN(Number(input))) {
      throw new Error("[ERROR] 숫자인 문자열을 입력하세요.");
    }
    if (Number(input) % 1000 != 0) {
      throw new Error("[ERROR] 1000으로 나누어 떨어지는 금액을 입력하세요.");
    }
  },

  CHECK_WINNUMS: (input) => {
    let split_input = input.split(",");
    if (split_input.length != 6) {
      throw new Error("[ERROR] ','로 구분되는 6개의 숫자를 입력하세요.");
    }
    split_input.forEach((element) => {
      if (Number.isNaN(Number(element))) {
        throw new Error("[ERROR] 숫자를 입력하세요.");
      }
      if (Number(element) % 1 != 0) {
        throw new Error("[ERROR] 정수를 입력하세요.");
      }
      if (Number(element) < 0 || Number(element) > 45) {
        throw new Error("[ERROR] 1~45 사이의 숫자를 입력하세요.");
      }
    });
    const set = new Set([...split_input]);
    if (set.size != split_input.length) {
      throw new Error("[ERROR] 중복되는 수 없이 입력해주세요.");
    }
  },

  CHECK_BONUS: (input, winNumbers) => {
    if (Number.isNaN(Number(input))) {
      throw new Error("[ERROR] 숫자인 문자열을 입력하세요.");
    }
    if (Number(input) % 1 != 0) {
      throw new Error("[ERROR] 정수를 입력하세요.");
    }
    if (Number(input) < 0 || Number(input) > 45) {
      throw new Error("[ERROR] 1~45 사이의 숫자를 입력하세요.");
    }
    if (winNumbers.includes(input)) {
      throw new Error("[ERROR] 당첨번호와 겹치지 않는 번호를 입력해주세요");
    }
  },

  CHECK_LOTTO: (numbers) => {
    if (numbers.length != 6) {
      throw new Error("[ERROR] 6개의 숫자로 로또를 발행하세요.");
    }
    numbers.forEach((element) => {
      if (Number.isNaN(Number(element))) {
        throw new Error("[ERROR] 숫자를 입력하세요.");
      }
      if (Number(element) % 1 != 0) {
        throw new Error("[ERROR] 정수를 입력하세요.");
      }
      if (Number(element) < 0 || Number(element) > 45) {
        throw new Error("[ERROR] 1~45 사이의 숫자를 입력하세요.");
      }
    });
    const set = new Set([...numbers]);
    if (set.size != numbers.length) {
      throw new Error("[ERROR] 중복되는 수 없이 발행해주세요.");
    }
  },
};

module.exports = {
  ERROR,
};
