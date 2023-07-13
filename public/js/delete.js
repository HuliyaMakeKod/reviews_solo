const reviews = document.querySelector('#profile');

reviews.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.classList.contains('delete')) {
    const data = e.target.parentNode.parentNode.parentNode;
    const respons = await fetch(`/profile/delete_review/${data.id}`, {
      method: 'DELETE',
    });
    const result = await respons.json();
    if (result.status === 200) {
      data.remove();
    }
    if (result.status === 500) {
      reviews.firstElementChild.cssText = 'display: block';
    }
  }
});
