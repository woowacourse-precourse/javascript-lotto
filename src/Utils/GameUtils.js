class GameUtils {
  static removeBlank(value) {
    const regex = /\s/g;
    const nonBlank = value.replace(regex, '');
    return nonBlank;
  }
}

module.exports = GameUtils;