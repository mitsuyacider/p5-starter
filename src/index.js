import p5 from 'p5';
import 'p5/lib/addons/p5.dom';
import './style.scss';

import Particles from './js/particles/Particles.js'

const sketch = (p5) => {
	// make library globally available
	window.p5 = p5;

  let particles = {}
  let img = {};
	p5.setup = () => {
    const canvas = p5.createCanvas(500, 500)
    const context = canvas.elt.getContext("2d");
    canvas.parent("canvas");

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