import { getRomanNumeral } from './js/scripts.js';
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';

//user interface logic//
$(document).ready(function () {

  $('form#romanForm').submit(function (event) {
    console.log('click event fired');
    event.preventDefault();
    $('p#answer').text('Your number in roman numerals is: ' + getRomanNumeral(parseInt($('input#romanInput').val())));

  });
});//jquery
