function sendGmail() {
    const params = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        contact: document.getElementById('contact').value,
        message: document.getElementById('message').value,
    };

    emailjs.send('service_oocj8t8', 'template_6qn8cid', params)
        .then(function (response) {
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById('fname').value = '';
            document.getElementById('lname').value = '';
            document.getElementById('email').value = '';
            document.getElementById('contact').value = '';
            document.getElementById('message').value = '';
        }, function (error) {
            console.log("FAILED...", error);
        });
}

const openNav = document.querySelector(".open");
const navContent = document.querySelector(".bars");

openNav.addEventListener("click", () => {
    navContent.classList.toggle("active");
});

