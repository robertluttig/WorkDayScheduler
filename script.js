//Current Day

$(function () {
    updateTime();
    setInterval(function () {
      updateTime();
    }, 1000);
    function updateTime() {
      var dateEl = $("#currentDay");
      var now = moment();
      var formattedDate = now.format("dddd MMMM do");
      dateEl.text(formattedDate);
    }
  });