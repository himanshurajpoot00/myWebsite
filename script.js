emailjs.init("4AmlDqcVTjL8kDVRK");

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_r8901ri",
        "template_zigsymm",
        this
    )
    .then(function () {
        alert("Message Sent Successfully!");
        document.getElementById("contact-form").reset();
    })
    .catch(function (error) {
        alert("Failed to send message!");
        console.log(error);
    });
});