document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();

  
    const name = document.getElementById('name').value;
    const responseDiv = document.getElementById('formResponse');

   
    responseDiv.textContent = `Thank you, ${name}! Your feedback has been submitted successfully.`;
    responseDiv.className = "success";

  
    document.getElementById('feedbackForm').reset();
});
