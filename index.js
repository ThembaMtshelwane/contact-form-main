document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm')
  form.addEventListener('submit', (e) => {
    let formIsValid = true
    const data = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      queryType: '',
      message: '',
      consent: '',
    }

    // First Name validation
    const firstName = document.getElementById('firstname')
    const firstNameError = document.getElementById('firstnameError')
    if (firstName.value.trim() === '') {
      firstNameError.textContent = 'This field is required'
      firstName.classList.add('errorBorder')
      formIsValid = false
    } else {
      data.firstName = firstName.value.trim()
      firstNameError.textContent = ''
      firstName.classList.remove('errorBorder')
    }

    // Last Name validation
    const lastName = document.getElementById('lastname')
    const lastNameError = document.getElementById('lastnameError')
    if (lastName.value.trim() === '') {
      lastNameError.textContent = 'This field is required'
      lastName.classList.add('errorBorder')
      formIsValid = false
    } else {
      data.lastName = lastName.value.trim()
      lastNameError.textContent = ''
      lastName.classList.remove('errorBorder')
    }

    // Email validation
    const email = document.getElementById('email')
    const emailError = document.getElementById('emailError')
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (email.value.trim() === '') {
      emailError.textContent = 'This field is required'
      email.classList.add('errorBorder')
      formIsValid = false
    } else if (!emailPattern.test(email.value)) {
      emailError.textContent = 'Please enter a valid email address'
      email.classList.add('errorBorder')
      formIsValid = false
    } else {
      data.emailAddress = email.value.trim()
      emailError.textContent = ''
      email.classList.remove('errorBorder')
    }

    // Query Type validation
    const queryType = document.querySelectorAll('input[name="option"]')
    const queryError = document.getElementById('queryError')
    let querySelected = false
    for (const option of queryType) {
      if (option.checked) {
        data.queryType = option.value.trim()
        querySelected = true
        break
      }
    }
    if (!querySelected) {
      queryError.textContent = 'Please select a query type'
      formIsValid = false
    } else {
      queryError.textContent = ''
    }

    // Message validation
    const message = document.getElementById('message')
    const messageError = document.getElementById('messageError')
    if (message.value.trim() === '') {
      messageError.textContent = 'This field is required'
      message.classList.add('errorBorder')
      formIsValid = false
    } else {
      data.message = message.value.trim()
      messageError.textContent = ''
      message.classList.remove('errorBorder')
    }

    // Consent validation
    const consent = document.getElementById('consent')
    const consentError = document.getElementById('consentError')
    if (!consent.checked) {
      consentError.textContent =
        'To submit this form, please consent to being contacted'
      formIsValid = false
    } else {
      data.consent = true
      consentError.textContent = ''
    }

    if (!formIsValid) {
      console.log('ERROR')
      e.preventDefault()
    } else {
      console.log('data', data)
      alert('Form submitted successfully!')
      form.reset()
    }
  })
})
