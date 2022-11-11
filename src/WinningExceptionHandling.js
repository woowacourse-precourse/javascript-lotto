class WinningExceptionHandling {
    constructor(winning) {
        this.lengthCheck(winning);
    };
    lengthCheck(winning) {
        if (winning.length !== 6) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        };
    };
};

module.exports = WinningExceptionHandling;