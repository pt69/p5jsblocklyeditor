//Modifications: Pt 2021

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var animal = require('./animal');
var triangle = require('./triangle');

module.exports = {
  animal: animal,
  triangle: triangle
};

},{"./animal":2,"./triangle":3}],2:[function(require,module,exports){
"use strict";

var step = 0;

function AnimalBody(p) {
  // legs
  // FL1 FR3
  // BL7 BR5
  var drawPhase = [function (leg) {
    p.push();
    //strokeWeight eingefügt
    p.strokeWeight(1);
    if (leg < 4) p.rotate(-10);else p.rotate(10);
    p.ellipse(-9, 0, 9, 5);
    p.pop();
  }, function () {
    p.ellipse(-9, 0, 9, 5);
  }, function (leg) {
    p.push();
    //strokeWeight eingefügt
    p.strokeWeight(1);
    if (leg < 4) p.rotate(10);else p.rotate(-10);
    p.ellipse(-9, 0, 9, 5);
    p.pop();
  }, function () {
    p.ellipse(-9, 0, 9, 5);
  }];

  this.draw = function () {
    step += 1;
    p.push();
    p.fill(120);
    p.stroke(200);
    //strokeWeight eingefügt
    p.strokeWeight(1);
    p.ellipseMode(p.CENTER);
    for (var i = 0; i < 8; i += 1) {
      if (i % 2 === 1) {
        drawPhase[Math.floor(step / 10) % 4](i);
      } else if (i === 2) {
        p.ellipse(-9, 0, 5, 5);
      } else if (i === 6) {
        p.ellipse(-7, 0, 10, 3);
      }
      p.rotate(360 / 8);
    }
    p.fill(60);
    p.ellipse(0, 0, 15, 17);
    p.pop();
  };
}

module.exports = AnimalBody;

},{}],3:[function(require,module,exports){
"use strict";

function TriangleBody(p) {
  this.draw = function () {
    p.push();
    p.fill(0);
    p.noStroke();
    p.triangle(0, -6, -5, 4, 5, 4);
    p.pop();
  };
}

module.exports = TriangleBody;

},{}],4:[function(require,module,exports){
'use strict';

var Turtle = require('./turtle');

window.Turtle = Turtle;

},{"./turtle":6}],5:[function(require,module,exports){
'use strict';

var bodies = require('./body/all');

function Printer(p, turtle, bodyName) {
  var position = void 0;
  var direction = void 0;
  var pinPassed = 0;
  var step = 0;
  var stepCount = null;
  var body = chooseBody(bodyName);
  //Turtle malt nur ein Mal die Grafik
  var animateCount = 0;

  this.animate = function (speed) {
    //Turtle malt nur ein Mal die Grafik
    if (animateCount < turtle.path.length-1) {
      updatePosition(speed);
      printPath(pinPassed);
      printSegment(turtle.path[pinPassed], Object.assign({}, turtle.path[pinPassed + 1], { pos: position }));
      printBody(position, direction);
    } else {
      printPath(turtle.path.length);
      printBody(position, direction);
    }
  };

  this.print = function (drawBody) {
    var index = turtle.path.length - 1;
    printPath(index);
    if (drawBody) printBody(turtle.path[index].pos, turtle.path[index].dir);
  };

  function printPath(upToPin) {
    var i = 0;
    while (i < upToPin && turtle.path[i]) {
      printSegment(turtle.path[i], turtle.path[i + 1]);
      i += 1;
    }
  }

  function printSegment(pin, nextPin) {
    if (nextPin && nextPin.penDown && nextPin.move.motion === 'TRANSLATE') {
      p.stroke(nextPin.color);
      p.line(pin.pos.x, pin.pos.y, nextPin.pos.x, nextPin.pos.y);
    }
  }

  function printBody(pos, dir) {
    if (!pos || !dir) return;
    p.push();
    p.translate(pos.x, pos.y);
    p.rotate(dir.heading());
    p.rotate(90);
    body.draw();
    p.pop();
  }

  function updatePosition(speed) {
    var pin1 = turtle.path[pinPassed];
    var pin2 = turtle.path[pinPassed + 1];

    if (!pin2) {
      pinPassed = 0;
      step = 0;
    } else if (step > stepCount) {
      pinPassed += 1;
      //Turtle malt nur ein Mal die Grafik
      animateCount += 1;
      stepCount = null;
      step = 0;
      updatePosition(speed);
    } else {
      if (pin2.move.motion === 'TRANSLATE') {
        if (stepCount === null) {
          stepCount = Math.floor(Math.abs(pin2.move.size) / speed);
        }

        if (stepCount > 0) {
          position = pin1.pos.copy().lerp(pin2.pos, step / stepCount);
        } else {
          position = pin2.pos.copy();
        }

        direction = pin1.dir.copy();
      } else if (pin2.move.motion === 'ROTATE') {
        if (stepCount == null) {
          stepCount = Math.floor(Math.abs(pin2.move.size) / speed / 2);
        }
        if (stepCount > 0) {
          direction = pin1.dir.copy().rotate(pin2.move.size / stepCount * step);
        }
      }
      step += 1;
    }
  }

  function chooseBody(name) {
    return new bodies[name || 'animal'](p);
  }
}

module.exports = Printer;

},{"./body/all":1}],6:[function(require,module,exports){
'use strict';

var Printer = require('./printer');

function Turtle(p, posX, posY) {
  var _this = this;

  var pos = p.createVector(fallback(posX, 'x'), fallback(posY, 'y'));
  var dir = p.createVector(0, -1);

  this.penDown = true;
  //Color auf p5.js-color umgestellt
  this.color = p.color(0, 0, 0);
  this.path = [];

  this.pin = function (motion, size, refPin) {
    _this.path.push(Object.assign({
      pos: pos.copy(),
      dir: dir.copy(),
      penDown: _this.penDown,
      color: _this.color
    }, refPin || {}, { move: { motion: motion, size: size } }));
  };

  this.pin();

  this.forward = function (px) {
    pos.add(dir.copy().setMag(px));
    _this.pin('TRANSLATE', px);
  };

  this.back = function (px) {
    pos.sub(dir.copy().setMag(px));
    _this.pin('TRANSLATE', px);
  };

  this.right = function (deg) {
    dir.rotate(deg);
    _this.pin('ROTATE', deg);
  };

  this.left = function (deg) {
    dir.rotate(-deg);
    _this.pin('ROTATE', -deg);
  };

  this.getRun = function (name) {
    return new Printer(p, _this, name);
  };

  function fallback(amount, axis) {
    if (amount % 1 === 0) return amount;
    return Math.floor(p[axis === 'x' ? 'width' : 'height'] / 2);
  }
}

module.exports = Turtle;

},{"./printer":5}]},{},[4]);