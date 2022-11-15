const ERROR_MESSAGE = Object.freeze({
    DIFFERENT_NUMBER_MESSAGE: '[ERROR] 서로 다른 6개 번호여야 합니다',
    NOT_SIX_NUMBERS_MESSAGE: '[ERROR] 로또 번호는 6개여야 합니다.',
    INCORRECT_COST_MESSAGE: '[ERROR] 잘못된 금액입니다. 1000원단위로 입력해주세요.',
    INCORRECT_AMOUNT_NUMBER_MESSAGE: '[ERROR] 1~9 숫자만 입력가능합니다',
    INCORRECT_LOTTO_NUMBER_MESSAGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    DUPLICATE_NUMBER_MESSAGE: '[ERROR] 당첨번호와 보너스 번호가 일치합니다',
});

const OUTPUT_MESSAGE = Object.freeze({
    ENTER_COST: '구입금액을 입력해 주세요.\n',
    ENTER_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
    ENTER_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
    WINNING_STATISTICS: '당첨 통계\n---',
});

const PRIZE_MONEY = Object.freeze({
    FIRST: 2000000000,
    SECOND: 30000000,
    THIRD: 1500000,
    FORTH: 50000,
    FIFTH: 5000,
});


module.exports = {
    ERROR_MESSAGE,
    OUTPUT_MESSAGE,
    PRIZE_MONEY,
    RANGKING_COUNT,
    NUMBERS_LIMIT,
}
