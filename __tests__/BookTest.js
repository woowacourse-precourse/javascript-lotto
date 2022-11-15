const Book = require('../src/Book');

describe('북 클래스 테스트', () => {
	const book = new Book();

	test('구입금액이 1,000원으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
		expect(() => {
			book.setInvest(1300);
		}).toThrow('[ERROR]');
	});

	test('구입금액에 문자가 포함되면 예외가 발생한다.', () => {
		expect(() => {
			book.setInvest('k');
		}).toThrow('[ERROR]');
	});

	test('구입금액을 등록하면 구매 가능한 티켓 개수를 반환한다.', () => {
		const invest = 15000;
		book.setInvest(invest);
		const boughtCnt = book.getAffordableCnt();
		expect(boughtCnt).toEqual(15);
	});

	test('구입금액과 점수를 등록하면 수익률을 계산하여 반환한다.', () => {
		book.setInvest(10000);
		book.setEarnings({ first: 0, second: 0, third: 0, fourth: 0, fifth: 1 });
		const profitRate = book.getProfitRate();
		expect(profitRate).toEqual('50.0%');
	});
});
