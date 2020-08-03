$(function() {
  $("#submit").on("click", function (event) {
    event.preventDefault();
    
    let newBurger = {
      name: $(`#name`).val(),
      devoured: 0
    }
  
    console.log(newBurger)
  
    // Send the POST request.
    $.ajax("/api/burger/", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log('received data back from db')
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  










  // ! 
  $("#update").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
  
    var id = $("[name=id]").val().trim();
  
    var updatedMovie = {
      movie: $("#updatemovie [name=movie]").val().trim()
    };
  
    // Send the PUT request.
    $.ajax("/api/movies/" + id, {
      type: "PUT",
      data: updatedMovie
    }).then(
      function () {
        console.log("updated id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
})

