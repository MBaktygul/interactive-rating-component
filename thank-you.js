document.addEventListener('DOMContentLoaded', function () {
  const rating = localStorage.getItem('selectedRating');
  const ratingElement = document.getElementById('selected-rating');
  if (ratingElement) {
    ratingElement.textContent = rating ? rating : 'not selected';
  }
});