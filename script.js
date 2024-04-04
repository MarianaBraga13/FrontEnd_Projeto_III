document.addEventListener('DOMContentLoaded', function() {
    // Subscription form
    const subscriptionForm = document.getElementById('subscriptionForm');
    subscriptionForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const email = subscriptionForm.querySelector('input[type="email"]').value;
        // Implement subscription logic here (e.g., send email to server)
        console.log('Subscribed with email:', email);
        
    });

    // Password recovery form
    const passwordRecoveryForm = document.getElementById('passwordRecoveryForm');
    passwordRecoveryForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const email = passwordRecoveryForm.querySelector('input[type="email"]').value;
        // Implement password recovery logic here (e.g., send reset link to email)
        console.log('Password recovery for email:', email);
    });

    // English level assessment form (you can add functionality as needed)
    const englishLevelForm = document.getElementById('englishLevelForm');
    englishLevelForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // Implement English level assessment logic here
        console.log('English level assessment submitted');
    });
});
