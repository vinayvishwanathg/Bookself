// Code specific to index.html (Login Page)
if (window.location.pathname === '/index.html') {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        // Call login function
        loginUser(email, password);
    });
}

// Code specific to dashboard.html
if (window.location.pathname === '/dashboard.html') {
    // Fetch currently reading book details when the page loads
    window.addEventListener('load', function() {
        const userId = getUserId(); // Function to get the logged-in user's ID
        fetchCurrentlyReadingBook(userId);
    });

    // Update progress button click event handler
    const updateProgressBtn = document.getElementById('update-progress-btn');
    updateProgressBtn.addEventListener('click', function() {
        const bookId = getBookId(); // Function to get the ID of the currently reading book
        const progress = getProgress(); // Function to get the progress input value
        const comment = getComment(); // Function to get the comment input value
        // Call update progress function
        updateProgress(bookId, progress, comment);
    });

    // Finished button click event handler
    const finishedBtn = document.getElementById('finished-btn');
    finishedBtn.addEventListener('click', function() {
        const bookId = getBookId(); // Function to get the ID of the currently reading book
        // Call mark as finished function
        markBookAsFinished(bookId);
    });
}
