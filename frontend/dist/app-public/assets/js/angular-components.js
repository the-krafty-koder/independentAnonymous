$(document).ready(function(){
	$('.ui.dropdown').dropdown();
	$('.ui.sidebar').sidebar({context: $('.bottom')})
	                .sidebar('setting','dimPage',false)
	                .sidebar('setting','defaultTransition','uncover')
                    .sidebar('attach events', '.menu .item.toggler');
 });

/*$(document).addEventListener('DOMContentLoaded', function() {
    	new GreenAudioPlayer('.video-player');
});*/

function showModal(){
	$('#new-article-modal').modal('show');
};

function showUploadModal(id){
	$(`#${id}`).modal('show');
};

setTimeout(function(){
	document.getElementById('footer').classList.remove('hide-footer');
},3000);