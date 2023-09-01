import { AgeCalculator } from "../src/js/age-calc.js";

describe('AgeCaculator', () => {

  let ageCalc;
  beforeEach(() => {
    ageCalc = new AgeCalculator(20);
  });

  test('should create a agecalculator object for earth age', () => {
    expect(ageCalc).toEqual({ earthAge: 20, pastEarthYears: "0.00", futureEarthYears: "0.00"});
  });

  test('should calculate how many years have passed on earth since a past birthday', () => {
    ageCalc.calcYearsSinceBday(17);
    expect(ageCalc).toEqual({ earthAge: 20, pastEarthYears: "3.00", futureEarthYears: "0.00"});
  });

  test('should calculate how many years will pass on earth until a given future birthday', () => {
    ageCalc.calcYearsToBirthday(32);
    expect(ageCalc).toEqual({ earthAge: 20, pastEarthYears: "0.00", futureEarthYears: "12.00"});
  });

});