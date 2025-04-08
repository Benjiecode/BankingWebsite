$(document).ready(function () {
  $("#enquiry-form2").on("submit", function (e) {
    e.preventDefault();

    $(".error").text("");

    let isValid = true;

    const name = $("#name").val().trim();
    if (name === "") {
      isValid = false;
      $("#nameError").text("Name is required.");
    }

    const email = $("#email").val().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      isValid = false;
      $("#emailError").text("Invalid email address.");
    }

    const subject = $("#subject").val().trim();
    if (subject === "") {
      isValid = false;
      $("#subjectError").text("Subject is required.");
    }

    const message = $("#message").val().trim();
    if (message === "") {
      isValid = false;
      $("#messageError").text("Message cannot be empty.");
    }

    if (isValid) {
      $("#EnquiryForm2")[0].reset();
      alert("Thank you for your enquiry, we will be in touch!");
    }
  });
});
