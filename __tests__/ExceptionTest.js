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

describe('예외테스트', () => {
    test('금액이 0으로 시작할 경우', () => {
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
        mockQuestions(['08000', '1,2,3,4,5,6', '7']);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });
    test('금액에 숫자가 아닌 문자를 포함할때', () => {
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
        mockQuestions(['8a00', '1,2,3,4,5,6', '7']);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });
    test('당첨번호 6자리 아닐경우', () => {
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
        mockQuestions(['8000', '1,2,3,4,56', '7']);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });
    test('1~45사이의 수가 아닐경우', () => {
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
        mockQuestions(['8000', '1,2,3,4,55,6', '7']);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });
    test('","이외의 구분자 사용할 때', () => {
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
        mockQuestions(['8000', '1.2.3,4,5,6', '7']);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });
    test('당첨번호에 문자를 입력할 때', () => {
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
        mockQuestions(['8000', '1,2,3,4,s,6', '7']);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });

    test('당첨번호와 보너스번호의 중복', () => {
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
        mockQuestions(['8000', '1,2,3,4,5,6', '6']);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });
    test('보너스 번호에 문자 입력할 때', () => {
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
        mockQuestions(['8000', '1,2,3,4,5,6', 'q']);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });
    test('보너스 번호가 범위를 벗어날 때', () => {
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
        mockQuestions(['8000', '1,2,3,4,5,6', '123']);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });
});