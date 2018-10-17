/*
 * Copyright (c) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Author: Pete LePage <petele@google.com>
 */

var ballMoveByX = 6;
var ballMoveByY = 6;
var ballVelocity = 35;
var paddleVelocity = 10;
var players = 1;
var paddleOrientation;
var paddleLength = 150;
var paddleWidth = 6;
var incrementGameSpeed = 5;

var worldTimer, gameTime;
var paddleA, paddleALocX, paddleALocY;
var paddleB, paddleBLocX, paddleBLocY;
var paddleSizeX, paddleSizeY;
var ball, ballX, ballY;
var court, courtWidth, courtHeight;
var soundBounce;
var keyPressedUp, keyPressedDown, keyPressedLeft, keyPressedRight;
var keyPressedA, keyPressedS, keyPressedZ;

var gameRunning = false;

function startNewGame() {
	resetGame();
	startGame();
}

function startGame() {	
	var d = new Date();
	gameTime = (d.getTime() / 1000);	
	gameRunning = true;
	moveBall();
}

function stopGame() {
	gameRunning = false;
}

function resetGame() {
	console.log("Reset Game");
	gameRunning = false;
	clearTimeout(worldTimer);
	setupPaddles();
	
	console.log(" set ball initial position");
	ballX = Math.floor(courtWidth / 2);
	ballY = Math.floor(courtHeight / 2);
	ball.setAttribute("cx", ballX);
	ball.setAttribute("cy", ballY);
	if (Math.random() > 0.5){
		ballMoveByX *= -1;
	}
	if (Math.random() > 0.5) {
		ballMoveByY *= -1;
	}
}

function pong_init() {
	createCourt();
	resetGame();
	window.addEventListener('keydown', keyDown, false);
	window.addEventListener('keyup', keyUp, false);
	soundBounce = document.getElementById("sndBounce");
}


function createCourt() {
	court = document.getElementById("pongCourt");
	ball = document.getElementById("ball");
	var svgns = "http://www.w3.org/2000/svg";
	var svgCourt = court.ownerDocument;
	var margin = 100;

	courtHeight = 500;
	courtWidth = 700;

	court.setAttribute("height", courtHeight + "px");
	court.setAttribute("width", courtWidth + "px");
	court.style.marginLeft = margin - 10 + "px";
	console.log("  court size: [" + courtHeight + ", " + courtWidth + "]");
	
	if (courtHeight > courtWidth) {
		paddleOrientation = "vertical";
	} else {
		paddleOrientation = "horizontal";
	}
	
	paddleA = svgCourt.createElementNS(svgns, "rect");
	court.insertBefore(paddleA, ball);
	paddleB = svgCourt.createElementNS(svgns, "rect");
	court.insertBefore(paddleB, ball);
}

function setupPaddles(){
	
	if (paddleOrientation == "vertical") {
		paddleSizeX = paddleWidth;
		paddleSizeY = paddleLength;
		paddleALocX = 50;
		paddleALocY = 0;
		paddleBLocX = courtWidth-50-paddleSizeX;
		paddleBLocY = 0;
		if (players == 1) {
			paddleA.style.visibility = "visible";
			paddleB.style.visibility = "hidden";
		} else {
			paddleA.style.visibility = "visible";
			paddleB.style.visibility = "visible";
		}
	} else {
		paddleSizeX = paddleLength;
		paddleSizeY = paddleWidth;
		paddleALocX = 0;
		paddleALocY = 50;
		paddleBLocX = 0;
		paddleBLocY = courtHeight-50-paddleSizeY;
		if (players == 1) {
			paddleA.style.visibility = "hidden";
			paddleB.style.visibility = "visible";
		} else {
			paddleA.style.visibility = "visible";
			paddleB.style.visibility = "visible";
		}
	}
	
	paddleA.setAttribute("width", paddleSizeX + "px");
	paddleA.setAttribute("height", paddleSizeY);
	paddleA.setAttribute("x", paddleALocX + "px");
	paddleA.setAttribute("y", paddleALocY + "px");
	
	paddleB.setAttribute("width", paddleSizeX + "px");
	paddleB.setAttribute("height", paddleSizeY);
	paddleB.setAttribute("x", paddleBLocX + "px");
	paddleB.setAttribute("y", paddleBLocY + "px");
	
}

function setPlayers(count) {
	if (count == 1) {
		players = 1;
	} else {
		players = 2;
	}
	setupPaddles();
}
   
function moveBall() {
	movePaddles();
	if (players == 1) {
		if (paddleOrientation == "horizontal") {
			if (ballY >= courtHeight) {
				gameOver();
			} else if ((ballX <= 1) || (ballX >= courtWidth)) {
				// Left || Right 
				ballMoveByX *= -1;
				ballSound();
			} else if (ballY <= 0) {
				// Top
				ballMoveByY *= -1;
				ballSound();
			} else if ((ballX >= paddleBLocX) && (ballX <= paddleBLocX + paddleSizeX) && (ballY <= paddleBLocY+paddleSizeY) && (ballY >= paddleBLocY)) {
				// Bottom Paddle
				ballMoveByY *= -1;
				ballSound();
			}
		} else {
			if (ballX <= 0) {
				gameOver();
			} else if ((ballY <= 0) || (ballY >= courtHeight)) {
				// Top || Bottom
				ballMoveByY *= -1;
				ballSound();
			} else if (ballX >= courtWidth) {
				// Right 
				ballMoveByX *= -1;
				ballSound();
			} else if ((ballY >= paddleALocY) && (ballY <= paddleALocY + paddleSizeY) && (ballX <= paddleALocX+paddleSizeX) && (ballX >= paddleALocX)) {
				// Left Paddle
				ballMoveByX *= -1;
				ballSound();
			} 
		}
	} else {
		if (paddleOrientation == "horizontal") {
			if ((ballY >= courtHeight) || (ballY <= 0)) {
				gameOver();
			} else if ((ballX <= 0) || (ballX >= courtWidth)) {
				// Left || Right
				ballMoveByX *= -1;
				ballSound();
			} else if ((ballX >= paddleBLocX) && (ballX <= paddleBLocX + paddleSizeX) && (ballY <= paddleBLocY+paddleSizeY) && (ballY >= paddleBLocY)) {
				// Bottom Paddle
				ballMoveByY *= -1;
				ballSound();
			} else if ((ballX >= paddleALocX) && (ballX <= paddleALocX + paddleSizeX) && (ballY <= paddleALocY+paddleSizeY) && (ballY >= paddleALocY)) {
				// Top Paddle
				ballMoveByY *= -1;
				ballSound();
			}
		} else {
			if ((ballX <= 0) || (ballX >= courtWidth)) {
				gameOver();
			} else if ((ballY <= 0) || (ballY >= courtHeight)) {
				// Top || Bottom
				ballMoveByY *= -1;
				ballSound();
			} else if ((ballY >= paddleALocY) && (ballY <= paddleALocY + paddleSizeY) && (ballX <= paddleALocX+paddleSizeX) && (ballX >= paddleALocX)) {
				// Left Paddle
				ballMoveByX *= -1;
				ballSound();
			} else if ((ballY >= paddleBLocY) && (ballY <= paddleBLocY + paddleSizeY) && (ballX <= paddleBLocX+paddleSizeX) && (ballX >= paddleBLocX)) {
				// Right Paddle
				ballMoveByX *= -1;
				ballSound();
			}
		}
	}

	ballX += ballMoveByX;
	ballY += ballMoveByY;
	ball.setAttribute("cx", ballX);
	ball.setAttribute("cy", ballY);
	
	var d = new Date();
	var curTime = d.getTime() / 1000;
	if (gameRunning) {
		if (((gameTime + incrementGameSpeed) < curTime) && (ballVelocity >= 10)) {
				gameTime = curTime;
			ballVelocity -= 2;	
		}
		worldTimer = setTimeout("moveBall()", ballVelocity);
	}
}

function ballSound() {
	soundBounce.play();
}

function gameOver() {
	stopGame();
	console.log("Game Over");
}

function movePaddles() {
	if (paddleOrientation == "vertical") {
		if (keyPressedA) {
			movePaddleA(-paddleVelocity);
		} else if (keyPressedZ) {
			movePaddleA(paddleVelocity);
		} else if (keyPressedDown) {
			movePaddleB(paddleVelocity);
		} else if (keyPressedUp) {
			movePaddleB(-paddleVelocity);
		} 
	} else {
		if (keyPressedLeft) {
			movePaddleB(-paddleVelocity);
		} else if (keyPressedRight) { 
			movePaddleB(paddleVelocity);
		} else if (keyPressedA) {
			movePaddleA(-paddleVelocity);
		} else if (keyPressedS) {
			movePaddleA(paddleVelocity);
		}
	}
}

function movePaddleA(amount) {
	if (paddleOrientation == "vertical") {	
		if ((paddleALocY+amount >= 0) && (paddleALocY + paddleSizeY + amount <= courtHeight )) {
			paddleALocY += amount;
			paddleA.setAttribute("y", paddleALocY);
		}
	} else {
		if ((paddleALocX+amount >= 0) && (paddleALocX + paddleSizeX + amount <= courtWidth)) {
			paddleALocX += amount;
			paddleA.setAttribute("x", paddleALocX);
		}
	}
}

function movePaddleB(amount) {
	if (paddleOrientation == "vertical") {
		if ((paddleBLocY+amount >= 0) && (paddleBLocY + paddleSizeY + amount <= courtHeight )) {
			paddleBLocY += amount;
			paddleB.setAttribute("y", paddleBLocY);
		}
	} else {
		if ((paddleBLocX + amount >= 0) && (paddleBLocX + paddleSizeX + amount <= courtWidth)) {
			paddleBLocX += amount;
			paddleB.setAttribute("x", paddleBLocX);
		}
	}
}

function keyDown(e) {
	var keyCode = e.keyCode;
	//console.log("Key Down: " + keyCode);
	if (keyCode == 37) {
		// LEFT
		keyPressedLeft = true;
	} else if (keyCode == 39) {
		// RIGHT
		keyPressedRight = true;
	} else if (keyCode == 38) {
		// UP
		keyPressedUp = true;
	} else if (keyCode == 40) {
		// DOWN
		keyPressedDown = true;
	} else if (keyCode == 65) {
		// A
		keyPressedA = true;
	} else if (keyCode == 83) {
		// S
		keyPressedS = true;
	} else if (keyCode == 90) {
		// Z
		keyPressedZ = true;
	} else if (keyCode == 78) {
		startNewGame();
	} else if (keyCode == 82) {
		resetGame();
	} else if (keyCode == 80) {
		if (gameRunning) {
			stopGame();
		} else {
			startGame();
		}
	} else if ((keyCode == 49) || (keyCode == 97)) {
		setPlayers(1);
	} else if ((keyCode == 50) || (keyCode == 98)) {
		setPlayers(2);
	}
}

function keyUp(e) {
	var keyCode = e.keyCode;
	//console.log("Key Up: " + keyCode);
	if (keyCode == 37) {
		// LEFT
		keyPressedLeft = false;
	} else if (keyCode == 39) {
		// RIGHT
		keyPressedRight = false;
	} else if (keyCode == 38) {
		// UP
		keyPressedUp = false;
	} else if (keyCode == 40) {
		// DOWN
		keyPressedDown = false;
	} else if (keyCode == 65) {
		// A
		keyPressedA = false;
	} else if (keyCode == 83) {
		// S
		keyPressedS = false;
	} else if (keyCode == 90) {
		// Z
		keyPressedZ = false;
	}
}