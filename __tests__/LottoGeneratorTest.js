const LottoGenerator = require('../src/LottoGenerator.js');

describe('로또 생성기 클래스 테스트', () => {
    const lottoGenerator = new LottoGenerator();


    test('지불한 액수를 1000으로 나눠서 출력한다.', () => {
        expect(lottoGenerator.checkHowManyLottos(10000)).toEqual(10);
    })
    
    test('구매 개수만큼 로또번호가 생성된다.', () => {
    expect(lottoGenerator.makePaidLottoNumbers(8).length).toEqual(8);
    })
    


});
