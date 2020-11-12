$(document).ready(function () {
    
        $("#add-customer").on("submit", function (event) {
            // Make sure to preventDefault on a submit event.
            event.preventDefault();

            //request that gets sent
            var newCustomer = {
                firstName: $("#inputFirstName").val().trim(),
                lastName: $("#inputLastName").val().trim(),
                street_address: $("#inputAddress").val().trim(),
                address2: $("#inputAddress2").val().trim(),
                city: $("#inputCity").val().trim(),
                state: $("#inputState").val().trim(),
                zip: $("#inputZip").val().trim(),
                phone: $("#inputPhone").val().trim(),
                email: $("#inputEmail").val().trim(),
            };
            // Send the POST request to the reviews table in the database
            $.ajax("/api/customers", {
                type: "POST",
                data: newCustomer
            }).then(
                function () {
                    console.log("created new customer");
                    // Reload the page to get the updated reviews
                    location.reload();
                }
            );
        });
    
})