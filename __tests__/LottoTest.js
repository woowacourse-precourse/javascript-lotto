const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
	test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
		expect(() => {
			new Lotto([1, 2, 3, 4, 5, 6, 7]);
		}).toThrow('[ERROR]');
	});

	// TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
	test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
		expect(() => {
			new Lotto([1, 2, 3, 4, 5, 5]);
		}).toThrow('[ERROR]');
	});

	test('로또 번호에 문자가 포함되면 예외가 발생한다.', () => {
		expect(() => {
			new Lotto([1, 2, 3, 4, 5, 'k']);
		}).toThrow('[ERROR]');
	});

	test('로또 번호의 범위가 1~45를 벗어나면 예외가 발생한다.', () => {
		expect(() => {
			new Lotto([0, 2, 3, 4, 5, 6]);
		}).toThrow('[ERROR]');
		expect(() => {
			new Lotto([1, 2, 3, 4, 5, 46]);
		}).toThrow('[ERROR]');
	});

	test('로또 번호와 일치하는 티켓 번호의 개수를 반환한다.', () => {
		const lotto = new Lotto([10, 11, 12, 13, 14, 15]);
		const ticket = [10, 11, 12, 13, 20, 21];
		const matchedCnt = lotto.getMatchedCnt(ticket);
		expect(matchedCnt).toEqual(4);
	});
});
