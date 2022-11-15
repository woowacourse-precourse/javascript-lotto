const Matcher = require("../src/Matcher");
const Lotto = require("../src/Lotto");
const PRIZE_INDEX = require('../src/constants').PRIZE_INDEX;
const winningNumbers = [1, 2, 3, 4, 5, 6];
const bonusNumber = 7;
const matcher = new Matcher(winningNumbers, bonusNumber);
const testArray = {
    first: winningNumbers,
    second: [1, 2, 3, 4, 5, 7],
    third: [1, 2, 3, 4, 5, 8],
    fourth: [1, 2, 3, 4, 7, 8],
    fifth: [1, 2, 3, 9, 7, 8],
    nothing: [1, 2, 10, 9, 7, 8],
}

describe("Matcher 클래스 테스트", () => {
    test("matchWithWinningNumbers: 1등 인덱스 반환 테스트", () => {
        expect(matcher.matchWithWinningNumbers(testArray.first)).toEqual(PRIZE_INDEX.FIRST);
    });

    test("matchWithWinningNumbers: 3등 인덱스 반환 테스트", () => {
        expect(matcher.matchWithWinningNumbers(testArray.second)).toEqual(PRIZE_INDEX.THIRD);
    });

    test("matchWithWinningNumbers: 3등 인덱스 반환 테스트", () => {
        expect(matcher.matchWithWinningNumbers(testArray.third)).toEqual(PRIZE_INDEX.THIRD);
    });

    test("matchWithWinningNumbers: 4등 인덱스 반환 테스트", () => {
        expect(matcher.matchWithWinningNumbers(testArray.fourth)).toEqual(PRIZE_INDEX.FOURTH);
    });

    test("matchWithWinningNumbers: 5등 인덱스 반환 테스트", () => {
        expect(matcher.matchWithWinningNumbers(testArray.fifth)).toEqual(PRIZE_INDEX.FIFTH);
    });

    test("matchWithWinningNumbers: 낙첨 인덱스 반환 테스트", () => {
        expect(matcher.matchWithWinningNumbers(testArray.nothing)).toEqual(PRIZE_INDEX.NOTHING);
    });

    test("matchWithBonusNumber: 보너스 번호가 들어 있는 배열 테스트", () => {
        expect(matcher.matchWithBonusNumber(testArray.second)).toEqual(PRIZE_INDEX.SECOND);
    });

    test("matchWithBonusNumber: 보너스 번호가 들어 있지 않은 배열 테스트", () => {
        expect(matcher.matchWithBonusNumber(testArray.third)).toEqual(PRIZE_INDEX.THIRD);
    });

    test("getMatchResult: 테스트", () => {
        const lottoWallet = [];
        const keys = Object.keys(testArray)
        for (let idx = 0; idx < keys.length; idx++) {
            const key = keys[idx] // 각각의 키
            const lotto = new Lotto(testArray[key]);
            lottoWallet.push(lotto);
        }
        const matchResult = [1, 1, 1, 1, 1];
        expect(matcher.getMatchResult(lottoWallet)).toEqual(matchResult);
    });
})