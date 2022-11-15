const InputAcceptor = require("../src/InputAcceptor");
const ERROR_MESSAGE = require("../src/constants").ERROR_MESSAGE;

describe("인풋 처리 테스트", () => {
    test("stringToNumber 1개 인풋 테스트", () => {
        expect(InputAcceptor.stringToNumber("1")).toEqual(1);
    });

    test("stringToNumber 배열 인풋 테스트", () => {
        const stringArray = ["1", "2,", "3", "4", "5"];
        expect(InputAcceptor.stringToNumber(stringArray)).toEqual([1, 2, 3, 4, 5]);
    });

    test("checkANumber: 숫자가 아닌 문자(1000j)에 대해 에러 발생 테스트", () => {
        const str = '1000j';
        expect(() => InputAcceptor.checkANumber(str)).toThrow(ERROR_MESSAGE.NOT_A_NUMBER);
    });

    test("checkANumber: 숫자 문자에 대해 true 반환 테스트", () => {
        const str = '1';
        expect(InputAcceptor.checkANumber(str)).toBeTruthy();
    });

    test("checkWinningLottoNumbersValidation: 정상적인 배열에 대해 true 반환 테스트", () => {
        const strArray = ['1', '2', '3', '4', '5', '6'];
        expect(InputAcceptor.checkWinningLottoNumbersValidation(strArray)).toBeTruthy();
    });

    test("checkWinningLottoNumbersValidation: 숫자가 아닌 문자 'a'가 포함되어 있는 배열에 대한 에러 발생 테스트", () => {
        const strArray = ['1', '2', '3', '4', '5', 'a'];
        expect(() => InputAcceptor.checkWinningLottoNumbersValidation(strArray)).toThrow(ERROR_MESSAGE.NOT_A_NUMBER);
    });

    test("checkWinningLottoNumbersValidation: 6개 요소가 아닌 5개 요소를 갖고 있는 배열에 대한 에러 발생 테스트", () => {
        const strArray = ['1', '2', '3', '4', '5'];
        expect(() => InputAcceptor.checkWinningLottoNumbersValidation(strArray)).toThrow(ERROR_MESSAGE.LOTTO_NUMBERS_NOT_SIX_DIGITS);
    });

    test("checkWinningLottoNumbersValidation: 6개 요소가 아닌 7개 요소를 갖고 있는 배열에 대한 에러 발생 테스트", () => {
        const strArray = ['1', '2', '3', '4', '5', '6', '7'];
        expect(() => InputAcceptor.checkWinningLottoNumbersValidation(strArray)).toThrow(ERROR_MESSAGE.LOTTO_NUMBERS_NOT_SIX_DIGITS);
    });

    test("checkWinningLottoNumbersValidation: 범위를 벗어나는 요소 '0'에 대한 에러 발생 테스트", () => {
        const strArray = ['1', '2', '3', '4', '5', '0'];
        expect(() => InputAcceptor.checkWinningLottoNumbersValidation(strArray)).toThrow(ERROR_MESSAGE.NOT_VALID_RANGE);
    });

    test("checkWinningLottoNumbersValidation: 범위를 벗어나는 요소 '46'에 대한 에러 발생 테스트", () => {
        const strArray = ['1', '2', '3', '4', '5', '46'];
        expect(() => InputAcceptor.checkWinningLottoNumbersValidation(strArray)).toThrow(ERROR_MESSAGE.NOT_VALID_RANGE);
    });

    test("checkWinningLottoNumbersValidation: 중복 요소를 가진 배열에 대한 에러 발생 테스트", () => {
        const strArray = ['1', '2', '3', '4', '5', '5'];
        expect(() => InputAcceptor.checkWinningLottoNumbersValidation(strArray)).toThrow(ERROR_MESSAGE.LOTTO_NUMBERS_DUPLICATE);
    });
})