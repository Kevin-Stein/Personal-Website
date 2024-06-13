import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

neonCursor({
  el: document.getElementById("app"),
  shaderPoints: 16,
  curvePoints: 80,
  curveLerp: 0.5,
  radius1: 5,
  radius2: 30,
  velocityTreshold: 10,
  sleepRadiusX: 200,
  sleepRadiusY: 200,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025,
});

window.onload = function() {
  const imageElement = document.querySelector('[data-js="about_me"]');
  const body = document.querySelector('[data-js="body"]')
  if (body) {
    const handleMouseMove = (e) => {
      let rect = body.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      let dx = (x - rect.width / 2) / (rect.width / 2);
      let dy = (y - rect.height / 2) / (rect.height / 2);

      imageElement.style.transform = `perspective(1000px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg)`;
    };

    const handleMouseLeave = () => {
      imageElement.style.transform = "";
    };

    body.addEventListener('mousemove', handleMouseMove);
    body.addEventListener('mouseleave', handleMouseLeave);
  }
}