import { AgeCaculator } from "../src/js/age-calc.js";

describe('AgeCaculator', () => {

  let ageCalc;
  beforeEach(() => {
    ageCalc = new AgeCaculator(20);
  });

  test('should create a agecalculator object', () => {
    expect(ageCalc).toEqual({ age: 20, earthYear: 1, mercuryYear: .24, venusYear: .62, marsYear: 1.88, jupiterYear: 11.86 });
  });


});