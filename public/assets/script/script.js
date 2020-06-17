$(document).ready(() => {  

//devour burger click function
$(".devour").on("click", function(event) {
    event.preventDefault();
    console.log("clicked");
    console.log($(this));
  const id = $(this).attr("data-id");
  const burgerDevoured = {
      devoured: 1
  };
    
  $.ajax(`api/burgers/${id}`, {
        type: "PUT",
        data: burgerDevoured
    }).then(() => {
            console.log('burger devoured')
            location.reload();
        }
    );
});

//create burger click function
$("#addBurger").on("click", function(event) {
    event.preventDefault();
    console.log('clicked');
    const addBurger = {
        burger_name: $("#newBurger").val().trim(),
        devoured: 0
    }
    $.ajax("/api/burgers", {
        type: "POST",
        data: addBurger
    }).then(() => {
        console.log("created new burger");
        location.reload();
    })
});

});