document.addEventListener('DOMContentLoaded', function () {
    var bioText = document.getElementById('profession');
    
    var texts = [
        "I'm a Designer.",
        "I'm a Developer.",
        "I'm an Artist.",
        // Add more texts as needed
    ];

    var currentIndex = 0;

    function changeprofession() {
        bioText.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }

    // Change text every 3 seconds (3000 milliseconds)
    setInterval(changeprofession, 3000);
});