class WinningExceptionHandling {
    constructor(winning) {
        this.lengthCheck(winning);
        this.overlapCheck(winning);
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
};

module.exports = WinningExceptionHandling;