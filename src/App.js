const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");

class App {
  insertedMoney;
  userLottoNumberLists = [];
  async play() {
    await this.insertMoney();
    const LOTTO_COUNT = this.insertedMoney / 1000;
    this.printLottoCount(LOTTO_COUNT);
    for(let count = 0; count <LOTTO_COUNT; count++){
      this.userLottoNumberLists.push(this.generateUserLottoNumber());
    }
    this.printGenerateUserLottoNumber(this.userLottoNumberLists);
    const prizeNumber = await this.enterPrizeNumber();
    const lotto = new Lotto(prizeNumber);
    const bonusNumber = await this.enterBonusNumber();
    const bonus = new Lotto(lotto.getNumbers(), bonusNumber);
  }
  insertMoney(){
    MissionUtils.Console.readLine('구입금액을 입력해주세요 (1000원 단위)', (insertMoney) => {
      this.insertMoneyValidCheck(insertMoney);
      this.insertedMoney = insertMoney;
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
  printLottoCount(LottoCount){
    MissionUtils.Console.print(`${LottoCount}개를 구매했습니다.`);
  }
  generateUserLottoNumber(){
    const generatedNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortedNumbers = this.sortUserLottoNumber(generatedNumbers);
    return sortedNumbers;
  }
  sortUserLottoNumber(generatedNumbers){
    const sortedNumbers = generatedNumbers.sort((front,back)=>(front-back));
    return sortedNumbers;
  }
  printGenerateUserLottoNumber(userLottoList){
    MissionUtils.Console.print(userLottoList);
  }
  enterPrizeNumber(){
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (inputPrizeNumberWithComma) => {
    const prizeNumberList = this.splitWordsToComma(inputPrizeNumberWithComma);
    return prizeNumberList;
    });
  }
  splitWordsToComma(words){
    const wordsList = words.split(",");
    return wordsList;
  }
  enterBonusNumber(){
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (inputBonusNumber) => {
      return [inputBonusNumber];
    });
  }
}

module.exports = App;
