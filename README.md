# Interplanetary Life Counter

#### A program that tells you how long you will live on multiple planets, October 5, 2018

#### By Josh Gearheart

## Planning

### Configuration/dependencies (npm)
  - babel-core 6.26.0: a transpiler that turns new jacascript into old javascript
  - babel-loader 7.1.3: a loader for babel
  - babel-preset-es2015 6.24.1: a preset to transpile ES6
  - clean-webpack-plugin 0.1.18: empties the dist folder before building
  - css-loader 0.28.10: loads css for webpack
  - eslint 4.18.2: checks code for errors and bad practices
  - eslint-loader 2.0.0: loads files for eslint
  - html-webpack-plugin 3.0.6: bundles html for webpack
  - jasmine 3.1.0: helper that tests the javascript code so that the program can run tests
  - jasmine-core 2.99.0: this is the piece that must be installed before the helper (above)
  - karma 2.0.0: a test runner for jasmine
  - karma-chrome-launcher 2.2.0: launches a chrome window to see tests in real time
  - karma-cli 1.0.1: allows karma commands through the command line
  - karma-jasmine 1.1.1: allows karma and jasmine to work together
  - karma-jasmine-html-reporter 0.2.2: allows debug window in chrome to dynamically display test results
  - karma-jquery 0.2.2: allows karma to parse jquery
  - karma-sourcemap-loader 0.3.7: allows karma to accurately source map errors
  - karma-webpack 2.0.13: allows karma to work with webpack
  - style-loader 0.20.2: loads css for webpack
  - uglifyjs-webpack-plugin 1.2.2: minifies code for distribution to increase performance
  - webpack 4.0.1: bundles the code together
  - webpack-cli 2.0.9: allows webpack commands through the command line
  - webpack-dev-server 3.1.0: creates a server for development
  - jquery 3.3.1: enables jquery commands

### Specs
  - US female life expectancy: 81.30 ([source](https://www.worldlifeexpectancy.com/usa/life-expectancy-female))
    - on mercury: 338.75
    - on venus: 131.13
    - on mars: 43.24
    - on jupiter: 6.85
  - US male life expectancy: 76.30 ([source](https://www.worldlifeexpectancy.com/usa/life-expectancy-male))
    - on mercury: 317.92
    - on venus: 123.06
    - on mars: 40.59
    - on jupiter: 6.43
  ```
  describe('Person', function() {

    let elevenYearOldGirl;
    let ninetyYearOldMan;

    beforeEach(function() {
      elevenYearOldGirl = new Person(11, female)
      ninetyYearOldMan = new Person(90, male)
    })

    it('should tell you your age in earth years', function() {
      let actual = elevenYearOldGirl.earthConverter();
      let control = 11;
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
      let control = 5.92;
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
      let control = 7.28;
      expect(actual).toEqual(control);
    });

    it('should tell you how many years you have cheated death on jupiter', function() {
      let actual = ninetyYearOldMan.jupiterDeathCheater();
      let control = 1.16;
      expect(actual).toEqual(control);
    });

    it('should tell you that you have yet to cheat death if you have not lived past average life expectancy', function() {
      let actual = elevenYearOldGirl.jupiterDeathCheater();
      let control = "you have yet to cheat death";
      expect(actual).toEqual(control);
    });

  });
  ```

## Setup/Installation Requirements

You must have Node.js installed on your machine. If not, follow these pre-instructions:

#### _For OSX_

- First, install Homebrew if it is not installed on your computer already.
  - To install Homebrew, enter the following in order in terminal:
  - `$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  - `$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile`

#### _For other operating systems_

Head on over to the [Node website](https://nodejs.org/en/download/) to download and install the appropriate installer for your computer.

#### _Install Node.js_

Now install Node.js like this in terminal: `$ brew install node`.

****

#### _Once Node.js is installed_

- Open terminal and enter `$ cd Desktop` (or your preferred destination).
- Then enter `$ git clone https://github.com/gearjosh/planet-death-counter.git`.
- Enter `$ cd planet-death-counter`.
- Enter `$ npm install`
- Finally, enter `$ npm run start`.

## Known Bugs
- There is no user interface, and commands cannot be given in the console. All this can do at the moment is pass tests.

## Support and contact details
- For questions or support you can email me at: comedian.sean.connery@gmail.com.

## Technologies Used
- This uses Javascript, Node.js, and everything listed under _Configuration/dependencies (npm)"_ above.

### License
This software is licensed under GNU GPLv3.
