const MissionUtils = require("@woowacourse/mission-utils");
class InsertMoney{
    #insertedMoney;
    #lottoCount;
    constructor() {
        this.insertMoney();
        this.printLottoCount();
      }
    insertMoney(){
      MissionUtils.Console.readLine('구입금액을 입력해주세요 (1000원 단위)', (insertMoney) => {
        this.insertMoneyValidCheck(insertMoney);
        this.#insertedMoney = insertMoney;
        this.#lottoCount = insertMoney/1000;
      });
    }
    insertMoneyValidCheck(insertMoney) {
      this.isUnit1000(insertMoney);
      this.isNegativeNumber(insertMoney);
      this.isNumber(insertMoney);
    }
    isUnit1000(insertMoney){
      if (insertMoney % 1000 !== 0) {
        throw new Error("[ERROR] 1000원 단위로 금액을 투입해주세요.");
      }
    }
    isNegativeNumber(insertMoney){
      if (insertMoney <= 0) {
        throw new Error("[ERROR] 음수 또는 0원은 투입할 수 없습니다.");
      }
    }
    isNumber(inputNumber){
      const IS_NOT_NUMBER = /\D/g;
      if(IS_NOT_NUMBER.test(inputNumber)){
        throw new Error("[ERROR] 숫자만 입력해주세요.");
      }
    }
    printLottoCount(){
      MissionUtils.Console.print(`${this.#lottoCount}개를 구매했습니다.`);
    }
    getInsertMoney(){
      return this.#insertedMoney;
    }
    getLottoCount(){
      return this.#lottoCount;
    }
}
module.exports = InsertMoney;