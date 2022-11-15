const INPUT_MESSAGE = {
    INPUT_MONEY_MESSAGE: "구입금액을 입력해 주세요.\n",
    INPUT_WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
    INPUT_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
};

const ERROR_MESSAGE = {
    NOT_ONE_NUMBER : "[ERROR] 로또 번호는 1개여야 합니다.",
    NOT_SIX_NUMBER : "[ERROR] 로또 번호는 6개여야 합니다.",
    NOT_BETWEEN_NUMBER: "[ERROR] 로또 번호는 1이상 45이하여야 합니다.",
    DUPLICATE_NUMBER: "[ERROR] 로또 번호안에 중복 숫자가 존재합니다.",
    IS_NOT_NUMBER : "[ERROR] 로또의 값이 숫자가 아닙니다.",
    NOT_THOUSAND_UNIT : "[ERROR] 구입 금액은 1000원 단위입니다."
};

const REWARD_MESSAGE = {
    WINNING_STATISTICS : "\n당첨 통계\n---\n",
    MATCH_SIX : "6개 일치 (2,000,000,000원) -",
    MATCH_SIX_AND_BONUS : "5개 일치, 보너스 볼 일치 (30,000,000원) -",
    MATCH_FIVE : "5개 일치 (1,500,000원) -",
    MATCH_FOUR : "4개 일치 (50,000원) -",
    MATCH_THREE : "3개 일치 (5,000원) -"
};

const REWARD_MONEY = {
    FIRST_PLACE : 2000000000,
    SECOND_PLACE : 30000000,
    THIRD_PLACE : 1500000,
    FOURTH_PLACE : 50000,
    FIFTH_PLACE : 5000
};

const BUY_LOTTO_MESSAGE = "개를 구매했습니다.";
const THOUSAND = 1000;
const HUNDRED = 100;

module.exports = {
    INPUT_MESSAGE,
    ERROR_MESSAGE,
    REWARD_MESSAGE,
    REWARD_MONEY,
    BUY_LOTTO_MESSAGE,
    THOUSAND,
    HUNDRED}
