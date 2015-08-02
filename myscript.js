$(function(){
	console.log('跑我');
	var runonce=false;
	setInterval(function(){
		$('div#contentArea').css('display','block');
		$('div[id*="topnews_main_stream"]').html(" ");
		if(!runonce){
			$('div#contentArea').append($('div#pagelet_navigation').html());
			runonce=true;
		}
		//$('div#leftCol div#pagelet_navigation').html(" ");	
	},500);

	
});