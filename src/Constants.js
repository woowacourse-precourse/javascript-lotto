const Messages = Object.freeze({
	START_BUY: '구입금액을 입력해 주세요.',
	INSERT_WINNING: '당첨 번호를 입력해 주세요.',
	INSERT_BONUS: '보너스 번호를 입력해 주세요.',

	ERROR: {
		BUY_PRICE: {
			NOT_NUMBER: '[ERROR] 금액은 숫자만 입력해야 합니다.',
			LESS_THAN_THOUSAND: '[ERROR] 금액은 1000원 이상이어야 합니다.',
			NOT_ZERO_REMAIN: '[ERROR] 금액은 1000원 단위여야 합니다.',
		},
		WINNING_NUMBERS: {
			NOT_NUMBER: '[ERROR] 번호는 숫자를 입력해야 합니다.',
			NOT_BELONG_NUMBER: '[ERROR] 당첨 번호는 1부터 45사이여야 합니다.',
			DUPLICATED_NUMBER: '[ERROR] 당첨 번호는 서로 다른 숫자여야 합니다.',
			NOT_INSERT_COMMA: '[ERROR] 당첨 번호를 쉼표로 구분하여 입력하십시오.',
			DIFFERENT_LENGTH: '[ERROR] 당첨 번호는 6개여야 합니다.',
		},
		BONUS_NUMBER: {
			NOT_NUMBER: '[ERROR] 번호는 숫자를 입력해야 합니다.',
			NOT_BELONG_NUMBER: '[ERROR] 보너스 번호는 1부터 45사이여야 합니다.',
			NOT_ONE_NUMBER: '[ERROR] 보너스 번호는 1개여야 합니다.',
			DUPLICATED_NUMBER: '[ERROR] 당첨 번호에 없는 번호를 입력하십시오.',
		},
	},
});

const BENEFIT = {
	3: 5000,
	4: 50000,
	5: 1500000,
	bonus: 30000000,
	6: 2000000000,
};

module.exports = {
	Messages,
	BENEFIT,
};
