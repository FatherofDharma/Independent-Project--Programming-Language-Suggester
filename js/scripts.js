// Business Logic
function showResult(score) {
  // shows results based on score
  if (score >= 16 && score <= 20) {
    $('#javascript').show();
  } else if (score >= 11 && score <= 15) {
    $('#python').show();
  } else if (score >= 6 && score <= 10) {
    $('#ruby').show();
  } else {
    $('#three').show();
    $('#ruby').show();
    $('#python').show();
    $('#javascript').show();
  }
}

// Interface Logic Section
$(document).ready(function () {
  $('#language').submit(function (event) {
    event.preventDefault();
    var weather = parseInt($('input:radio[name=weather]:checked').val());
    var drink = parseInt($('input:radio[name=drink]:checked').val());
    var delight = parseInt($('input:radio[name=delight]:checked').val());
    var color = parseInt($('input:radio[name=color]:checked').val());
    var travel = parseInt($('input:radio[name=travel]:checked').val());
    var total = weather + drink + delight + color + travel;

    // hide the form 'language' after form submission
    $('#language').hide();

    // show the result based on total
    showResult(total);
  });

  $('#resetForm').click(function () {
    document.getElementById('language').reset();
  });
});
