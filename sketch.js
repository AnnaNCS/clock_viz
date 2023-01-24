//inspiration for plant design: https://editor.p5js.org/Jennybkowalski/sketches/Hkrmcg2tm

function setup() {
	createCanvas(800,600);
}	
  
function draw () {
	
	let hr = hour();
	let min = minute();
	let sec = second();
	
	w = 800;
	h = 600; 
	
	//The background changes with the hour 
	if (hr > 0 && hr <= 5){
	  background(20);
	} 
	else if (hr > 5 && hr <= 12) {
	  background(100);
	}
	else if (hr > 12 && hr <= 17) {
	  background(225);
	}
	else if (hr > 17 || hr <= 24) {
	  background(100);
	}
	sun(w, h, hr);
	plant(w, h, hr, 24, 4);
	plant(w, h, min, 60, 3);
	plant(w, h, sec, 60, 2);
	pot(w,h);
	
	//keeping the hours for now to make sure out design works
	//textSize(32);
	//fill(180);
	//text(hr, 10, 30);
	//fill(180);
	//text(min, 10, 60);
	//fill(180);
	//text(sec, 10, 90);	  
}
  
  
function pot(w, h) {
  
	var rimW = 7;
	var rimH = 5 + h/17;
	var potW = w/2+10;
	var potH = 10 + h/4 - rimH;
	var p1 = (w-potW)/2;
	var p2 = h - potH;
	var p3 = potW;
	var p4 = potH;
	var potAngle = h/100;
	
	fill(162, 102, 42);
	quad(p1, p2, p1 + p3, p2, p1 + p3 - potAngle, h, p1 + potAngle, h);
	fill(205, 133, 63);
	quad(p1-rimW, p2, p1 + p3+rimW, p2, p1 + p3+rimW, p2-rimH, p1-rimW,  p2-rimH);
	fill(101, 64, 26);
	quad(p1 * 2.25, p2, p1 + p3, p2, p1 + p3 - potAngle, h, p1 + potAngle + p1/2, h);	
}  
  
function plant(w,h,vari,count,length) {
	
	var baseX = w/2;
	var baseY = (h / 1.3) + 1 * (1+ h/20);
	
	var tipX = w/count * vari;
	var tipY = h/length;
	
	var a1 = { x: baseX, y: baseY }; 
	var a2 = { x: tipX, y: baseY};
	 
	fill(10, 120, 40, 255); 
	var leafWidth = w/1500;
	var steps = 200; 
	  
	for (var i = 1; i <= steps; i++){
		var t = i / steps;
		var x = curvePoint(baseX, baseX, tipX, tipX, t);
		var y = curvePoint(baseY, baseY,tipY, a2.y,  t);
	  ellipse(x, y, leafWidth*(steps - i), leafWidth*(steps - i));
	  }
	  
	strokeWeight(w/200);  
	stroke(20, 80, 20, 50);
	curve(baseX, baseY, baseX, baseY, tipX, tipY, a2.x, a2.y);
}
  
function sun(w, h, hr){
	//sun location and color is based on the hour of the day 
	if (hr > 0 && hr <= 5){
	  fill(26, 26, 0);
	} 
	else if (hr > 5 && hr <= 12) {
	  fill(255, 255, 153);
	}
	else if (hr > 12 && hr <= 17) {
	  fill(255, 255, 0);
	}
	else if (hr > 17 || hr <= 24) {
	  fill(51, 51, 0);
	}
	//the sun is moving in an semicircle path, imitating the realistic sun setting and sun rising, where the sun is exaclty in the middle during the middle of the day at noon
  
	if (hr < 12){
		ellipse(w/24*hr, 200-200/24*hr, 80, 80);
	} else {
		ellipse(w/24*hr, 200/24*hr, 80, 80);
	}
}
  