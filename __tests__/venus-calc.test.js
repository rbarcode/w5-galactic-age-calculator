import { VenusCalc } from "../src/js/venus-calc.js";

describe('VenusCalc', () => {

  let venusCalc;
  beforeEach(() => {
    venusCalc = new VenusCalc(20);
  });

  test('should create a venuscalc object with current venus age', () => {
    expect(venusCalc).toEqual({ earthAge: 20, venusYear: .62, venusAge: "32.26", pastVenusYears: "0.00", futureVenusYears: "0.00" });
  });

  test('should calculate how many years have passed on venus since a past birthday', () => {
    venusCalc.calcYearsSinceBday(17);
    expect(venusCalc).toEqual({ earthAge: 20, venusYear: .62, venusAge: "32.26", pastVenusYears: "4.84", futureVenusYears: "0.00" });
  });

  test('should calculate how many years will pass on mercury until a given future birthday', () => {
    venusCalc.calcYearsToBday(32);
    expect(venusCalc).toEqual({ earthAge: 20, venusYear: .62, venusAge: "32.26", pastVenusYears: "0.00", futureVenusYears: "19.35" });
  });

});