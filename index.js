let selectedRating = null;
const ratingButtons = document.querySelectorAll('.rating-option-button');
const submitButton = document.getElementById('submit');

ratingButtons.forEach((btn) => {
  btn.addEventListener('click', () => {

    // Сбрасываем состояние у всех
    ratingButtons.forEach(b => {
      b.classList.remove('selected');
      b.setAttribute('aria-checked', 'false');
    });

    // Активируем выбранную
    btn.classList.add('selected');
    btn.setAttribute('aria-checked', 'true');

    selectedRating = btn.dataset.value;
        console.log(`The rating ${selectedRating} chosen`);
  });
});

// Submit
submitButton.addEventListener('click', () => {
  if (selectedRating) {
    localStorage.setItem('selectedRating', selectedRating);
    window.location.href = 'thank-you.html';
  } else {
    alert('Please select a rating before submitting.');
  }
});
