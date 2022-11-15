const { Console } = require('@woowacourse/mission-utils');
const UserModels = require('../src/UserModels');
const Lotto = require('../src/Lotto');
const HandleException = require('../src/HandleException');
const Validation = require('../src/Validation');

describe('UserModels 클래스 테스트', () => {
    test('싱글톤 패턴이 적용되어 있는가?', () => {
        const instanceA = new UserModels();
        const instanceB = new UserModels();

        expect(instanceA === instanceB).toBe(true);
    });

    test('userCache가 string으로 들어오면 변환해서 저장', () => {
        const userModels = new UserModels();
        userModels.setUserCache('8000');

        expect(userModels.getUserCache()).toBe(8000);
    });

    test('userWinningLotto의 인자가 Lotto Class가 아니면 값 저장X', () => {
        const userModels = new UserModels();
        userModels.setUserWinningLotto('안녕하세요');

        expect(userModels.getUserWinningLotto()).toBe(null);

        const testLotto = new Lotto([1, 2, 3, 4, 5, 6]);
        userModels.setUserWinningLotto(testLotto);
        const result = userModels.getUserWinningLotto();

        expect(Object.prototype.toString.call(result)).toBe('[object Lotto]');
    });

    test('userBonus가 string으로 들어오면 변환해서 저장', () => {
        const userModels = new UserModels();
        userModels.setUserBonus('7');

        expect(userModels.getUserBonus()).toBe(7);
    });
});

describe('HandleException 클래스 테스트', () => {
    test('싱글톤 패턴이 적용되어 있는가?', () => {
        const instanceA = new HandleException();
        const instanceB = new HandleException();

        expect(instanceA === instanceB).toBe(true);
    });

    test('tryValidate에서 invalidation 하다면 메시지 출력 후 예외 발생', () => {
        const handleException = new HandleException();

        const logSpy = jest.spyOn(Console, 'print');

        expect(() => {
            handleException.tryValidate('a', 'Cache');
        }).toThrow('[ERROR]');

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
    });
});

describe('Validation 클래스 테스트', () => {
    test('싱글톤 패턴이 적용되어 있는가?', () => {
        const instanceA = new Validation();
        const instanceB = new Validation();

        expect(instanceA === instanceB).toBe(true);
    });

    describe('각 입력 단계에서 발생할 수 있는 예외 조건 탐지', () => {
        describe('금액을 입력할 시', () => {
            test('숫자가 아닐 시 NOT_NUMBER: true', () => {
                const myValidation = new Validation();
                const result = myValidation.getValidateCondition('a', 'Cache');
                expect(result).toHaveProperty('NOT_NUMBER', true);
            });

            test('로또를 구매할 수 없을 시(1000원 이하 입력) COULD_NOT_BUY: true', () => {
                const myValidation = new Validation();
                const result = myValidation.getValidateCondition(800, 'Cache');
                expect(result).toHaveProperty('COULD_NOT_BUY', true);
            });

            test('1,000원 단위가 아닐 시 COULD_NOT_BE_DEVIDED_BY_THOUSAND: true', () => {
                const myValidation = new Validation();
                const result = myValidation.getValidateCondition(8100, 'Cache');
                expect(result).toHaveProperty('COULD_NOT_BE_DEVIDED_BY_THOUSAND', true);
            });
        });

        describe('당첨 번호를 입력 시', () => {
            test('6자리가 아닐 시 NOT_SIX_LENGTH: true', () => {
                const myValidation = new Validation();
                const result = myValidation.getValidateCondition('1,2,3,4,5', 'WinningLotto');
                expect(result).toHaveProperty('NOT_SIX_LENGTH', true);
            });

            test('숫자나 쉼표(,) 이외의 문자가 입력될 시 INCLUDE_NEITHER_NUMBER_NOR_COMMA: true', () => {
                const myValidation = new Validation();
                const result = myValidation.getValidateCondition('1,a,2,3,4', 'WinningLotto');
                expect(result).toHaveProperty('INCLUDE_NEITHER_NUMBER_NOR_COMMA', true);
            });

            test('1부터 45 사이 숫자가 아닐 시 NOT_RANGE_FROM_ONE_TO_FORTYFIVE: true', () => {
                const myValidation = new Validation();
                const result = myValidation.getValidateCondition('1,2,3,4,46', 'WinningLotto');
                expect(result).toHaveProperty('NOT_RANGE_FROM_ONE_TO_FORTYFIVE', true);
            });

            test('중복된 숫자가 있을 시 DUPLICATED_NUMBER: true', () => {
                const myValidation = new Validation();
                const result = myValidation.getValidateCondition('1,2,3,4,4', 'WinningLotto');
                expect(result).toHaveProperty('DUPLICATED_NUMBER', true);
            });
        });

        describe('보너스 번호를 입력할 시', () => {
            test('숫자가 아닐 시 NOT_NUMBER: true', () => {
                const myValidation = new Validation();
                const result = myValidation.getValidateCondition('a', 'Bonus');
                expect(result).toHaveProperty('NOT_NUMBER', true);
            });

            test('1부터 45 사이 숫자가 아닐 시 NOT_RANGE_FROM_ONE_TO_FORTYFIVE: true', () => {
                const myValidation = new Validation();
                const result = myValidation.getValidateCondition('46', 'Bonus');
                expect(result).toHaveProperty('NOT_RANGE_FROM_ONE_TO_FORTYFIVE', true);
            });

            test('당첨 번호에 있는 숫자일 시 IN_WINNING_NUMBER: true', () => {
                const myValidation = new Validation();
                const userModels = new UserModels();
                userModels.setUserWinningLotto(new Lotto([1, 2, 3, 4, 5, 6]));

                const result = myValidation.getValidateCondition('6', 'Bonus');
                expect(result).toHaveProperty('IN_WINNING_NUMBER', true);
            });
        });
    });
});
