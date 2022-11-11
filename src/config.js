const TICKET_PRICE = 1000;

const TARGET_CONFIG = {
    RANGE_MIN: 1,
    RANGE_MAX: 45,
    NUM_LENGTH: 6,
};

const BONUS_CONFIG = {
    BONUS_MIN: 1,
    BONUS_MAX: 45,
    BONUS_LENGTH: 1,
};

const PRIZES = {
    FIRST: {
        VALUE: 2000000000,
        DISPLAY_NAME: '(2,000,000,000원)',
    },
    SECOND: {
        VALUE: 30000000,
        DISPLAY_NAME: '(30,000,000원)',
    },
    THIRD: {
        VALUE: 1500000,
        DISPLAY_NAME: '(1,500,000원)',
    },
    FOURTH: {
        VALUE: 50000,
        DISPLAY_NAME: '(50,000원)',
    },
    FIFTH: {
        VALUE: 5000,
        DISPLAY_NAME: '(5,000원)',
    },
};

/**
 * RANK: {
 *  COUNT: count of matching numbers,
 *  BONUS: whether bonus number is included or not,
 * }
 */
const PRIZE_CONFIG = {
    FIRST: {
        COUNT: 6,
        BONUS: false,
    },
    SECOND: {
        COUNT: 5,
        BONUS: true,
    },
    THIRD: {
        COUNT: 5,
        BONUS: false,
    },
    FOURTH: {
        COUNT: 4,
        BONUS: false,
    },
    FIFTH: {
        COUNT: 3,
        BONUS: false,
    },
};

const USER_INPUT_PHRASE = {
    REQUEST_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
    REQUEST_TARGET_NUMBER: '당첨 번호를 입력해 주세요.\n',
    REQUEST_TARGET_DELIMITER: ',',
    REQUEST_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
};

const USER_OUTPUT_PHRASE = {
    NOTICE_PURCHASE_SUCCESSFUL: '개를 구매했습니다.\n',
    TICKET_START: '[',
    TICKET_END: ']',
    TICKET_DELIMITER: ', ',
};

const STAT_PHRASE = {
    STAT: '당첨 통계\n---\n',
    STAT_RANK: {
        MATCH: '개 일치',
        BONUS: ', 보너스 볼 일치 ',
        DIVDER: ' - ',
        UNIT: '개\n',
    },
    YIELD: '총 수익률은 ',
    PERCENT: '%입니다.\n',
};

const GAME_INPUT_ERRORS = {
    INVALID_TARGET_LENGTH: '[ERROR] 당첨 번호들의 갯수가 일치하지 않습니다.\n',
    INVALID_INPUT_TYPE: '[ERROR] 로또 번호는 숫자 형식이어야 합니다.\n',
    INVALID_INPUT_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.\n',
};

module.exports = {
    GAME_RANGE: TARGET_CONFIG,
    BONUS_NUM: BONUS_CONFIG,
    PRIZE_RANK: PRIZES,
    PRIZE_CONFIG,
    TICKET_PRICE,
    USER_INPUT_PHRASE,
    STAT_PHRASE,
    GAME_INPUT_ERRORS,
};