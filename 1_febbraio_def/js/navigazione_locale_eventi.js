var aux ='';
$(document).ready(function(){	
	$('.non_cliccare').click(function( event ) {
		event.preventDefault();
	});
	function get_events_2013(){
		$('#div_past').addClass('nav_locale_selected');
		$('#div_next').removeClass('nav_locale_selected');
		$('#past').addClass('selected');
		$('#next').removeClass('selected');
		$('#past').removeClass('nav_locale');
		$('#next').addClass('nav_locale');
		aux= "Eventi del 2013"
	        $.ajax({
	             url: './tpl/navigazione_locale_archivio_eventi.html',
	             type: 'GET',
	             dataType: 'html',
	             success: successo
         });
    	$.ajax({
	             url: './tpl/eventi_del_2013.html',
	             type: 'GET',
	             dataType: 'html',
	             success: mostra_eventi
	     });

	    }

	function get_next_events(){	
		$('#div_next').addClass('nav_locale_selected');
		$('#div_past').removeClass('nav_locale_selected');
		$('#next').addClass('selected');
		$('#past').removeClass('selected');
		$('#next').removeClass('nav_locale');
		$('#past').addClass('nav_locale');
		aux = "Tutti i prossimi eventi"
		$.ajax({
	             url: './tpl/navigazione_locale_prossimi_eventi.html',
	             type: 'GET',
	             dataType: 'html',
	             success: successo
     	});
     	$.ajax({
	             url: './tpl/tutti_i_prossimi_eventi.html',
	             type: 'GET',
	             dataType: 'html',
	             success: mostra_eventi
         });
		
	}
	$(document).ready(get_next_events);
	$('#next').on('click', get_next_events);
	$('#past').on('click', get_events_2013);
	$('#eventi_2013').on('click',get_events_2013);
    $('#tutti_i_prossimi').on('click',get_next_events);

});
function successo(data){     
    $('#navigazione_locale').html(data).show('fast');
    $('#briciole').text(aux);
  }
function mostra_eventi(data){
	$('#contenitore_news').html(data).show('fast');
}