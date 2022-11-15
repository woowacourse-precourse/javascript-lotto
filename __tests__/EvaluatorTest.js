const Lotto = require('../src/Lotto');
const Bonus = require('../src/Bonus');
const Evaluator = require('../src/Evaluator');

describe('평가자 클래스 테스트', () => {
	const evaluator = new Evaluator();

	test('티켓, 로또, 보너스 번호를 전달하면 점수를 계산하여 반환한다.', () => {
		const tickets = [
			[1, 2, 3, 4, 5, 6],
			[7, 8, 9, 10, 11, 12],
			[3, 4, 5, 6, 7, 9],
		];
		const lotto = new Lotto([3, 4, 5, 6, 7, 8]);
		const bonus = new Bonus(9, lotto);
		const score = evaluator.getScore(tickets, lotto, bonus);
		expect(score).toEqual({ first: 0, second: 1, third: 0, fourth: 1, fifth: 0 });
	});
});
