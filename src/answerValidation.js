const {ERROR_MESSAGE} = require("./constant.js")

const answerValidation = (userInput) =>  {
    if (userInput === "") throw new Error(ERROR_MESSAGE.BLANK);
    
    for(var i=0;i<userInput.length;i++){
        if(isNaN(userInput[i])) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }
    //로또 번호의 개수 확인하기
    if (userInput.length !== 6) {
        throw new Error(ERROR_MESSAGE.SIX_DIGIT);
    } 
        //로또 번호 중 중복값 확인하기

    const numbersSet = new Set(userInput); //배열을 집합으로 변환
    const IS_DUPLICATE = numbersSet.size < userInput.length; //배열의 원소 중복 여부    
    
    if (IS_DUPLICATE) {
        throw new Error(ERROR_MESSAGE.DUPLICATE);
    }
  }
  
module.exports = answerValidation;