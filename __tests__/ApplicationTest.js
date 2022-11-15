const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = answers => {
	MissionUtils.Console.readLine = jest.fn();
	answers.reduce((acc, input) => {
		return acc.mockImplementationOnce((question, callback) => {
			callback(input);
		});
	}, MissionUtils.Console.readLine);
};

const mockRandoms = numbers => {
	MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
	numbers.reduce((acc, number) => {
		return acc.mockReturnValueOnce(number);
	}, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
	const logSpy = jest.spyOn(MissionUtils.Console, 'print');
	logSpy.mockClear();
	return logSpy;
};

describe('로또 테스트', () => {
	test('기능 테스트', () => {
		mockRandoms([
			[8, 21, 23, 41, 42, 43],
			[3, 5, 11, 16, 32, 38],
			[7, 11, 16, 35, 36, 44],
			[1, 8, 11, 31, 41, 42],
			[13, 14, 16, 38, 42, 45],
			[7, 11, 30, 40, 42, 43],
			[2, 13, 22, 32, 38, 45],
			[1, 3, 5, 14, 22, 45],
		]);
		mockQuestions(['8000', '1,2,3,4,5,6', '7']);
		const logs = [
			'8개를 구매했습니다.',
			'[8, 21, 23, 41, 42, 43]',
			'[3, 5, 11, 16, 32, 38]',
			'[7, 11, 16, 35, 36, 44]',
			'[1, 8, 11, 31, 41, 42]',
			'[13, 14, 16, 38, 42, 45]',
			'[7, 11, 30, 40, 42, 43]',
			'[2, 13, 22, 32, 38, 45]',
			'[1, 3, 5, 14, 22, 45]',
			'3개 일치 (5,000원) - 1개',
			'4개 일치 (50,000원) - 0개',
			'5개 일치 (1,500,000원) - 0개',
			'5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
			'6개 일치 (2,000,000,000원) - 0개',
			'총 수익률은 62.5%입니다.',
		];
		const logSpy = getLogSpy();
		const app = new App();
		app.play();
		logs.forEach(log => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
		});
	});

	test('예외 테스트 : 구입금액에 문자열이 포함되면 에러를 발생시킨다.', () => {
		mockQuestions(['1000j']);
		expect(() => {
			const app = new App();
			app.play();
		}).toThrow('[ERROR]');
	});

	test('예외 테스트 : 구입금액에 공백이 포함되면 에러를 발생시킨다.', () => {
		mockQuestions(['1000 1000']);
		expect(() => {
			const app = new App();
			app.play();
		}).toThrow('[ERROR]');
	});

	test('예외 테스트 : 구입금액에 공백이 포함되면 에러를 발생시킨다.', () => {
		mockQuestions(['1000!!']);
		expect(() => {
			const app = new App();
			app.play();
		}).toThrow('[ERROR]');
	});

	test('예외 테스트 : 구입금액이 1000원 단위가 아니면 에러를 발생시킨다.', () => {
		mockQuestions(['1200']);
		expect(() => {
			const app = new App();
			app.play();
		}).toThrow('[ERROR]');
	});

	test('예외 테스트 : 구입금액이 1000원 미만이면 에러를 발생시킨다.', () => {
		mockQuestions(['900']);
		expect(() => {
			const app = new App();
			app.play();
		}).toThrow('[ERROR]');
	});

	test('예외 테스트 : 당첨번호에 숫자, 공백, 콤마 외의 입력값이 있는 경우 에러를 발생시킨다.', () => {
		mockRandoms([
			[7, 11, 30, 40, 42, 43],
			[2, 13, 22, 32, 38, 45],
			[1, 3, 5, 14, 22, 45],
		]);
		mockQuestions(['3000', '1,2,3,! 4,8,   9']);
		expect(() => {
			const app = new App();
			app.play();
		}).toThrow('[ERROR]');
	});

	test('예외 테스트 : 보너스 번호에 숫자 외의 문자가 있는 경우 에러를 발생시킨다.', () => {
		mockRandoms([
			[7, 11, 30, 40, 42, 43],
			[2, 13, 22, 32, 38, 45],
			[1, 3, 5, 14, 22, 45],
		]);
		mockQuestions(['3000', '1,2,3,4,8,9', '6!']);
		expect(() => {
			const app = new App();
			app.play();
		}).toThrow('[ERROR]');
	});


	test('예외 테스트 : 보너스 번호에 당첨번호와 중복이 있는 경우 에러를 발생시킨다.', () => {
		mockRandoms([
			[7, 11, 30, 40, 42, 43],
			[2, 13, 22, 32, 38, 45],
			[1, 3, 5, 14, 22, 45],
		]);
		mockQuestions(['3000', '1,2,3,4,8,9', '8']);
		expect(() => {
			const app = new App();
			app.play();
		}).toThrow('[ERROR]');
	});
});
