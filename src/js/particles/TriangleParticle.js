import BaseParticle from './BaseParticle';

export default class TriangleParticle extends BaseParticle {
  /**
   * NOTE: Draw particle
   */
  draw() {
    // NOTE: Triangle
    this.context.strokeStyle = this.color;
    this.context.fillStyle = this.color;

    const size = 10;
    this.context.beginPath();
    this.context.moveTo(this.pos.x, this.pos.y);
    this.context.lineTo(this.pos.x + size / 2, this.pos.y + size);
    this.context.lineTo(this.pos.x - size / 2, this.pos.y + size);
    this.context.fill();
  }
}
