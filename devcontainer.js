const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: A4;
  pixelsPerInch: 300,
  orientation: 'landscape'
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const w = 60;
    const h = 60;
    const gap = 20;
    let x, y;

    for (Let i = 0; i < 40; i++) {
      for (Let j = 0; j < 5; j++) {
        x = 100 + (w + gap) * i;
        y = 100 + (h + gap) * j;