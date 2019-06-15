//Business Logic

//Interface Logic Section
$(document).ready(function () {
  $('#language').submit(function (event) {
    var weather = parseInt($('input:radio[name=weather]:checked').val());
    var drink = parseInt($('input:radio[name=drink]:checked').val());
    var delight = parseInt($('input:radio[name=delight]:checked').val());
    var color = parseInt($('input:radio[name=color]:checked').val());
    var travel = parseInt($('input:radio[name=travel]:checked').val());
    var total = weather + drink + delight + color + travel;

    // hide the form 'language' after form submission.
    $('#language').hide();

    if (total >= 16 && total <= 20) {
      $('#javascript').show();
    } else if (total >= 11 && total <= 15) {
      $('#python').show();
    } else if (total >= 6 && total <= 10) {
      $('#ruby').show();
    } else {
      $('#three').show();
      $('#ruby').show();
      $('#python').show();
      $('#javascript').show();
    }

    event.preventDefault();
  });

  $('#resetForm').click(function () {
    document.getElementById('language').reset();
  });
});
