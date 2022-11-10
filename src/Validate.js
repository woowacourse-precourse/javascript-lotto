const Validate = {
  checkMultipleOf1000(answer) {
    if (answer % 1000 !== 0)
      throw new Error("[ERROR] 1,000원 단위로만 입력이 가능합니다.");
  },
};

module.exports = Validate;
