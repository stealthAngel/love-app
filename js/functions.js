function getRandomColor() {
  // Generates a random hex color
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getInvertedColor(hex) {
// Remove the hash at the start if it's there
hex = hex.replace('#', '');

// Convert the hex color to its inverted color
let invertedColor = '#';
for (let i = 0; i < 6; i += 2) { // Process two digits at a time
    // Convert hex to decimal (base 16 to base 10)
    let decimal = parseInt(hex.substr(i, 2), 16);
    // Invert the color
    let inverted = (255 - decimal).toString(16);
    // Pad with zero if length is less than 2 for proper hex format
    invertedColor += inverted.padStart(2, '0');
}

return invertedColor;
}

function getTransition() {
  // List of potential CSS transitions
  const transitions = [
      'transform 0.5s ease', // Scale up
      'opacity 0.5s ease', // Fade in
      'transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)', // Bounce
      'transform 0.6s ease-in-out', // Swing
      'opacity 0.5s ease, transform 0.5s ease-out' // Fade and slide from bottom
  ];

  // Randomly select a transition from the list
  const randomIndex = Math.floor(Math.random() * transitions.length);
  return transitions[randomIndex];
}


function createRandomPinkPurpleColor() {
  // Pink and purple hues generally have higher values of red and blue.
  // We'll randomize these within a range that's likely to produce these hues.
  // Green is kept relatively low to avoid the color shifting away from pink/purple.

  // Generate a high red value (150 to 255 to ensure it's leaning towards pink/purple)
  const red = Math.floor(Math.random() * (255 - 150 + 1)) + 150;

  // Generate a low green value (0 to 130 to keep it subdued)
  const green = Math.floor(Math.random() * 130);

  // Generate a high blue value (150 to 255 to complement the red for pink/purple hues)
  const blue = Math.floor(Math.random() * (255 - 150 + 1)) + 150;

  // Convert these RGB values to a hex string
  const color = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;

  return color;
}

// Function to generate a random pink/purple color
function createRandomColors() {
  const pink = Math.floor(Math.random() * 256);
  const purple = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${pink},${purple},${blue})`;
}

function getRandomColor() {
  // Generates a random hex color
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Object mapping color options to functions
const colorMappings = {
  random: createRandomColors,
  pink: createRandomPinkPurpleColor,
  blue: () => '#0000FF',
  blackwhite: () => Math.random() < 0.5 ? '#000000' : '#FFFFFF',
};

let currentHeartColorFunc = createRandomPinkPurpleColor;
