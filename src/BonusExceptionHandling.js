class BonusExceptionHandling {
    constructor(bonus,winning){
        this.rangeCheck(bonus);
    };
    rangeCheck(bonus){
        if(!(bonus>=1 && bonus<=45)){
            throw new Error("[ERROR] 보너스 숫자 범위는 1~45 입니다.");
        };
    };
};

module.exports = BonusExceptionHandling;