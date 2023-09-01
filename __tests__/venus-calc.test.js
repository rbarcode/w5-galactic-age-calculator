import { VenusCalc } from "../src/js/venus-calc.js";

describe('VenusCalc', () => {

  let venusCalc;
  beforeEach(() => {
    venusCalc = new VenusCalc(20);
  });

  test('should create a venuscalc object with current venus age', () => {
    expect(venusCalc).toEqual({ earthAge: 20, venusYear: .62, venusAge: "32.26", pastVenusYears: "0.00", futureVenusYears: "0.00" });
  });

});