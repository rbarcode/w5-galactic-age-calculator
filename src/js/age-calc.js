export class AgeCaculator {
  constructor(age) {
    this.earthAge = age;
    this.mercuryAge = undefined;
		this.venusAge = undefined;
		this.marsAge = undefined;
		this.jupiterAge = undefined;
		this.earthYear = 1;
		this.mercuryYear = .24;
		this.venusYear = .62;
		this.marsYear = 1.88;
		this.jupiterYear = 11.86;
  }
}
