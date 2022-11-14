const { Console } = require('@woowacourse/mission-utils')

class WinningNum{

    static getWinningNum(){
        Console.readLine('당첨 번호를 입력해 주세요',(input)=>{

            this.validate(input)
            Console.print(input)
        })
    }


    validate(input){
        this.validateForNumLength(numbers)

        this.validateForDuplication(numbers)
    
        this.validateForNumRange(numbers)
    
        this.validateForNotNumber(numbers)
    }
    

    

    

}
// [ ] 1~45 사이의 값이 아닌 경우
// - [ ] 중복된 값이 존재하는 경우
// - [ ] 숫자가 아닌 값이 들어가 있는 경우
// - [ ] 당첨번호의 갯수가 6개가 아닌 경우