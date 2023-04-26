// Initialize EmailJS with your User ID
emailjs.init("_IZ2KYYtI9PjiPzB8");

// Get the contact form element
const contactForm = document.getElementById("contact-form");

// Add a submit event listener to the form
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);

    // Send the email using EmailJS
    emailjs.send("service_fmvjkt4", "template_yot070h", {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
    })
        .then((response) => {
            console.log("Email sent successfully", response);
            // Show a success message or clear the form
        })
        .catch((error) => {
            console.error("Error sending email", error);
            // Show an error message
        });
});
