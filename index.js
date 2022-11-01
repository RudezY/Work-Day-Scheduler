$(document).ready(function () {
var today = moment();
// This creates the current time and date within the header
$("#currentDay").text(today.format("[The date today is] dddd MMM Do, YYYY [and the time is] h:mm a"));

$('.saveBtn').on('click', function () {
// scheduledEvent will grab the value for siblings of the description class (the info that is placed into the text area)
var scheduledEvent = $(this).siblings(".description").val();
// time will grab the parent id for example ('#hour-9') 
var time = $(this).parent().attr('id');
localStorage.setItem(time, scheduledEvent);
});


// this function updates the class for the timeblock with the proper class description which is either past preset or future. It will receive proper styling when the class is updated.
function timeUpdate() {
    var currentTime = moment().hours();
// set or removes the class to give the background for each time block the proper color.
    $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split('-')[1]);

        if (blockHour < currentTime) {
            $(this).addClass('past');
        } else if (blockHour > currentTime) {
            $(this).removeClass('past');
            $(this).addClass('future');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass('present');
        }
        });
    }
    // sets the interval for time Updater to update every 30 seconds
setInterval(timeUpdater, 30000);
// here is the function to time updater to run the time update function which updates the time block hours for proper color.
function timeUpdater(){
    timeUpdate();

};
// places values saved in local storage and places them in proper id and class
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17')); 


});
