export default class Person {
  constructor(age, sex) {
    this.age = age;
    this.sex = sex;
  }

  earthConverter() {
    let baseAge = this.age;
    return baseAge;
  }

  mercuryConverter() {
    let baseAge = (this.age);
    let mercuryAgeLong = baseAge / 0.24;
    let mercuryAgeString = mercuryAgeLong.toFixed(2);
    let mercuryAge = parseFloat(mercuryAgeString);
    return mercuryAge;
  }

  venusConverter() {
    let baseAge = (this.age);
    let venusAgeLong = baseAge / 0.62;
    let venusAgeString = venusAgeLong.toFixed(2);
    let venusAge = parseFloat(venusAgeString);
    return venusAge;
  }

  marsConverter() {
    let baseAge = (this.age);
    let marsAgeLong = baseAge / 1.88;
    let marsAgeString = marsAgeLong.toFixed(2);
    let marsAge = parseFloat(marsAgeString);
    return marsAge;
  }

  

}
