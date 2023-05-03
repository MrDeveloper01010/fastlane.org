// Mobile Menu

const nav = document.querySelector('nav')
const openclose = document.querySelector('ul.mobile-menu')
const menuclose = openclose.querySelector('li:first-child')

openclose.addEventListener("click", function() {
    nav.classList.toggle("display-menu")
    menuclose.classList.toggle("hover")
})



// sendendMail

const form = document.querySelector('form#MonDevis')
const sendBtn = form.querySelector('button')
const serviceID = "fastlane_formulaire_data"
const templateID = "template_fastlane"

sendBtn.addEventListener("click", function(e) {
    e.preventDefault();

    var params ={
        name : form.querySelector('#name').value,
        entreprise : form.querySelector('#entreprise').value,
        objet : form.querySelector('#objet').value,
        numero : form.querySelector('#numero').value,
        mail : form.querySelector('#mail').value,
        description : form.querySelector('#description').value
    }

    emailjs.send(serviceID, templateID, params)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert('SUCCESS!', response.status)
    }, function(error) {
       console.log('FAILED...', error);
    });

    console.log(form.querySelector('#name'));
})
