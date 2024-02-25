

// Function to handle color change button click
document.getElementById('color-change-btn').addEventListener('click', function() {
  const colorOptions = document.getElementById('color-options');
  colorOptions.style.display = colorOptions.style.display === 'none' ? 'block' : 'none';
});



// Function to handle color option click
function handleColorOptionClick() {
  const colorChoice = this.getAttribute('data-color');
  // Update the current color function based on the selection
  currentHeartColorFunc = colorMappings[colorChoice];
  // Update all existing hearts to the new color
  hearts.forEach(heart => {
    heart.material.color.set(currentHeartColorFunc());
  });
  document.getElementById('color-options').style.display = 'none';
}

// Function to handle background color option click
function handleBgColorOptionClick() {
  const bgColor = this.getAttribute('data-bgcolor');
  const sceneContainer = document.getElementById('scene-container');
  const messageContainer = document.getElementById('message-container');

  // Apply the selected background color to the scene container
  sceneContainer.style.backgroundColor = bgColor;
  // Determine appropriate text color based on contrast ratio
  const textColor = bgColor === 'white' ? 'black' : 'white';
  messageContainer.style.color = textColor;

  // Hide the menu after selection
  document.getElementById('color-options').style.display = 'none';
}




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