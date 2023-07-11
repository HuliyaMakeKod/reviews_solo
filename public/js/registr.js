const { regForm } = document.forms;

regForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(regForm);
  const inputs = Object.fromEntries(data);
  const response = await fetch('/registr', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inputs),
  });
  const result = await response.json();
  if (response.status === 409) {
    if (!regForm.querySelector('h3.error-message')) {
      const errorMessage = document.createElement('h3');
      errorMessage.textContent = result.msg;
      errorMessage.classList.add('error-message');
      regForm.appendChild(errorMessage);
    }
  } else if (response.status === 400) {
    if (!regForm.querySelector('h3.error-message')) {
      const errorMessage = document.createElement('h3');
      errorMessage.textContent = result.msg;
      errorMessage.classList.add('error-message');
      regForm.appendChild(errorMessage);
    }
  } else if (response.status === 200) {
    if (
      !regForm.querySelector('h3.success-message')
      && !regForm.querySelector('h3.error-message')
    ) {
      const successMessage = document.createElement('h3');
      successMessage.textContent = result.msg;
      successMessage.classList.add('success-message');
      regForm.appendChild(successMessage);
    //   setTimeout(() => {
    //     window.location.href = '/main';
    //   }, 2000);
    }
  }
});
