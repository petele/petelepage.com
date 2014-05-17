<%@ Page Title="PeteLePage.com - Nothing To See Here" Language="C#" MasterPageFile="~/_templates/WPMystique/1Col.master" %>

<script runat="server">
protected void Page_Load(object sender, EventArgs e) {
	if(Request.ServerVariables["HTTP_ACCEPT"] != null) {
		string accept = Request.ServerVariables["HTTP_ACCEPT"];
		if(accept.ToLower().IndexOf("application/xhtml+xml") != -1) {
			Response.ContentType = "application/xhtml+xml";
		}
	}
}

</script>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
<!--
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
 *-->

    <link href="myPong.css?v=0" rel="Stylesheet" type="text/css" />
	<script src="pong_eng.js?v=0" type="text/javascript"></script>
	<script src="pong_controller.js?v=0" type="text/javascript"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphContent" Runat="Server">

	<span id="info"></span><br />
 	
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="pongCourt">
    	<circle id="ball" r="10" cx="0" cy="0" />
    </svg>

    <br /><br />
    <audio id="sndBounce" preload="auto">
    	<source src="bounce.mp3" />
    </audio>
    
    <div class="gameControls">
    	<!--<a href="#" onclick="startNewGame()">Start New Game</a> <a href="#" onclick="stopGame()">Pause Game</a> <a href="#" onclick="resetGame()">Reset Game</a> <a href="#" onclick="setPlayers(1)">One Player</a> <a href="#" onclick="setPlayers(2)">Two Players</a><br />-->
    	<button onclick="startNewGame()" class="pongButton" type="button">Start New Game</button>
    	<button onclick="stopGame()" class="pongButton" type="button">Pause Game</button>
    	<button onclick="resetGame()" class="pongButton" type="button">Reset Game</button>
    	<button onclick="setPlayers(1)" class="pongButton" type="button">One Player</button>
    	<button onclick="setPlayers(2)" class="pongButton" type="button">Two Players</button><br />
    	<p>The original blog post about this pong game is <a href="http://petelepage.com/blog/2011/04/1970s-retro-pong/">here</a>.</p>
    </div>
    <script type="text/javascript">
    	players = 1;
    	pong_init();
    	orientation_init();
    </script>
    
</asp:Content>

