function sendMail(contactForm) {
    emailjs.send("service_llkxjna", "conor", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "golanza_comment": contactForm.comment.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}