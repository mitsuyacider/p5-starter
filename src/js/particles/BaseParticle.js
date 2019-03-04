export default class BaseParticle {

  constructor(context) {
    this.pos = { x: Math.random() * window.screen.width, y: Math.random() * window.screen.height };
    this.speed = { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 };
    this.context = context;

    const r = Math.floor(Math.random(1) * 255);
    const g = Math.floor(Math.random(1) * 255);
    const b = Math.floor(Math.random(1) * 255);
    this.color = 'rgba(' + r + ',' + g + ',' + b + ', 0.2)';
    this.sizeWidth = context.canvas.clientWidth;
    this.sizeHeight = context.canvas.clientHeight;    
  }

  /**
   * NOTE: Abstruct function. This function should be defined in subclass.
   */
  draw() {}

  /**
   * NOTE: Update particle position
   */
  update() {
    // this.pos.add(this.speed)
    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;

    if (this.pos.x > this.sizeWidth || this.pos.x < 0) {
      this.speed.x *= -1;
    }

    if (this.pos.y > this.sizeHeight || this.pos.y < 0) {
      this.speed.y *= -1;
    }
  }

  /**
   * NOTE: Culclate distance between this object and passed particle.
   * @param { BaseParticle } p target particle
   */
  distance(p) {
    const x = this.pos.x - p.x;
    const y = this.pos.y - p.y;
    const powX = x ** 2;
    const powY = y ** 2;

    return Math.sqrt(powX + powY);
  }  
}