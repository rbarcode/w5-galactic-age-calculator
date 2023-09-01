import { MercuryCalc } from "../src/js/mercury-calc.js";

describe('MercuryCalc', () => {

  let mercuryCalc;
  beforeEach(() => {
    mercuryCalc = new MercuryCalc(20);
  });

  test('should create a mercurycalc object with current mercury age', () => {
    expect(mercuryCalc).toEqual({ earthAge: 20, mercuryYear: .24, mercuryAge: "83.33", pastMercuryYears: "0.00", futureMercuryYears: "0.00" });
  });

});