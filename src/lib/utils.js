/**
 * @param {number} price
 * @returns {string}
 */
const addComma = (price) => {
  return price.toLocaleString()
}

/**
 * @param {string} price
 * @returns {number}
 */
const substractComma = (price) => {
  return Number(price.replace(/\,/g, ''))
}

/**
 * 교집합(set1 & set2)를 반환한다.
 * @param {Set<*>} set1
 * @param {Set<*>} set2
 */
const getIntersection = (set1, set2) => {
  return new Set([...set1].filter((x) => set2.has(x)))
}

/**
 * @param {number} number1
 * @param {number} number2
 */
const sortIncreasingOrder = (number1, number2) => {
  return number1 - number2
}

/**
 * @param {number} float
 * @param {number} toDecimalPoint
 * @returns {number}
 */
const round = (float, toDecimalPoint = 0) => {
  const roundHelper = 10 ** toDecimalPoint

  return Math.round(float * roundHelper) / roundHelper
}

module.exports = {
  addComma,
  substractComma,
  getIntersection,
  sortIncreasingOrder,
  round,
}
