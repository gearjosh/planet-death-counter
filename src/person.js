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
    this.mercuryDenominator = 0.24;
    this.venusDenominator = 0.62;
    this.marsDenominator = 1.88;
    this.jupiterDenominator = 11.86;
  }

  earthConverter() {
    let baseAge = this.age;
    return baseAge;
  }

  mercuryConverter() {
    let baseAge = (this.age);
    let mercuryAgeLong = baseAge / this.mercuryDenominator;
    let mercuryAgeString = mercuryAgeLong.toFixed(2);
    let mercuryAge = parseFloat(mercuryAgeString);
    return mercuryAge;
  }

  venusConverter() {
    let baseAge = (this.age);
    let venusAgeLong = baseAge / this.venusDenominator;
    let venusAgeString = venusAgeLong.toFixed(2);
    let venusAge = parseFloat(venusAgeString);
    return venusAge;
  }

  marsConverter() {
    let baseAge = (this.age);
    let marsAgeLong = baseAge / this.marsDenominator;
    let marsAgeString = marsAgeLong.toFixed(2);
    let marsAge = parseFloat(marsAgeString);
    return marsAge;
  }

  jupiterConverter() {
    let baseAge = (this.age);
    let jupiterAgeLong = baseAge / this.jupiterDenominator;
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
    let mercuryLifeExpectancy = baseLifeExpectancy / this.mercuryDenominator;
    let mercuryAge = baseAge / this.mercuryDenominator;
    let timeLeftString = (mercuryLifeExpectancy - mercuryAge).toFixed(2);
    let timeLeft = parseFloat(timeLeftString);
    return timeLeft;
  }

  venusTimeLeft() {
    let baseAge = this.age;
    let baseLifeExpectancy = this.lifeExpectancy;
    let venusLifeExpectancy = baseLifeExpectancy / this.venusDenominator;
    let venusAge = baseAge / this.venusDenominator;
    let timeLeftString = (venusLifeExpectancy - venusAge).toFixed(2);
    let timeLeft = parseFloat(timeLeftString);
    return timeLeft;
  }

  marsTimeLeft() {
    let baseAge = this.age;
    let baseLifeExpectancy = this.lifeExpectancy;
    let marsLifeExpectancy = baseLifeExpectancy / this.marsDenominator;
    let marsAge = baseAge / this.marsDenominator;
    let timeLeftString = (marsLifeExpectancy - marsAge).toFixed(2);
    let timeLeft = parseFloat(timeLeftString);
    return timeLeft;
  }

  jupiterTimeLeft() {
    let baseAge = this.age;
    let baseLifeExpectancy = this.lifeExpectancy;
    let jupiterLifeExpectancy = baseLifeExpectancy / this.jupiterDenominator;
    let jupiterAge = baseAge / this.jupiterDenominator;
    let timeLeftString = (jupiterLifeExpectancy - jupiterAge).toFixed(2);
    let timeLeft = parseFloat(timeLeftString);
    return timeLeft;
  }

  earthDeathCheater() {
    if (this.age > this.lifeExpectancy) {
      let cheatTimeString = (this.age - this.lifeExpectancy).toFixed(2);
      let cheatTime = parseFloat(cheatTimeString);
      return cheatTime;
    } else if (this.age <= this.lifeExpectancy) {
      return "you have yet to cheat death"
    }
  }

  mercuryDeathCheater() {
    if (this.age > this.lifeExpectancy) {
      let mercuryAge = this.age / this.mercuryDenominator;
      let mercuryLifeExpectancy = this.lifeExpectancy / this.mercuryDenominator;
      let cheatTimeString = (mercuryAge - mercuryLifeExpectancy).toFixed(2);
      let cheatTime = parseFloat(cheatTimeString);
      return cheatTime;
    } else if (this.age <= this.lifeExpectancy) {
      return "you have yet to cheat death"
    }
  }

}
