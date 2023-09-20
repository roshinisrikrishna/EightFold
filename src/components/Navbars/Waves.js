import React, { useEffect } from 'react';

function DottedWaves({ width, height, marginTop }) {
  useEffect(() => {
    const canvasContainer = document.getElementById('dotted-wave-container');
    const canvasWidth = width || 800; // Default width if not provided
    const canvasHeight = height || 200; // Default height if not provided

    for (let i = 0; i < 5; i++) {
      const canvas = document.createElement('canvas');
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      canvas.style.marginTop = `${marginTop || 0}px`; // Use provided marginTop or default to 0

      const ctx = canvas.getContext('2d');

      // Set the frequency and increased amplitude of the sine wave for each line
      const frequency = 0.02;
      const amplitude = 150; // Adjust the amplitude to make peaks stiffer

      // Set the number of dots and their spacing for each line
      const numDots = 200;
      const dotSpacing = 10;

      // Clear the canvas for each line
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Create a linear gradient for the wave color
      const gradient = ctx.createLinearGradient(0, 0, canvasWidth, 0);
      gradient.addColorStop(0, 'blue'); // Start with blue on the left
      gradient.addColorStop(0.6, 'blue'); // Maintain blue for the first 90%
      gradient.addColorStop(1, '#c1f7e1'); // Transition to #c1f7e1 in the last 10%

      ctx.fillStyle = gradient;

      // Draw the dotted wave for each line
      for (let j = 0; j < numDots; j++) {
        const x = j * dotSpacing;
        const y = canvasHeight / 2 + amplitude * Math.sin(frequency * x);

        // Draw a dot at the calculated (x, y) position
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
      }

      // Append each canvas to the container
      canvasContainer.appendChild(canvas);
    }
  }, [width, height, marginTop]);

  return (
    <div
      id="dotted-wave-container"
      className="App"
      style={{
        transform: 'rotate(150deg)', // Adjust the degree of rotation as needed
      }}
    >
      {/* No canvas element here */}
    </div>
  );
}

export default DottedWaves;
