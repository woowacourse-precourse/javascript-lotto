const MissionUtils = require("@woowacourse/mission-utils");
const Error = require("./ErrorMessage.js") 
const Notice = require("./NoticeMessage.js")
const Lotto = require("./Lotto.js")
class RaffleNumber{
    constructor(){
        this.Lotto = new Lotto()
        this.bonusnumber = 0;
        this.Winnumber = ''
    }
    inputLottoNumber(){
        MissionUtils.Console.readLine(Notice.INPUT_LOTTO,(numbers) => {
          this.setWinNumber(numbers)
        });
      }
      inputBonusNumber(){
        MissionUtils.Console.readLine(Notice.INPUT_BONUS,(numbers) => {
          this.Lotto.validateBonusnumber(numbers)
          this.bonusnumber = numbers
        });
      }
      setWinNumber(numbers){
        numbers = numbers.split(',')
        this.getInputMaxMin(numbers)
        this.Lotto.validate(numbers)
        this.Winnumber = numbers
        this.inputBonusNumber()
      }
      getInputMaxMin(numbers){
        for (let i in numbers){
          numbers[i] = parseInt(numbers[i])
        }
        const max = Math.max(...numbers)
        const min = Math.min(...numbers)
        this.Lotto.validateInputRange(max,min)
      }
}
module.exports = RaffleNumber;
