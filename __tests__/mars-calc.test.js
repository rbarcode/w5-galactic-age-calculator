import { MarsCalc } from "../src/js/mars-calc.js";

describe('MarsCalc', () => {

  let marsCalc;
  beforeEach(() => {
    marsCalc = new MarsCalc(20);
  });

  test('should create a marscalc object with current martian age', () => {
    expect(marsCalc).toEqual({ earthAge: 20, marsYear: 1.88, marsAge: "10.64", pastMarsYears: "0.00", futureMarsYears: "0.00" });
  });

});