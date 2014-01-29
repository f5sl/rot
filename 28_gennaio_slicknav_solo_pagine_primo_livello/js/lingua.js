$(document).ready(function(){

	$('.icone_lingua').mouseover(function(){
			alert("bella");
	});
});

function successo(data){     
    $('#navigazione_locale').html(data).show('fast');
    $('#briciole').text("Archivio eventi")
}