const PROGRESS_TEXT = {
    REQUIRE_AMOUNT: '구입금액을 입력해 주세요.\n',
    PRINT_COUNT: '개를 구매했습니다.',
    REQUIRE_WINNING: '\n당첨 번호를 입력해 주세요.\n',
    REQUIRE_BONUS: '\n보너스 번호를 입력해 주세요.\n',
    PRINT_STATITICS: '\n당첨 통계\n---',
}

const ERROR_TEXT = {
    WINNING_NOT_SIX: '[ERROR] 당첨 번호는 6개 입니다.',
    WINNING_INCLUDE_NOT_NUMBER: '[ERROR] 당첨 번호에 숫자가 아닌 원소가 포함되어 있습니다.',
    WINNING_INCLUDE_DUPLICATE: '[ERROR] 당첨 번호에 중복된 수가 포함되어 있습니다.',
    AMOUNT_NOT_NUMBER: '[ERROR] 로또 구입 금액은 공백이 포함되지 않은 숫자 형태로 입력해야 합니다.',
    AMOUNT_INDIVISIBLE: '[ERROR] 로또 구입 금액은 1,000원 단위로 입력해야 합니다.',
    LOTTO_NOT_SIX: '[ERROR] 로또 번호는 6개여야 합니다.',
    LOTTO_OUT_OF_RANGE: '[ERROR] 생성 가능한 로또의 범위는 1~45까지의 수 입니다.',
    LOTTO_NOT_NUMBER: '[ERROR] 생성된 로또에 숫자가 아닌 원소가 포함되어 있습니다.',
    LOTTO_INCLUDE_DUPLICATE: '[ERROR] 생성된 로또에 중복된 수가 포함되어 있습니다.',
}

module.exports = { 
    PROGRESS_TEXT,
    ERROR_TEXT,
};