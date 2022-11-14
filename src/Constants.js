const INPUT_ERROR = {
    NOT_DIVIDED: "[ERROR] 로또를 살 수 없는 금액입니다.",
    DUPLICATED: "[ERROR] 중복된 번호입니다.",
    LESS_THAN_EXPECTED: "[ERROR] 잘못된 개수 입력입니다."
};

const RESULT = {
    FIFTH: "3개 일치 (5,000원)",
    FOURTH: "4개 일치 (50,000원)",
    THIRD: "5개 일치 (1,500,000원)",
    SECONDE: "5개 일치, 보너스 볼 일치 (30,000,000원)",
    FIRST: "6개 일치 (2,000,000,000원)"
}

module.exports = {INPUT_ERROR, RESULT};