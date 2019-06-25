import { getRomanNumeral } from './../src/js/scripts.js';

describe('Numeral', function() {

  it('should return nothing when non-numerical value is inputted', function() {
    var testNumeral = getRomanNumeral('a');
    expect(testNumeral).toEqual('');
  });
  it('should return single character roman numerals based on user input', function() {
    var testNumeral = getRomanNumeral(100);
    expect(testNumeral).toEqual("C");
  });
  it('should return multi character additive roman numerals based on user input', function() {
    var testNumeral = getRomanNumeral(25);
    expect(testNumeral).toEqual('XXV');
  });
  it('should return multi character subtractive roman numerals based on user input', function() {
    var testNumeral = getRomanNumeral(90);
    expect(testNumeral).toEqual("XC")
  });
  it('should return multi character additive and subtractive roman numerals based on user input', function() {
    var testNumeral = getRomanNumeral(1549);
    expect(testNumeral).toEqual("MDXLIX")
  });
});
