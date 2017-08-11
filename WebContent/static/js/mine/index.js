$(document).ready(function(){
	$.get('static/html/left.html',function(data){
		$('#left').html(data)
	})
})