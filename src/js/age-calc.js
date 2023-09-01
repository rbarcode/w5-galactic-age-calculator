export class AgeCalculator {
  constructor(age) {
    this.earthAge = age;
    this.earthYear = 1;
    this.mercuryYear = .24;
    this.venusYear = .62;
    this.marsYear = 1.88;
    this.jupiterYear = 11.86;
    this.mercuryAge = (this.earthAge / this.mercuryYear).toFixed(2);
    this.venusAge = (this.earthAge / this.venusYear).toFixed(2);
    this.marsAge = (this.earthAge / this.marsYear).toFixed(2);
    this.jupiterAge = (this.earthAge / this.jupiterYear).toFixed(2);
    this.pastEarthYears = (0).toFixed(2);
    this.pastMercuryYears = (0).toFixed(2);
    this.pastVenusYears = (0).toFixed(2);
    this.pastMarsYears = (0).toFixed(2);
    this.pastJupiterYears = (0).toFixed(2);
    this.futureEarthYears = (0).toFixed(2);
    this.futureMercuryYears = (0).toFixed(2);
    this.futureVenusYears = (0).toFixed(2);
    this.futureMarsYears = (0).toFixed(2);
    this.futureJupiterYears = (0).toFixed(2);
  }

  calcYearsSinceBday(previousBday) {
    this.pastEarthYears = (this.earthAge - previousBday).toFixed(2);
    this.pastMercuryYears = (this.pastEarthYears / this.mercuryYear).toFixed(2);
    this.pastVenusYears = (this.pastEarthYears / this.venusYear).toFixed(2);
    this.pastMarsYears = (this.pastEarthYears / this.marsYear).toFixed(2);
    this.pastJupiterYears = (this.pastEarthYears / this.jupiterYear).toFixed(2);
  }

  calcYearsToBirthday(futureBday) {
    this.futureEarthYears = (futureBday - this.earthAge).toFixed(2);
    this.futureMercuryYears = (this.futureEarthYears / this.mercuryYear).toFixed(2);
    this.futureVenusYears = (this.futureEarthYears / this.venusYear).toFixed(2);
    this.futureMarsYears = (this.futureEarthYears / this.marsYear).toFixed(2);
    this.futureJupiterYears = (this.futureEarthYears / this.jupiterYear).toFixed(2);
  }


}
