import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

neonCursor({
  el: document.getElementById('app'),
  shaderPoints: 16,
  curvePoints: 100,
  curveLerp: 0.5,
  radius1: 5,
  radius2: 10,
  velocityTreshold: 100,
  sleepRadiusX: 200,
  sleepRadiusY: 200,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025
})