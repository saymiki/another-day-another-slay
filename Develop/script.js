var saveBtn = $('.saveBtn')
var eightId =$('#hour8')
var nineId =$('#hour9')
var tenId =$('#hour10')
var eleven =$('#hour11')
var twelve =$('#hour12')
var one =$('#hour13')
var two =$('#hour14')
var three =$('#hour15')
var four =$('#hour16')
var five =$('#hour17')
var six =$('#hour18')
var textarea = $(".form-control")

var eight =$('#hr8')
var nine =$('#hr9')
var ten =$('#hr10')
var eleven =$('#hr11')
var twelve =$('#hr12')
var one =$('#hr13')
var two =$('#hr14')
var three =$('#hr15')
var four =$('#hr16')
var five =$('#hr17')
var six =$('#hr18')

var timeArray = [eight, nine, ten, eleven, twelve, one, two, three, four, five, six]

var text;
var hourSpan;
var currentHour = moment().hour()

// Display current day
// create variable referencing the place the date will display in html
var currentDay = $('#currentDay')
//create function for moment that formats the date and displays it on the page
function displayCurrentDay () {
    var timeInterval = setInterval(function () {
    var now = moment().format('dddd, MMMM Do, YYYY[at] hh:mm:ss A')
    currentDay.text(now)
      })
} 

//call the function so it shows up on the page
displayCurrentDay ()


function colors() {
    for (let i=0; i < timeArray.length; i++) {
        if (currentHour > timeArray[i].attr("data-time")){
            timeArray[i].attr("class", "past form-control col-10 text");

        } else if (currentHour == timeArray[i].attr("data-time")) {
            timeArray[i].attr("class", "present form-control col-10 text");

        } else {

            timeArray[i].attr("class", "future form-control col-10 text");
        }
        console.log (timeArray[i].attr("data-time"))
    }
}

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});