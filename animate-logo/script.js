class Renderer {
  constructor({ canvas, objects }) {
    this.canvas = canvas;
    this.objects = objects;
    this.context2d.fillStyle = "#000000";
  }

  get context2d() {
    return this.canvas.getContext('2d');
  }

  renderObjects() {
    this.context2d.fillRect(0, 0, this.canvas.width, this.canvas.height);
    for (const object of this.objects) {
      object.render(this.context2d);
    }
  }

  moveObjects(dx, dy) {
    for (const object of this.objects) {
      object.move(dx, dy);
    }
  }

  moveObjectsAndRender(dx, dy) {
    this.moveObjects(dx, dy);
    this.renderObjects();
  }
}

class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.fill = '#ffffff';
    this.parts = [];
  }

  render(ctx) {
    const wasFillStyle = ctx.fillStyle;
    ctx.fillStyle = this.fill;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    for (const part of this.parts) {
      ctx.fillRect(...part);
    }
    ctx.fillStyle = wasFillStyle;
  }

  createParts() {
    this.parts = [];

    const x2 = this.x + this.width;
    if (x2 > 400) {
      this.parts.push([0, this.y, x2 - 400, this.height]);
    }

    const y2 = this.y + this.height;
    if (y2 > 400) {
      this.parts.push([this.x, 0, this.width, y2 - 400]);
    }
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;

    if (this.x > 400) {
      const oppositeX = this.x - 400;
      this.x = oppositeX;
    } else if (this.x < 0) {
      const oppositeX = 400 + this.x;
      this.x = oppositeX;
    }

    if (this.y > 400) {
      const oppositeY = this.y - 400;
      this.y = oppositeY;
    } else if (this.y < 0) {
      const oppositeY = 400 + this.y;
      this.y = oppositeY;
    }

    this.createParts();
  }
}
// 112, 144, 16, 150,
// 150, 106, 100, 16,
// 272, 144, 16, 150,

const renderer = new Renderer({
  canvas: document.getElementById('canvas'),
  objects: [
    new Rectangle(112, 144, 16, 150),
    new Rectangle(150, 106, 100, 16),
    new Rectangle(272, 144, 16, 150),
  ],
});

renderer.renderObjects();

window.addEventListener('keydown', e => {
  switch(e.keyCode) {
    case 37:
      renderer.moveObjectsAndRender(-25, 0);
      break;
    case 38:
      renderer.moveObjectsAndRender(0, -25);
      break;
    case 39:
      renderer.moveObjectsAndRender(25, 0);
      break;
    case 40:
      renderer.moveObjectsAndRender(0, 25);
      break;
    default:
      break;
  }
});