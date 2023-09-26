import React from 'react'
import Wave from 'react-wavify'

const Wave1 = () => (
    <Wave mask="url(#mask)" fill="#1277b0" >
    <defs>
      <linearGradient id="gradient" gradientTransform="rotate(90)">
        <stop offset="0" stopColor="white" />
        <stop offset="0.5" stopColor="black" />
      </linearGradient>
      <mask id="mask">
        <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)"  />
      </mask>
    </defs>
  </Wave>
);
export default Wave1;