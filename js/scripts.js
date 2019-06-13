//business logic
function getRomanNumeral(num) {
  console.log('arabic number: ' + num);

  var arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumerals = ['M','DM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  var romanNumeralOutput = '';

  for (i = 0; i <= arabicNumbers.length; i++) {

    while(num%arabicNumbers[i] < num ) {
      romanNumeralOutput += romanNumerals[i];
      num -= arabicNumbers[i];
    }//while condition
  }//for loop

  $('p#answer').text('Your number in roman numerals is: ' + romanNumeralOutput);
  console.log('roman numeral: ' + romanNumeralOutput);

}//function getRomanNumeral

//user interface logic//
$(document).ready(function () {
  console.log('jquery is enabled');
  $('form#romanForm').submit(function (event) {
    event.preventDefault();
    getRomanNumeral(parseInt($('input#romanInput').val()));



  });
});//jquery
