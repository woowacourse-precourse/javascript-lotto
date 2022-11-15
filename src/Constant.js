const WINNING_PRICE = {
    RANK5: 5000,
    RANK4: 50000,
    RANK3: 1500000,
    RANK2: 30000000,
    RANK1: 2000000000
}

const ERROR_MESSAGE = {
    LOTTO_SIZE: '[ERROR] 로또 번호는 6개여야 합니다.',
    LOTTO_DUPLICATED: '[ERROR] 로또 번호는 중복될 수 없습니다.',
    WINNING_WRONG_INPUT: '[ERROR]당첨 입력값이 잘못되어, 게임을 종료합니다.',
    BONUS_WRONG_INPUT: '[ERROR]보너스 입력값이 잘못되어, 게임을 종료합니다.'
}

module.exports = { WINNING_PRICE, ERROR_MESSAGE }