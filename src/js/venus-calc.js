export class VenusCalc {

  constructor(earthAge) {
    this.earthAge = earthAge;
    this.venusYear = .62;
    this.venusAge = (this.earthAge / this.venusYear).toFixed(2);
    this.pastVenusYears = (0).toFixed(2);
    this.futureVenusYears = (0).toFixed(2);
  }

  calcYearsSinceBday(previousBday) {
    let pastEarthYears = (this.earthAge - previousBday);
    this.pastVenusYears = (pastEarthYears / this.venusYear).toFixed(2);
  }

  calcYearsToBday(futureBday) {
    let futureEarthYears = (futureBday - this.earthAge);
    this.futureVenusYears = (futureEarthYears / this.venusYear).toFixed(2);
  }

}