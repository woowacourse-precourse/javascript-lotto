const SCORE_LIST = [
    ['3개 일치', '5,000', 'three'],
    ['4개 일치', '50,000', 'four'],
    ['5개 일치', '1,500,000', 'five'],
    ['5개 일치, 보너스 볼 일치', '30,000,000', 'five_bonus'],
    ['6개 일치', '2,000,000,000', 'six']
];

const SCORE_KEY = {
    THREE: 'three',
    FOUR: 'four',
    FIVE: 'five',
    FIVE_BONUS: 'five_bonus',
    SIX: 'six',
}

const WINNING_AMOUNT = {
    THREE: '5000',
    FOUR: '50000',
    FIVE: '15000000',
    FIVE_BONUS: '30000000',
    SIX: '2000000000',
}

module.exports = {
    SCORE_LIST,
    SCORE_KEY,
    WINNING_AMOUNT
}
