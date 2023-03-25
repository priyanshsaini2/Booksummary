// Get the search bar element
const searchBar = document.querySelector('input[type="text"]');

// Get all the book containers
const bookContainers = document.querySelectorAll('.book-container');

// Add an event listener to the search bar
searchBar.addEventListener('input', () => {
  // Get the search query
  const query = searchBar.value.trim().toLowerCase();
  
  // Loop through all the book containers
  bookContainers.forEach(bookContainer => {
    // Get the book title from the container
    const bookTitle = bookContainer.querySelector('a').textContent.trim().toLowerCase();
    
    // Show or hide the book container depending on the search query
    if (bookTitle.includes(query)) {
      bookContainer.style.display = 'inline-block';
    } else {
      bookContainer.style.display = 'none';
    }
  });
});
