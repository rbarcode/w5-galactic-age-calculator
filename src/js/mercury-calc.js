
export class MercuryCalc {

  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryYear = .24;
    this.mercuryAge = (this.earthAge / this.mercuryYear).toFixed(2);
    this.pastMercuryYears = (0).toFixed(2);
    this.futureMercuryYears = (0).toFixed(2);
  }

  calcYearsSinceBday(previousBday) {
    let pastEarthYears = (this.earthAge - previousBday);
    this.pastMercuryYears = (pastEarthYears / this.mercuryYear).toFixed(2);
  }

}