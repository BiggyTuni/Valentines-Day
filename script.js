let hoverCount = 0;

function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    hoverCount++;
    const noButton = document.getElementById('noButton');

    if (hoverCount >= 5) {
        let originalGif = document.getElementById('originalGif');
        let newGif = document.getElementById('newGif');
        // Change the header text
        let headerText = document.querySelector('.header_text');
        headerText.textContent = "Bunny ... press the right button ... you know you love me";
        
        // Remove hidden class before applying fade-in
        newGif.classList.remove('hidden');
        originalGif.classList.add('fade-out');
        newGif.classList.add('fade-in');
    } else {
        noButton.style.position = "fixed";
        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }
}
