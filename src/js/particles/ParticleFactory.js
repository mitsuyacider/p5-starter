import CircleParticle from './CircleParticle';
import RectParticle from './RectParticle';
import TriangleParticle from './TriangleParticle';

const ParticleType = {
  CIRCLE: 'circle',
  RECT: 'rect',
  TRIANGLE: 'triangle',
}

export default class ParticleFactory {
  constructor() {}

  createRandomParticle(context) {
    let particle = {};
    const keys = Object.keys(ParticleType);
    const randomKey = Math.floor(Math.random() * keys.length);
    const key = keys[randomKey];
    const type = ParticleType[key];

    switch (type) {
      case ParticleType.CIRCLE:
        particle = new CircleParticle(context);
        break;
      case ParticleType.RECT:
        particle = new RectParticle(context);
        break;

      case ParticleType.TRIANGLE:
        particle = new TriangleParticle(context);
        break;

      default:
        particle = new CircleParticle(context);
        break;
    }

    return particle;
  }
}
