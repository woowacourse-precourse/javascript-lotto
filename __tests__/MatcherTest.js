const Matcher = require("../src/Matcher");
const Lotto = require("../src/Lotto");
const PRIZE_INDEX = require('../src/constants').PRIZE_INDEX;
const winningNumbers = [1, 2, 3, 4, 5, 6];
const bonusNumber = 7;
const matcher = new Matcher(winningNumbers, bonusNumber);

describe("Matcher 클래스 테스트", () => {
    test("matchWithWinningNumbers: 1등 인덱스 반환 테스트", () => {
        expect(matcher.matchWithWinningNumbers(winningNumbers)).toEqual(PRIZE_INDEX.FIRST);
    });

    test("matchWithWinningNumbers: 3등 인덱스 반환 테스트", () => {
        expect(matcher.matchWithWinningNumbers([1, 2, 3, 4, 5, 7])).toEqual(PRIZE_INDEX.THIRD);
    });

    test("matchWithWinningNumbers: 3등 인덱스 반환 테스트", () => {
        expect(matcher.matchWithWinningNumbers([1, 2, 3, 4, 5, 8])).toEqual(PRIZE_INDEX.THIRD);
    });

    test("matchWithWinningNumbers: 4등 인덱스 반환 테스트", () => {
        expect(matcher.matchWithWinningNumbers([1, 2, 3, 4, 7, 8])).toEqual(PRIZE_INDEX.FOURTH);
    });

    test("matchWithWinningNumbers: 5등 인덱스 반환 테스트", () => {
        expect(matcher.matchWithWinningNumbers([1, 2, 3, 9, 7, 8])).toEqual(PRIZE_INDEX.FIFTH);
    });

    test("matchWithWinningNumbers: 낙첨 인덱스 반환 테스트", () => {
        expect(matcher.matchWithWinningNumbers([1, 2, 10, 9, 7, 8])).toEqual(PRIZE_INDEX.NOTHING);
    });

    test("matchWithBonusNumber: 보너스 번호가 들어 있는 배열 테스트", () => {
        expect(matcher.matchWithBonusNumber([1, 2, 3, 4, 5, 7])).toEqual(PRIZE_INDEX.SECOND);
    });

    test("matchWithBonusNumber: 보너스 번호가 들어 있지 않은 배열 테스트", () => {
        expect(matcher.matchWithBonusNumber([1, 2, 3, 4, 5, 8])).toEqual(PRIZE_INDEX.THIRD);
    });
})