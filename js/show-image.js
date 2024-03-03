let images = [];

for (let i = 1; i <= 15; i++) {
    images.push(`images/image${i}.jpeg`);
}

document.getElementById('show-image').addEventListener('click', function() {
    const imageContainer = document.getElementById('image-container');
    const loveImage = document.getElementById('love-image');

    // Only update the src if the image container is already visible
    if (imageContainer.style.display !== 'none') {
        currentIndex = (currentIndex + 1) % images.length; // Cycle through images
    }

    loveImage.src = images[currentIndex];
    imageContainer.style.display = 'block'; // Show the container if it was hidden
});

document.getElementById('hide-image').addEventListener('click', function() {
    document.getElementById('image-container').style.display = 'none';
});