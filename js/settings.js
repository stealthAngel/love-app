function createPopup(messageText, textColor, borderColor, backgroundColor, transition) {
  if (currentPopup) {
      // If there's an existing popup, remove it before creating a new one
      document.body.removeChild(currentPopup);
      currentPopup = null;
  }

  const popup = document.createElement('div');
  popup.innerHTML = `<p>${messageText}</p>`;
  popup.style.border = `2px solid ${borderColor}`; // Random border color
  popup.style.backgroundColor = backgroundColor;
  popup.style.color = textColor;
  popup.style.transition = transition; // Animation for scaling up
  popup.style.position = 'absolute';
  popup.style.top = '50%';
  popup.style.left = '50%';
  popup.style.transform = 'translate(-50%, -50%) scale(0)'; // Start scaled down
  popup.style.padding = '20px';
  popup.style.borderRadius = '10px';
  popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  popup.style.fontFamily = '"Arial", sans-serif';
  popup.style.fontSize = '24px';
  popup.style.textAlign = 'center';
  document.body.appendChild(popup);
  currentPopup = popup; // Keep track of the current popup

  setTimeout(() => {
      popup.style.transform = 'translate(-50%, -50%) scale(1)'; // Scale up animation
  }, 10); // Start animation shortly after adding to the document

  // Close popup after 5 seconds
  setTimeout(() => {
      if (currentPopup === popup) {
          document.body.removeChild(popup);
          currentPopup = null;
      }
  }, 5000);
}

document.getElementById('love-button').addEventListener('click', function() {
  document.getElementById('hide-image').click();
  // Select a random message
  const messageIndex = Math.floor(Math.random() * messages.length);
  const backgroundColor = getRandomColor();
  const invertedColor = getInvertedColor(backgroundColor);
  const transition = getTransition();
  createPopup(messages[messageIndex], invertedColor, invertedColor, backgroundColor, transition);
});

document.addEventListener('click', function(event) {
  const colorOptions = document.getElementById('color-options');
  const colorChangeBtn = document.getElementById('color-change-btn');
  
  // Check if the click occurred outside the color options menu and the color change button
  if (!colorOptions.contains(event.target) && event.target !== colorChangeBtn) {
      // Collapse the color options menu
      colorOptions.style.display = 'none';
  }
});

document.getElementById('toggle-buttons-btn').addEventListener('click', function() {
  const buttonsContainer = document.querySelector('.buttons-container');
  if (buttonsContainer.style.display === 'none') {
      buttonsContainer.style.display = 'flex'; // Show the buttons container
  } else {
      buttonsContainer.style.display = 'none'; // Hide the buttons container
  }
});



