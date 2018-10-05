export default class Person {
  constructor(age, sex) {
    this.age = age;
    this.sex = sex;
    if (sex === "female") {
      this.lifeExpectancy = 81.30;
    } else if (sex === "male") {
      this.lifeExpectancy = 76.30;
    } else {
      this.lifeExpectancy = NaN;
    }
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

  jupiterConverter() {
    let baseAge = (this.age);
    let jupiterAgeLong = baseAge / 11.86;
    let jupiterAgeString = jupiterAgeLong.toFixed(2);
    let jupiterAge = parseFloat(jupiterAgeString);
    return jupiterAge;
  }

  earthTimeLeft() {
    let baseAge = this.age;
    let baseLifeExpectancy = this.lifeExpectancy;
    let timeLeftString = (baseLifeExpectancy - baseAge).toFixed(2);
    let timeLeft = parseFloat(timeLeftString);
    return timeLeft;
  }

  mercuryTimeLeft() {
    let baseAge = this.age;
    let baseLifeExpectancy = this.lifeExpectancy;
    let mercuryLifeExpectancy = baseLifeExpectancy / 0.24;
    let mercuryAge = baseAge / 0.24;
    let timeLeftString = (mercuryLifeExpectancy - mercuryAge).toFixed(2);
    let timeLeft = parseFloat(timeLeftString);
    return timeLeft;
  }



}
