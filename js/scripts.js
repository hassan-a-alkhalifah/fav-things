var blanks = ["name", "favFood", "beverage"];

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    // blanks.push($("#name").val());
    // blanks.push($("#favFood").val());
    // blanks.push($("#beverage").val());


    blanks.forEach(function(blank) {
      var userInput = $("#" + blank).val();


      $ ("#output").append("<li>" + userInput + "</li>");
    });
        console.log(userInput);
      });
    });










    // $ ("#output").append("<li>" + blanks[0] + "</li>");
    // $ ("#output").append("<li>" + blanks[1] + "</li>");
    // $ ("#output").append("<li>" + blanks[2] + "</li>");
//
// blanks.forEach(function(blank) {
//   $ ("#output").append("<li>" + blank + "</li>");
// });
//     console.log(blanks);
//   });
// });
