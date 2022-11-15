const inputValidation = {
  checkSixNum(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (numbers.length === 6) return true;
  },

  checkNoOverlap(numbers) {
    let numbersSet = new Set(numbers);
    if (numbersSet.size !== numbers.length) {
      throw new Error("[ERROR] 중복된 숫자가 존재합니다.");
    } else {
      return true;
    }
  },

  checkLottoRange(numbers) {
    for (let index = 0; index < numbers.length; index++) {
      if (numbers[index] < 1 && numbers[index] > 45) {
        throw new Error("[ERROR] 1~45 사이의 숫자를 넣어주세요.");
      }
      if (1 <= numbers[index] <= 45) {
        return true;
      }
    }
  },

  checkIsInputNum(money) {
    if(Number(money) === NaN){
      throw new Error("[ERROR] 숫자를 입력해주세요.")
    } else{
      return true;
    }
  },

  checkThousandNum(money) {
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
    }
    if (money % 1000 === 0) {
      return true;
    }
  },
};

module.exports = inputValidation;
