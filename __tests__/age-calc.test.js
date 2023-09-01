import { AgeCalculator } from "../src/js/age-calc.js";

describe('AgeCaculator', () => {

  let ageCalc;
  beforeEach(() => {
    ageCalc = new AgeCalculator(20);
  });

  test('should create a agecalculator object and calculate current galactic ages', () => {
    expect(ageCalc).toEqual({ earthAge: 20, earthYear: 1, mercuryYear: .24, venusYear: .62, marsYear: 1.88, jupiterYear: 11.86, mercuryAge: "83.33", venusAge: "32.26", marsAge: "10.64", jupiterAge: "1.69", pastEarthYears: "0.00", pastMercuryYears: "0.00", pastVenusYears: "0.00", pastMarsYears: "0.00", pastJupiterYears: "0.00", futureEarthYears: "0.00", futureMercuryYears: "0.00", futureVenusYears: "0.00", futureMarsYears: "0.00", futureJupiterYears: "0.00"});
  });

  test('should calculate how many years have passed on each planet since a past birthday', () => {
    ageCalc.calcYearsSinceBday(17);
    expect(ageCalc).toEqual({ earthAge: 20, earthYear: 1, mercuryYear: .24, venusYear: .62, marsYear: 1.88, jupiterYear: 11.86, mercuryAge: "83.33", venusAge: "32.26", marsAge: "10.64", jupiterAge: "1.69", pastEarthYears: "3.00", pastMercuryYears: "12.50", pastVenusYears: "4.84", pastMarsYears: "1.60", pastJupiterYears: "0.25", futureEarthYears: "0.00", futureMercuryYears: "0.00", futureVenusYears: "0.00", futureMarsYears: "0.00", futureJupiterYears: "0.00"});
  });

});