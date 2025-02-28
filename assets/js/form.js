(function(){
    emailjs.init({
      publicKey: "wKPPG3r83CFbvh2QZ", // public key
    });
 })();
      
 document.getElementById('contactForm').addEventListener('submit', function(event) {
    console.log("hello");
    
  event.preventDefault();
  
  // Show loading state
  document.getElementById('submitButton').innerHTML = 'Sending...';
  document.getElementById('submitButton').disabled = true;
  

  emailjs.sendForm(
      'service_h39007q',     // Your service ID
      'template_ta4coxs',    // Your template ID
      this                  // Use the form itself
  )
  .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      document.getElementById('successMessage').style.display = 'block';
      document.getElementById('contactForm').reset();
      document.getElementById('submitButton').innerHTML = 'Send Message';
      document.getElementById('submitButton').disabled = false;
  }, function(error) {
      console.log('FAILED...', error);
      document.getElementById('errorMessage').style.display = 'block';
      document.getElementById('submitButton').innerHTML = 'Send Message';
      document.getElementById('submitButton').disabled = false;
  });
});