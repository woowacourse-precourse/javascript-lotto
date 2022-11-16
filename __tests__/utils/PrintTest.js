const Constant = require("../../src/Constant");
const utils = require("../../src/utils");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

const mockQuestions = (answers) => {
    MissionUtils.Console.readLine = jest.fn();
    answers.reduce((acc, input) => {
        return acc.mockImplementationOnce((question, callback) => {
            callback(input);
        });
    }, MissionUtils.Console.readLine);
};

describe("utils.print Test Code", () => {
    mockQuestions(['9000']);

    test("구입 금액 입력 문구", () => {
        const logs = [
            Constant.MESSAGE.GAME_START_MSG
        ];
        const logSpy = getLogSpy();
        utils.print(Constant.MESSAGE.GAME_START_MSG);

        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });

    test("배열", () => {
        const logs = [
            "[8, 21, 23, 41, 42, 43]"
        ];
        const arr = "[8, 21, 23, 41, 42, 43]";
        const logSpy = getLogSpy();

        utils.print(arr);
        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });    }
    );
});
