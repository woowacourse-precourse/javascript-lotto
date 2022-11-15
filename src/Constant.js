const MESSAGE = Object.freeze({
    ASK_PURCHASE: '구입금액을 입력해 주세요.\n',
    WINNING_NUMBER: '당첨 번호를 입력해 주세요.\n',
    BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
    THREE_MATCHS: '3개 일치 (5,000원) -',
    FOUR_MATCHS: '4개 일치 (50,000원) -',
    FIVE_MATCHS: '5개 일치 (1,500,000원) -',
    FIVE_BONUS_MATCHS: '5개 일치, 보너스 볼 일치 (30,000,000원) -',
    SIX_MATCHS: '6개 일치 (2,000,000,000원) -',
    TOTAL_YIELD: '총 수익률은', 
    NAN_ERROR: '[ERROR] 숫자를 입력하세요.',
    UNIT_ERROR: '[ERROR] 1000단위로 입력하세요.',
    NEGATIVE_NUMBER_ERROR: '[ERROR] 1 이상의 숫자를 입력하세요.',
    NUMBER_ERROR: '[ERROR] 로또 번호는 6개여야 합니다.',
    BONUS_NUMBER_ERROR: '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.',
    NUMBER_DIFF_ERROR: '[ERROR] 로또 번호는 서로 다른 6개여야 합니다.',
    NUMBER_RANGE_ERROR: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    BONUS_ERROR: '[ERROR] 보너스 숫자는 1개여야 합니다.',
})

const CONSTANT = Object.freeze({
    LOTTO_LIMIT: 6,
    BONUS_LIMIT: 1,
    THREE_MATCHS: 3,
    FOUR_MATCHS: 4,
    FIVE_MATCHS: 5,
    SIX_MATCHS: 6,
})


module.exports = Object.freeze({
    MESSAGE,
    CONSTANT,
});