// item.js

// Get all the like buttons
const likeButtons = document.querySelectorAll('.like-button');

// Add a click event listener to each like button
likeButtons.forEach(function (likeButton) {
  likeButton.addEventListener('click', function () {
    // Toggle the like state
    const isLiked = likeButton.classList.toggle('liked');

    // Update the heart button appearance based on the like state
    if (isLiked) {
      likeButton.innerHTML = '&#x2764;'; // Change the heart button content when liked
    } else {
      likeButton.innerHTML = '&#x2661;'; // Change the heart button content when unliked
    }
  });
});
