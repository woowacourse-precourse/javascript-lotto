const App = require("../src/App");

describe('기능 테스트', () => {
    test('로또 구입 금액 예외 처리', () => {
        const app = new App();
        expect(() => app.isPurchaseAmountValid('1200')).toThrow(
            '[ERROR] 로또를 살 수 없는 금액입니다.'
        );
    });

    test('중복된 번호 입력 예외 처리', () => {
        const app = new App();
        expect(() => app.isDuplicated(['1', '1'])).toThrow(
            '[ERROR] 중복된 번호입니다.'
        );
    });

    test('당첨 번호 입력값이 6자리가 아닐 경우 예외 처리', () => {
        const app = new App();
        expect(() => app.isLottoSix(['1'])).toThrow(
            '[ERROR] 잘못된 개수 입력입니다.'
        );
    });
})