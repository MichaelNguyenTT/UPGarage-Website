// Gets all the forms
  const forms = document.querySelectorAll('.needs-validation')

  // Loop each form in an array 
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        // Checks if statement is true | returns invalid-feedback untill conditions are met
      if (!form.checkValidity()) {
        event.preventDefault()
        return form.classList.add('was-validated')
      }
    }, 
)
})