/* eslint-disable no-undef */
/* eslint-disable no-console */

import $ from 'jquery';
import 'jquery-validation';
import { userData, slideHandler, switchHendl } from './helpFunctions';
import countryTelephoneCode from 'country-telephone-code';

// getting the country of visitor and phone code,
// setting to the default form input values
$.getJSON('http://ip-api.com/json', function(response) {
  $('#default').text(response.country);
  $('#default').val(response.country);

  const phoneCode = countryTelephoneCode(response.countryCode);

  $('#phone').val(`${phoneCode}`);
});

// validating the form data
$(function() {
  $('#userform').validate({
    rules: {
    //   name: {
    //     required: true,
    //     minlength: 3,
    //   },
    //   email: {
    //     email: true,
    //     required: true,
    //   },
    //   phone: {
    //     required: true,
    //     minlength: 11,
    //     number: true,
    //   },
    //   agree: 'required',
    // },
    // messages: {
    //   name: {
    //     minlength: 'Name must be at least 3 characters',
    //   },
    //   email: 'Enter a valid email',
    //   phone: {
    //     minlength: 'Phone must be at least 11 characters',
    //   },
    //   agree: 'Confirm your input',
    },
    submitHandler: function(form, event) {
    // do other things for a valid form
      event.isDefaultPrevented();

      userData.name = $('#name').val();
      userData.mail = $('#email').val();
      userData.phone = $('#phone').val();
      userData.country = $('#country').val();

      $('#userform').hide();
      $('.data__title').hide();
      $('.data').addClass('data-height');
      $('.data__access').show();
    },
  });
});

// page after form
$('.access__quiz_button').on('click', function() {
  $('.data__access').hide();
  $('.data__questions').show();
  $('#quiz_1').show();
  $('#page1').addClass('active');
  $('.access__quiz_button').off();
});

// quiz answers logic
$('#quiz_1').on('click', function(event) {
  // switch (event.target.id) {
  //   case 'choise1':
  //     slideHandler(1, 1);
  //     break;
  //   case 'choise2':
  //     slideHandler(1, 2);
  //     break;
  //   case 'choise3':
  //     slideHandler(1, 3);
  //     break;
  //   case 'choise4':
  //     slideHandler(1, 4);
  //     break;
  //   default:
  //     return;
  // }

  switchHendl(event.target.id, 1);
  console.log(userData);
});

$('#quiz_2').on('click', function(event) {
  switch (event.target.id) {
    case 'choise5':
      slideHandler(2, 5);
      break;
    case 'choise6':
      slideHandler(2, 6);
      break;
    case 'choise7':
      slideHandler(2, 7);
      break;
    case 'choise8':
      slideHandler(2, 8);
      break;
    default:
      return;
  }
  // switchHendl(event.target.id, 2);
  console.log(userData);
});

$('#quiz_3').on('click', function(event) {
  switch (event.target.id) {
    case 'choise9':
      slideHandler(3, 9);
      break;
    case 'choise10':
      slideHandler(3, 10);
      break;
    case 'choise11':
      slideHandler(3, 11);
      break;
    case 'choise12':
      slideHandler(3, 12);
      break;
    default:
      return;
  }
  // switchHendl(event.target.id, 3);
  console.log(userData);
});

$('#quiz_4').on('click', function(event) {
  switch (event.target.id) {
    case 'choise13':
      slideHandler(4, 13);
      break;
    case 'choise14':
      slideHandler(4, 14);
      break;
    case 'choise15':
      slideHandler(4, 15);
      break;
    case 'choise16':
      slideHandler(4, 16);
      break;
    default:
      return;
  }

  // switchHendl(event.target.id, 4);
  console.log(userData);
});
