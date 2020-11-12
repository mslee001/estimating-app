$(document).ready(function () {

    $("#add-preparer").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        //request that gets sent
        var newPreparer = {
            firstName: $("#inputFirstName").val().trim(),
            lastName: $("#inputLastName").val().trim(),
            phone: $("#inputPhone").val().trim(),
            email: $("#inputEmail").val().trim(),
            title: $("#inputTitle").val().trim(),
            license: $("#inputLicense").val().trim(),
            insurance: $("#inputInsurance").val().trim()
        };
        // Send the POST request to the reviews table in the database
        $.ajax("/api/preparers", {
            type: "POST",
            data: newPreparer
        }).then(
            function () {
                console.log("created new preparer");
                // Reload the page to get the updated reviews
                location.reload();
            }
        );
    });

})