class WinningExceptionHandling {
    constructor(winning) {
        this.lengthCheck(winning);
        this.overlapCheck(winning);
        this.rangeCheck(winning);
        this.letterCheck(winning);
    };
    lengthCheck(winning) {
        if (winning.length !== 6) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        };
    };
    overlapCheck(winning) {
        const setWinning = new Set(winning);
        if (setWinning.size !== winning.length) {
            throw new Error("[ERROR] 로또 번호는 중복이 없습니다.");
        };
    };
    rangeCheck(winning) {
        for(let index = 0 ;index<winning.length;index++){
          if(!(winning[index]>=1 && winning[index]<=45)){
            throw new Error("[ERROR] 로또 번호는 숫자는 1~45 까지 입니다.");
          };
        };
      };
    letterCheck(winning) {
        const regex = /[^0-9]/g;
        const result = String(winning).replace(regex, '');
        if (result.length !== winning.join("").length){
            throw new Error("[ERROR] 로또 번호는 숫자만 입력해야 합니다.");
        };
    };

};

module.exports = WinningExceptionHandling;