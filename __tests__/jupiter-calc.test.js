import { JupiterCalc } from "../src/js/jupiter-calc.js";

describe('JupiterCalc', () => {

  let jupiterCalc;
  beforeEach(() => {
    jupiterCalc = new JupiterCalc(20);
  });

  test('should create a jupitercalc object with current jupiter age', () => {
    expect(jupiterCalc).toEqual({ earthAge: 20, jupiterYear: 11.86, jupiterAge: "1.69", pastJupiterYears: "0.00", futureJupiterYears: "0.00" });
  });

});