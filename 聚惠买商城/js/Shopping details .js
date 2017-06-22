$(function(){
	$("#huiyuan").mousemove(function(){
		$('.yuhui').css('display','block')
	})
	$("#huiyuan").mouseout(function(){
		$('.yuhui').css('display','none')
	})
	
	$("#LIA").mousemove(function(){
		$('#LI_p').css('display','block')
	})
	$("#LIA").mouseout(function(){
		$('#LI_p').css('display','none')
	})
	
	$("#LIB").mousemove(function(){
		$('.LI_div').css('display','block')
	})
	$("#LIB").mouseout(function(){
		$('.LI_div').css('display','none')
	})
	
	$(".sp_a").mousemove(function(){
		$('.sp_div').css('display','block')
	})
	$(".sp_a").mouseout(function(){
		$('.sp_div').css('display','none')
	})
	
	
	
//购物详情页左右轮播图	
	$(".ind01_right").click(function(){
		$("#ind01_tp1:not(:animated)").animate({left:-160},
				function(){
					$("#ind01_tp1").find('li').eq(0).appendTo($("#ind01_tp1"));
					$("#ind01_tp1").css({'left':0})
				});				
	});
	
	$(".ind01_left").click(function(){
		$("#ind01_tp1").find('li:last').prependTo($("#ind01_tp1"));
			$("#ind01_tp1").css({left:-160});
			$("#ind01_tp1").stop().animate({left:0});								
	});
	
	var i1=setInterval(i1_01,3000)	
	function i1_01(){
		$("#ind01_tp1:not(:animated)").animate({left:-160},
				function(){
					$("#ind01_tp1").find('li').eq(0).appendTo($("#ind01_tp1"));
					$("#ind01_tp1").css({'left':0})
				});			
	}
	
//购物详情页上下轮播图	
var il=setInterval(il_01,1000)
    function il_01(){
		$("#ind02_tp1:not(:animated)").animate(   //animate 匹配所有正在执行元素
		{top:-100},
			function(){
			$("#ind02_tp1").find('li').eq(0).appendTo($("#ind02_tp1"));  //实现循环
			$("#ind02_tp1").css({'top':0})
		    }
	    );
    }
    
    $(".ind02_top").click(function(){
    	$("#ind02_tp1").find("li:last").prependTo($("#ind02_tp1"));
    	$("#ind02_tp1").css({top:"-110px"})
    	$("#ind02_tp1").stop().animate({top:"0px"})
    })
    $(".ind02_bottom").click(function(){
    	$("#ind02_tp1:not(:animated)").animate({top:"-110px"},function(){
    		$("#ind02_tp1").find("li:eq(0)").appendTo($("#ind02_tp1"));
    		$("#ind02_tp1").css({top:"0px"})
    	})
    })
	
	
//	跳动到指定距离
	$(".LIA:eq(0)").click(function(){
			window.scrollTo(0,1000)
		})
		$(".LIA:eq(1)").click(function(){
			window.scrollTo(0,1100)
		})
		$(".LIA:eq(2)").click(function(){
			window.scrollTo(0,19700)
		})
		$(".LIA:eq(3)").click(function(){
			window.scrollTo(0,20700)
		})




	$(".LIB:eq(0)").click(function(){
			window.scrollTo(0,1000)
		})
		$(".LIB:eq(1)").click(function(){
			window.scrollTo(0,1100)
		})
		$(".LIB:eq(2)").click(function(){
			window.scrollTo(0,19700)
		})
		$(".LIB:eq(3)").click(function(){
			window.scrollTo(0,20000)
		})
		$(".LIB:eq(4)").click(function(){
			window.scrollTo(0,20700)
		})
		$(".LIB:eq(5)").click(function(){
			window.scrollTo(0,21100)
		})
	
	
	
	
})

//	鼠标滚动到一定距离然后固定定位)//
	$(window).scroll(function(){
		var rr=$(window).scrollTop();
		if(rr>=1000){
			$(".fang_daohangtiao").css({"position":"fixed","top":"0px","right":"223px","z-index":"100"});
			$(".fxia_you").css({"position":"fixed","top":"0px","right":"68px","z-index":"100"});
			}else{
				$(".fang_daohangtiao").css("position","static");
				$(".fxia_you").css("position","static");
		}
	})









    $("#jian").click(function(){
		var tt=$(this).next();
		tt.val(parseInt(tt.val())-1);
		if (tt.val() <= 0) {
            tt.val(0);
        }
		TotalPrice();
	})
	
	$("#jia").click(function(){
		var ts=$(this).prev();
		ts.val(parseInt(ts.val())+1);
		TotalPrice();
	})
	function TotalPrice(){
		
		var zong=0;
		var dan=parseFloat($("span").text());
	var num=parseInt(($("#jia").prev()).val());
	zong=num*dan;
	//			alert(zong);
	$("a").text(zong);
	}








