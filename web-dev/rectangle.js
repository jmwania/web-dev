rect(76, 45, 250, 300); // face

rect(126, 250, 152, 60); // mouth

rect(140, 150, 30, 30); // left eye

rect(240, 150, 30, 30); // right eye

rect(175, 345, 50, 50); // neck

// unibrow
line(140, 129, 270, 129);

//coloring code
background(148, 251, 255); // RGB
noStroke();

// face
fill(255, 255, 0);
ellipse(202, 208, 300, 300);

// eyes
fill(0, 0, 0);
ellipse(157, 151, 40, 40);
ellipse(304, 142, 40, 40);

// mouth
fill(255, 0, 0);
ellipse(257, 240, 120, 136);

// headband
strokeWeight(33);
stroke(250, 0, 242);
line(83, 116, 271, 74);