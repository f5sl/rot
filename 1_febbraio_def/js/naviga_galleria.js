var aux ='';
$(document).ready(function(){
	
	$(".non_cliccare").click(function( event ) {
		event.preventDefault();
	});

	$('#evento1').on('click', function(){
		$('#evento1').addClass('selected');
		$('#tutte').removeClass('selected');
		aux= "Foto evento1"
	        $.ajax({
	             url: './tpl/foto_evento1.html',
	             type: 'GET',
	             dataType: 'html',
	             success: successo
	         });
	    });

	$('#tutte').on('click', function(){
		$('#tutte').addClass('selected');
		$('#evento1').removeClass('selected');
		aux = "Tutte le foto"
		$.ajax({
	             url: './tpl/tutte_le_foto.html',
	             type: 'GET',
	             dataType: 'html',
	             success: successo
	         });
		
	});
});

function successo(data){     
    $('#contenitore_foto').html(data).show('fast');
    $('#briciole').text(aux);
}