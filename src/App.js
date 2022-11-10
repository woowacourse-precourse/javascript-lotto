const MissionUtils = require("@woowacourse/mission-utils");
class App {
  insertedMoney;
  userLottoNumberLists = [];
  async play() {
    await this.insertMoney();
    const LottoCount = this.insertedMoney / 1000;
    for(let count = 0; count <LottoCount; count++){
      this.userLottoNumberLists.push(generateUserLottoNumber());
    }
  }
  insertMoney(){
    MissionUtils.Console.readLine('구입금액을 입력해주세요 (1000원 단위)', (insertMoney) => {
      insertMoneyValidCheck(insertMoney);
      this.insertedMoney = insertMoney;
    });
  }
  insertMoneyValidCheck(insertMoney) {
    isUnit1000(insertMoney);
    isNegativeNumber(insertMoney);
    isNumber(insertMoney);
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
  generateUserLottoNumber(){
    const generatedNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return generatedNumbers;
  }
}

module.exports = App;
