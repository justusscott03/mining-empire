/** Global variables **/
// {

var tm = 115050;
var clicked = false;

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

var mouse = [];
mousePressed = function () {
    mouse[mouseButton] = true;
};
mouseReleased = function () {
    mouse[mouseButton] = false;
    return true;
};

//}

/** Outlined text, credit to A Random Coder (@ARandomCoder123) **/
// {

var OutlinedText = function (txt, x, y, weight, main, outline, inc) {
    inc = inc || 10;
    fill(outline);
    for (var i = 0; i < 360; i += inc) {
        text(txt, x + sin(i) * weight, y + cos(i) * weight);
    }
    fill(main);
    text(txt, x, y);
};

//}

/** MOR (Mouse-Over-Rectangle) function **/
// {

var MOR = function (t) {
    return mouseX > t.x && mouseX < t.x + t.w && mouseY > t.y && mouseY < t.y + t.h;
};

//}

/** Mineshaft button **/
// {

var ShaftButton = function (x, y, w, h, txt, func) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.txt = txt;
    this.func = func;
    this.s = 1;
    this.mouseOver = false;
    
    this.draw = function () {
        
        this.mouseOver = mouseX > this.x && mouseX < this.x + this.w &&
                         mouseY > this.y && mouseY < this.y + this.h;
     
        this.s = lerp(this.s, 1, 0.1);
        if (this.mouseOver && clicked) {
            this.s = 0.95;
        }
        
        pushMatrix();
            translate(this.x + this.w / 2, this.y + this.h / 2);
            scale(this.s);
            translate(-this.x - this.w / 2, -this.y - this.h / 2);
            noStroke();
            fill(143, 188, 255);
            quad(this.x + this.w / 5, this.y, this.x, this.y + this.h / 5, this.x + this.w * 2 / 25, this.y + this.h / 5, this.x + this.w / 5, this.y + this.h * 2 / 25);
            
            fill(129, 175, 235);
            rect(this.x + this.w / 5, this.y, this.w * 3 / 5, this.h * 2 / 25);
            rect(this.x, this.y + this.h / 5, this.w * 2 / 25, this.h * 3 / 5);
            
            fill(120, 165, 219);
            beginShape();
                vertex(this.x + this.w / 5, this.y + this.h * 2 / 25);
                vertex(this.x + this.w * 4 / 5, this.y + this.h * 2 / 25);
                vertex(this.x + this.w * 23 / 25, this.y + this.h / 5);
                vertex(this.x + this.w * 23 / 25, this.y + this.h * 4 / 5);
                vertex(this.x + this.w * 4 / 5, this.y + this.h * 23 / 25);
                vertex(this.x + this.w / 5, this.y + this.h * 23 / 25);
                vertex(this.x + this.w * 2 / 25, this.y + this.h * 4 / 5);
                vertex(this.x + this.w * 2 / 25, this.y + this.h / 5);
            endShape();
            
            fill(110, 154, 204);
            quad(this.x + this.w * 4 / 5, this.y, this.x + this.w, this.y + this.h / 5, this.x + this.w * 23 / 25, this.y + this.h / 5, this.x + this.w * 4 / 5, this.y + this.h * 2 / 25);
            quad(this.x, this.y + this.h * 4 / 5, this.x + this.w / 5, this.y + this.h, this.x + this.w / 5, this.y + this.h * 23 / 25, this.x + this.w * 2 / 25, this.y + this.h * 4 / 5);
            
            fill(101, 140, 184);
            rect(this.x + this.w / 5, this.y + this.h * 23 / 25, this.w * 3 / 5, this.h * 2 / 25);
            rect(this.x + this.w * 23 / 25, this.y + this.h / 5, this.w * 2 / 25, this.h * 3 / 5);
            
            fill(83, 117, 156);
            quad(this.x + this.w * 4 / 5, this.y + this.h * 23 / 25, this.x + this.w * 23 / 25, this.y + this.h * 4 / 5, this.x + this.w, this.y + this.h * 4 / 5, this.x + this.w * 4 / 5, this.y + this.h);
            
            textAlign(CENTER, CENTER);
            textSize((this.w * this.h) / 500);
            OutlinedText(this.txt, this.x + this.w / 2, this.y + this.h / 2, (this.w * this.h) / 10000, color(255), color(0));
            
            fill(0, 0, 0, 20);
            beginShape();
                vertex(this.x, this.y + this.h / 2);
                vertex(this.x + this.w, this.y + this.h / 2);
                vertex(this.x + this.w, this.y + this.h * 4 / 5);
                vertex(this.x + this.w * 4 / 5, this.y + this.h);
                vertex(this.x + this.w / 5, this.y + this.h);
                vertex(this.x, this.y + this.h * 4 / 5);
            endShape();
        popMatrix();
    };
};

//}

/** Lantern **/
// {

var Lantern = function (x, y, w, h) {
    for (var i = 0 ; i < 10; i++) {
        noStroke();
        fill(255, 253, 107, -i * 25 + 255);
        ellipse(x, y + h * 2 / 3, i * w / 2, i * w / 2);
    }
    
    fill(255, 238, 0);
    stroke(0);
    strokeWeight(1);
    quad(x, y, x - w / 2, y + h / 2, x - w / 2, y + h, x, y + h);
    quad(x, y, x + w / 2, y + h / 2, x + w / 2, y + h, x, y + h);
    
    for (var i = 0; i < 3; i++) {
        noFill();
        strokeWeight(1);
        ellipse(x, -i * h / 4 + y, w * 2 / 5, h * 2 / 5);
    }
};

//}

/** Shafts **/
// {

var Shaft = function (y, w, h, shaftId, increment, upgradeInc) {
    this.x = -1;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.id = shaftId;
    this.increment = increment;
    this.upgradeInc = upgradeInc;
    this.level = 1;
    this.built = true;
    this.crateM = 0;
    this.buildPrice = this.id * this.increment;
    this.buildButton = new ShaftButton(this.x + this.w / 3, this.y + this.h / 4, this.w / 4, this.h / 2, "Build:" + this.buildPrice, function() {
        this.built = true;
    });
    this.upgradeButton = new ShaftButton(this.x + this.w * 20 / 19, this.y + this.h / 4, this.w / 4, this.h / 2);
};
Shaft.prototype.draw = function (color) {
    this.earning = (this.id * this.level) * 2;
    this.upgradePrice = (this.id * this.level) * this.upgradeInc;
    
    if (!this.built) {
        this.buildButton.draw();
        if (clicked) {
            if (tm > this.buildPrice) {
                tm -= this.buildPrice;
                this.built = true;
            }
        }
    } 
    else {
        this.upgradeButton.draw();
        if (ShaftButton(this.x + this.w * 3/2, this.y + this.h/2, this.w/3, this.h/3, "Upgrade\n$" + this.upgradePrice, 13)) {
            if (tm > this.upgradePrice) {
                tm -= this.upgradePrice;
                this.level++;
            }
        }
        noStroke();
        rectMode(CORNER);
        strokeWeight(1);
        fill(48, 48, 48);
        rect(this.x, this.y, this.w, this.h);
        fill(64, 42, 0);
        quad(this.x + this.w/2, this.y, this.x + this.w * 2/3, this.y + this.h/3, this.x + this.w * 2/3, this.y + this.h/6, this.x + this.w * 11/19, this.y);
        quad(this.x + this.w/2, this.y, this.x + this.w/3, this.y + this.h/3, this.x + this.w/3, this.y + this.h/6, this.x + this.w * 7/17, this.y);
        quad(this.x + this.w/6, this.y, this.x + this.w/3, this.y + this.h/3, this.x + this.w/3, this.y + this.h/6, this.x + this.w * 10/39, this.y);
        quad(this.x + this.w/6, this.y, this.x, this.y + this.h/3, this.x, this.y + this.h/6, this.x + this.w * 7/80, this.y);
        rectMode(CENTER);
        for (var i = 0; i < 3; i++) {
            rect(i * this.w/3, this.y + this.h/2, this.w * 3/40, this.h);
        }
        fill(105, 105, 105);
        quad(this.x + this.w, this.y + this.h, this.x + this.w, this.y + this.h * 7/8, this.x, this.y + this.h * 7/8, this.x, this.y + this.h);
        rectMode(CORNER);
        stroke(0);
        fill(166, 166, 166);
        rect(this.x + this.w * 29/40, this.y + this.h * 3/5, this.w/4, this.h/3);
        rect(this.x + this.w * 29/40, this.y + this.h * 17/20, this.w/4, this.h/12);
        Lantern(this.x + this.w/2, this.y + this.h/7, this.w/14, this.h * 3/17);
    }
};

//}

/** Ground and castle **/
// {

var Ground = function (y, shafts) {
    this.y = y;
    this.shafts = shafts;
    this.a = 0;
    this.mr = 0;
    this.night = 0;
    this.r1 = 255; 
    this.g1 = 89;
    this.b1 = 89;
    this.r2 = 255;
    this.g2 = 183;
    this.b2 = 74;
    this.grass = function (x, y, s) {
        pushMatrix();
        translate(x, y);
        scale(s);
        translate(-x, -y);
        fill(0, 130, 17);
        triangle(x, y, x - 5, y + 10, x + 3, y + 10);
        triangle(x - 6, y + 3, x - 8, y + 10, x, y + 10);
        triangle(x + 5, y + 5, x, y + 10, x + 5, y + 10);
        popMatrix();
    };
    this.gradient = function (x, y, w, h, start, end) {
        for(var i = 0; i < h; i++) {
            var lerpCol = lerpColor(start, end, i / h);
            fill(lerpCol);
            rect(x, i + y, w, 1);
        }
    };
};
Ground.prototype.draw = function () {
    
    noStroke();
    
    //Sky {
    
    if (this.a > 340 || this.a < 20) {
        if (this.r1 < 255) {
            this.r1++;
        }
        if (this.g1 > 89) {
            this.g1--;
        }
        if (this.b1 > 89) {
            this.b1--;
        }
        if (this.r2 < 255) {
            this.r2++;
        }
        if (this.g2 > 183) {
            this.g2--;
        }
        if (this.b2 > 74) {
            this.b2--;
        }
    } 
    else if (this.a > 20 && this.a < 160) {
        if (this.r1 > 0) {
            this.r1--;
        }
        if (this.g1 > 0) {
            this.g1--;
        }
        if (this.b1 > 0) {
            this.b1--;
        }
        if (this.r2 > 105) {
            this.r2--;
        }
        if (this.g2 > 105) {
            this.g2--;
        }
        if (this.b2 < 105) {
            this.b2++;
        }
        if (this.night < 100) {
            this.night++;
        }
    } 
    else if (this.a > 160 && this.a < 200) {
        if (this.r1 < 255) {
            this.r1++;
        }
        if (this.g1 < 89) {
            this.g1++;
        }
        if (this.b1 < 89) {
            this.b1++;
        }
        if (this.r2 < 255) {
            this.r2++;
        }
        if (this.g2 < 183) {
            this.g2++;
        }
        if (this.b2 > 74) {
            this.b2--;
        }
        if (this.night > 0) {
            this.night--;
        }
    }
    else if (this.a > 200 && this.a < 340) {
        if (this.r1 > 0) {
            this.r1--;
        }
        if (this.g1 < 176) {
            this.g1++;
        }
        if (this.b1 < 235) {
            this.b1++;
        }
        if (this.r2 > 0) {
            this.r2--;
        }
        if (this.g2 < 208) {
            this.g2++;
        }
        if (this.b2 < 255) {
            this.b2++;
        }
    }
    this.gradient(0, 0, 400, 300, color(this.r1, this.g1, this.b1), color(this.r2, this.g2, this.b2));
    
    //}
    
    //Sun {
    
    pushMatrix();
        translate(200, 300);
        rotate(this.a);
        for(var i = 0; i < 50; i++) {
            fill(255, 255, 140, i);
            ellipse(200, 0, -i + 100, -i + 100);
        }
    popMatrix();
    
    //}
    
    //Moon {
    
    pushMatrix();
        translate(200, 300);
        rotate(this.a);
        translate(-200, 0);
        rotate(this.mr);
        translate(200, 0);
        for(var i = 0; i < 50; i++) {
            fill(255, 255, 255, i);
            ellipse(-200, 0, -i + 75, -i + 75);
        }
        fill(255, 255, 255);
        ellipse(-200, 0, 50, 50);
    popMatrix();
    
    //}
    
    //Grass, dirt, and main castle body {
    
    fill(16, 161, 0);
    rect(0, this.y - 15, width, 70);
    
    fill(196, 196, 196);
    rect(50, this.y - 100, 300, 100);
    
    fill(150, 150, 150);
    quad(350, this.y - 100, 350, this.y, 370, this.y - 10, 370, this.y - 80);
    
    this.grass(380, this.y - 10, 0.7);
    this.grass(120, this.y - 7, 1);
    this.grass(50, this.y + 10, 1.2);
    this.grass(250, this.y + 10, 1.3);
    this.grass(340, this.y + 20, 1.5);
    this.grass(200, this.y + 25, 1.7);
    
    fill(133, 111, 0);
    rect(0, this.y + 55, width, 50);
    
    //}
    
    //Castle ramparts {
    
    for (var i = 0; i < 7; i++) {
        if (i === 0 || i === 1) {
            fill(135);
        } 
        else {
            fill(181);
        }
        rect(i * 30.8 + 100, this.y - 115, 15, 15);
        
        if (i === 0 || i === 1) {
            fill(97);
        } 
        else {
            fill(161);
        }
        triangle(i * 30.8 + 100, this.y - 100, i * 30.8 + 115, this.y - 100, i * 30.8 + 115, this.y - 115);
        
        if (i === 0 || i === 1) {
            fill(64);
        } 
        else {
            fill(105);
        }
        quad(i * 30.8 + 115, this.y - 115, i * 30.8 + 115, this.y - 100, i * 30.8 + 120, this.y - 100, i * 30.8 + 120, this.y - 110);
    }
    
    fill(160);
    rect(60, this.y - 130, 40, 30);
    rect(300, this.y - 130, 40, 30);
    
    fill(140);
    rect(70, this.y - 130, 30, 30);
    rect(310, this.y - 130, 30, 30);
    
    fill(120);
    triangle(80, this.y - 130, 100, this.y - 130, 100, this.y - 120);
    triangle(320, this.y - 130, 340, this.y - 130, 340, this.y - 120);
    rect(90, this.y - 130, 10, 30);
    rect(330, this.y - 130, 10, 30);
    
    //}
    
    //Castle bricks {
    
    fill(120, 119, 114);
    rect(63, this.y - 50, 20, 10, 5);
    rect(115, this.y - 90, 20, 10, 5);
    rect(247, this.y - 60, 20, 10, 5);
    rect(290, this.y - 20, 20, 10, 5);
    rect(107, this.y - 25, 20, 10, 5); 
    rect(302, this.y - 85, 20, 10, 5);
    
    fill(156, 155, 145);
    rect(61, this.y - 50, 20, 10, 5);
    rect(113, this.y - 90, 20, 10, 5);
    rect(245, this.y - 60, 20, 10, 5);
    rect(288, this.y - 20, 20, 10, 5);
    rect(105, this.y - 25, 20, 10, 5);
    rect(300, this.y - 85, 20, 10, 5);
    
    //}
    
    //Castle gate {
    
    fill(120, 120, 120);
    rect(155, this.y - 75, 10, 75);
    fill(150, 150, 150);
    quad(155, this.y, 160, this.y - 3, 235, this.y - 3, 235, this.y);
    fill(59, 59, 59);
    quad(155, this.y - 75, 160, this.y - 72, 235, this.y - 72, 235, this.y - 75);
    fill(107, 78, 39);
    rect(160, this.y - 72, 75, 69);
    strokeCap(SQUARE);
    stroke(0);
    line(197.5, this.y - 72, 197.5, this.y - 4);
    for(var i = 0; i < 4; i++) {
        noStroke();
        fill(115, 88, 52);
        rect(158, i * 20 + this.y - 70, 77, 5);
        stroke(0);
        line(195, i * 20 + this.y - 70, 195, i * 20 + this.y - 65);
    }
    noStroke();
    fill(82, 55, 16);
    quad(158, this.y - 65, 160, this.y - 62, 235, this.y - 62, 235, this.y - 65);
    quad(158, this.y - 45, 160, this.y - 43, 235, this.y - 43, 235, this.y - 45);
    quad(158, this.y - 30, 160, this.y - 32, 235, this.y - 32, 235, this.y - 30);
    quad(158, this.y - 10, 160, this.y - 13, 235, this.y - 13, 235, this.y - 10);
    stroke(0);
    line(195, this.y - 65, 197.5, this.y - 62);
    line(195, this.y - 45, 197.5, this.y - 43);
    line(195, this.y - 30, 197.5, this.y - 32);
    line(195, this.y - 10, 197.5, this.y - 13);
    
    //}
    
    //Animation {
    
    this.a += 0.05;
    this.mr -= 0.05;
    if (this.a > 360) {
        this.a = 0;
    }
    
    //}
    
};
var g = new Ground(300);

//}

/** Mine **/
// {

var Mine = function (y) {
    this.y = y;
    
};

//}

/** Draw function **/
// {

var s = new Shaft(100, 300, 150, 1, 100, 10);

draw = function () {
    
    g.draw();
    //s.draw();
    
    clicked = false;
};

mouseClicked = function () {
    clicked = true;
};

//}
