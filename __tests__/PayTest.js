const Pay = require('../src/Objects/Pay');

describe('구입금액 클래스 테스트', () => {
	test('금액에 숫자가 아닌 문자가 있으면 예외가 발생한다.', () => {
		expect(() => {
			new Pay('test');
		}).toThrow('[ERROR] 금액은 숫자만 입력해야 합니다.');
	});

	test('금액이 1000원 미만이면 예외가 발생한다.', () => {
		expect(() => {
			new Pay('250');
		}).toThrow('[ERROR] 금액은 1000원 이상이어야 합니다.');
	});

	test('금액이 1000원으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
		expect(() => {
			new Pay('8250');
		}).toThrow('[ERROR] 금액은 1000원 단위여야 합니다.');
	});
});
