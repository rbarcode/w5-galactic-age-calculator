export class MarsCalc {

  constructor(earthAge) {
    this.earthAge = earthAge;
    this.marsYear = 1.88;
    this.marsAge = (this.earthAge / this.marsYear).toFixed(2);
    this.pastMarsYears = (0).toFixed(2);
    this.futureMarsYears = (0).toFixed(2);
  }

  calcYearsSinceBday(previousBday) {

  }

}