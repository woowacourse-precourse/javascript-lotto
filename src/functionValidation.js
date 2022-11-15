const {
    LENGTH_INPUT_LOTTO_NUMBER_ERROR,
    RANGE_INPUT_LOTTO_NUMBER_ERROR,
    REPEATED_LOTTO_NUMBER_ERROR,
    STRING_LOTTO_NUMBER_ERROR,
    RANGE_MONEY_ERROR,
    NOT_NUMBER_MONEY_ERROR,
    SMALLER_MONEY_ERROR,
    RANGE_WINNING_ERROR,
    STRING_WINNING_ERROR,
    REPEATED_WINNING_ERROR,
    LENGTH_WINNING_ERROR,
    FLOAT_WINNING_ERROR,
    BONUS_WINNING_ERROR,
} = require('./utils/constants')

const {
    withoutRemainderByThousand,
    isNotNumber,
    smallerThanThousand,
    winningIncludeBonusNumber,
    winningIncludeFloatNumber,
    winningIncludeString,
    winningLengthCheck,
    winningRangeCheck,
    winningRepeatedCheck,
    rangeCheck,
    repeatedCheck,
    lengthCheckLottoNumber,
    includeString,
} = require('./utils/validation')

const validateLotto = (numbers) => {
    if (!rangeCheck(numbers)) throw new Error(RANGE_INPUT_LOTTO_NUMBER_ERROR)

    if (!repeatedCheck(numbers)) throw new Error(REPEATED_LOTTO_NUMBER_ERROR)

    if (!lengthCheckLottoNumber(numbers))
        throw new Error(LENGTH_INPUT_LOTTO_NUMBER_ERROR)

    if (!includeString(numbers)) throw new Error(STRING_LOTTO_NUMBER_ERROR)
}

const validateMoney = (money) => {
    if (!withoutRemainderByThousand(money)) throw new Error(RANGE_MONEY_ERROR)

    if (!isNotNumber(money)) throw new Error(NOT_NUMBER_MONEY_ERROR)

    if (!smallerThanThousand(money)) throw new Error(SMALLER_MONEY_ERROR)
}

const validateWinningNumber = (winningNumber) => {
    if (!winningRepeatedCheck(winningNumber))
        throw new Error(REPEATED_WINNING_ERROR)

    if (!winningRangeCheck(winningNumber)) throw new Error(RANGE_WINNING_ERROR)

    if (!winningIncludeString(winningNumber))
        throw new Error(STRING_WINNING_ERROR)

    if (!winningLengthCheck(winningNumber))
        throw new Error(LENGTH_WINNING_ERROR)

    if (!winningIncludeFloatNumber(winningNumber))
        throw new Error(FLOAT_WINNING_ERROR)
}

const validateBonus = (numbers, bonus) => {
    if (!winningIncludeBonusNumber(numbers, bonus))
        throw new Error(BONUS_WINNING_ERROR)
}

module.exports = {
    validateBonus,
    validateLotto,
    validateMoney,
    validateWinningNumber,
}
