const INPUT_MESSAGE = {
	GET_PAYMENT: '구입금액을 입력해 주세요.\n',
	GET_WINNING: '\n당첨 번호를 입력해 주세요.\n',
	GET_BONUS: '\n보너스 번호를 입력해 주세요.\n',
};

const PRINT_MESSAGE = {
	QUANTITY(quantity) {
		return `\n${quantity}개를 구매했습니다.`;
	},
  LOTTO(lotto) {
    return `[${lotto.numbers.join(', ')}]`;
  },
	RESULT(arr) {
		const [place5, place4, place3, place2, place1] = arr;
		return `당첨 통계\n---\n3개 일치 (5,000원) - ${place5}개\n4개 일치 (50,000원) - ${place4}개\n5개 일치 (1,500,000원) - ${place3}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${place2}개\n6개 일치 (2,000,000,000원) - ${place1}개`;
	},
	PROFIT(profit) {
		return `\n총 수익률은 ${profit}%입니다.`;
	},
};

const ERROR_MESSAGE = {
	VALID_NUMBER: '[ERROR] 유효한 숫자를 입력해주세요.',
	VALID_PAYMENT: {
		AMOUNT: '[ERROR] 1000원 이상의 금액을 입력해주세요',
		UNIT: '[ERROR] 1000원 단위로 금액을 입력해주세요.',
	},
	VALID_LOTTO: {
		LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
		RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
		DUPLICATE: '[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.',
	},
	VALID_BONUS: {
		DUPLICATE: '[ERROR] 당첨번호에 없는 숫자를 입력해주세요.',
	},
};

module.exports = {
	ERROR_MESSAGE,
	INPUT_MESSAGE,
	PRINT_MESSAGE,
};
