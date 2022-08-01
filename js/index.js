const submitForm = document.querySelector('#submit-form');

function submitContactForm(e) {

    e.preventDefault();
    const fName = document.getElementById('fname').value;
    const lName = document.querySelector('#lname').value;
    const sub = document.querySelector('#subject').value;
    if (!fName || !lName || !sub) {
        console.log(fName)
        console.log(lName)
        console.log(sub)
        alert("Please enter mandatory fields!")
    } else {
        alert(`Hi ${fName}!\nThanks for contacting us. We'll get back to you soon!`)
    }
       
    
}
submitForm.addEventListener('click', submitContactForm)