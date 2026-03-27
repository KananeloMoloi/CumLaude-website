// Get the form and popup
const form = document.getElementById('contact-form');
const popup = document.getElementById('popup');

// Get your custom link button
const sendButton = document.querySelector('.container-button .button');

sendButton.addEventListener('click', function(e){
    e.preventDefault(); // Prevent the <a> link from navigating

    const formData = new FormData(form);

    fetch('email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
            // Show floating popup
            popup.style.display = 'block';
            form.reset();
        } else {
            alert('Error sending message. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending message. Please try again.');
    });
});

// Close popup function
function closePopup(){
    popup.style.display = 'none';
}