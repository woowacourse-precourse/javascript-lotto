const utils = require("../../src/utils");
const Constant = require("../../src/Constant");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
    MissionUtils.Console.readLine = jest.fn();
    answers.reduce((acc, input) => {
        return acc.mockImplementationOnce((question, callback) => {
            callback(input);
        });
    }, MissionUtils.Console.readLine);
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};


describe("utils.scan Test Code", () => {
    mockQuestions(['9000']);
    test("구입 금액 입력", () => {
        const result = utils.scan(Constant.MESSAGE.GAME_START_MSG);
        expect(result).toEqual('9000');
    });

    test("구입 금액 입력", () => {
        mockQuestions(['10000']);
        const result = utils.scan(Constant.MESSAGE.GAME_START_MSG);
        expect(result).toEqual('10000');
    });

    test("입력 메시지 없는 경우", () => {
        mockQuestions(['2000']);
        const result = utils.scan();
        expect(result).toEqual('2000');
    });
});



