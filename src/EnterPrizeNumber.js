const MissionUtils = require("@woowacourse/mission-utils");
class EnterPrizeNumber{
    #prizeNumbers = [];
    constructor(){
        this.enterPrizeNumber();
    }
    enterPrizeNumber(){
      MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (inputPrizeNumberWithComma) => {
        const prizeNumberList = this.splitWordsToComma(inputPrizeNumberWithComma);
        this.#prizeNumbers = prizeNumberList;
      });
    }
    splitWordsToComma(words){
      const wordsList = words.split(",").map(Number);
      return wordsList;
    }
    getEnterPrizeNumber(){
      return this.#prizeNumbers;
    }  
}
module.exports = EnterPrizeNumber;