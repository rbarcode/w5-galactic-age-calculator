export class AgeCalculator {
  constructor(age) {
    this.earthAge = age;
    this.pastEarthYears = (0).toFixed(2);
    this.futureEarthYears = (0).toFixed(2);
  }

  calcYearsSinceBday(previousBday) {
    // this.pastEarthYears = (this.earthAge - previousBday).toFixed(2);
  }

  // calcYearsToBirthday(futureBday) {
  //   this.futureEarthYears = (futureBday - this.earthAge).toFixed(2);
  // }


}
