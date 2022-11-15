const MESSAGE = Object.freeze({
    START : "구입금액을 입력해 주세요.",
    WINNING : "당첨 번호를 입력해 주세요.",
    BONUS : "보너스 번호를 입력해 주세요.",
});

const CORRECT = Object.freeze({
    1 : "6개 일치 (2,000,000,000원) - ",
    2 : "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    3 : "5개 일치 (1,500,000원) - ",
    4 : "4개 일치 (50,000원) - ",
    5 : "3개 일치 (5,000원) - ",
});

const CORRECT_MONEY = Object.freeze({
    "FIRST" : 2000000000,
    "SECOND" : 30000000,
    "THIRD" : 1500000,
    "FOURTH" : 50000,
    "FIFTH" : 5000,
});

const SENTANCE = Object.freeze({
    "STATICS" : "당첨 통계",
    "LINE" : "---",
    "PROFIT_HEAD" : "총 수익률은",
    "PROFIT_REAR" : "%입니다.",
    "BUY" : "개를 구매했습니다.",
    "UNIT" : "개",
});


const ERROR = Object.freeze({
    "COUNT" : "[ERROR] 로또 번호는 6개여야 합니다.",
    "DUPLICATE" : "[ERROR] 입력값에 중복이 있습니다",
});

module.exports = {
    MESSAGE,CORRECT,CORRECT_MONEY,SENTANCE,ERROR,
};