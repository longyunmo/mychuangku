//$(".deng_zhong").hover(function(){
//	$(".logo_zhong").animate({width:"300px"});
//	$(".deng_jiemiang").animate({width:"300px"});
//})

$(".it").dblclick(function(){
	$(".zhang").show();
})
$("body").click(function(){
	$(".zhang").hide();
})

function ww(){
			var bug="1234567890FAJSKFHFEUKHAUIAOFIOAJKSJhjfijhiakhfieoifhieq";
			var a1=Math.floor(Math.random()*(bug.length-1));
			var a2=Math.floor(Math.random()*(bug.length-1));
			var a3=Math.floor(Math.random()*(bug.length-1));
			var a4=Math.floor(Math.random()*(bug.length-1));
			yonghu.value=bug.substr(a1,1)+" "+bug.substr(a2,1)+" "+bug.substr(a3,1)+" "+bug.substr(a4,1);
}














