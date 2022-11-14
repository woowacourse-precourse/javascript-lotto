class Judge {
  constructor() {}

  isUserInputValidate(userInput) {
    if (userInput % 1000 !== 0) {
      throw new Error(
        "[ERROR] 로또 한 장은 1000원 입니다. 1000의 배수로만 입력해주세요."
      );
    }
    return true;
  }
}

module.exports = Judge;
