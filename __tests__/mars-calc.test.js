import { MarsCalc } from "../src/js/mars-calc.js";

describe('MarsCalc', () => {

  let marsCalc;
  beforeEach(() => {
    marsCalc = new MarsCalc(20);
  });

  test('should create a marscalc object with current martian age', () => {
    expect(marsCalc).toEqual({ earthAge: 20, marsYear: 1.88, marsAge: "10.64", pastMarsYears: "0.00", futureMarsYears: "0.00" });
  });

  test('should calculate how many years have passed on mars since a past birthday', () => {
    marsCalc.calcYearsSinceBday(17);
    expect(marsCalc).toEqual({ earthAge: 20, marsYear: 1.88, marsAge: "10.64", pastMarsYears: "1.60", futureMarsYears: "0.00" });
  });

  test('should calculate how many years will pass on mars until a given future birthday', () => {
    marsCalc.calcYearsToBday(32);
    expect(marsCalc).toEqual({ earthAge: 20, marsYear: 1.88, marsAge: "10.64", pastMarsYears: "0.00", futureMarsYears: "6.38" });
  });

});