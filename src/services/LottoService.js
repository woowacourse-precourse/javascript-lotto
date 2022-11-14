const GradeCalculator = require('./GradeCalculator');
const GradeAdder = require('./GradeAdder');
const GRADE = require('../utils/grade');

class LottoService {
  static calculateGradeResult({ lottos, bonus, numbers }) {
    let gradeResult = Array.from({ length: GRADE.length }, () => 0);

    lottos.forEach(ticket => {
      const grade = GradeCalculator.calculate({ ticket, bonus, numbers });
      gradeResult = GradeAdder.addPrizeToGradeResult(gradeResult, grade);
    });

    return gradeResult;
  }
}

module.exports = LottoService;
