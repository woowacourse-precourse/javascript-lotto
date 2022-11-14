const Lotto = require('../src/Lotto');
const Prize = require('../src/Prize');

describe('당첨 번호 테스트', () => {
  test('당첨 번호는 숫자여야 한다.', () => {
		let prize = new Prize();
    expect(() => {
			prize.validate('1,a,3,4,5,6', '7');
		}).toThrow('[ERROR]');
  });

  test('당첨번호는 6개여야 한다.', () => {
		let prize = new Prize();
    expect(() => {
			prize.validate('1,3,4,5,6', '7');
		}).toThrow('[ERROR]');
  });

	test('당첨 번호는 중복되지 않아야 한다.', () => {
		let prize = new Prize();
    expect(() => {
			prize.validate('11,21,31,41,21,6', '7')
		}).toThrow('[ERROR]');
  });

	test('당첨 번호는 (1 ~ 45) 범위 내여야 한다.', () => {
		let prize = new Prize();
    expect(() => {
			prize.validate('1,2,3,24,15,46', '7')
		}).toThrow('[ERROR]');
  });

	test('당첨 번호는 보너스 번호와 중복되지 않아야 한다.', () => {
		let prize = new Prize();
    expect(() => {
			prize.validate('1,32,23,14,5,16', '14')
		}).toThrow('[ERROR]');
  });

	test('보너스 번호는 (1 ~ 45) 범위 내여야 한다.', () => {
		let prize = new Prize();
    expect(() => {
			prize.validate('1,2,3,4,5,6', '0')
		}).toThrow('[ERROR]');
  });

	test('당첨 번호는 \',\'기준으로 구분되어야 한다.1', () => {
		let prize = new Prize();
    expect(() => {
			prize.validate('1,2,3.4,5,6', '7')
		}).toThrow('[ERROR]');
  });

	test('당첨 번호는 \',\'기준으로 구분되어야 한다.2', () => {
		let prize = new Prize();
    expect(() => {
			prize.validate('1, 2, 3, 4, 5, 6', '7')
		}).toThrow('[ERROR]');
  });
});
