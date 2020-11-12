$(document).ready(function () {

    $("#add-quote").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        //request that gets sent
        var newQuote = {
            CustomerId: $("#selectCustomer").val(),
            PreparerId: $("#selectPreparer").val(),
            summary: $("#inputProjectSummary").val().trim(),
            room: $("#inputRoom").val().trim(),
            paint: $("#inputPaint").val().trim(),
            sheen: $("#inputSheen").val().trim(),
            color: $("#inputColor").val().trim(),
            coats: $("#inputCoats").val().trim(),
            height: $("#inputHeight").val().trim(),
            width: $("#inputWidth").val().trim(),
            length: $("#inputLength").val().trim()
        };
        console.log(newQuote);
        // Send the POST request to the reviews table in the database
        $.ajax("/api/quotes", {
            type: "POST",
            data: newQuote
        }).then(
            function () {
                console.log("created new quote");
                // Reload the page to get the updated reviews
                location.reload();
            }
        );
    });

});