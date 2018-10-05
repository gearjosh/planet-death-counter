import { Person } from './../src/person.js';

describe('Person', function() {
  let elevenYearOldGirl;
  let ninetyYearOldMan;

  beforeEach(function() {
    elevenYearOldGirl = new Person.constructor(11, "female");
    ninetyYearOldMan = new Person.constructor(90, "male");
  });

  it('should tell you your age in earth years', function() {
    let actual = elevenYearOldGirl.earthConverter();
    let control = 11;
    expect(actual).toEqual(control);
  });
});
