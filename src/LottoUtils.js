class LottoUtils {
  #convertArray;
  constructor(winNumbers) {
    this.#convertArray = LottoUtils.convertStringToArray(winNumbers);
  }

  static convertStringToArray(winNumbers) {
    return winNumbers
      .split(",")
      .map((value) => Number(value))
      .sort((a, b) => a - b);
  }

  getConvertArray() {
    return this.#convertArray;
  }
}

module.exports = LottoUtils;
