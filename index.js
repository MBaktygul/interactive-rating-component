let selectedRating = null;
const ratingOptions = document.querySelectorAll('.rating-option');
const submitButton = document.getElementById('submit');
ratingOptions.forEach((option) => {
  option.addEventListener('click', function () {
    ratingOptions.forEach((opt) => opt.classList.remove('selected'));
    option.classList.add('selected');
    selectedRating = option.getAttribute('data-value');
  });
});
submitButton.addEventListener('click', function () {
  if (selectedRating) {
    localStorage.setItem('selectedRating', selectedRating);
    window.location.href = 'thank-you.html';
  } else {
    alert('Please select a rating before submitting.');
  }
});