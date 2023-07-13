// const { newReviewForm } = document.forms;

// newReviewForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const data = new FormData(newReviewForm);
//   const inputs = Object.fromEntries(data);
//   const response = await fetch('/newReview', {
//     method: 'POST',
//     // headers: {
//     //   'Content-Type': 'application/json',
//     // },
//     body: JSON.stringify(data),
//   });
//   const result = await response.json();
//   if (response.status === 400) {
//     if (!newReviewForm.querySelector('h3.error-message')) {
//       const errorMessage = document.createElement('h3');
//       errorMessage.textContent = result.msg;
//       errorMessage.classList.add('error-message');
//       newReviewForm.appendChild(errorMessage);
//     }
//   } else if (response.status === 200) {
//     if (
//       !newReviewForm.querySelector('h3.success-message')
//       && !newReviewForm.querySelector('h3.error-message')
//     ) {
//       const successMessage = document.createElement('h3');
//       successMessage.textContent = result.msg;
//       successMessage.classList.add('success-message');
//       newReviewForm.appendChild(successMessage);
//       setTimeout(() => {
//         window.location.href = '/main';
//       }, 1000);
//     }
//   }
// });
