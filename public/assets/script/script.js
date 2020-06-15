//devour burger click function
$("#devour").on("click", (event) => {
    event.preventDefault();

  const id = $(this).data("id");
  const burgerDevoured = {
      devoured: true
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
$("#addBurger").on("click", (event) => {
    event.preventDefault();

    const addBurger = {
        burger_name: $("#newBurger").val().trim(),
        devoured: false
    }
    $.ajax("/api/burgers", {
        type: "POST",
        data: addBurger
    }).then(() => {
        console.log("created new burger");
        location.reload;
    })
});