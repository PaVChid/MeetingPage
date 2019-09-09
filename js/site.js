/*
Author: Designmaz
Author URL: https://www.designmaz.net
License URL: https://www.designmaz.net/licence/
*/
// call this from the developer console and you can control both instances
var calendars = {};
var month = null;
var currentPage = "first_page";
var first_page = document.getElementsByClassName("first_page");
var second_page = document.getElementsByClassName("second_page");
var third_page = document.getElementsByClassName("third_page");
var dateInfo = document.getElementById("dateInfo");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var confirm1 = document.getElementById("confirm1");
var confirm2 = document.getElementById("confirm2");
var eventDescription = document.getElementById("eventdescription");
var PersonName_SecondPage = document.getElementById("PersonName_1");
var PersonName_ThirdPage = document.getElementById("PersonName_2");
var card_image = document.getElementsByClassName("card_image");
var ProfileDescription = document.getElementById("ProfileDescription");
var todayDate = new Date();
var Weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var selectedDate = todayDate;
var startTime = "8.30am";
var endTime = "9.00am";
var PersonName = "Lary Page";
var domain = document.location;
console.log(card_image);
card_image[0].attributes[1].value = "images/Vish.jpg";
card_image[1].attributes[1].value = "images/meera.jpg";
card_image[2].attributes[1].value = "images/pavithran.jpg";

$(document).ready(function () {

  // assuming you've got the appropriate language files,
  // clndr will respect whatever moment's language is set to.
  // moment.lang('ru');

  // here's some magic to make sure the dates are happening this month.
  var thisMonth = moment().format('YYYY-MM');

  var eventArray = [
    { startDate: thisMonth + '-10', endDate: thisMonth + '-14', title: 'Multi-Day Event' },
    { startDate: thisMonth + '-21', endDate: thisMonth + '-23', title: 'Another Multi-Day Event' }
  ];

  // the order of the click handlers is predictable.
  // direct click action callbacks come first: click, nextMonth, previousMonth, nextYear, previousYear, or today.
  // then onMonthChange (if the month changed).
  // finally onYearChange (if the year changed).

  calendars.clndr1 = $('.cal1').clndr({
    events: eventArray,
    // constraints: {
    //   startDate: '2013-11-01',
    //   endDate: '2013-11-15'
    // },
    clickEvents: {
      click: function (target) {
        selectedDate = target.date._d;

        dateInfo.innerHTML = String(target.date._d).substring(0, 15);
        console.log(target, (target.date._d).getDay());
        var blacklist = (target.date._d).getDay();
        // console.log((target.date._d).getDate(),todayDate.getDate(),(target.date._d).getMonth(),todayDate.getMonth());
        if (blacklist != 0 && blacklist != 6 &&
          ((target.date._d).getMonth() > todayDate.getMonth() ||
            ((target.date._d).getMonth() == todayDate.getMonth() && (target.date._d).getDate() >= todayDate.getDate()))) { resetbuttons(); }
        else { hidebuttons(); }


        if ($(target.element).hasClass('inactive')) {
          console.log('not a valid datepicker date.');
        } else {
          console.log('VALID datepicker date.');
        }
      },
      nextMonth: function () {
        console.log('next month.');
      },
      previousMonth: function () {
        console.log('previous month.');
      },
      onMonthChange: function () {
        console.log('month changed.');
      },
      nextYear: function () {
        console.log('next year.');
      },
      previousYear: function () {
        console.log('previous year.');
      },
      onYearChange: function () {
        console.log('year changed.');
      }
    },
    multiDayEvents: {
      startDate: 'startDate',
      endDate: 'endDate'
    },
    showAdjacentMonths: true,
    adjacentDaysChangeMonth: false
  });

  // calendars.clndr2 = $('.cal2').clndr({
  //   template: $('#template-calendar').html(),
  //   events: eventArray,
  //   startWithMonth: moment().add('month', 1),
  //   clickEvents: {
  //     click: function(target) {
  //       console.log(target);
  //     }
  //   }
  // });

  // bind both clndrs to the left and right arrow keys
  $(document).keydown(function (e) {
    if (e.keyCode == 37) {
      // left arrow
      calendars.clndr1.back();
      calendars.clndr2.back();
    }
    if (e.keyCode == 39) {
      // right arrow
      calendars.clndr1.forward();
      calendars.clndr2.forward();
    }
  });

});



console.log(first_page);


function firstPagebuttonCall_1() {
  console.log("Button!");
  first_page[0].style.display = "none";
  second_page[0].style.display = "block";
  third_page[0].style.display = "none";
  currentPage = "second_page";
  PersonName = "Vish"
  PersonName_SecondPage.innerHTML = PersonName_ThirdPage.innerHTML = PersonName;
  card_image[3].attributes[1].value = card_image[4].attributes[1].value = "images/Vish.jpg";
  ProfileDescription.innerHTML = "";
}

function firstPagebuttonCall_2() {
  console.log("Button!");
  first_page[0].style.display = "none";
  second_page[0].style.display = "block";
  third_page[0].style.display = "none";
  currentPage = "second_page";
  PersonName = "Meera"
  PersonName_SecondPage.innerHTML = PersonName_ThirdPage.innerHTML = PersonName;
  card_image[3].attributes[1].value = card_image[4].attributes[1].value = "images/meera.jpg";
  ProfileDescription.innerHTML = "";

}
function firstPagebuttonCall_3() {
  console.log("Button!");
  first_page[0].style.display = "none";
  second_page[0].style.display = "block";
  third_page[0].style.display = "none";
  currentPage = "second_page";
  PersonName = "Pavithran"
  PersonName_SecondPage.innerHTML = PersonName_ThirdPage.innerHTML = PersonName;
  card_image[3].attributes[1].value = card_image[4].attributes[1].value ="images/pavithran.jpg";
  ProfileDescription.innerHTML = "An Engineer turned into an Innovator, with the combination of the two as a very good description of who I am: an analytically creative innovator who loves shaping a vision as much as making it happen.";
}

function goToFirstPage() {
  first_page[0].style.display = "block";
  second_page[0].style.display = "none";
  third_page[0].style.display = "none";
  currentPage = "first_page";
}

function goToSecondPage() {
  first_page[0].style.display = "none";
  second_page[0].style.display = "block";
  third_page[0].style.display = "none";
  currentPage = "second_page";
}

function button1Call() {
  button1.style.width = "40%";
  confirm1.style.display = "block"

}

function button2Call() {
  button2.style.width = "40%";
  confirm2.style.display = "block"
}

function confirm1Call() {
  // location.href='http://google.com';
  startTime = "10.00am";
  endTime = "12.00pm";
  first_page[0].style.display = "none";
  second_page[0].style.display = "none";
  third_page[0].style.display = "block";
  currentPage = "third_stage";
  eventDescription.innerHTML = "&nbsp" + startTime + " - " + endTime + ", " + Weekdays[selectedDate.getDay()] + "<br>&nbsp";
  eventDescription.innerHTML += String(selectedDate).substring(4, 15);
}

function confirm2Call() {
  // location.href='http://google.com';
  startTime = "2.00pm";
  endTime = "4.00pm";
  first_page[0].style.display = "none";
  second_page[0].style.display = "none";
  third_page[0].style.display = "block";
  currentPage = "third_stage";
  eventDescription.innerHTML = "&nbsp" + startTime + " - " + endTime + ", " + Weekdays[selectedDate.getDay()] + "<br>&nbsp";
  eventDescription.innerHTML += String(selectedDate).substring(4, 15);

}

function resetbuttons() {
  button1.style.width = "100%";
  button1.style.display = "block";
  confirm1.style.display = "none";

  button2.style.width = "100%";
  button2.style.display = "block";
  confirm2.style.display = "none";
}
function hidebuttons() {
  dateInfo.innerHTML = "";
  button1.style.width = "100%";
  button1.style.display = "none";
  confirm1.style.display = "none";

  button2.style.width = "100%";
  button2.style.display = "none";
  confirm2.style.display = "none";
}

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var interest = document.getElementById("interest");
var company = document.getElementById("company");
function getData() {
  console.log(firstName.value);
  console.log(lastName.value);
  console.log(email.value);
  console.log(interest.value);
  console.log(company.value);
  alert("Your response has been recorded");
}