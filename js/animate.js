function Animator(boxes, container) {

  var intervalId;
  var that = this;
  this.boxes = boxes;
  this.box1;
  this.box2;
  this.container = container;

  this.animate = function () {
    intervalId = setInterval(function () {
      that.boxes.forEach(function (box) {
        that.move(box);
        that.checkWallCollision(box);
        for (var i = 0; i < that.boxes.length; i++) {
          if (box != that.boxes[i])
            that.isCollide(box, that.boxes[i]);
        }
      });
    }, 1000 / 60);
  }

  this.move = function (box) {
    box.move();
  }

  this.checkWallCollision = function (box) {
    if ((box.x + box.width) >= container.width || box.x <= 0) {
      box.directionX *= -1;
    }
    if ((box.y + box.height >= container.height) || (box.y <= 0)) {
      box.directionY *= -1;
      console.log(box.y);

      //      deltaX = Math.cos(angle) * speed, deltaY = Math.sin(angle) * speed;
      //      setInterval(function () {
      //        box.style.top = (top += deltaY) + 'px';
      //        box.style.left = (left += deltaX) + 'px';
      //      }, 60);
      //    })();
    }
  }

  this.isCollide = function (box1, box2) {

    if (box1.x < box2.x + box2.width && box1.x + box1.width > box2.x && box1.y < box2.y + box2.height && box1.height + box1.y > box2.y) {
      console.log("collided");
      if (box2.element.style.background != 'red') {
        box2.element.style.background = 'red';
        box1.element.style.background = 'purple';
      }

      //      if (box1.velocity == false) {
      //        box1.velocity = true;
      //      } else if (box2.movement == false) {
      //        box2.movement = true;
      //      }
      if (box1.velocity == 0) {
        box1.angle = box2.angle;
        box2.angle = Math.PI + box2.angle;
        box1.velocity = 10;
      } else if (box2.velocity == 0) {
        box2.angle = box1.angle;
        box1.angle = Math.PI + box1.angle;
        box2.velocity = 10;
      } else {
        console.log(box1.angle + " " + box2.angle);
        var temp = box1.directionX;
        box1.directionX = box2.directionX;
        box2.directionX = temp;

      }



    }

  }
}
