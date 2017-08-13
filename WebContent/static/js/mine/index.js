$(document).ready(function(){
	$.get('static/html/top.html',function(data){
		$('#top').html(data)
	})
	
	$.get('static/html/left.html',function(data){
		$('#left').html(data)
	})
	
	$.get('static/html/bottom.html',function(data){
		$('#bottom').html(data)
	})
})