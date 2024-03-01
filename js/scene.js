
  
  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('scene-container').appendChild(renderer.domElement);
  camera.position.z = 100; // Adjust camera position


  function createHeartShape() {
    const shape = new THREE.Shape();
    shape.moveTo(25, 25);
    shape.bezierCurveTo(25, 25, 20, 0, 0, 0);
    shape.bezierCurveTo(-30, 0, -30, 35, -30, 35);
    shape.bezierCurveTo(-30, 55, -10, 77, 25, 95);
    shape.bezierCurveTo(60, 77, 80, 55, 80, 35);
    shape.bezierCurveTo(80, 35, 80, 0, 50, 0);
    shape.bezierCurveTo(35, 0, 25, 25, 25, 25);
    return shape;
}


function createHeart() {
  const color = currentHeartColorFunc(); // Assuming this returns a valid color
  const geometry = new THREE.ShapeGeometry(createHeartShape());
  const material = new THREE.MeshBasicMaterial({ color: color, side: THREE.DoubleSide });
  const heart = new THREE.Mesh(geometry, material);
  heart.scale.set(0.08, 0.08, 0.08); // Adjust scale for better visibility
  heart.rotation.z = Math.PI; // Rotate 180 degrees around the Z axis
  return heart;
}


  const hearts = [];
  function addHeart() {
    const heart = createHeart();
    // Adjust starting y position to always start from the top but vary x and z for randomness
    heart.position.set((Math.random() - 0.5) * 100, Math.random() * 50 + 100, Math.random() * 50 - 25);
    hearts.push(heart);
    scene.add(heart);
  }

  function spawnHearts() {
    addHeart(); // Add a new heart

    // Call spawnHearts again after a random delay to keep adding hearts
    setTimeout(spawnHearts, Math.random() * spawnSpeed); // Adjust the maximum value to control the spawn rate
  }


  function animate() {
    requestAnimationFrame(animate);

    hearts.forEach((heart, index) => {
        heart.position.y -= fallingSpeed; // You can adjust this for different falling speeds
        if (heart.position.y < -100) { // Check if the heart is below the view
            scene.remove(heart); // Remove the heart from the scene
            hearts.splice(index, 1); // Remove the heart from the array
            heart.geometry.dispose(); // Dispose of the geometry
            heart.material.dispose(); // Dispose of the material
        }
    });

    renderer.render(scene, camera);
}

  // Start the animation and heart spawning
  animate();
  spawnHearts(); // Start spawning hearts at random intervals

