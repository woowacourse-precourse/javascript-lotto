const BASE_MESSAGE = "[ERROR] ";
const ERROR_MESSAGE = Object.freeze({
    BLANK: BASE_MESSAGE + "아무것도 입력되지 않았습니다.",
    SIX_DIGIT: BASE_MESSAGE + "로또 번호는 6개여야 합니다.",
    DUPLICATE: BASE_MESSAGE + "중복된 숫자가 있습니다.",
    NOT_NUMBER: BASE_MESSAGE + "숫자만 입력해 주세요.",
    WRONG_INPUT: BASE_MESSAGE + "잘못된 값을 입력하여 게임을 종료합니다."
})

const RESULT_MESSAGE = Object.freeze({
    THREE_ANSWER: "3개 일치 (5,000원) - ",
    FOUR_ANSWER: "4개 일치 (50,000원) - ",
    FIVE_ANSWER: "5개 일치 (1,500,000원) - ",
    FIVE_ANSWER_BONUS: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    YOU_WIN: "6개 일치 (2,000,000,000원) - "
})

/*
const PROFIT_MESSAGE = Object.freeze({
    
})
*/
  module.exports = {ERROR_MESSAGE, RESULT_MESSAGE};