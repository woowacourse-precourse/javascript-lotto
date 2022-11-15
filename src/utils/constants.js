const ERROR = {
	TYPE: "[ERROR] 입력 금액은 숫자만 가능합니다.",
	UNIT: "[ERROR] 금액은 1,000원 단위만 가능합니다",
	COUNT: "[ERROR] 로또 번호는 6개만 가능합니다.",
	OVERLAP: "[ERROR] 로또 번호에 중복이 있습니다.",
};

const MESSAGES = {
	MONEY: "구입금액을 입력해주세요.",
	BUY: "개를 구매했습니다.",
	WINNUMBER: "당첨 번호를 입력해 주세요.",
	BONUSNUMBER: "보너스 번호를 입력해 주세요.",
	RESULT: "당첨 통계",
};

const MATCHING = {
	"3개": "3개 일치",
	"4개": "4개 일치",
	"5개": "5개 일치",
	"5개 + BONUS": "5개 일치, 보너스 볼 일치",
	"6개": "6개 일치",
};

const MATCHING_WINNING = {
	"3개": "(5,000원)",
	"4개": "(50,000원)",
	"5개": "(1,500,000원)",
	"5개 + BONUS": "(30,000,000원)",
	"6개": "(2,000,000,000원)",
};

module.exports = {
	ERROR,
	MESSAGES,
	MATCHING,
	MATCHING_WINNING,
};
