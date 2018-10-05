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

});
