const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = (answers) => {
    MissionUtils.Console.readLine = jest.fn();
    answers.reduce(
        (acc, input) =>
            acc.mockImplementationOnce((question, callback) => {
                callback(input);
            }),
        MissionUtils.Console.readLine,
    );
};

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    numbers.reduce(
        (acc, number) => acc.mockReturnValueOnce(number),
        MissionUtils.Random.pickUniqueNumbersInRange,
    );
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();
    return logSpy;
};

describe('기능테스트', () => {
    test('로또 금액 유효성 테스트 case1', () => {
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
        mockQuestions(['8100']);
        const app = new App();
        app.play();
        expect(app.controller.lottos).toHaveLength(8);
    });
    test('로또 금액 유효성 테스트 case2', () => {
        mockRandoms([
            [8, 21, 23, 41, 42, 43],
            [3, 5, 11, 16, 32, 38],
            [7, 11, 16, 35, 36, 44],
            [1, 8, 11, 31, 41, 42],
            [13, 14, 16, 38, 42, 45],
            [7, 11, 30, 40, 42, 43],
            [2, 13, 22, 32, 38, 45],
            [1, 3, 5, 14, 22, 45],
            [1, 3, 5, 14, 22, 45],
            [1, 3, 5, 14, 22, 45],
        ]);
        mockQuestions(['10891']);
        const app = new App();
        app.play();
        expect(app.controller.lottos).toHaveLength(10);
    });
    test('당첨번호와 보너스번호 가져오기 테스트', () => {
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
        const app = new App();
        app.play();
        const winningNumber = app.controller.winningNumber.getWinningNumber();
        const bonusNumber = app.controller.winningNumber.getBonusNumber();
        expect(winningNumber).toEqual(['1', '2', '3', '4', '5', '6']);
        expect(bonusNumber).toEqual('7');
    });
    test('로또 맞추기 테스트', () => {
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
        const app = new App();
        app.play();
        expect(app.controller.checkWinning.getCountWinning()).toEqual([1, 0, 0, 0, 0]);
    });
    test('통계 출력 테스트 case1', () => {
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
        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });
    test('통계 출력 테스트 case2', () => {
        mockRandoms([
            [8, 21, 23, 41, 42, 43],
            [3, 5, 11, 16, 32, 38],
            [7, 11, 16, 35, 36, 44],
            [1, 2, 3, 4, 41, 42],
            [1, 2, 3, 4, 5, 45],
            [1, 2, 3, 4, 5, 7],
            [1, 2, 3, 4, 5, 6],
            [1, 3, 5, 14, 22, 45],
        ]);
        mockQuestions(['8000', '1,2,3,4,5,6', '7']);
        const logs = [
            '3개 일치 (5,000원) - 1개',
            '4개 일치 (50,000원) - 1개',
            '5개 일치 (1,500,000원) - 1개',
            '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
            '6개 일치 (2,000,000,000원) - 1개',
            '총 수익률은 25394437.5%입니다.',
        ];
        const logSpy = getLogSpy();
        const app = new App();
        app.play();
        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });
    test('수익률 테스트 case1', () => {
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
        const app = new App();
        app.play();
        expect(app.controller.calculate.getYield([1, 0, 0, 0, 0])).toContain('62.5');
    });
    test('수익률 테스트 case2', () => {
        mockRandoms([
            [8, 21, 23, 41, 42, 43],
            [3, 5, 11, 16, 32, 38],
            [7, 11, 16, 35, 36, 44],
            [1, 8, 11, 31, 41, 42],
            [13, 14, 16, 38, 42, 45],
            [7, 11, 30, 40, 42, 43],
            [1, 3, 4, 5, 6, 7],
            [1, 3, 5, 14, 22, 45],
        ]);
        mockQuestions(['8000', '1,2,3,4,5,6', '7']);
        const app = new App();
        app.play();
        const result = app.controller.checkWinning.getCountWinning();
        expect(app.controller.calculate.getYield(result)).toContain('375062.5');
    });
});