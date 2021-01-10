$(document).ready(function () {
    //display current day & time.
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

});

// Change color of inputs based on current time

function showHour() {

