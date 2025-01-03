/** Global variables **/
// {

textAlign(CENTER, CENTER);
textFont(createFont("impact"));
var mouseOver = false;
var tm = 20000000;
var scene = "load";
var transparency = 255;
var screenColor = [0, 0, 0];
var boxesX = 0;
var nextX = 1;
var prevX = -1;
var moving = false;
var boxDirec = 1;

//}

/** User interaction **/
// {

var keys = [];
keyPressed = function () {
    keys[keyCode] = true;
};
keyReleased = function () {
    keys[keyCode] = false;
};

var clicked = false;

//}

/** Images **/
// {

var images = {
    illusion : function () {
        
        background(0, 0, 0, 0);
        
        strokeWeight(1);
        stroke(0, 0, 0);
        
        fill(255, 255, 255);
        quad(30, 0, 130, 50, 100, 60, 0, 10);
        
        beginShape();
        fill(115, 115, 115);
            vertex(130, 50);
            vertex(100, 60);
            vertex(100, 136);
            vertex(55, 155);
            vertex(55, 60);
            vertex(30, 60);
            vertex(30, 165);
            vertex(30, 165);
            vertex(30, 200);
            vertex(130, 160);
        endShape();
        
        beginShape();
            fill(196, 196, 196);
            vertex(30, 200);
            vertex(30, 165);
            vertex(30, 60);
            vertex(70, 80);
            vertex(70, 130);
            vertex(100, 136);
            vertex(100, 60);
            vertex(0, 10);
            vertex(0, 180);
        endShape();
        
        fill(255, 255, 255);
        quad(70, 121, 100, 137, 55, 155, 55, 127);
        
        return get(0, 0, 400, 400);
        
    },
    arrow : function () {
        
        background(0, 0, 0, 0);
        
        noStroke();
        fill(207, 207, 207);
        quad(100, 100, 75, 75, 75, 95, 100, 120);
        quad(100, 100, 75, 75, 95, 75, 120, 100);
        stroke(133, 78, 0);
        strokeWeight(5);
        line(15, 15, 100, 100);
        noStroke();
        strokeWeight(1);
        fill(97, 97, 97);
        triangle(0, 0, 15, 45, 20, 20);
        fill(184, 184, 184);
        triangle(0, 0, 45, 15, 20, 20);
        stroke(255, 255, 255);
        strokeWeight(1.5);
        line(7, 4, 40, 15);
        
        return get(0, 0, 120, 120);
        
    },
    transition : function () {
        
        background(0, 0, 0, 0);
        
        noStroke();
        
        fill(95, 95, 95);
        rect(0, 0, width, height);
        
        fill(120, 120, 120);
        rect(200, 15, 185, 370);
        
        fill(150, 150, 150);
        rect(15, 15, 175, 370);
        
        fill(95, 95, 95);
        rect(185, 0, 30, height);
        
        strokeWeight(1);
        stroke(0);
        line(200, 0, 200, height);
        
        fill(166, 166, 166);
        for (var i = 0; i < 4; i++) {
            ellipse(7.5, i * 128 + 7.5, 7, 7);
        }
        for (var i = 0; i < 4; i++) {
            ellipse(392.5, i * 128 + 7.5, 7, 7);
        }
        for (var i = 0 ; i < 4; i++) {
            ellipse(192.5, i * 128 + 7.5, 7, 7);
        }
        for (var i = 0 ; i < 4; i++) {
            ellipse(207.5, i * 128 + 7.5, 7, 7);
        }
        ellipse(100, 7.5, 7, 7);
        ellipse(100, 392.5, 7, 7);
        ellipse(300, 7.5, 7, 7);
        ellipse(300, 392.5, 7, 7);
        
        strokeCap(ROUND);
        strokeWeight(15);
        stroke(89, 62, 0);
        line(100, 100, 300, 300);
        
        strokeWeight(7);
        stroke(61, 42, 0);
        line(299, 304, 97, 101);
        
        strokeWeight(15);
        stroke(89, 62, 0);
        line(100, 300, 300, 100);
        
        strokeWeight(7);
        stroke(61, 42, 0);
        line(103, 303, 279, 125);
        
        noStroke();
        
        fill(99, 99, 99);
        beginShape();
            vertex(250, 150);
            vertex(215, 115);
            bezierVertex(270, 60, 283, 63, 327, 73);
        endShape();
        
        fill(77, 77, 77);
        beginShape();
            vertex(250, 150);
            vertex(285, 185);
            bezierVertex(335, 133, 344, 128, 327, 73);
        endShape();
        
        fill(59, 59, 59);
        beginShape();
            vertex(80, 200);
            bezierVertex(85, 137, 90, 80, 200, 80);
            bezierVertex(45, 50, 80, 220, 80, 200);
        endShape();
        
        fill(102, 102, 102);
        beginShape();
            vertex(200, 80);
            bezierVertex(45, 50, 80, 220, 80, 200);
            bezierVertex(49, 156, 84, 35, 200, 80);
        endShape();
        
        return get(0, 0, 400, 400);
        
    },
    coald : function () {
        
        background(0, 0, 0, 0);
        
        noStroke();
        
        //Planet
        fill(87, 87, 87);
        ellipse(50, 50, 100, 100);
        
        //Planet shading
        fill(255, 255, 255, 40);
        ellipse(46, 46, 85, 85);
        ellipse(43, 43, 70, 70);
        
        //Pickaxe handle
        fill(117, 84, 0);
        quad(33, 23, 40, 6, 42, 7, 34, 25);
        
        fill(0, 0, 0, 30);
        quad(33.5, 24, 41.2, 6.5, 42, 7, 34, 25);
        
        //Pickaxe head
        fill(75);
        beginShape();
            vertex(45, 25);
            bezierVertex(30, 32, 25, 16, 25, 17);
            bezierVertex(31, 27, 42, 27, 45, 25);
        endShape();
        
        fill(100);
        beginShape();
            vertex(25, 17);
            bezierVertex(31, 27, 42, 27, 45, 25);
            bezierVertex(30, 27, 25, 14, 25, 17);
        endShape();
        
        //Coal
        fill(25);
        beginShape();
            vertex(20, 22);
            vertex(24, 20);
            vertex(27, 21);
            vertex(32, 25);
            vertex(35, 25);
            vertex(42, 28);
            vertex(44, 28);
            vertex(47, 30);
            vertex(47, 35);
            vertex(20, 35);
            vertex(18, 29);
        endShape();
        
        //Coal shading
        fill(0, 0, 0, 75);
        beginShape();
            vertex(42, 28);
            vertex(44, 28);
            vertex(47, 30);
            vertex(47, 35);
            vertex(20, 35);
            vertex(25, 33);
            vertex(33, 32);
        endShape();
        
        fill(255, 255, 255, 15);
        beginShape();
            vertex(20, 22);
            vertex(24, 20);
            vertex(27, 21);
            vertex(32, 25);
            vertex(26, 24);
            vertex(23, 27);
            vertex(18, 29);
        endShape();
        
        //Minecart container
        fill(75);
        quad(15, 30, 50, 30, 45, 43, 20, 43);
        
        //Minecart shading
        fill(0, 0, 0, 30);
        beginShape();
            vertex(50, 30);
            vertex(45, 43);
            vertex(25, 43);
            vertex(30, 38);
            vertex(40, 35);
        endShape();
        
        quad(50, 30, 45, 43, 32, 43, 44, 37);
        
        fill(255, 255, 255, 30);
        beginShape();
            vertex(15, 30);
            vertex(20, 43);
            vertex(20, 35);
            vertex(25, 30);
        endShape();
        
        //Minecart wheels
        fill(0);
        ellipse(25, 45, 9, 9);
        ellipse(40, 45, 9, 9);
        
        fill(50);
        ellipse(25, 45, 6, 6);
        ellipse(40, 45, 6, 6);
        
        //Minecart wheels shading
        fill(255, 255, 255, 30);
        ellipse(24.6, 44.6, 4.5, 4.5);
        ellipse(39.6, 44.6, 4.5, 4.5);
        
        //Helmet
        fill(255, 213, 0);
        arc(63, 75, 20, 20, 180, 360);
        arc(63, 75, 20, 5, 0, 180);
        
        fill(107, 59, 0);
        beginShape();
            vertex(54, 69);
            bezierVertex(60, 70, 61, 71, 72, 70);
            bezierVertex(73, 71, 73, 71, 73, 73);
            bezierVertex(67, 74, 60, 74, 53, 72);
            bezierVertex(53, 71, 53, 70, 54, 69);
        endShape();
        
        strokeWeight(1);
        stroke(255, 244, 173);
        fill(255, 255, 255);
        ellipse(55, 71, 3, 5);
        
        for (var i = 0; i < 15; i++) {
            var lerpC = lerpColor(color(255, 247, 156, 0), color(255, 247, 156), i / 15);
            
            noStroke();
            fill(lerpC);
            rect(i + 41, i + 56, 1, -i * 2 + 30);
        }
        
        //Helmet shading
        noStroke();
        
        fill(0, 0, 0, 30);
        beginShape();
            vertex(73, 75);
            bezierVertex(73, 70, 70, 67, 67, 66);
            bezierVertex(69, 67, 70, 74, 63, 77.5);
            bezierVertex(72, 77, 70, 78, 73, 75);
        endShape();
        
        return get(0, 0, 400, 400);
        
    },
    golx : function () {
        
        background(0, 0, 0, 0);
        
        noStroke();
        
        fill(25);
        ellipse(50, 50, 100, 100);
        
        fill(255, 255, 255, 30);
        ellipse(46, 46, 85, 85);
        ellipse(43, 43, 70, 70);
        
        return get(0, 0, 400, 400);
        
    },
    rubis : function () {
        
        background(0, 0, 0, 0);
        
        noStroke();
        
        fill(25);
        ellipse(50, 50, 100, 100);
        
        fill(255, 255, 255, 30);
        ellipse(46, 46, 85, 85);
        ellipse(43, 43, 70, 70);
        
        return get(0, 0, 400, 400);
        
    },
    emeraldonia : function () {
        
        background(0, 0, 0, 0);
        
        noStroke();
        
        //Planet
        fill(8, 158, 0);
        ellipse(50, 50, 100, 100);
        
        //Planet shading
        fill(255, 255, 255, 40);
        ellipse(46, 46, 85, 85);
        ellipse(43, 43, 70, 70);
        
        //Emeralds
        for (var i = 0; i < 16; i++) {
            for (var j = 0; j < 4; j++) {
                pushMatrix();
                    translate(10, 10);
                    rotate(random(-5, 4));
                    translate(-10, -10);
                    fill(0, random(150, 255), 0);
                    rect(i + 22, j + 46, 5, 5);
                popMatrix();
            }
        }
        
        //Sparkles
        for (var i = 0; i < 10; i++) {
            pushMatrix();
                translate(24, 46);
                rotate(20);
                fill(200, 255, 200);
                ellipse(0, 0, -i, -i + 6);
            popMatrix();
        }
        for (var i = 0; i < 10; i++) {
            pushMatrix();
                translate(35, 44);
                rotate(50);
                fill(200, 255, 200);
                ellipse(0, 0, -i, -i + 6);
            popMatrix();
        }
        for (var i = 0; i < 10; i++) {
            pushMatrix();
                translate(42, 47);
                rotate(4);
                fill(200, 255, 200);
                ellipse(0, 0, -i, -i + 6);
            popMatrix();
        }
        
        //Minecart container
        fill(75);
        quad(15, 50, 50, 50, 45, 63, 20, 63);
        
        //Minecart shading
        fill(0, 0, 0, 30);
        beginShape();
            vertex(50, 50);
            vertex(45, 63);
            vertex(25, 63);
            vertex(30, 58);
            vertex(40, 55);
        endShape();
        
        quad(50, 50, 45, 63, 32, 63, 44, 57);
        
        fill(255, 255, 255, 30);
        beginShape();
            vertex(15, 50);
            vertex(20, 63);
            vertex(20, 55);
            vertex(25, 50);
        endShape();
        
        //Minecart wheels
        fill(0);
        ellipse(25, 65, 9, 9);
        ellipse(40, 65, 9, 9);
        
        fill(50);
        ellipse(25, 65, 6, 6);
        ellipse(40, 65, 6, 6);
        
        //Minecart wheels shading
        fill(255, 255, 255, 30);
        ellipse(24.6, 64.6, 4.5, 4.5);
        ellipse(39.6, 64.6, 4.5, 4.5);
        
        //Mineshaft opening
        
        //Inner wall and floor
        fill(75);
        rect(57, 24, 17, 20);
        
        fill(50);
        triangle(57, 44, 74, 44, 87, 41);
        
        strokeWeight(0.3);
        stroke(0);
        noFill();
        beginShape();
            vertex(62, 29);
            vertex(65, 30);
            vertex(72, 27);
        endShape();
        
        beginShape();
            vertex(62, 36);
            vertex(64, 34);
            vertex(70, 32);
        endShape();
        
        beginShape();
            vertex(65, 39);
            vertex(68, 39);
            vertex(72, 36);
        endShape();
        
        noStroke();
        
        //Log wall
        fill(102, 79, 8);
        for (var i = 0; i < 5; i++) {
            rect(i * 4 + 73, 24, 4, 20);
            arc(i * 4 + 75, 44, 4, 3, 0, 180);
        }
        
        //Log 2
        rect(57, 24, 4, 20);
        arc(59, 44, 4, 3, 0, 180);
        
        //Log wall shading
        fill(0, 0, 0, 30);
        for (var i = 0; i < 5; i++) {
            rect(i * 4 + 75, 24, 2, 20);
            arc(i * 4 + 75, 44, 4, 3, 0, 90);
        }
        
        //Log 2 shading
        rect(59, 24, 2, 20);
        arc(59, 44, 4, 3, 0, 90);
        
        //Log wall top
        fill(186, 164, 98);
        for (var i = 0; i < 5; i++) {
            ellipse(i * 4 + 75, 24, 4, 2);
        }
        
        //Log 2 top
        ellipse(59, 24, 4, 2);
        
        //Log ceiling
        fill(102, 79, 8);
        for (var i = 0; i < 5; i++) {
            rect(i * 4 + 59, 23, 15, 4);
            arc(i * 4 + 59, 25, 3, 4, 90, 270);
        }
        
        //Log 3 shading
        fill(0, 0, 0, 50);
        rect(59, 25, 15, 2);
        arc(59, 25, 3, 4, 90, 180);
        
        //Log ceiling side
        fill(173, 147, 67);
        for (var i = 0; i < 5; i++) {
            ellipse(i * 4 + 74, 25, 4, 4);
        }
        
        return get(0, 0, 400, 400);
        
    },
    diamondonia : function () {
        
        background(0, 0, 0, 0);
        
        noStroke();
        
        fill(25);
        ellipse(50, 50, 100, 100);
        
        fill(255, 255, 255, 30);
        ellipse(46, 46, 85, 85);
        ellipse(43, 43, 70, 70);
        
        return get(0, 0, 400, 400);
        
    },
};

//}

/** Image loading **/
// {

var curLoad = 0;
var loaded = false;
var load = function () {
    var obj = Object.keys(images);
    
    images[obj[curLoad]] = images[obj[curLoad]]();
    
    curLoad++;
    
    if (curLoad >= Object.keys(images).length) {
        loaded = true;
    }
    
};

//}

/** MOR (mouse over rectangle) function **/
// {
    
var MOR = function (x, y, w, h) {
    return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
};

//}

/** Scene transition **/
// {
    
var sceneChange = (function () {
    
    sceneChange = {
        x : -width,
        vel : 0,
        active : false,
        nextScene : "menu"
    };
    
    sceneChange.display = function () {
        pushMatrix();
            translate(this.x, 0);
            image(images.transition, 0, 0);
        popMatrix();
    };
    
    sceneChange.pack = function () {
        if (this.active) {
            this.vel += 0.25;
            this.x += this.vel;
            if (this.x > 0) {
                scene = this.nextScene;
            }
            if (this.x > 450) {
                this.vel = 0;
                this.active = false;
                this.x = -width;
            }
            this.display();
        }
    };
    
    sceneChange.reset = function (sceneTo) {
        this.active = true;
        this.nextScene = sceneTo;
    };
    
    return sceneChange;
    
}) ();

//}

/** Galaxy constructor **/
// {
    
var Galaxy = function (x, y) {
    this.x = x;
    this.y = y;
    this.particles = [];
};
Galaxy.prototype.draw = function () {
    if (this.particles.length < 120) {
        this.particles.push({
            x: this.x,
            y: this.y,
            w: 5,
            h: 5,
            angle: random(360),
        });
    }
    
    for (var i = 0; i < this.particles.length; i++) {
        var p = this.particles[i];
        
        fill(255);
        stroke(0);
        strokeWeight(1);
        ellipse(p.x, p.y, p.w, p.h);
        
        p.angle += 3;
        
        p.x += sin(p.angle) * p.w;
        p.y -= cos(p.angle);
    }
};
var galaxy = new Galaxy(200, 200);

//}

/** On-world functions **/
// {
    
var Lantern = function (x, y, w, h) {
    for (var i = 0 ; i < 10; i++) {
        noStroke();
        fill(255, 253, 107, -i * 25 + 255);
        ellipse(x, y + h * 2/3, i * w/2, i * w/2);
    }
    fill(255, 238, 0);
    stroke(0);
    strokeWeight((w + h)/15);
    quad(x, y, x - w/2, y + h/2, x - w/2, y + h, x, y + h);
    quad(x, y, x + w/2, y + h/2, x + w/2, y + h, x, y + h);
    for (var i = 0; i < 3; i++) {
        noFill();
        strokeWeight(1);
        ellipse(x, -i * h/4 + y, w * 2/5, h * 2/5);
    }
};

var Castle = function (y, color) {
    this.y = y;
    this.color = color;
};
Castle.prototype.draw = function (r) {
    rectMode(CORNER);
    noStroke();
    fill(0, 217, 4);
    arc(200, this.y, 450, 150, 180, 360);
    strokeWeight(5);
    stroke(227, 227, 227);
    line(112.5, this.y - 215, 112.5, this.y - 143);
    line(212.5, this.y - 215, 212.5, this.y - 143);
    noStroke();
    fill(227, 227, 227);
    rect(100, this.y - 165, 25, 100, r);
    rect(100, this.y - 140, 125, 75, r);
    rect(200, this.y - 165, 25, 100, r);
    rect(143, this.y - 190, 40, 60, r);
    strokeWeight(1);
    triangle(125, this.y - 185, 200, this.y - 185, 159.4, this.y - 240);
    strokeWeight(10);
    stroke(130, 130, 130);
    line(195, this.y - 189, 159.7, this.y - 234);
    noStroke();
    fill(130, 130, 130);
    rect(214, this.y - 165, 12, 100, r);
    rect(113, this.y - 165, 12, 100, r);
    rect(168, this.y - 185, 15, 45, r);
    strokeWeight(2);
    stroke(130, 130, 130);
    line(114.5, this.y - 215, 114.5, this.y - 166);
    line(214.5, this.y - 215, 214.5, this.y - 166);
    
    noStroke();
    beginShape();
        fill(this.color);
        vertex(114.5, this.y - 215);
        bezierVertex(106, this.y - 218, 98, this.y - 217, 90, this.y - 221);
        bezierVertex(85, this.y - 217, 79, this.y - 218, 72, this.y - 220);
        bezierVertex(78, this.y - 223, 85, this.y - 223, 76, this.y - 228);
        bezierVertex(79, this.y - 239, 94, this.y - 225, 114.5, this.y - 230);
    endShape(CLOSE);
    beginShape();
        fill(this.color);
        vertex(214.5, this.y - 215);
        bezierVertex(206, this.y - 218, 198, this.y - 217, 190, this.y - 221);
        bezierVertex(185, this.y - 217, 179, this.y - 218, 172, this.y - 220);
        bezierVertex(178, this.y - 223, 185, this.y - 223, 176, this.y - 228);
        bezierVertex(179, this.y - 239, 194, this.y - 225, 214.5, this.y - 230);
    endShape();
    fill(115, 85, 4);
    rect(0, this.y, width, 3050);
    if (keys[DOWN] && this.y >= -2640) {
        this.y -= 10;
    }
    if (keys[UP] && this.y <= 300) {
        this.y += 10;
    }
};
var castles = [
    new Castle(300, color(0)),
    new Castle(300, color(255, 230, 0)),
    new Castle(300, color(255, 0, 0)),
    new Castle(300, color(3, 207, 0)),
    new Castle(300, color(0, 174, 232))
];

//}

/** Collision and camera **/
// {
    
var collide = function (obj1, obj2) {
    return obj1.x < obj2.x + obj2.w && obj1.x + obj1.w > obj2.x && obj1.y < obj2.y + obj2.h && obj1.y + obj1.h > obj2.y;
};

var Camera = function (x, y, w, h, viewX, viewY, levelWidth, levelHeight, speed){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.viewX = viewX;
    this.viewY = viewY;
    this.levelWidth = levelWidth;
    this.levelHeight = levelHeight;
    
    this.speed = this.speed || speed;
};
Camera.prototype.follow = function (ent) {
    var x = -ent.x + this.x + (this.w/2) - (ent.w/2);
    var y = -ent.y + this.y + (this.h/2) - (ent.h/2);
    var a = atan2(y - this.viewY, x - this.viewX);
    var v = dist(x, y, this.viewX, this.viewY)/this.speed;
    
    this.viewX += v * cos(a);
    this.viewY += v * sin(a);

    var width  = this.x + this.w - this.levelWidth;
    var height = this.y + this.h - this.levelHeight;
    
    this.viewX = min(this.viewX, this.x);
    this.viewX = max(this.viewX, width);
    this.viewY = min(this.viewY, this.y);
    this.viewY = max(this.viewY, height);
};
Camera.prototype.view = function (ent) {
    var viewX = -this.viewX + this.x,
        viewY = -this.viewY + this.y,
        viewW = ent.w - this.w,
        viewH = ent.w - this.h;

    if (ent.x > viewX - ent.w &&
        ent.x < viewX - viewW + ent.w && 
        ent.y > viewY - ent.h &&
        ent.y < viewY - viewH + ent.h)
    {
        var camView = {
            x: (this.viewX + ent.x),
            y: (this.viewY + ent.y),
            w: ent.w,
            h: ent.h,
            cam: this
        };
        
        return camView;
    }
};

//}

/** Player **/
// {

var Player = function (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.velx = 0;
    this.vely = 0;
    this.maxSpeed = 3;
    
    this.falling = false;
    this.gravity = 0.25;
    
    this.health = 100;
    this.fall = 0;
    this.dead = false;
    this.deathCounter = 0;
    this.particles = [];
};
Player.prototype.update = function (blocks) {
    if (!this.dead) {
        if (keys[UP] && !this.falling) {
            this.falling = true;
            this.vely = -6;
        }
        if (keys[LEFT]) {
            this.velx -= 1;
        }
        if (keys[RIGHT]) {
            this.velx += 1;
        }
        if (!keys[RIGHT] && !keys[LEFT]) {
            if (this.velx > 0) {
                this.velx -= 1;
            }
            if (this.velx < 0) {
                this.velx += 1;
            }
        }
        if (this.velx > this.maxSpeed) {
            this.velx = this.maxSpeed;
        }
        if (this.velx < -this.maxSpeed) {
            this.velx = -this.maxSpeed;
        }
        
        if (this.vely > 9) {
            this.fall++;
        }
        if (this.vely < 1) {
            this.health -= round(this.fall/5);
            this.fall = 0;
        }
    
        this.x += this.velx;
        this.applyCollision(blocks, this.velx, 0);
        
        this.falling = true;
        this.y += this.vely;
        this.applyCollision(blocks, 0, this.vely);
        this.vely += this.gravity;
    }
    
    if (this.health <= 0) {
        this.dead = true;
    }
};
Player.prototype.applyCollision = function (obj, velx, vely) {
    for (var i = 0; i < obj.length; i++) {
        if (collide(this, obj[i])) {
            if (vely > 0){
                this.vely = 0;
                this.falling = false;
                this.y = obj[i].y - this.h;
            }
            if (vely < 0){
                this.vely = 0;
                this.falling = true;
                this.y = obj[i].y + obj[i].h;
            }
            if (velx < 0){
                this.velx = 0;
                this.x = obj[i].x + obj[i].w;
            }
            if (velx > 0){
                this.velx = 0;
                this.x = obj[i].x - this.w;
            }
        }
    }
};
Player.prototype.draw = function (cam) {
    var view = cam.view(this);
    if (view && !this.dead) {
        for (var i = 0; i < 10; i++) {
            fill(0, 200, 255, -i * 25 + 255);
            ellipse(view.x + view.w/2, view.y + view.h/2, i * 10, i * 10);
        }
        fill(0);
        strokeWeight(2);
        stroke(0, 142, 181);
        rect(view.x, view.y, view.w, view.h);
        this.particles.length = 0;
    } else if (view && this.dead) {
        if (this.particles.length < 20) {
            this.particles.push({
                x: this.x + this.w/2,
                y: this.y + this.h/2,
                w: this.w/10,
                h: this.h/10,
                velx: random(-2, 2),
                vely: -3,
                gravity: 0.4
            });
        }
        
        for (var i = 0; i < this.particles.length; i++) {
            var p = this.particles[i];
            fill(255, 255, 255);
            noStroke();
            rect(p.x, p.y, p.w, p.h);
            
            p.x += p.velx;
            p.y += p.vely;
            p.vely += p.gravity;
        }
    }
};

var players = [];
players.add = function (x, y, w, h) {
    this.push(new Player(x, y, w, h));
};
players.apply = function (blocks, cam) {
    for (var i = 0; i < this.length; i++) {
        this[i].update(blocks);
        this[i].draw(cam);
    }
};

//}

/** Blocks **/
// {

var block = function (x, y, w, h, type) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.type = type;
};
block.prototype.draw = function (cam) {
    var view = cam.view(this);
    noStroke();
    if (view) {
        switch (this.type) {
            case "norm":
                fill(60, 60, 60);
                rect(view.x, view.y, view.w, view.h);
            break;
            case "diamond_ore":
                noStroke();
                fill(60, 60, 60);
                rect(view.x, view.y, view.w, view.h);
                fill(0, 191, 255);
                rect(view.x + 3, view.y + 3, 3, 3);
                rect(view.x + 17, view.y + 8, 3, 3);
                rect(view.x + 6, view.y + 13, 3, 3);
                fill(4, 147, 191);
                rect(view.x + 6, view.y + 3, 3, 3);
                rect(view.x, view.y + 8, 3, 3);
                rect(view.x + 9, view.y + 13, 3, 3);
            break;
            case "diamond":
                for (var i = 0 ; i < 3; i++) {
                    fill(0, -i * 30 + 190, -i * 50 + 255);
                    rect(i * 2.5 + view.x, i * 2.5 + view.y, -i * 5 + 20, -i * 5 + 20);
                }
            break;
        }
    }
};

var blocks = [];
blocks.add = function (x, y, w, h, type) {
    this.push(new block(x, y, w, h, type));
};
blocks.apply = function (cam) {
    for (var i = 0; i < this.length; i++) {
        this[i].draw(cam);
    }
};

//}

/** Trampoline **/
// {

var trampoline = function (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
};
trampoline.prototype.update = function (players) {
    for (var i = 0; i < players.length; i++) {
        if (collide(this, players[i]) && players[i].y < this.y) {
            players[i].vely = -9;
        }
    }
};
trampoline.prototype.draw = function (cam) {
    var view = cam.view(this);
    noStroke();
    if (view) {
        fill(60, 60, 60);
        rect(view.x, view.y, view.w, view.h);
        fill(0, 142, 189);
        rect(view.x, view.y, view.w, view.h/5);
        triangle(view.x + view.w/4, view.y + view.h/2, view.x + view.w/2, view.y + view.h/3, view.x + view.w * 3/4, view.y + view.h/2);
        rect(view.x + view.w/3, view.y + view.h/2, view.w * 2/7, view.h/4);
    }
};

var trampolines = [];
trampolines.add = function (x, y, w, h) {
    this.push(new trampoline(x, y, w, h));
};
trampolines.apply = function (players, cam) {
    for (var i = 0; i < this.length; i++) {
        this[i].update(players);
        this[i].draw(cam);
    }
};

//}

/** Spike **/
// {

var spike = function (x, y, w, h, direction) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.direction = direction;
};
spike.prototype.update = function (players) {
    for (var i = 0; i < players.length; i++) {
        if (collide(this, players[i]) && !players[i].dead) {
            screenColor = [255, 0, 0];
            transparency = 100;
            players[i].vely = -6;
            players[i].health -= 5;
        }
    }
};
spike.prototype.draw = function (cam) {
    var view = cam.view(this);
    if (view) {
        fill(0, 221, 255);
        triangle(view.x, view.y + view.h * 2/3, view.x + view.w * 2/7, view.y + view.h * 3/4, view.x + view.w/2, view.y);
        fill(0, 117, 201);
        triangle(view.x + view.w * 2/7, view.y + view.h * 3/4, view.x + view.w * 5/7, view.y + view.h * 3/4, view.x + view.w/2, view.y);
        fill(0, 74, 120);
        triangle(view.x + view.w * 5/7, view.y + view.h * 3/4, view.x + view.w, view.y + view.h * 2/3, view.x + view.w/2, view.y);
        fill(0, 117, 201);
        quad(view.x, view.y + view.h * 2/3, view.x + view.w/7, view.y + view.h * 6/7, view.x + view.w * 2/7, view.y + view.h, view.x + view.w * 2/7, view.y + view.h * 3/4);
        fill(0);
        quad(view.x + view.w, view.y + view.h * 2/3, view.x + view.w * 6/7, view.y + view.h * 6/7, view.x + view.w * 5/7, view.y + view.h, view.x + view.w * 5/7, view.y + view.h * 3/4);
        fill(0, 74, 120);
        quad(view.x + view.w * 2/7, view.y + view.h * 3/4, view.x + view.w * 2/7, view.y + view.h, view.x + view.w * 5/7, view.y + view.h, view.x + view.w * 5/7, view.y + view.h * 3/4);
    }
};

var spikes = [];
spikes.add = function (x, y, w, h, direction) {
    this.push(new spike(x, y, w, h, direction));
};
spikes.apply = function (players, cam) {
    for (var i = 0; i < this.length; i++) {
        this[i].update(players);
        this[i].draw(cam);
    }
};

//}

/** Portal **/
// {

var portal = function (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.complete = false;
};
portal.prototype.update = function (players) {
    for (var i = 0; i < players.length; i++) {
        if (collide(this, players[i]) && !this.complete) {
            screenColor = [0, 0, 0];
            transparency += 5;
        }
        if (transparency > 0 && !collide(this, players[i]) && !this.complete) {
            transparency -= 5;
        }
        if (transparency > 255) {
            this.complete = true;
        }
    }
};
portal.prototype.draw = function (cam) {
    var view = cam.view(this);
    noStroke();
    if (view) {
        fill(207, 243, 255, 230);
        rect(view.x, view.y, view.w, view.h);
    }
};

var portals = [];
portals.add = function (x, y, w, h) {
    this.push(new portal(x, y, w, h));
};
portals.apply = function (players, cam) {
    for (var i = 0; i < this.length; i++) {
        this[i].update(players);
        this[i].draw(cam);
    }
};

//}

/** End-of-level object-removal function (and objects array) **/
// {
    
var objects = [players, blocks, trampolines, spikes, portals];
objects.remove = function () {
    for (var i = 0; i < objects.length; i++){
        for (var j = 0; j < objects[i].length; j++){
            objects[i].splice(j, objects[i].length);
        }
    }
};

//}

/** Game constructor **/
// {
    
var Game = function () {
    this.levels = [
        [
            "",
            "",
            "                                      d",
            "                                      d",
            "                                      !",
            "                        oooooodbbddbodd",
            "",
            "",
            "               bbddbd",
            "",
            "       dbdttb",
            "",
            "",
            "dbbdd",
            "",
            "",
            "",
            "",
            "     tddd",
            "",
            "",
            "        dddd",
            "               ss                       ",
            "             ddddd         ssss       ",
            "                       doobbddbd       ",
            "                                       ",
            "1       b          bbbb                ",
            "bbbbbbbbbbbbddddbbbbbbbbbbbbtttbbbbbbbb"
        ]
    ];
    this.messages = [
        "Wow! Lots of things\nglow down here!",
        "Liquid diamonds are\nextremely hot!"
    ];
    this.level = 0;
    this.levelSize = [0, 0];
    this.cam = new Camera(0, 0, width, height, 0, 0, this.levelSize[0], this.levelSize[1], 8);
};
Game.prototype.loadMap = function () {
    for (var col = 0; col < this.levels[this.level].length; col++) {
        for (var row = 0; row < this.levels[this.level][col].length; row++) {
            var s = this.levels[this.level][col][row];
            if (s === "1") {
                players.add(row * 20, col * 20, 20, 20);
            }
            if (s === "b") {
                blocks.add(row * 20, col * 20, 20, 20, "norm");
            }
            if (s === "o") {
                blocks.add(row * 20, col * 20, 20, 20, "diamond_ore");
            }
            if (s === "d") {
                blocks.add(row * 20, col * 20, 20, 20, "diamond");
            }
            if (s === "t") {
                trampolines.add(row * 20, col * 20, 20, 20);
            }
            if (s === "s") {
                spikes.add(row * 20, col * 20, 20, 20);
            }
            if (s === "!") {
                portals.add(row * 20, col * 20, 20, 20);
            }
            
            this.levelSize[0] = this.levels[this.level][col].length * 20;
            this.levelSize[1] = this.levels[this.level].length * 20;
        }
    }
};
var g;
var t = 255;
Game.prototype.apply = function () {
    background(23, 13, 0);
    
    this.cam.levelWidth = this.levelSize[0];
    this.cam.levelHeight = this.levelSize[1];
    
    var self = this;
    g = self;
    
    this.cam.follow(players[0]);
    blocks.apply(this.cam);
    players.apply(blocks, this.cam);
    trampolines.apply(players, this.cam);
    spikes.apply(players, this.cam);
    portals.apply(players, this.cam);
    
    for (var i = 0; i < portals.length; i++) {
        if (portals[i].complete && this.level !== this.levels.length - 1) {
            objects.remove();
            self.level++;
            self.loadMap();
            t = 255;
        }
        if (portals[i].complete && this.level === this.levels.length - 1) {
            objects.remove();
            scene = "diamond_mine";
            this.level = 0;
        }
    }
    
    for (var i = 0; i < players.length; i++) {
        if (players[i].x < 0){
            players[i].x = 0;
        }
        if (players[i].x + players[i].w > this.levelSize[0]){
            players[i].x = this.levelSize[0] - players[i].w;
        }
        if (players[i].y > this.levelSize[1] || keys[82]){
            players[i].dead = true;
        }
        
        if (players[i].dead){
            players[i].deathCounter++;
            if (players[i].deathCounter > 100){
                objects.remove();
                self.loadMap();
                this.deathCounter = 0;
                this.dead = false;
                this.health = 100;
            }
        }
        
        fill(150, 150, 150, 100);
        rect(0, 0, 90, 73);
        textSize(15);
        fill(255, 255, 255);
        text("X: " + round(players[i].x), 25, 35);
        text("Y: " + round(players[i].y), 25, 55);
        
        textSize(20);
        fill(255, 255, 255);
        text("Health: " + players[i].health, 45, 15);
    }
    t--;
    for (var i = 0; i < this.levels.length; i++) {
        if (this.level === i) {
            textSize(25);
            fill(255, 255, 255, t);
            text(this.messages[i], 200, 50);
        }
    }
    
    fill(screenColor[0], screenColor[1], screenColor[2], transparency);
    rect(0, 0, width, height);
};
var game = new Game();

//}

/** Button constructors **/
// {

var Button = function (x, y, w, h, txt, func) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.txt = txt;
    this.func = func;
    this.mouseOver = false;
    this.off = 0;
    
    this.draw = function () {
        this.mouseOver = MOR(this.x, this.y, this.w, this.h);
        
        this.off = lerp(this.off, this.mouseOver ? this.h / 10 : 0, 0.2);
        
        if (this.mouseOver && clicked) {
            this.func();
        }
        
        rectMode(CORNER);
        
        noStroke();
        fill(125, 125, 125);
        rect(this.x, this.y + this.h / 10, this.w, this.h, this.w / 8);
        
        fill(200, 200, 200);
        rect(this.x, this.y + this.off, this.w, this.h, this.w / 8);
        
        fill(0);
        textAlign(CENTER, CENTER);
        textSize((this.w * this.h) / 200);
        text(this.txt, this.x + this.w / 2, this.y + this.h / 2 + this.off);
    };
};
var logoSkip = new Button(280, 340, 100, 50, "SKIP", function () {
    sceneChange.reset("intro");
});
var introSkip = new Button(280, 340, 100, 50, "SKIP", function () {
    sceneChange.reset("menu");
});
var play = new Button(150, 280, 100, 50, "PLAY", function () {
    sceneChange.reset("world_map");
});
var prev = new Button(10, 200, 75, 75, "PREV.", function () {
    boxDirec = -1;
    moving = true;
});
var next = new Button(315, 200, 75, 75, "NEXT", function () {
    boxDirec = 1;
    moving = true;
});
var dstoplatformer = new Button(280, 340, 100, 50, "SKIP", function () {
    sceneChange.reset("game");
    game.loadMap();
});

var shaftButton = function (x, y, w, h, txt, txtSize) {
    noStroke();
    rectMode(CENTER);
    fill(0, 140, 255);
    pushMatrix();
    translate(x, y);
    if (mouseX > x - w/2 && mouseX < x + w/2 && mouseY > y - h/2 && mouseY < y + h/2) {
        scale(1.2);
        if (clicked) {
            return true;
        }
    }
    translate(-x, -y);
    rect(x, y, w, h, 15);
    fill(0, 200, 255);
    triangle(x - w * 2/5, y - h * 2/5, x - w/4, y - h * 2/5, x - w * 2/5, y - h/10);
    fill(0, 106, 255);
    triangle(x + w * 2/5, y + h * 2/5, x + w/4, y + h * 2/5, x + w * 2/5, y + h/10);
    fill(255, 255, 255);
    textAlign(CENTER, CENTER);
    textSize(txtSize);
    text(txt, x, y);
    popMatrix();
};

var worldData = [
    {
        name : "Coald",
        has : false,
        price : 1000000,
        render : "coald",
    },
    {
        name : "Golx",
        has : false,
        price : 2000000,
        render : "golx"
    },
    {
        name : "Rubis",
        has : false,
        price : 5000000,
        render : "rubis"
    },
    {
        name : "Emeraldonia",
        has : false,
        price : 10000000,
        render : "emeraldonia"
    },
    {
        name : "Diamondonia",
        has : false,
        price : 20000000,
        render : "diamondonia"
    },
];

var WorldSelectButton = function (x, y, w, h, i) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.off = 0;
    this.i = i;
    this.world = worldData[i];
    this.clr = color(0, 200, 0);
    this.s = 1;
    this.txt = this.world.price;
    this.mouseOver = null;

    this.draw = function () {
        this.mouseOver = MOR(this.x, this.y, this.w, this.h);
        
        this.off = lerp(this.off, this.mouseOver ? this.h / 10 : 0, 0.2);
        
        if (!this.world.has && tm < this.world.price) {
            this.clr = color(200, 0, 0);
            this.txt = "$" + this.world.price;
        }
        if (this.world.has === true || !this.world.has && tm >= this.world.price) {
            if (this.world.has === true) {
                this.txt = "Travel";
                if (clicked && this.mouseOver) {
                    if (this.i !== 4) {
                        sceneChange.reset(this.world.render);
                    }
                    else {
                        sceneChange.reset("diamond_story");
                    }
                }
            } 
            else {
                this.txt = "$" + this.world.price;
                if (clicked && this.mouseOver) {
                    tm -= this.world.price;
                    this.world.has = true;
                }
            }
            this.clr = color(0, 200, 0);
        }
        if (scene === this.world.render) {
            this.clr = color(150);
            this.txt = "Traveled";
        }
        
        rectMode(CORNER);
        
        noStroke();
        
        fill(lerpColor(this.clr, 0, 0.4));
        rect(this.x, this.y + this.h / 10, this.w, this.h, this.w / 8);
        
        fill(this.clr);
        rect(this.x, this.y + this.off, this.w, this.h, this.w / 8);
        
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(20);
        text(this.txt, this.x + this.w / 2, this.y + this.h / 2 + this.off);
    };
};

var worlds = [
    new WorldSelectButton(150, 300, 100, 50, 0),
    new WorldSelectButton(150, 300, 100, 50, 1),
    new WorldSelectButton(150, 300, 100, 50, 2),
    new WorldSelectButton(150, 300, 100, 50, 3),
    new WorldSelectButton(150, 300, 100, 50, 4)
];

//}

/** World boxes **/
// {

var Box = function (x, y, w, h, i) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.s = 1;
    this.i = i;
    this.world = worlds[i];
};
Box.prototype.draw = function () {
    this.s = cos(map(this.x, 0, 400, -45, 45));
    
    this.world.x = this.x - 50;
    
    rectMode(CENTER);
    pushMatrix();
        translate(this.x, this.y);
        scale(this.s);
        translate(-this.x, -this.y);
        
        strokeWeight(5);
        stroke(255);
        noFill();
        rect(this.x, this.y, this.w, this.h);
        
        textAlign(CENTER, CENTER);
        textSize(40);
        fill(90);
        text(worldData[this.i].name, this.x - 3, this.y - 97);
        fill(255);
        text(worldData[this.i].name, this.x, this.y - 100);
        
        image(images[worldData[this.i].render], this.x - 50, this.y - 50);
        
        this.world.draw();
    popMatrix();
};

//}

/** Scenes **/
// {

var loadN = 0;
var loadT = 0;
var loaded2 = false;
var Load = function () {
    if (!loaded) {
        load();
    }
    
    background(0);
    
    noStroke();
    
    textAlign(CENTER, CENTER);
    textSize(50);
    fill(161, 161, 161);
    text("Loading", 185, 155);
    
    fill(255, 255, 255);
    text("Loading", 190, 150);
    
    for (var i = 0; i < ceil(loadN); i++) {
        fill(161, 161, 161);
        text(".", i * 11 + 274, 153);
        fill(255, 255, 255);
        text(".", i * 11 + 277, 150);
    }
    
    loadN += 0.05;
    if (loadN > 3) {
        loadN = 0.3;
    }
    
    fill(138, 138, 138);
    rect(95, 295, 210, 35, 15);
    
    fill(255, 255, 255);
    rect(100, 300, loadT, 25, 10);
    
    fill(212, 212, 212);
    rect(102, 315, loadT - 4, 10, 28);
    
    if (loadT < 200) {
        loadT += 0.5;
    }
    if (loadT > 199) {
        sceneChange.reset("logo");
    }
};

var Logo = function () {
    this.x = 0;
    this.y = 200;
    this.r = 0;
    this.vel = 10;
    this.accel = 0.25;
    this.particles = [];
    this.frame = 0;
    
    this.arrowX = 400;
    this.arrowY = 400;
    
    this.txt = "JSS";
    this.txtSize = [45, 60, 45];
    this.xpos = [375, 400, 425];
    this.txtOpac = 255;
};
Logo.prototype.draw = function () {
    background(0);
    image(images.arrow, this.arrowX, this.arrowY);
    pushMatrix();
        translate(this.x, this.y);
        rotate(this.r);
        if (this.arrowX > 150 && this.arrowY > 150) {
            image(images.illusion, -60, -100);
        }
    popMatrix();
    
    if (this.particles.length < 30 && this.arrowX < 130 && this.arrowY < 130) {
        this.particles.push({
            x: this.x,
            y: this.y,
            w: random(5, 10),
            h: random(5, 10),
            velx: round(random(-3, 3)),
            vely: round(random(-3, 3))
        });
    }
    for (var i = 0; i < this.particles.length; i++) {
        var t = this.particles[i];
        
        if (t.velx !== 0 || t.vely !== 0) {
            fill(150, 150, 150);
            triangle(t.x, t.y, t.x + t.w, t.y, t.x + t.w/2, t.y - t.h);
        }
        
        t.x += t.velx;
        t.y += t.vely;
    }
    
    fill(sin(frameCount) * 120 + 120, sin(frameCount) * 120 + 120, sin(frameCount) * 120 + 120, this.txtOpac);
    if (this.frame > 200) {
        this.txtOpac--;
    }
    for (var i = 0; i < this.txt.length; i++) {
        textAlign(CENTER, CENTER);
        textSize(this.txtSize[i]);
        text(this.txt[i], this.xpos[i], 200);
        this.xpos[i] -= this.vel;
    }
    
    if (this.txtOpac < 0) {
        this.txtOpac = 0;
        this.arrowX -= 20;
        this.arrowY -= 20;
    }
    
    if (this.arrowX < 150 && this.arrowY < 150 && this.arrowX > 110 && this.arrowY > 110) {
        noStroke();
        fill(255, 255, 255);
        rect(0, 0, width, height);
    }
    
    this.x += this.vel;
    this.r += this.vel * 1.8;
    this.vel -= this.accel;
    if (this.vel < 0) {
        this.vel = 0;
    }
    this.frame++;
    if (this.frame > 800) {
        sceneChange.reset("intro");
    }
};
var logo = new Logo();

var intro = (function () {
    intro = {};
    intro.messages = [
        "Controling the\ngalaxy Jemrich\nis no easy task...",
        "Luckily, the\ninhabitants of\nEmeraldonia were\neasily won over",
        "However...",
        "The other planet's\nrulers would not\nbe so quickly\npersuaded",
        "Welcome to...",
        "Mining Empire"
    ];
    intro.scene = 0;
    intro.timer = 0;
    intro.fade = {
        opacity: 255, 
        mode: "out"
    };
    
    intro.nextScene = function () {
        this.timer = 0;
        this.fade.mode = "in";
    };
    
    intro.pack = function () {
        background(0);
        noStroke();
        textAlign(CENTER, CENTER);
        this.timer++;
        if (this.scene === 0) {
            fill(255, 255, 255);
            textSize(50);
            text(this.messages[0], 200, 200);
            if (this.timer > 300) {
                this.nextScene();
            }
        } 
        else if (this.scene === 1) {
            fill(255, 255, 255);
            textSize(50);
            text(this.messages[1], 200, 200);
            if (this.timer > 400) {
                this.nextScene();
            }
        } 
        else if (this.scene === 2) {
            fill(255, 255, 255);
            textSize(50);
            text(this.messages[2], 200, 200);
            if (this.timer > 200) {
                this.nextScene();
            }
        } 
        else if (this.scene === 3) {
            fill(255, 255, 255);
            textSize(50);
            text(this.messages[3], 200, 200);
            if (this.timer > 400) {
                this.nextScene();
            }
        } 
        else if (this.scene === 4) {
            fill(255, 255, 255);
            textSize(50);
            text(this.messages[4], 200, 200);
            if (this.timer > 200) {
                this.nextScene();
            }
        } 
        else if (this.scene === 5) {
            fill(255, 255, 255);
            textSize(50);
            text(this.messages[5], 200, 200);
            if (this.timer > 200) {
                sceneChange.reset("menu");
            }
        }
        introSkip.draw();
        fill(0, 0, 0, this.fade.opacity);
        rect(0, 0, width, height);
        if (this.fade.mode === "out") {
            if (this.fade.opacity > 0) {
                this.fade.opacity -= 5;
            }
        } 
        else {
            this.fade.opacity += 5;
            if (this.fade.opacity > 255) {
                this.scene ++;
                this.fade.mode = "out";
            }
        }
    };
    
    return intro;
}) ();
var introScene = function () {
    intro.pack();
};

var Menu = function () {
    background(0);
    
    galaxy.draw();
    
    pushMatrix();
        rotate(-20);
        translate(-39, -3);
        textAlign(CENTER, CENTER);
        textSize(70);
        fill(89, 89, 89);
        text("Mining\nEmpire", 180, 205);
        fill(255, 255, 255);
        text("Mining\nEmpire", 185, 200);
    popMatrix();
    
    play.draw();
};

var World_Map = function () {
    background(0);
    textAlign(CENTER, CENTER);
    galaxy.draw();
    pushMatrix();
        rotate(-20);
        translate(-39, -3);
        textSize(70);
        fill(89, 89, 89, 50);
        text("Mining\nEmpire", 180, 205);
        fill(255, 255, 255, 50);
        text("Mining\nEmpire", 185, 200);
    popMatrix();
    
    var boxes = [];
    for (var i = 0; i < 5; i++) {
        boxes.push(new Box(i * 200 + boxesX * 200 + 200, 200, 150, 150, i)); 
    }
    
    for (var i in boxes) {
        boxes[i].draw();
    }
    
    if (moving) {
        if (boxDirec === -1) {
            boxesX = lerp(boxesX, nextX, 0.1);
        }
        if (boxDirec === 1) {
            boxesX = lerp(boxesX, prevX, 0.1);
        }
    }
    
    if (boxesX > nextX - 0.01 && boxesX < nextX + 0.01 || boxesX > prevX - 0.01 && boxesX < prevX + 0.01) {
        moving = false;
        if (boxDirec === -1) {
            nextX++;
            prevX++;
        }
        if (boxDirec === 1) {
            nextX--;
            prevX--;
        }
    }
    
    if (nextX !== 1) {
        prev.draw();
    }
    if (prevX !== -5) {
        next.draw();
    }
};

var Coald = function () {
    background(255);
};

var Golx = function () {
    background(255);
};

var Rubis = function () {
    background(255);
};

var Emeraldonia = function () {
    background(255);
};

var Diamondonia = function () {
    background(255);
};

var diamondStory = (function () {
    diamondStory = {};
    diamondStory.messages = [
        "Although you\ngave the king\n$500,000...",
        "He was too\ngreedy and did\nnot want his\ndiamonds taken\nfrom him",
        "So as you descend\nunderground and\ninto the mine...",
        "The king orders\nhis soldiers to\nsend a rockslide\ndown on the\nmine entrance",
        "You are\ntrapped",
        "But at least\nyou have light!"
    ];
    diamondStory.scene = 0;
    diamondStory.timer = 0;
    diamondStory.fade = {
        opacity: 255,
        mode: "out"
    };
    
    diamondStory.nextScene = function () {
        this.timer = 0;
        this.fade.mode = "in";
    };
    
    diamondStory.pack = function () {
        background(0);
        noStroke();
        textAlign(CENTER, CENTER);
        this.timer++;
        if (this.scene === 0) {
            fill(255, 255, 255);
            textSize(50);
            text(this.messages[0], 200, 200);
            if (this.timer > 300) {
                this.nextScene();
            }
        } 
        else if (this.scene === 1) {
            fill(255, 255, 255);
            textSize(40);
            text(this.messages[1], 200, 200);
            if (this.timer > 400) {
                this.nextScene();
            }
        } 
        else if (this.scene === 2) {
            fill(255, 255, 255);
            textSize(40);
            text(this.messages[2], 200, 200);
            if (this.timer > 300) {
                this.nextScene();
            }
        } 
        else if (this.scene === 3) {
            fill(255, 255, 255);
            textSize(40);
            text(this.messages[3], 200, 200);
            if (this.timer > 400) {
                this.nextScene();
            }
        }
        else if (this.scene === 4) {
            fill(255, 255, 255);
            textSize(50);
            text(this.messages[4], 200, 200);
            if (this.timer > 200) {
                this.nextScene();
            }
        }
        else if (this.scene === this.messages.length - 1) {
            fill(255, 255, 255);
            textSize(50);
            text(this.messages[this.messages.length - 1], 200, 200);
            if (this.timer > 200) {
                sceneChange.reset("game");
                game.loadMap();
            }
        }
        dstoplatformer.draw();
        fill(0, 0, 0, this.fade.opacity);
        rect(0, 0, width, height);
        if (this.fade.mode === "out") {
            if (this.fade.opacity > 0) {
                this.fade.opacity -= 5;
            }
        } else {
            this.fade.opacity += 5;
            if (this.fade.opacity > 255) {
                this.scene ++;
                this.fade.mode = "out";
            }
        }
    };
    
    return diamondStory;
}) ();
var dsScene = function () {
    diamondStory.pack();
};

//}

/** Draw and mouseClicked functions **/
// {
    
draw = function () {
    switch (scene) {
        case "load" :
            Load();
        break;
        case "logo" :
            logo.draw();
            logoSkip.draw();
        break;
        case "intro" :
            introScene();
        break;
        case "menu" :
            Menu();
        break;
        case "world_map" :
            World_Map();
        break;
        case "diamond_story" :
            dsScene();
        break;
        case "game" :
            game.apply();
        break;
        case "coald" : 
            Coald();
        break;
        case "golx" : 
            Golx();
        break;
        case "Rubis" : 
            Rubis();
        break;
        case "emeraldonia" : 
            Emeraldonia();
        break;
        case "diamondonia" : 
            Diamondonia();
        break;
    }
    
    fill(255);
    textAlign(BASELINE);
    textSize(15);
    text("FPS: " + ~~this.__frameRate, 15, 390);
    
    clicked = false;
    sceneChange.pack();
};
mouseClicked = function () {
    clicked = true;
};

//}
    
