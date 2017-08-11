proTree('musicTree')

function proTree(url){
	var zTreeObj
	// zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
	var setting = {
		callback:{
			onClick:treeClick
		}
	}
	// zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
	
	var zNodes
	
	//使用异步加载需要在setting中开启
	$.get({
		async:false,
		url:url,
		success:function(data){
			zNodes = data
		}
	})

	$(document).ready(function(){
		zTreeObj = $.fn.zTree.init($("#left_tree"), setting, zNodes)
	})
}


$('.nav li a').click(function(e){
	var type = $(this).attr('data-type')
	if(type=='music'){
		changeNavsColor('music')
		proTree('musicTree')
		
	}else if(type=='video'){
		changeNavsColor('video')
		proTree('videoTree')
	}else if(type=='photo'){
		changeNavsColor('photo')
		proTree('photoTree')
	}
	e.preventDefault() 
})

function changeNavsColor(type){
	$('.nav li a').removeClass('bg-success')
	$('.nav li a[data-type="'+type+'"]').addClass('bg-success')
}

function treeClick(){
	$.get('static/html/right.html',function(data){
		$('#right').html(data)
	})
}
	