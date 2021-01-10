$(document).ready(function () {
    //display current day & time
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

});

// Change color based on time

function showHour() {
    //get current hour
    var currentHour = moment().hour();

    // loop for time blocks 
    $(".time-block").each(function () {
        var colorHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(colorHour, currentHour)

        //check time
        if (colorHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (colorHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
};
showHour();
//refresh page 
setInterval('window.location.reload()', 60000);

//loop for local storage
var notes = Object.keys(localStorage);
for (let j = 0; j < notes.length; j++) {
    var getHour = localStorage.getItem(notes[j]);
    var input = $("#" + notes[j]).find("textarea")
    input.val(getHour);
}
//function event click button with local storage
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    console.log(this);
    var getHour = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, getHour);
});