var blanks = []

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    blanks += $("#name").val();
    blanks += $("#favFood").val();
    blanks += $("#beverage").val();
    
    console.log(name);
  });
});
