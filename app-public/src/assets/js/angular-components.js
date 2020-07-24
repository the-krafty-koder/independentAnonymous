$(document).ready(function(){
	$('.ui.dropdown').dropdown();
	$('.ui.sidebar').sidebar({context: $('.bottom')})
	                .sidebar('setting','dimPage',false)
	                .sidebar('setting','defaultTransition','uncover')
                    .sidebar('attach events', '.menu .item.toggler');
    
;
;
 });

function showModal(){
	$('#new-article-modal').modal('show');
};

function showUploadModal(id){
	$(`#${id}`).modal('show');
};