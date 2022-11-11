class GameUtils {
  static filterPurchaseAmount(value) {
    const regex = /[,'원']/g;
    value = value.replace(regex, '');
    return value;
  }
  static removeBlank(value) {
    const regex = /\s/g;
    const nonBlank = value.replace(regex, '');
    return nonBlank;
  }
}

module.exports = GameUtils;