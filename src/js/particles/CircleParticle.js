import BaseParticle from './BaseParticle';

export default class CircleParticle extends BaseParticle {
  /**
   * NOTE: Draw particle
   */
  draw() {
    // NOTE: Circle
    this.context.strokeStyle = this.color;
    this.context.fillStyle = this.color;
    this.context.beginPath();
    this.context.arc(this.pos.x, this.pos.y, 3.5, 0, Math.PI * 2, true);
    this.context.stroke();
    this.context.fill();
  }
}
