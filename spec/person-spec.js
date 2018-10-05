import Person from './../src/person';

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
    expect(actual).toEqual(control);
  });
});
