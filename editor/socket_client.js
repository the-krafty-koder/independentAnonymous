let socket = io("https://127.0.0.1:8080");

function getEl(id) {
    return document.getElementById(id);
}

const editor = getEl("editor");

editor.addEventListener("keyup",(evt)=>{
	const text = editor.value;
	socket.send(text);
});

socket.on("message",(data)=>{
	editor.value = data;
});