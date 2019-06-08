$(document).ready(function(){
  $("#language").submit(function(event) {

      var weather = $("input:radio[name=weather]:checked").val();
      var drink = $("input:radio[name=drink]:checked").val();
      var delight = $("input:radio[name=delight]:checked").val();
      var color = $("input:radio[name=color]:checked").val();
      var travel = $("input:radio[name=travel]:checked").val();
      var three = ("You got all three!")

      if (weather === "none" && drink === "none") {
        $("#language").hide();
        $("#javascript").show();
      } else if (weather === "sunny" && drink === "lemonade" ) {
        $("#language").hide();
        $("#ruby").show();
      } else if (weather === "cloudy" && drink === "coffee") {
        $("#language").hide();
        $("#python").show();
      }  else if (weather === "rainy" && drink === "coffee") {
        $("#language").hide();
        $("#python").show();
      } else if (weather === "snowy" && drink === "cocoa") {
        $("#language").hide();
        $("#python").show();
      } else {
        $("#language").hide();
        $("#three").show();
        $("#ruby").show();
        $("#python").show();
        $("#javascript").show();
      };
      event.preventDefault();
  });
  $("#resetForm").click(function() {
    document.getElementById("language").reset();
  });
});
