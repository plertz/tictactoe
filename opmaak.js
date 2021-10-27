var x = 1;
var fin;

var box1 = 0;
var box2 = 0;
var box3 = 0;
var box4 = 0;
var box5 = 0;
var box6 = 0;
var box7 = 0;
var box8 = 0;
var box9 = 0;

function draw(){
               x = -x;
               if (x < 0) {
                          document.getElementsByClassName('img1')[0].setAttribute("src", "cross.jpg");
                          box1 = 1;
                          document.getElementsByClassName('box')[0].removeAttribute("onclick");
               }
               else {
                    document.getElementsByClassName('img1')[0].setAttribute("src", "round.jpg");
                    box1 = 2;
                    document.getElementsByClassName('box')[0].removeAttribute("onclick");
               }
}

function draw2(){
               x = -x;
               if (x < 0) {
                          document.getElementsByClassName('img2')[0].setAttribute("src", "cross.jpg");
                          box2 = 1;
                          document.getElementsByClassName('box')[1].removeAttribute("onclick");
               }
               else {
                    document.getElementsByClassName('img2')[0].setAttribute("src", "round.jpg");
                    box2 = 2;
                    document.getElementsByClassName('box')[1].removeAttribute("onclick");
               }
}

function draw3(){
                x = -x;
                if (x < 0) {
                           document.getElementsByClassName('img3')[0].setAttribute("src", "cross.jpg");
                           box3 = 1;
                           document.getElementsByClassName('box')[2].removeAttribute("onclick");
                }
                else {
                     document.getElementsByClassName('img3')[0].setAttribute("src", "round.jpg");
                     box3 = 2;
                     document.getElementsByClassName('box')[2].removeAttribute("onclick");
                }
}

function draw4(){
                x = -x;
                if (x < 0) {
                           document.getElementsByClassName('img4')[0].setAttribute("src", "cross.jpg");
                           box4 = 1;
                           document.getElementsByClassName('box')[3].removeAttribute("onclick");
                }
                else {
                     document.getElementsByClassName('img4')[0].setAttribute("src", "round.jpg");
                     box4 = 2;
                     document.getElementsByClassName('box')[3].removeAttribute("onclick");
                }
}

function draw5(){
                x = -x;
                if (x < 0) {
                           document.getElementsByClassName('img5')[0].setAttribute("src", "cross.jpg");
                           box5 = 1;
                           document.getElementsByClassName('box')[4].removeAttribute("onclick");
                }
                else {
                     document.getElementsByClassName('img5')[0].setAttribute("src", "round.jpg");
                     box5 = 2;
                     document.getElementsByClassName('box')[4].removeAttribute("onclick");
                }
}

function draw6(){
                x = -x;
                if (x < 0) {
                           document.getElementsByClassName('img6')[0].setAttribute("src", "cross.jpg");
                           box6 = 1;
                           document.getElementsByClassName('box')[5].removeAttribute("onclick");
                }
                else {
                     document.getElementsByClassName('img6')[0].setAttribute("src", "round.jpg");
                     box6 = 2;
                     document.getElementsByClassName('box')[5].removeAttribute("onclick");
                }
}

function draw7(){
                x = -x;
                document.getElementsByClassName('box')[6].removeAttribute("onclick");
                if (x < 0) {
                           document.getElementsByClassName('img7')[0].setAttribute("src", "cross.jpg");
                           box7 = 1;
                }
                else {
                     document.getElementsByClassName('img7')[0].setAttribute("src", "round.jpg");
                     box7 = 2;
                }
}

function draw8(){
                x = -x;
                document.getElementsByClassName('box')[7].removeAttribute("onclick");
                if (x < 0) {
                           document.getElementsByClassName('img8')[0].setAttribute("src", "cross.jpg");
                           box8 = 1;
                }
                else {
                     document.getElementsByClassName('img8')[0].setAttribute("src", "round.jpg");
                     box8 = 2;
                }
}

function draw9(){
                x = -x;
                document.getElementsByClassName('box')[8].removeAttribute("onclick");
                if (x < 0) {
                           document.getElementsByClassName('img9')[0].setAttribute("src", "cross.jpg");
                           box9 = 1;
                }
                else {
                     document.getElementsByClassName('img9')[0].setAttribute("src", "round.jpg");
                     box9 = 2;
                }
}

function check() {
if (box1 == box2 && box2 == box3 && box1 != 0) {
                                               fin = box1;
                                               win();
}
else if (box4 == box5 && box5 == box6 && box4 != 0) {
                                                    fin = box4;
                                                    win();
}
else if (box7 == box8 && box8 == box9 && box7 != 0) {
                                                    fin = box7;
                                                    win();
}
else if (box1 == box4 && box4 == box7 && box1 != 0) {
                                                    fin = box1;
                                                    win();
}
else if (box2 == box5 && box5 == box8 && box2 != 0) {
                                                    fin = box2;
                                                    win();
}
else if (box3 == box6 && box6 == box9 && box3 != 0) {
                                                    fin = box3;
                                                    win();
}
else if (box1 == box5 && box5 == box9 && box1 != 0) {
                                                    fin = box1;
                                                    win();
}
else if (box3 == box5 && box5 == box7 && box3 != 0) {
                                                    fin = box3;
                                                    win();
}
else if (box1 != 0 && box2 != 0 && box3 != 0 && box4 != 0 && box5 != 0 && box6 != 0 && box7 != 0 && box8 != 0 && box9 != 0) {
     document.getElementsByClassName('game-over')[0].style.display = "block";
     document.getElementById("uitslag").innerHTML = "No winner";
}
}

function win() {
               document.getElementsByClassName('game-over')[0].style.display = "block";
               if (fin == 1) {
                            document.getElementById("uitslag").innerHTML = "Cross wins";
               }
               else if (fin == 2) {
                              document.getElementById("uitslag").innerHTML = "Round wins";
               }
}
