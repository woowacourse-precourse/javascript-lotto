class Utils {
  static transformArrayToString(array, separator = ", ") {
    return `[${array.join(separator)}]`;
  }

  static transformStringToNumberArray(string, separator = ",") {
    return string.split(separator).map((number) => parseInt(number, 10));
  }

  static intersect(setA, setB) {
    if (!setA instanceof Set || !setB instanceof Set) {
      throw new Error("params is not Set instance.");
    }
    return new Set([...setA].filter((x) => setB.has(x)));
  }
}

module.exports = Utils;
