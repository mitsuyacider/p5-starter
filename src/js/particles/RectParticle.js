import BaseParticle from './BaseParticle';

export default class RectParticle extends BaseParticle {
  /**
   * NOTE: Draw particle
   */
  draw() {
    // NOTE: Rect
    this.context.strokeStyle = this.color;
    this.context.fillStyle = this.color;

    this.context.beginPath();
    this.context.rect(this.pos.x, this.pos.y, 7, 7);
    // this.context.stroke();
    this.context.fill();
  }
}
