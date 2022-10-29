$(document).ready(function () {
var today = moment();
// This creates the current time and date within the header
$("#currentDay").text(today.format("[The date today is] dddd MMM Do, YYYY [and the time is] h:mm a"));
// scheduledEvent will grab the value for siblings of the description class (the info that is placed into the text area)
var scheduledEvent = $(this).siblings(".description").val();
// time will grab the parent id for example ('#hour-9') 
var time = $(this).parent().attr('id');
localStorage.setItem(time, scheduledEvent);

function timeUpdate() {
    var currentTime = moment().hours();

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
    timeUpdate();
});