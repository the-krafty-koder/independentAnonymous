<html>
<head>
	<title>Article</title>
	<link rel="stylesheet" type="text/css" href="/semantic/semantic.min.css">
	<link rel="stylesheet" type="text/css" href="/editor/editor.css">

	
</head>

<body>
	<div class="wrapper">
	<div class="ui header">
		<nav>
    	<div class="ui menu">
    		<a class="item">Browse</a>
    		<a class="item">Submit</a>
    		<div class="right menu">
    			<a class="item">Submit</a>
    		</div>
    	</div>
        </nav>
	</div>
	<div class="ui section" id="article-section">
	<div class="ui grid">
		<div class="row">
			<div class="two wide column"></div>
			<div class="twelve wide column">
				<form class="ui form" id="editor" method="post" onload="addAction()">
					<textarea oninput="auto_grow(this)" id="article-area" name="article" value="Default name for team.">
    		        </textarea>
    		        <input type="submit" value="OK">
    		    </form>
			</div>
		</div>
	</div>
	</div>
	</div>
    <!--<script src="./socket.io-client/dist/socket.io.js"></script>
    <script src="./socket_client.js"></script>-->
    <script src="/js/jquery.min.js"></script>
    <script src="/semantic/semantic.min.js"></script>
    <script src="/js/onload.js"></script>
</body>

</html>