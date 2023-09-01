export class JupiterCalc {

  constructor(earthAge) {
    this.earthAge = earthAge;
    this.jupiterYear = 11.86;
    this.jupiterAge = (this.earthAge / this.jupiterYear).toFixed(2);
    this.pastJupiterYears = (0).toFixed(2);
    this.futureJupiterYears = (0).toFixed(2);
  }

  calcYearsSinceBday(previousBday) {
    let pastEarthYears = (this.earthAge - previousBday);
    this.pastJupiterYears = (pastEarthYears / this.jupiterYear).toFixed(2);
  }

  calcYearsToBday(futureBday) {

  }

}