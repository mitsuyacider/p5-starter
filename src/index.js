import p5 from 'p5';
import 'p5/lib/addons/p5.dom';
import './style.scss';

import Particles from './js/particles/Particles.js'

window.onload = function () {

  // NOTE: Set canvas size.
  //       This size is set in css. See style.scss.
  const initialCanvas = document.getElementById('canvas');
  const width = initialCanvas.clientWidth;
  const height = initialCanvas.clientHeight;

  const sketch = (p5) => {
    // make library globally available
    window.p5 = p5;
  
    let particles = {}
    let img = {};
    p5.setup = () => {
      const canvas = p5.createCanvas(width, height)
      const context = canvas.elt.getContext('2d');
      
      // NOTE: Fit p5 canvas with parent container. 
      //       Now p5 canvas will be set as fullscreen inside parent.
      canvas.parent('canvas');
  
      // NOTE: Image Setting
      p5.imageMode(p5.CENTER);
      img = p5.loadImage('./assets/p5js.svg');    
  
      // NOTE: Particles(Canvas)
      const particleNum = 250;
      particles = new Particles();
      particles.createParticles(context, particleNum);
    }
  
    p5.draw = () => {
      p5.background(255);
      particles.render();
      p5.image(img, p5.width / 2, p5.height / 2);
    }
  }
  
  new p5(sketch);
}