document.addEventListener('DOMContentLoaded', function() {
    // Create a back to chanting button if it doesn't exist
    if (!document.getElementById('backToChantingBtn')) {
        var backButton = document.createElement('button');
        backButton.id = 'backToChantingBtn';
        backButton.className = 'btn btn-primary fixed-top m-2';
        backButton.innerHTML = '← Back to Chanting';
        backButton.style.zIndex = '1050';
        backButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });

        // Append to body, preferably near the top
        document.body.insertBefore(backButton, document.body.firstChild);
    }
});