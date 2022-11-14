const MissionUtils = require("@woowacourse/mission-utils");
class GenerateUserLottoNumber{
    #userLottoNumberLists = [];
    constructor(lottoCount) {
      this.repeatGeneratePerLottoCount(lottoCount);
      this.printTypeChangeUserLottoNumber(this.#userLottoNumberLists);
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
    printTypeChangeUserLottoNumber(userLottoLists){
      userLottoLists.forEach((userLottoList)=>{
        let userLotto = '[';
        userLotto += this.generateIndex(userLottoList);
        userLotto = userLotto.slice(0,userLotto.length-2);
        userLotto+=']';
        this.printUserLottoNumber(userLotto);
      });
    }
    generateIndex(userLottoList){
      let userLotto = '';
      userLottoList.forEach((index)=>{
        userLotto+=index;
        userLotto+=',';
        userLotto+=' ';
      });
      return userLotto;
    }
    printUserLottoNumber(userLotto){
      MissionUtils.Console.print(userLotto);
    }
    getUserLottoNumberLists(){
      return this.#userLottoNumberLists;
    }      
}
module.exports = GenerateUserLottoNumber;
