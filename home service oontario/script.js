// script.js
document.getElementById('whatsapp-button').addEventListener('click', function() {
    const phoneNumber = '+16475648955';
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
});

// script.js
document.getElementById('instagram-button').addEventListener('click', function() {
    const username = 'home_and_pool_service'; // Replace with your Instagram username
    const url = `https://www.instagram.com/${home_and_pool_service}`;
    window.open(url, '_blank');
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for contacting us, " + name + ". We will get back to you soon!");
        document.getElementById("contact-form").reset(); // Reset the form after submission
    } else {
        alert("Please fill out all fields.");
    }
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            alert("Thank you for contacting us. We'll get back to you soon.");
        }, function(error) {
            alert("Sorry, something went wrong. Please try again.");
        });
});

document.getElementById("callButton").addEventListener("click", function() {
    alert("Dialing the number...");
});


