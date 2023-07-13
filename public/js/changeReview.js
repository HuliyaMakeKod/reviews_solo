const { ChangeReviewForm } = document.forms;

ChangeReviewForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(ChangeReviewForm);
  const inputs = Object.fromEntries(data);
  try {
    const response = await fetch(`/profile/change_review_form/${ChangeReviewForm.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs),
    });
    const result = await response.json();
    if (result.status === 200) {
      window.location.href = '/profile';
    }
  } catch (error) {
    alert('error ====>>>>', err);
  }
});
