const Bonus = require('../src/Bonus');
const Lotto = require('../src/Lotto');

describe('보너스 클래스 테스트', () => {
	test('보너스 번호에 문자가 포함되면 예외가 발생한다.', () => {
		expect(() => {
			new Bonus('k');
		}).toThrow('[ERROR]');
	});

	test('보너스 번호의 범위가 1~45를 벗어나면 예외가 발생한다.', () => {
		expect(() => {
			new Bonus(0);
		}).toThrow('[ERROR]');
		expect(() => {
			new Bonus(46);
		}).toThrow('[ERROR]');
	});

	test('보너스 번호가 로또 번호와 중복되면 예외가 발생한다.', () => {
		const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
		expect(() => {
			new Bonus(6, lotto);
		}).toThrow('[ERROR]');
	});
});
