const { ipcRenderer } = require("electron");

const closeBtns = document.getElementsByName("exitBtn");
for (let element of closeBtns) {
    element.addEventListener("click", function() {
        ipcRenderer.send("exit-message");
    });
}

const aboutBtns = document.getElementsByName("aboutBtn");
for (let element of aboutBtns) {
    element.addEventListener("click", function() {
        ipcRenderer.send("open-about-message");
    });
}

//---------------------------- Sounds ---------------------------------------
var soundClick = new Audio();
soundClick.src = "sounds/sound-click.mp3";

var soundPlaying = new Audio();
soundPlaying.src = "sounds/while_playing_Puzzle_Music 2 _ Soundimage.org.mp3";
soundPlaying.loop = true;

var soundMenu = new Audio();
soundMenu.src = "sounds/menu_sound.mp3";

var soundWin2 = new Audio();
soundWin2.src = "sounds/winning_sound_claping.mp3";

var soundWin1 = new Audio();
soundWin1.src = "sounds/winning_sound_effect.mp3";

soundMenu.loop = true;
soundMenu.play();

//---------------------------------------------------------------------------

// design
var ColorOnMouse = "#03e9f4";
var ColorBackground = "#02b0b8";

function changeColorValue(colorbackground, coloronmouse) {
    ColorOnMouse = coloronmouse;
    ColorBackground = colorbackground;
    a = document.getElementById("b1").style.backgroundColor = ColorBackground;
    a = document.getElementById("b2").style.backgroundColor = ColorBackground;
    a = document.getElementById("b3").style.backgroundColor = ColorBackground;
    a = document.getElementById("b4").style.backgroundColor = ColorBackground;
    a = document.getElementById("b5").style.backgroundColor = ColorBackground;
    a = document.getElementById("b6").style.backgroundColor = ColorBackground;
    a = document.getElementById("b7").style.backgroundColor = ColorBackground;
    a = document.getElementById("b8").style.backgroundColor = ColorBackground;
    a = document.getElementById("b9").style.backgroundColor = ColorBackground;
    a = document.getElementById("b10").style.backgroundColor = ColorBackground;
    a = document.getElementById("b11").style.backgroundColor = ColorBackground;
    a = document.getElementById("b12").style.backgroundColor = ColorBackground;
    a = document.getElementById("b13").style.backgroundColor = ColorBackground;
    a = document.getElementById("b14").style.backgroundColor = ColorBackground;
    a = document.getElementById("b15").style.backgroundColor = ColorBackground;
}

function changeColorOnMouse(Id) {
    var ID = Id;
    a = document.getElementById(Id);
    a.style.backgroundColor = ColorOnMouse;
}

function changeColorOutMouse(Id) {
    var ID = Id;
    a = document.getElementById(Id);
    a.style.backgroundColor = ColorBackground;
}

var moves = 0;
var times_m = 0;
var times_s = 0;
var playState;

function pauseGame() {
    if (playState == "playing") {
        a = document.getElementById("pauseBtn");
        a.innerHTML = "Resume";
        playState = "paused";
        a = document.getElementById("pauseBox");
        a.style.display = "block";
        soundPlaying.pause();
    } else {
        a = document.getElementById("pauseBtn");
        a.innerHTML = "Pause";
        playState = "playing";
        a = document.getElementById("pauseBox");
        a.style.display = "none";
        soundPlaying.play();
    }
}

function openInstr() {
    a = document.getElementById("instruction");
    a.style.display = "block";
}

function closeInstr() {
    a = document.getElementById("instruction");
    a.style.display = "none";
}

function chooseLevel() {
    a = document.getElementById("interface");
    a.style.transition = "transform 0.3s";
    a.style.transform = "scale(0.1, 0.1)";
    a = document.getElementById("interface");
    a.style.zIndex = "-1";
    a = document.getElementById("level_menu");
    a.style.zIndex = "1";
}

function playLevel(l) {
    a = document.getElementById("menu_screen_container");
    a.style.display = "none";
    a = document.getElementById("playScreen");
    a.style.display = "block";
    setTimeout(function() {
        randomBox(l);
        playState = "playing";
        countTimes();
        soundPlaying.volume = 0.1;
        soundPlaying.play();
        soundMenu.volume = 0.6;
        setTimeout(function() {
            soundMenu.volume = 0.3;
            soundPlaying.volume = 0.3;
            setTimeout(function() {
                soundPlaying.volume = 0.5;
                soundMenu.volume = 0.1;
                soundMenu.pause();
                setTimeout(function() {
                    soundPlaying.volume = 0.7;
                }, 1000);
            }, 1000);
        }, 1000);
    }, 100);
}

function countMoves() {
    moves += 1;
    a = document.getElementById("move");
    a.innerHTML = "Moves: " + moves;
}

function countTimes() {
    myTimeCounter = setInterval(function() {
        if (playState == "playing") {
            if (times_s == 59) {
                times_m += 1;
                times_s = 0;
            } else {
                times_s += 1;
            }
            a = document.getElementById("time");
            if (times_m > 0) {
                a.innerHTML = "Time: " + times_m + "m " + times_s + "s";
            } else {
                a.innerHTML = "Time: " + times_s + "s";
            }
        }
    }, 1000);
}
// process
var tokenPlace = [
    ["y", "y", "y", "y"],
    ["y", "y", "y", "y"],
    ["y", "y", "y", "y"],
    ["y", "y", "y", "n"],
];

var boxId = [
    ["b1", "b2", "b3", "b4"],
    ["b5", "b6", "b7", "b8"],
    ["b9", "b10", "b11", "b12"],
    ["b13", "b14", "b15"],
];

function checkWin() {
    var win = 0;
    a = document.getElementById("b1");
    Class = a.className;
    if (Class[4] == "0" && Class[10] == "0") {
        win += 1;
    }
    a = document.getElementById("b2");
    Class = a.className;
    if (Class[4] == "0" && Class[10] == "1") {
        win += 1;
    }
    a = document.getElementById("b3");
    Class = a.className;
    if (Class[4] == "0" && Class[10] == "2") {
        win += 1;
    }
    a = document.getElementById("b4");
    Class = a.className;
    if (Class[4] == "0" && Class[10] == "3") {
        win += 1;
    }
    a = document.getElementById("b5");
    Class = a.className;
    if (Class[4] == "1" && Class[10] == "0") {
        win += 1;
    }
    a = document.getElementById("b6");
    Class = a.className;
    if (Class[4] == "1" && Class[10] == "1") {
        win += 1;
    }
    a = document.getElementById("b7");
    Class = a.className;
    if (Class[4] == "1" && Class[10] == "2") {
        win += 1;
    }
    a = document.getElementById("b8");
    Class = a.className;
    if (Class[4] == "1" && Class[10] == "3") {
        win += 1;
    }
    a = document.getElementById("b9");
    Class = a.className;
    if (Class[4] == "2" && Class[10] == "0") {
        win += 1;
    }
    a = document.getElementById("b10");
    Class = a.className;
    if (Class[4] == "2" && Class[10] == "1") {
        win += 1;
    }
    a = document.getElementById("b11");
    Class = a.className;
    if (Class[4] == "2" && Class[10] == "2") {
        win += 1;
    }
    a = document.getElementById("b12");
    Class = a.className;
    if (Class[4] == "2" && Class[10] == "3") {
        win += 1;
    }
    a = document.getElementById("b13");
    Class = a.className;
    if (Class[4] == "3" && Class[10] == "0") {
        win += 1;
    }
    a = document.getElementById("b14");
    Class = a.className;
    if (Class[4] == "3" && Class[10] == "1") {
        win += 1;
    }
    a = document.getElementById("b15");
    Class = a.className;
    if (Class[4] == "3" && Class[10] == "2") {
        win += 1;
    }

    if (win == 15) {
        a = document.getElementById("win_detailer");
        a.innerHTML =
            "You moved " +
            moves +
            " times within " +
            times_m +
            " minutes and " +
            times_s +
            " seconds!";
        a = document.getElementById("win_screen_container");
        a.style.tranform = "scale(0.3, 0.3);";
        a.style.display = "block";
        a = document.getElementById("playScreen");
        a.style.display = "none";
        setTimeout(function() {
            a = document.getElementById("win_screen_container");
            a.style.transition = "transform 5s";
            a.style.transform = "scale(1, 1);";
            soundPlaying.pause();
            soundWin1.play();
            soundWin2.play();
        }, 500);
    }
}

function randomBox(level) {
    if (level == "easy") {
        var randomTime = 50;
    } else if (level == "normal") {
        var randomTime = 100;
    } else if (level == "hard") {
        var randomTime = 150;
    }
    for (var randTime = 1; randTime <= randomTime; randTime++) {
        for (var i = 0; i <= 3; i++) {
            for (var j = 0; j <= 3; j++) {
                if (tokenPlace[i][j] == "n") {
                    console.log(tokenPlace[i][j]);
                    console.log("i = " + i + " j = " + j);

                    var ii = i;
                    var jj = j;

                    if (i == 0 && j == 0) {
                        var moveFrom = parseInt(Math.random() * 2 + 1);

                        if (moveFrom == 1) {
                            var moveto = "left";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i][j + 1] = "n";
                            j += 1;
                            console.log("moved to left");
                        } else if (moveFrom == 2) {
                            var moveto = "above";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i + 1][j] = "n";
                            i += 1;
                        }
                    } else if (i == 0 && j == 3) {
                        var moveFrom = parseInt(Math.random() * 2 + 1);

                        if (moveFrom == 1) {
                            var moveto = "right";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i][j - 1] = "n";
                            j -= 1;
                        } else if (moveFrom == 2) {
                            var moveto = "above";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i + 1][j] = "n";
                            i += 1;
                        }
                    } else if (i == 3 && j == 0) {
                        var moveFrom = parseInt(Math.random() * 2 + 1);

                        if (moveFrom == 1) {
                            var moveto = "left";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i][j + 1] = "n";
                            j += 1;
                        } else if (moveFrom == 2) {
                            var moveto = "below";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i - 1][j] = "n";
                            i -= 1;
                        }
                    } else if (i == 3 && j == 3) {
                        var moveFrom = parseInt(Math.random() * 2 + 1);

                        if (moveFrom == 1) {
                            var moveto = "right";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i][j - 1] = "n";
                            j -= 1;
                        } else if (moveFrom == 2) {
                            var moveto = "below";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i - 1][j] = "n";
                            i -= 1;
                        }
                        console.log("33 checked available move");
                    } else if ((i == 0 && j == 1) || (i == 0 && j == 2)) {
                        var moveFrom = parseInt(Math.random() * 3 + 1);

                        if (moveFrom == 1) {
                            var moveto = "right";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i][j - 1] = "n";
                            j -= 1;
                        } else if (moveFrom == 2) {
                            var moveto = "left";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i][j + 1] = "n";
                            j += 1;
                        } else if (moveFrom == 3) {
                            var moveto = "above";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i + 1][j] = "n";
                            i += 1;
                        }
                    } else if ((i == 1 && j == 0) || (i == 2 && j == 0)) {
                        var moveFrom = parseInt(Math.random() * 3 + 1);

                        if (moveFrom == 1) {
                            var moveto = "left";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i][j + 1] = "n";
                            j += 1;
                        } else if (moveFrom == 2) {
                            var moveto = "below";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i - 1][j] = "n";
                            i -= 1;
                        } else if (moveFrom == 3) {
                            var moveto = "above";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i + 1][j] = "n";
                            i += 1;
                        }
                    } else if ((i == 3 && j == 1) || (i == 3 && j == 2)) {
                        var moveFrom = parseInt(Math.random() * 3 + 1);

                        if (moveFrom == 1) {
                            var moveto = "right";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i][j - 1] = "n";
                            j -= 1;
                        } else if (moveFrom == 2) {
                            var moveto = "left";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i][j + 1] = "n";
                            j += 1;
                        } else if (moveFrom == 3) {
                            var moveto = "below";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i - 1][j] = "n";
                            i -= 1;
                        }
                    } else if ((i == 1 && j == 3) || (i == 2 && j == 3)) {
                        var moveFrom = parseInt(Math.random() * 3 + 1);

                        if (moveFrom == 1) {
                            var moveto = "right";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i][j - 1] = "n";
                            j -= 1;
                        } else if (moveFrom == 2) {
                            var moveto = "below";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i - 1][j] = "n";
                            i -= 1;
                        } else if (moveFrom == 3) {
                            var moveto = "above";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i + 1][j] = "n";
                            i += 1;
                        }
                    } else {
                        var moveFrom = parseInt(Math.random() * 4 + 1);

                        if (moveFrom == 1) {
                            var moveto = "right";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i][j - 1] = "n";
                            j -= 1;
                        } else if (moveFrom == 2) {
                            var moveto = "left";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i][j + 1] = "n";
                            j += 1;
                        } else if (moveFrom == 3) {
                            var moveto = "below";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i - 1][j] = "n";
                            i -= 1;
                        } else if (moveFrom == 4) {
                            var moveto = "above";
                            tokenPlace[i][j] = "y";
                            tokenPlace[i + 1][j] = "n";
                            i += 1;
                        }
                    }

                    console.log("moveto = " + moveto);
                    console.log("i = " + i + " j = " + j);

                    for (var l = 0; l <= 3; l++) {
                        for (var m = 0; m <= 3; m++) {
                            if (l == 3 && m == 3) {
                                break;
                            }
                            a = document.getElementById(boxId[l][m]);
                            Class = a.className;
                            var Row = Class[4];
                            var Col = Class[10];
                            Row = Number(Row);
                            Col = Number(Col);

                            console.log("elmenet got!");
                            console.log("class name: " + Class);
                            console.log(Row + " " + Col);

                            if (Row == i && Col == j) {
                                // move
                                console.log("get in if");
                                var x = "";
                                var index = 14;
                                while (Class[index] != " ") {
                                    x += Class[index];
                                    index += 1;
                                }

                                console.log("x = " + x);

                                x = Number(x);

                                var y = "";
                                index += 3;
                                while (Class[index] != " ") {
                                    y += Class[index];
                                    index += 1;
                                }

                                console.log("y = " + y);

                                y = Number(y);

                                if (moveto == "left") {
                                    x -= 148;
                                } else if (moveto == "right") {
                                    x += 148;
                                } else if (moveto == "above") {
                                    y -= 134;
                                } else if (moveto == "below") {
                                    y += 134;
                                }
                                console.log("after moved: x = " + x + " y = " + y);
                                i = String(i);
                                j = String(j);
                                x = String(x);
                                y = String(y);
                                ii = String(ii);
                                jj = String(jj);
                                a.className =
                                    "row=" +
                                    ii +
                                    " col=" +
                                    jj +
                                    " x=" +
                                    x +
                                    " y=" +
                                    y +
                                    " button";
                                a.style.transition = "transform 0.2s";
                                a.style.transform = "translate(" + x + "px, " + y + "px)";
                                break;
                            }
                        }
                    }

                    break;
                }
            }
        }
    }
    console.log(
        "moved #" +
        a.id +
        " from column" +
        i +
        " row" +
        j +
        " to column" +
        ii +
        " row" +
        jj
    );
    console.log("randomed!");
    checkWin();
}

function moveBox(ID) {
    var Id = ID;
    var a = document.getElementById(Id);
    var Class = a.className;
    var Row = Class[4];
    var Col = Class[10];
    var index = 14;

    Row = Number(Row);
    Col = Number(Col);

    var x = "";
    while (Class[index] != " ") {
        x += Class[index];
        index += 1;
    }
    x = Number(x);

    var y = "";
    index += 3;
    while (Class[index] != " ") {
        y += Class[index];
        index += 1;
    }
    y = Number(y);

    // chech available move
    // for 00
    if (Row == 0 && Col == 0) {
        // check right
        if (tokenPlace[Row][Col + 1] == "n") {
            x += 148;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row][Col + 1] = "y";
            Col += 1;
            countMoves();
        }
        // check below
        else if (tokenPlace[Row + 1][Col] == "n") {
            y += 134;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row + 1][Col] = "y";
            Row += 1;
            countMoves();
        }
    }
    // for 10 or 20
    else if ((Row == 1 && Col == 0) || (Row == 2 && Col == 0)) {
        // check right
        if (tokenPlace[Row][Col + 1] == "n") {
            x += 148;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row][Col + 1] = "y";
            Col += 1;
            countMoves();
        }
        // check above
        else if (tokenPlace[Row - 1][Col] == "n") {
            y -= 134;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row - 1][Col] = "y";
            Row -= 1;
            countMoves();
        }
        // check below
        else if (tokenPlace[Row + 1][Col] == "n") {
            y += 134;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row + 1][Col] = "y";
            Row += 1;
            countMoves();
        }
    }
    // for 30
    else if (Row == 3 && Col == 0) {
        // check right
        if (tokenPlace[Row][Col + 1] == "n") {
            x += 148;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row][Col + 1] = "y";
            Col += 1;
            countMoves();
        }
        // check above
        else if (tokenPlace[Row - 1][Col] == "n") {
            y -= 134;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row - 1][Col] = "y";
            Row -= 1;
            countMoves();
        }
    }
    // for 01 or 02
    else if ((Row == 0 && Col == 1) || (Row == 0 && Col == 2)) {
        // check left
        if (tokenPlace[Row][Col - 1] == "n") {
            x -= 148;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row][Col - 1] = "y";
            Col -= 1;
            countMoves();
        }
        // check right
        else if (tokenPlace[Row][Col + 1] == "n") {
            x += 148;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row][Col + 1] = "y";
            Col += 1;
            countMoves();
        }
        // check below
        else if (tokenPlace[Row + 1][Col] == "n") {
            y += 134;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row + 1][Col] = "y";
            Row += 1;
            countMoves();
        }
    }

    // for 03
    else if (Row == 0 && Col == 3) {
        // check left
        if (tokenPlace[Row][Col - 1] == "n") {
            x -= 148;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row][Col - 1] = "y";
            Col -= 1;
            countMoves();
        }
        // check below
        else if (tokenPlace[Row + 1][Col] == "n") {
            y += 134;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row + 1][Col] = "y";
            Row += 1;
            countMoves();
        }
    }

    // for 31 or 32
    else if ((Row == 3 && Col == 1) || (Row == 3 && Col == 2)) {
        // check left
        if (tokenPlace[Row][Col - 1] == "n") {
            x -= 148;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row][Col - 1] = "y";
            Col -= 1;
            console.log("32 left check!");
            countMoves();
        }
        // check above
        else if (tokenPlace[Row - 1][Col] == "n") {
            y -= 134;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row - 1][Col] = "y";
            Row -= 1;
            console.log("32 above check!");
            countMoves();
        }
        // check right
        else if (tokenPlace[Row][Col + 1] == "n") {
            x += 148;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row][Col + 1] = "y";
            Col += 1;
            console.log("32 right check!");
            countMoves();
        }
    }

    // for 33
    else if (Row == 3 && Col == 3) {
        // check left
        if (tokenPlace[Row][Col - 1] == "n") {
            x -= 148;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row][Col - 1] = "y";
            Col -= 1;
            countMoves();
        }
        // check above
        else if (tokenPlace[Row - 1][Col] == "n") {
            y -= 134;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row - 1][Col] = "y";
            Row -= 1;
            countMoves();
        }
    }
    // for 13 or 23
    else if ((Row == 1 && Col == 3) || (Row == 2 && Col == 3)) {
        // check left
        if (tokenPlace[Row][Col - 1] == "n") {
            x -= 148;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row][Col - 1] = "y";
            Col -= 1;
            countMoves();
        }
        // check above
        else if (tokenPlace[Row - 1][Col] == "n") {
            y -= 134;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row - 1][Col] = "y";
            Row -= 1;
            countMoves();
        }
        // check below
        else if (tokenPlace[Row + 1][Col] == "n") {
            y += 134;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row + 1][Col] = "y";
            Row += 1;
            countMoves();
        }
    } else {
        // check left
        if (tokenPlace[Row][Col - 1] == "n") {
            x -= 148;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row][Col - 1] = "y";
            Col -= 1;
            countMoves();
        }
        // check right
        else if (tokenPlace[Row][Col + 1] == "n") {
            x += 148;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row][Col + 1] = "y";
            Col += 1;
            countMoves();
        }
        // check above
        else if (tokenPlace[Row - 1][Col] == "n") {
            y -= 134;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row - 1][Col] = "y";
            Row -= 1;
            countMoves();
        }
        // check below
        else if (tokenPlace[Row + 1][Col] == "n") {
            y += 134;
            tokenPlace[Row][Col] = "n";
            tokenPlace[Row + 1][Col] = "y";
            Row += 1;
            countMoves();
        }
    }
    Row = String(Row);
    Col = String(Col);
    x = String(x);
    y = String(y);
    a.className =
        "row=" + Row + " col=" + Col + " x=" + x + " y=" + y + " button";
    a.style.transition = "transform 0.3s";
    a.style.transform = "translate(" + x + "px, " + y + "px)";
    console.log("Transform finished!");
    checkWin();
}