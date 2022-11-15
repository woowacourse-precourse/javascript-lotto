const MissionUtils = require("@woowacourse/mission-utils");
const LottoDraw = require("../src/LottoDraw");
const Lotto = require("../src/Lotto");

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
  };

describe("예외 테스트", () => {
    test("[예외처리] 당첨 번호로 입력한 값의 갯수가 6개가 아닌 경우", () => {
        const draw = new LottoDraw();
        expect(() => draw.setWinningNums(['1', '2', '4'].map(Number))).toThrow("[ERROR]");
    });
    test("[예외처리] 당첨 번호로 입력한 값 중 숫자가 아닌 값이 포함된 경우", () => {
        const draw = new LottoDraw();
        expect(() => draw.setWinningNums(['1', '2', '4', 'd', '5', '6'].map(Number))).toThrow("[ERROR]");
    });
    test("[예외처리] 당첨 번호로 입력한 값 중 중복되는 숫자가 있을 경우", () => {
        const draw = new LottoDraw();
        expect(() => draw.setWinningNums(['1', '2', '4', '4', '5', '6'].map(Number))).toThrow("[ERROR]");
    });
    test("[예외처리] 당첨 번호로 입력한 값 중 범위에서 벗어난 숫자가 있을 경우", () => {
        const draw = new LottoDraw();
        expect(() => draw.setWinningNums(['1', '2', '4', '48', '5', '6'].map(Number))).toThrow("[ERROR]");
    });
    test("[예외처리] 보너스 번호로 입력한 값이 숫자가 아닐 경우", () => {
        const draw = new LottoDraw();
        draw.setWinningNums(['1', '2', '4', '7', '5', '6'].map(Number));
        expect(() => draw.setBonusNum(Number('dd'))).toThrow("[ERROR]");
    });
    test("[예외처리] 보너스 번호로 입력한 값이 당첨 번호 값 중 중복되는 숫자가 있을 경우", () => {
        const draw = new LottoDraw();
        draw.setWinningNums(['1', '2', '4', '7', '5', '6'].map(Number));
        expect(() => draw.setBonusNum(Number('2'))).toThrow("[ERROR]");
    });
    test("[예외처리] 보너스 번호로 입력한 값이 범위에서 벗어난 경우", () => {
        const draw = new LottoDraw();
        draw.setWinningNums(['1', '2', '4', '7', '5', '6'].map(Number));
        expect(() => draw.setBonusNum(Number('46'))).toThrow("[ERROR]");
    });
});

describe("기능 테스트", () => {
    test("당첨 내역을 출력하는 기능", () => {
        const lottos = [
            new Lotto([8, 21, 23, 41, 42, 43]),
            new Lotto([3, 5, 11, 16, 32, 38]),
            new Lotto([7, 11, 16, 35, 36, 44]),
            new Lotto([1, 8, 11, 31, 41, 42]),
            new Lotto([13, 14, 16, 38, 42, 45]),
            new Lotto([7, 11, 30, 40, 42, 43]),
            new Lotto([2, 13, 22, 32, 38, 45]),
            new Lotto([1, 3, 5, 14, 22, 45]),
        ];

        const logs = [
            "3개 일치 (5,000원) - 1개",
            "4개 일치 (50,000원) - 0개",
            "5개 일치 (1,500,000원) - 0개",
            "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
            "6개 일치 (2,000,000,000원) - 0개",
        ];

        const logSpy = getLogSpy();
        
        const draw = new LottoDraw();
        draw.setWinningNums(['1', '2', '3', '4', '5', '6'].map(Number));
        draw.setBonusNum(Number('7'));
        draw.checkResult(lottos);

        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });
});