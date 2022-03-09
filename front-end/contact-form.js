//Put shopping-cart form values in an object and send to server for getting order Id if shopping-cart not empty
function sendContactFormToServer() {
  const form = document.getElementById('contact-form');
  const contactFormSendButton = document.getElementById('send-btn');
  const contactFirstNameInput = document.getElementById('contact-first-name');
  const contactNameInput = document.getElementById('contact-name');
  const contactEmailInput = document.getElementById('contact-email');
  const contactMessageInput = document.getElementById('contact-message');

  if (
    contactFirstNameInput &&
    contactNameInput &&
    contactEmailInput &&
    contactMessageInput === 0
  ) {
    contactFormSendButton.disabled = true;
  } else {
    contactFormSendButton.disabled = false;
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const contact = {
        firstName: document.getElementById('contact-first-name').value,
        lastName: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        message: document.getElementById('contact-message').value,
      };
        console.log(contact)
      // Post contact information to server 
        fetch('http://localhost:3000/api/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contact),
        })
          .then(function (response) {
            if (response.ok) {
                console.log(response)
              return response.json();
            }
          })
          .catch(function (error) {
            document.getElementById('error-message').innerText =
              'Serveur momentanémment indisponible';
          });
    });
  }
}
