import React from "react";

const AnimatedWave = ({ color, animationDuration, animationDirection, opacity }) => {
  const waveStyle = {
    background: `url('data:image/svg+xml;utf8,${encodeURIComponent(
      `<svg viewBox="0 0 1000 126" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 42.9533C178.148 -12.5894 287.4 -13.7474 500 42.9533C682.727 88.1203 798.763 97.7368 1000 42.9533V125.861H0V42.9533Z" fill="${color}" />
        <circle cx="0" cy="42.9533" r="2" fill="white">
          <animateMotion
            dur="${animationDuration}"
            repeatCount="indefinite"
            keyPoints="0;1;0"
            keyTimes="0;0.5;1"
            calcMode="linear"
          >
            <mpath href="#wavePath" />
          </animateMotion>
        </circle>
        <circle cx="250" cy="42.9533" r="2" fill="white">
          <animateMotion
            dur="${animationDuration}"
            repeatCount="indefinite"
            keyPoints="0;1;0"
            keyTimes="0;0.5;1"
            calcMode="linear"
          >
            <mpath href="#wavePath" />
          </animateMotion>
        </circle>
        <circle cx="500" cy="42.9533" r="2" fill="white">
          <animateMotion
            dur="${animationDuration}"
            repeatCount="indefinite"
            keyPoints="0;1;0"
            keyTimes="0;0.5;1"
            calcMode="linear"
          >
            <mpath href="#wavePath" />
          </animateMotion>
        </circle>
        <circle cx="750" cy="42.9533" r="2" fill="white">
          <animateMotion
            dur="${animationDuration}"
            repeatCount="indefinite"
            keyPoints="0;1;0"
            keyTimes="0;0.5;1"
            calcMode="linear"
          >
            <mpath href="#wavePath" />
          </animateMotion>
        </circle>
      </svg>`
    )}')`,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 126,
    backgroundSize: "1000px 126px",
    animation: `wave ${animationDuration} linear infinite`,
    animationDirection: animationDirection || "normal",
    opacity: opacity,
  };

  return <div style={waveStyle}></div>;
};

export default AnimatedWave;
