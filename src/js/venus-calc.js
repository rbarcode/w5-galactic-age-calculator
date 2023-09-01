export class VenusCalc {

  constructor(earthAge) {
    this.earthAge = earthAge;
    this.venusYear = .62;
    this.venusAge = (this.earthAge / this.venusYear).toFixed(2);
    this.pastVenusYears = (0).toFixed(2);
    this.futureVenusYears = (0).toFixed(2);
  }


}