const MissionUtils = require("@woowacourse/mission-utils");
class GenerateUserLottoNumber{
    #userLottoNumberLists = [];
    constructor(lottoCount) {
      this.repeatGeneratePerLottoCount(lottoCount);
    }
    repeatGeneratePerLottoCount(lottoCount){
      for(let count = 0; count < lottoCount; count++){
        this.#userLottoNumberLists.push(this.generateUserLottoNumber());
      }    
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
    getUserLottoNumberLists(){
      return this.#userLottoNumberLists;
    }      
}
module.exports = GenerateUserLottoNumber;
