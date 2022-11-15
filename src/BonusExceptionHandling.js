class BonusExceptionHandling {
    constructor(bonus,winning){
        this.rangeCheck(bonus);
        this.overlapCheck(bonus,winning);
    };
    rangeCheck(bonus){
        if(!(bonus>=1 && bonus<=45)){
            throw new Error("[ERROR] 보너스 숫자 범위는 1~45 입니다.");
        };
    };
    overlapCheck(bonus,winning){
        if(winning.indexOf(bonus)>=0){
            throw new Error("[ERROR] 보너스 숫자가 당첨번호와 중복 됩니다.");
        };
    };
};

module.exports = BonusExceptionHandling;