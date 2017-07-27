// Main application Class

function BoxCollision(elementId) {

  var element = document.getElementById(elementId);

  this.init = function () {
    var container = new Container();
    var boxes = [];
    var rani = [];
    container.create();

    var box1 = new Box();
    box1.create(0);
    boxes.push(box1);

    var box2 = new Box();
    box2.create(0);
//    box2.setPosition(300, 300);
    boxes.push(box2);

    var box3 = new Box();
    box3.create(0);
//    box3.setPosition(300, 300);
    boxes.push(box3);
    
     var box5 = new Box();
    box5.create(0);
//    box3.setPosition(300, 300);
    boxes.push(box5);
    
     var box6 = new Box();
    box6.create(0);
//    box3.setPosition(300, 300);
    boxes.push(box6);
    
     var box7 = new Box();
    box7.create(0);
//    box3.setPosition(300, 300);
    boxes.push(box7);
    
    var box4 = new Box();
    box4.create(10);
    boxes.push(box4);
    box4.element.style.background ="red";
    
    container.append(box1.element);
    container.append(box2.element);
    container.append(box3.element);
     container.append(box5.element);
    container.append(box6.element);
    container.append(box7.element);
 container.append(box4.element);
    element.appendChild(container.element);

    
    var animator = new Animator(boxes, container);
    animator.animate();
  }
}

var boxCollision = new BoxCollision('box-collision');

boxCollision.init();