//Current Day

$(function () {
    updateTime();
    setInterval(function () {
      updateTime();
    }, 1000);
    function updateTime() {
      var dateEl = $("#currentDay");
      var now = moment();
      var formattedDate = now.format("dddd MMMM Do");
      dateEl.text(formattedDate);
    }
  });

//time coding to reflect current hour

  var currentHour = moment().hour();
$(".time-block").each(function () {
  var id = parseInt($(this).attr("id"));
  if (id === currentHour) {
    $(this).attr("class", "row time-block present");
  } else if (id < currentHour) {
    $(this).attr("class", "row time-block past");
  } else if (id > currentHour) {
    $(this).attr("class", "row time-block future");
  }
});

//save user input