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

  $(".update").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var id = $(this).data("id");
    
    $.ajax(`/api/burger/${id}`, {
      type: "PUT",
    }).then(()=>{
      console.log("burger eaten")
      location.reload()
    })
  });
})

