const INPUT_MESSAGES = {
    PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
    WINNING_NUMBER: "당첨 번호를 입력해 주세요.\n",
    BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
};

const ERROR_MESSAGES = {
    DIVIDE_ERROR: "[ERROR] 1000원 단위의 금액을 입력해 주세요.",
    LOTTO_RANGE_ERROR: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
    LOTTO_LENGTH_ERROR: "[ERROR] 로또 번호는 6개여야 합니다.",
    DUPLICATE_ERROR: "[ERROR] 중복된 숫자가 있습니다.",
};

const PRIZE_REWARDS = {
    THREE: "5000",
    FOUR: "50000",
    FIVE: "1500000",
    FIVE_BONUS: "30000000",
    SIX: "2000000000",
};

const STATISTIC = {
    WINNING_STATISTIC: "당첨 통계\n---",
    TOTAL_FROFIT: (n) => `총 수익률은 ${n}%입니다.`
};

const PRIZE_RESULTS = {
    THREE: (n) => `3개 일치 (5,000원) - ${n}개`,
    FOUR: (n) => `4개 일치 (50,000원) - ${n}개`,
    FIVE: (n) => `5개 일치 (1,500,000원) - ${n}개`,
    FIVE_BONUS: (n) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${n}개`,
    SIX: (n) => `6개 일치 (2,000,000,000원) - ${n}개`,
};