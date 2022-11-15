const Utils = require('./Utils');

let instance = null;

class UserModels {
    constructor() {
        if (instance) {
            return instance;
        }

        this._userCache = null;
        this._userLottoList = null;
        this._userWinningLotto = null;
        this._userBonus = null;

        instance = this;
    }

    getUserCache() {
        return this._userCache;
    }

    setUserCache(userCache) {
        if (typeof userCache !== 'number') {
            this._userCache = Utils.convertToNumber(userCache);
            return;
        }

        this._userCache = userCache;
    }

    getUserLottoList() {
        return this._userLottoList;
    }

    setUserLottoList(userLottoList) {
        this._userLottoList = userLottoList;
    }

    getUserWinningLotto() {
        return this._userWinningLotto;
    }

    setUserWinningLotto(userWinningLotto) {
        const isNotLottoClass =
            Object.prototype.toString.call(userWinningLotto) !== '[object Lotto]';

        if (isNotLottoClass) {
            return;
        }

        this._userWinningLotto = userWinningLotto;
    }

    getUserBonus() {
        return this._userBonus;
    }

    setUserBonus(userBonus) {
        if (typeof userBonus !== 'number') {
            this._userBonus = Utils.convertToNumber(userBonus);
            return;
        }

        this._userBonus = userBonus;
    }
}

module.exports = UserModels;
