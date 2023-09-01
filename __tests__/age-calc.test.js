import { AgeCaculator } from "../src/js/age-calc.js";

describe('AgeCaculator', () => {

  let ageCalc;
  beforeEach(() => {
    ageCalc = new AgeCaculator(20);
  });

  test('should create a agecalculator object with current galactic ages', () => {
    expect(ageCalc).toEqual({ earthAge: 20, earthYear: 1, mercuryYear: .24, venusYear: .62, marsYear: 1.88, jupiterYear: 11.86, mercuryAge: "83.33", venusAge: "32.26", marsAge: "10.64", jupiterAge: "1.69" });
  });

});