

// Function to handle color change button click
document.getElementById('color-change-btn').addEventListener('click', function() {
  const colorOptions = document.getElementById('color-options');
  colorOptions.style.display = colorOptions.style.display === 'none' ? 'block' : 'none';
});

// Adding event listeners for color options
document.querySelectorAll('.color-option').forEach(option => {
  option.addEventListener('click', handleColorOptionClick);
});

// Adding event listeners for background color options
document.querySelectorAll('.bg-color-option').forEach(option => {
  option.addEventListener('click', handleBgColorOptionClick);
});


// Event listener for falling speed slider
document.getElementById('falling-speed-slider').addEventListener('input', function() {
  fallingSpeed = parseFloat(this.value);
});

// Event listener for heart size slider
document.getElementById('heart-size-slider').addEventListener('input', function() {
  heartScale = parseFloat(this.value);
  hearts.forEach(heart => {
    heart.scale.set(heartScale, heartScale, heartScale); // Update the scale of each heart
  });
});

document.getElementById('spawn-speed-slider').addEventListener('input', function() {
  spawnSpeed = parseFloat(this.value);
});


// option functions 
function handleColorOptionClick() {
  const colorChoice = this.getAttribute('data-color');
  // Update the current color function based on the selection
  currentHeartColorFunc = colorMappings[colorChoice];
  // Update all existing hearts to the new color
  hearts.forEach(heart => {
    heart.material.color.set(currentHeartColorFunc());
  });
}

// Function to handle background color option click
function handleBgColorOptionClick() {
  const bgColor = this.getAttribute('data-bgcolor'); // Get the selected background color from the clicked element
  setBackgroundColor(bgColor); // Apply the selected background color
  const textColor = getBackgroundReversedColor(); // Determine the text color based on the background color
  setMessageColor(textColor); // Apply the text color
}
