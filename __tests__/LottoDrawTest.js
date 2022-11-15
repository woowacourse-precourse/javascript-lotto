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