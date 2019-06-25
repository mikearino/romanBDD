//business logic
export function getRomanNumeral(num) {


  var arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumerals = ['M','DM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  var romanNumeralOutput = '';

  for (var i = 0; i <= arabicNumbers.length; i++) {

    while(num%arabicNumbers[i] < num ) {
      romanNumeralOutput += romanNumerals[i];
      num -= arabicNumbers[i];
    }//while condition
  }//for loop

  return romanNumeralOutput;
}//function getRomanNumeral
