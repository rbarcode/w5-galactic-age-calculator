import { MercuryCalc } from "../src/js/mercury-calc.js";

describe('MercuryCalc', () => {

  let mercuryCalc;
  beforeEach(() => {
    mercuryCalc = new MercuryCalc(20);
  });

  test('should create a mercurycalc object with current mercury age', () => {
    expect(mercuryCalc).toEqual({ earthAge: 20, mercuryYear: .24, mercuryAge: "83.33", pastMercuryYears: "0.00", futureMercuryYears: "0.00" });
  });

  test('should calculate how many years have passed on mercury since a past birthday', () => {
    mercuryCalc.calcYearsSinceBday(17);
    expect(mercuryCalc).toEqual({ earthAge: 20, mercuryYear: .24, mercuryAge: "83.33", pastMercuryYears: "12.50", futureMercuryYears: "0.00" });
  });

  test('should calculate how many years will pass on mercury until a given future birthday', () => {
    mercuryCalc.calcYearsToBday(32);
    expect(mercuryCalc).toEqual({ earthAge: 20, mercuryYear: .24, mercuryAge: "83.33", pastMercuryYears: "0.00", futureMercuryYears: "50.00" });
  });

});