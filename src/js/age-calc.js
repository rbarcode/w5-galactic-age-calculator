export class AgeCaculator {
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

  }

}
