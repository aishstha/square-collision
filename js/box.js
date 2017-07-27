function Box(x, y) {
  this.x = Math.floor((Math.random()*750));
  this.y = Math.floor((Math.random()*550));
  this.height = 50;
  this.width = 50;
  //this.velocity = 0;
  this.color = 'blue';
//  this.directionX = 1;
//  this.directionY = 1;
this.velocity;
  this.angle;
  this.directionX;
  this.directionY;
  this.element;

  this.create = function (v) {
    this.velocity=v;
    this.angle = Math.floor(Math.random()*90) * Math.PI / 180;
    this.directionX=Math.cos(this.angle);
    this.directionY=Math.sin(this.angle);
    this.element = document.createElement('div');
    this.element.style.width = this.width;
    this.element.style.height = this.height;
    this.element.style.position = 'absolute';
    this.element.style.top=this.y;
      this.element.style.left=this.x;
    this.element.style.background = this.color;
  }
  
    this.setPosition = function (x, y) {
    this.x = x;
    this.y = y;

    this.element.style.top = this.y;
    this.element.style.left = this.x;
  }

  this.move = function()
{
//    this.velocity=10;
    this.x = this.x + (this.velocity * this.directionX);
    this.y = this.y + (this.velocity * this.directionY);

    this.element.style.left = this.x;
          this.element.style.top = this.y;
          
  }}