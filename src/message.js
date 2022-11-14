const GAME_START_MESSAGE = '구입금액을 입력해 주세요.\n';
const ANSWER_INPUT_MESSAGE = '\n당첨 번호를 입력해 주세요.\n';
const BONUS_INPUT_MESSAGE = '\n보너스 번호를 입력해 주세요.\n';

const BASE_MESSAGE = "[ERROR] ";
const ERROR_MESSAGE = Object.freeze({
    BLANK: BASE_MESSAGE + "아무것도 입력되지 않았습니다.",
    SIX_DIGIT: BASE_MESSAGE + "로또 번호는 6개여야 합니다.",
    DUPLICATE: BASE_MESSAGE + "중복된 숫자가 있습니다.",
    NOT_NUMBER: BASE_MESSAGE + "숫자만 입력해 주세요.",
    WRONG_INPUT: BASE_MESSAGE + "잘못된 값을 입력하여 게임을 종료합니다.",
    UNIT_ERROR: BASE_MESSAGE + "1,000원 단위로 입력해 주세요."
});

const PRINT_MESSAGE = '개를 구매했습니다.';

const RESULT_MESSAGE = Object.freeze({
    RANK_FIVE: "3개 일치 (5,000원) - ",
    RANK_FOUR: "4개 일치 (50,000원) - ",
    RANK_THREE: "5개 일치 (1,500,000원) - ",
    RANK_TWO: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    YOU_WIN: "6개 일치 (2,000,000,000원) - "
});

/*
const PROFIT_MESSAGE = Object.freeze({
    
})
*/
  module.exports = {
    GAME_START_MESSAGE, 
    ANSWER_INPUT_MESSAGE, 
    BONUS_INPUT_MESSAGE,
    PRINT_MESSAGE, 
    ERROR_MESSAGE, 
    RESULT_MESSAGE };