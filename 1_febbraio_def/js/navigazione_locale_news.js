var aux ='';
$(document).ready(function(){

	$('.non_cliccare').click(function( event ) {
		event.preventDefault();
	});

	function get_last_news(){
		$('#div_next').addClass('nav_locale_selected');
		$('#div_past').removeClass('nav_locale_selected');
		$('#next').addClass('selected');
		$('#past').removeClass('selected');
		$('#next').removeClass('nav_locale');
		$('#past').addClass('nav_locale');
		aux = "Tutte le ultime news"
		$.ajax({
	             url: './tpl/navigazione_locale_ultime_news.html',
	             type: 'GET',
	             dataType: 'html',
	             success: successo
	 	});

	 	$.ajax({
	             url: './tpl/tutte_le_ultime_news.html',
	             type: 'GET',
	             dataType: 'html',
	             success: mostra_news
	     });
	}
		
	function get_news_2013(){	
		$('#div_past').addClass('nav_locale_selected');
		$('#div_next').removeClass('nav_locale_selected');
		$('#past').addClass('selected');
		$('#next').removeClass('selected');
		$('#past').removeClass('nav_locale');
		$('#next').addClass('nav_locale');
		aux= "News del 2013"
        $.ajax({
	             url: './tpl/navigazione_locale_archivio_news.html',
	             type: 'GET',
	             dataType: 'html',
	             success: successo
         });

        $.ajax({
	             url: './tpl/news_del_2013.html',
	             type: 'GET',
	             dataType: 'html',
	             success: mostra_news
         });
    }


	$('#next').on('click', get_last_news);
	$('#past').on('click', get_news_2013);
	$('#news_2013').on('click', get_news_2013);
    $('#tutte_le_ultime').on('click',get_last_news );
  });



function successo(data){     
    $('#navigazione_locale').html(data).show('fast');
    $('#briciole').text(aux);
     
}
function mostra_news(data){
	$('#contenitore_news').html(data).show('fast');
}
