document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    const phone = document.getElementById('phone').value;

    alert(`Order Submitted!\nName: ${name}\nService: ${service}\nPhone: ${phone}`);
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const contactName = document.getElementById('contact-name').value;
    const contactEmail = document.getElementById('contact-email').value;
    const message = document.getElementById('message').value;

    alert(`Message Sent!\nName: ${contactName}\nEmail: ${contactEmail}\nMessage: ${message}`);
});