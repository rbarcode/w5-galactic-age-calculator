export class MarsCalc {

  constructor(earthAge) {
    this.earthAge = earthAge;
    this.marsYear = 1.88;
    this.marsAge = (this.earthAge / this.marsYear).toFixed(2);
    this.pastMarsYears = (0).toFixed(2);
    this.futureMarsYears = (0).toFixed(2);
  }

  calcYearsSinceBday(previousBday) {
    let pastEarthYears = (this.earthAge - previousBday);
    this.pastMarsYears = (pastEarthYears / this.marsYear).toFixed(2);
  }

  calcYearsToBday(futureBday) {
    let futureEarthYears = (futureBday - this.earthAge);
    this.futureMarsYears = (futureEarthYears / this.marsYear).toFixed(2);
  }

}