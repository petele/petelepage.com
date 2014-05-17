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

// Device Orientation for pong_eng.js

function orientation_init() {
	listenForDeviceMovement();
}


function listenForDeviceMovement() {
	if (window.DeviceMotionEvent) {
		console.log("devicemotion");
    	window.addEventListener('devicemotion', function () {
    		if (navigator.userAgent.indexOf("Xoom") > 0) {
    			orientationEventHandler((event.accelerationIncludingGravity.x / 9.8) * -90, (event.accelerationIncludingGravity.y / 9.8) * 90, (event.accelerationIncludingGravity.z / 9.8)-1);
    		} else {
    			orientationEventHandler((event.accelerationIncludingGravity.x / 9.8) * 90, (event.accelerationIncludingGravity.y / 9.8) * -90, (event.accelerationIncludingGravity.z / 9.8)+1);
    		}
    	}, true);
	} else if (window.DeviceOrientationEvent) {
    	console.log("deviceorientation");
    	window.addEventListener("deviceorientation", function () {
    		orientationEventHandler(event.gamma, event.beta, null);
    	}, true);
	} else if (window.OrientationEvent) {
		console.log("MozOrientation");
    	window.addEventListener("MozOrientation", function (event) {
        	orientationEventHandler(event.x * 90, event.y * -90, event.z + 1);
    	}, true);
	} else {
		console.log("No orientation events available");
	}		
}


function orientationEventHandler(x, y, z) { 
	if (paddleOrientation == "horizontal") {
		if (Math.abs(x) > 3) {
			movePaddleB(x);
		}
	} else {
		if (Math.abs(y) > 3) {
			movePaddleA(y);
		}
	}
}