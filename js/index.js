//点击导航切换页面内容
$("footer b:nth-child(1)").click(function(){
	$("#rongQi #m2").hide();
	$("#shouYe").show();
});

$("footer b:nth-child(2)").click(function(){
	
	$("#rongQi").load("wenZhang.html");
	$("#shouYe").hide();
});
