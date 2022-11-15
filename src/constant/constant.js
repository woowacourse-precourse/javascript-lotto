const BUY_LOTTO = '구입금액을 입력해 주세요.';
const BUY_MESSAGE = (buyAmount) => {
    return `${buyAmount}개를 구매했습니다.`
};
const WINNING_NUMBERS = '당첨 번호를 입력해주세요.';
const BONUS_NUMBER = '보너스 번호를 입력해 주세요.';
const THOUSAND = 1000;
const RESULT_CHECK = {
    three: { count: 0, winnings: 5000 },
    four: { count: 0, winnings: 50000 },
    five: { count: 0, winnings: 1500000 },
    fiveBonus: { count: 0, winnings: 30000000 },
    six: { count: 0, winnings: 2000000000 }
};

module.exports = {
    BUY_LOTTO,
    BUY_MESSAGE,
    WINNING_NUMBERS,
    BONUS_NUMBER,
    THOUSAND,
    RESULT_CHECK
}