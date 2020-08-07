function addAction(){
    let form = document.getElementById("editor")
    let querystring = window.location.href.split("editor")[2];
    form.action = `/editor/editor${querystring}`;
};

    	