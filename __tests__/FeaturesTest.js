const App = require("../src/App");

describe('기능 테스트', () => {
    test('로또 구입 금액 예외 처리', () => {
        const app = new App();
        expect(() => app.isPurchaseAmountValid('1200')).toThrow(
            '[ERROR] 로또를 살 수 없는 금액입니다.'
        );
    });

    test('보너스 번호 중복 여부 예외 처리', () => {
        const app = new App();
        expect(() => app.isBonusDuplicated(1, [1, 2, 3, 4, 5, 6])).toThrow(
            '[ERROR] 중복된 번호입니다.'
        );
    });
})