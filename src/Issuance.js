class Issuance {
  #Issuance;
  constructor(lottoNumber) {
    this.issuance(lottoNumber);
    this.#Issuance = Issuance;
  }
  issuance(lottoNumber) {
    if (lottoNumber.length !== 6) {
      throw new Error("[ERROR] 6개의 번호가 아닌 경우");
    }
    if (new Set(lottoNumber).size !== 6) {
      throw new Error("[ERROR] 중복되는 숫자가 있는 경우");
    }
  }
}

module.exports = Issuance;
