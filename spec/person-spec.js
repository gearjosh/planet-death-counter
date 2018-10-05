import Person from './../src/person.js';

describe('Person', function() {
  let elevenYearOldGirl;
  let ninetyYearOldMan;

  beforeEach(function() {
    elevenYearOldGirl = new Person(11, "female");
    ninetyYearOldMan = new Person(90, "male");
  });


  it('should tell you your age in earth years', function() {
    let actual = elevenYearOldGirl.earthConverter();
    let control = 11;
    console.log(elevenYearOldGirl);
    console.log(ninetyYearOldMan);
    expect(actual).toEqual(control);
  });

  it('should tell you your age in mercury years', function() {
    let actual = elevenYearOldGirl.mercuryConverter();
    let control = 45.83;
    expect(actual).toEqual(control);
  });

  it('should tell you your age in venus years', function() {
    let actual = elevenYearOldGirl.venusConverter();
    let control = 17.74;
    expect(actual).toEqual(control);
  });

  it('should tell you your age in mars years', function() {
    let actual = elevenYearOldGirl.marsConverter();
    let control = 5.85;
    expect(actual).toEqual(control);
  });

  it('should tell you your age in jupiter years', function() {
    let actual = elevenYearOldGirl.jupiterConverter();
    let control = 0.93;
    expect(actual).toEqual(control);
  });

  it('should tell you how long you have to live on earth', function() {
    let actual = elevenYearOldGirl.earthTimeLeft();
    let control = 70.30;
    expect(actual).toEqual(control);
  });

  it('should tell you how long you have to live on mercury', function() {
    let actual = elevenYearOldGirl.mercuryTimeLeft();
    let control = 292.92;
    expect(actual).toEqual(control);
  });

  it('should tell you how long you have to live on venus', function() {
    let actual = elevenYearOldGirl.venusTimeLeft();
    let control = 113.39;
    expect(actual).toEqual(control);
  });

  it('should tell you how long you have to live on mars', function() {
    let actual = elevenYearOldGirl.marsTimeLeft();
    let control = 37.39;
    expect(actual).toEqual(control);
  });

  it('should tell you how long you have to live on jupiter', function() {
    let actual = elevenYearOldGirl.jupiterTimeLeft();
    let control = 5.93;
    expect(actual).toEqual(control);
  });

  it('should tell you how many years you have cheated death on earth', function() {
    let actual = ninetyYearOldMan.earthDeathCheater();
    let control = 13.7;
    expect(actual).toEqual(control);
  });

  it('should tell you how many years you have cheated death on mercury', function() {
    let actual = ninetyYearOldMan.mercuryDeathCheater();
    let control = 57.08;
    expect(actual).toEqual(control);
  });

  it('should tell you how many years you have cheated death on venus', function() {
    let actual = ninetyYearOldMan.venusDeathCheater();
    let control = 22.10;
    expect(actual).toEqual(control);
  });

  it('should tell you how many years you have cheated death on mars', function() {
    let actual = ninetyYearOldMan.marsDeathCheater();
    let control = 7.29;
    expect(actual).toEqual(control);
  });

  it('should tell you how many years you have cheated death on jupiter', function() {
    let actual = ninetyYearOldMan.jupiterDeathCheater();
    let control = 1.16;
    expect(actual).toEqual(control);
  });

});
