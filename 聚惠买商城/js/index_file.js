$(function(){
	$('.li1').mouseover(function(){
		
		$('.aa').css('display','block')
	});
	$('.li1').mouseout(function(){	
		
		$('.aa').css('display','none')
	});
	
	
	$('.li4').mouseover(function(){
		
		$('.bb').css('display','block')
	});
	$('.li4').mouseout(function(){	
		
		$('.bb').css('display','none')
	});
	
	
	$('.li5').mouseover(function(){
		
		$('.img1').css('display','block')
	});
	$('.li5').mouseout(function(){	
		
		$('.img1').css('display','none')
	});
	
	
	$('.li6').mouseover(function(){
		
		$('.img2').css('display','block')
	});
	$('.li6').mouseout(function(){	
		
		$('.img2').css('display','none')
	});
	
	
	$('.li7').mouseover(function(){
		$(".img3").css('display','block')
	});
	$('.li7').mouseout(function(){
		$(".img3").css('display','none')
	});
})
			
//二级菜单
$(function(){
	$('.ciadanlist1').mouseover(function(){
		$('.caidanyin1').css("display",'block')
    });
    $('.ciadanlist1').mouseout(function(){
		$('.caidanyin1').css("display",'none')
    });
    
    $('.ciadanlist2').mouseover(function(){
		$('.caidanyin2').css("display",'block')
    });
    $('.ciadanlist2').mouseout(function(){
		$('.caidanyin2').css("display",'none')
    });
    
    $('.ciadanlist3').mouseover(function(){
		$('.caidanyin3').css("display",'block')
    });
    $('.ciadanlist3').mouseout(function(){
		$('.caidanyin3').css("display",'none')
    });
    
    $('.ciadanlist4').mouseover(function(){
		$('.caidanyin4').css("display",'block')
    });
    $('.ciadanlist4').mouseout(function(){
		$('.caidanyin4').css("display",'none')
    });
    
    $('.ciadanlist5').mouseover(function(){
		$('.caidanyin5').css("display",'block')
    });
    $('.ciadanlist5').mouseout(function(){
		$('.caidanyin5').css("display",'none')
    });
    
    $('.ciadanlist6').mouseover(function(){
		$('.caidanyin6').css("display",'block')
    });
    $('.ciadanlist6').mouseout(function(){
		$('.caidanyin6').css("display",'none')
    });
    
    $('.ciadanlist7').mouseover(function(){
		$('.caidanyin7').css("display",'block')
    });
    $('.ciadanlist7').mouseout(function(){
		$('.caidanyin7').css("display",'none')
    });
    
    $('.ciadanlist8').mouseover(function(){
		$('.caidanyin8').css("display",'block')
    });
    $('.ciadanlist8').mouseout(function(){
		$('.caidanyin8').css("display",'none')
    });
})
			
//轮播图
window.onload=function(){
	function $(str){
		return document.getElementById(str);
	}
	var ingIndex=0;  //索引从下标0开始
	function move(){    //轮播
		var a=$("lunboon-div1").children;   //查找子节点
		a[ingIndex].style.display="none";  //查找子节点第一张后隐藏
		ingIndex++; //索引++
		if(ingIndex==a.length){  //索引值等于div的长度
			ingIndex=0;  //循环
		}
		a[ingIndex].style.display="block";  //变量索引显示
		var sp=$("lunboon-div2").children;
		for(var i=0;i<sp.length;i++){
			sp[i].className="";
			sp[ingIndex].className="chengent";
		}
	}
	setInterval(move,1000);
				
				
	//tap切换1
	var p=document.getElementsByClassName("cc-a");
	var ali=p[0].getElementsByTagName("li");
	var CCdiv=document.getElementsByClassName('cc-div');
	var azba=CCdiv[0].getElementsByTagName("div");
	for(var i=0;i<ali.length;i++){
		ali[i].index=i;
		ali[i].onmouseover=function(){
			for(var j=0;j<ali.length;j++){
				ali[j].className="";   //取消默认菜单
				azba[j].className="";  //隐藏所有div
			}
			ali[this.index].className="color-yang";  //给菜单添加默认背景
			azba[this.index].className="zb1";   //取消隐藏
		}
	}
				
//tap切换2
	var qp=document.getElementsByClassName("new-daohangtiao2");
	var qali=qp[0].getElementsByTagName("li");
	var qCCdiv=document.getElementsByClassName('logo-body');
	var qazba=qCCdiv[0].getElementsByTagName("div");
//	console.log("new-daohangtiao2")
//	console.log("li")
//	console.log("logo-body")
//	console.log("div")
	for(var r=0;r<qali.length;r++){
//		alert("r")
		qali[r].index=r;
		qali[r].onmouseover=function(){
			for(var e=0;e<qali.length;e++){
				qali[e].className="";   //取消默认菜单
				qazba[e].className="logo-box";  //隐藏所有div
			}
			qali[this.index].className="mo";  //给菜单添加默认背景
			qazba[this.index].className="";   //取消隐藏
		}
	}			
				
				
//tap切换3
	var DATli=document.getElementsByClassName("dats_new")[0].getElementsByTagName('li');
	var mapa=document.getElementsByClassName("map_body")[0];
	var mapUL=mapa.getElementsByTagName('ul');
//		console.log(DATli);
//		console.log(mapa);
//		console.log(mapUL);
	for (k=0;k<mapUL.length;k++) {
		DATli[k].index=k;
		DATli[k].onmouseover=function(){
			for (l=0;l<mapUL.length;l++) {
				mapUL[l].className='';
			}
			mapUL[this.index].className="mapaa";
		}	
	}
				
				
//1ftap切换
	var yuhui=document.getElementsByClassName("fshang")[0].getElementsByTagName("li");
	var kebi=document.getElementsByClassName("fzhong")[0];
	var ouwen=kebi.getElementsByTagName("div");
//				console.log(yuhui);
//				console.log(kebi);
//				console.log(ouwen);
	for (var o=0;o<yuhui.length;o++){
//					console.log(o);
		yuhui[o].index=o;
		yuhui[o].onmouseover=function(){
			//alert("1")
			for(var p=0;p<yuhui.length;p++){
				yuhui[p].className="";
				ouwen[p].className="zhong_a"; 
			}
			yuhui[this.index].className="yuqi";  //给菜单添加默认背景
			ouwen[this.index].className="";
		}
	}
	
	//2ftap切换
	var yunmo=document.getElementsByClassName("afshang")[0].getElementsByTagName("li");
	var keb=document.getElementsByClassName("afzhong")[0];
	var ouwe=keb.getElementsByTagName("div");
//				console.log(yuhui);
//				console.log(kebi);
//				console.log(ouwen);
	for (var o=0;o<yunmo.length;o++){
//					console.log(o);
		yunmo[o].index=o;
		yunmo[o].onmouseover=function(){
			//alert("1")
			for(var p=0;p<yunmo.length;p++){
				yunmo[p].className="";
				ouwe[p].className="zhong_a1"; 
			}
			yunmo[this.index].className="yuqi";  //给菜单添加默认背景
			ouwe[this.index].className="";
		}
	}
	
	
	//3ftap切换
	var xipei=document.getElementsByClassName("bfshang")[0].getElementsByTagName("li");
	var ke=document.getElementsByClassName("bfzhong")[0];
	var ouw=ke.getElementsByTagName("div");
//				console.log(yuhui);
//				console.log(kebi);
//				console.log(ouwen);
	for (var o=0;o<xipei.length;o++){
//					console.log(o);
		xipei[o].index=o;
		xipei[o].onmouseover=function(){
			//alert("1")
			for(var p=0;p<xipei.length;p++){
				xipei[p].className="";
				ouw[p].className="zhong_a2"; 
			}
			xipei[this.index].className="yuqi";  //给菜单添加默认背景
			ouw[this.index].className="";
		}
	}
	
	//4ftap切换
	var yulong=document.getElementsByClassName("cfshang")[0].getElementsByTagName("li");
	var e=document.getElementsByClassName("cfzhong")[0];
	var ou=e.getElementsByTagName("div");
//				console.log(yuhui);
//				console.log(kebi);
//				console.log(ouwen);
	for (var o=0;o<yulong.length;o++){
//					console.log(o);
		yulong[o].index=o;
		yulong[o].onmouseover=function(){
			//alert("1")
			for(var p=0;p<yulong.length;p++){
				yulong[p].className="";
				ou[p].className="zhong_a3"; 
			}
			yulong[this.index].className="yuqi";  //给菜单添加默认背景
			ou[this.index].className="";
		}
	}
	
	
	//5ftap切换
	var xiaoming=document.getElementsByClassName("dfshang")[0].getElementsByTagName("li");
	var weixiao=document.getElementsByClassName("dfzhong")[0];
	var u=weixiao.getElementsByTagName("div");
//				console.log(yuhui);
//				console.log(kebi);
//				console.log(ouwen);
	for (var o=0;o<xiaoming.length;o++){
//					console.log(o);
		xiaoming[o].index=o;
		xiaoming[o].onmouseover=function(){
			//alert("1")
			for(var p=0;p<xiaoming.length;p++){
				xiaoming[p].className="";
				u[p].className="zhong_a4"; 
			}
			xiaoming[this.index].className="yuqi";  //给菜单添加默认背景
			u[this.index].className="";
		}
	}
	
	//6ftap切换
	var yulon=document.getElementsByClassName("efshang")[0].getElementsByTagName("li");
	var lebulang=document.getElementsByClassName("efzhong")[0];
	var weishi=lebulang.getElementsByTagName("div");
//				console.log(yuhui);
//				console.log(kebi);
//				console.log(ouwen);
	for (var o=0;o<yulon.length;o++){
//					console.log(o);
		yulon[o].index=o;
		yulon[o].onmouseover=function(){
			//alert("1")
			for(var p=0;p<yulon.length;p++){
				yulon[p].className="";
				weishi[p].className="zhong_a5"; 
			}
			yulon[this.index].className="yuqi";  //给菜单添加默认背景
			weishi[this.index].className="";
		}
	}
	
	
	//7ftap切换
	var your=document.getElementsByClassName("ffshang")[0].getElementsByTagName("li");
	var lebu=document.getElementsByClassName("ffzhong")[0];
	var weish=lebu.getElementsByTagName("div");
//				console.log(yuhui);
//				console.log(kebi);
//				console.log(ouwen);
	for (var o=0;o<your.length;o++){
//					console.log(o);
		your[o].index=o;
		your[o].onmouseover=function(){
//			alert("1")
			for(var p=0;p<your.length;p++){
				your[p].className="";
				weish[p].className="zhong_a6"; 
			}
			your[this.index].className="yuqi";  //给菜单添加默认背景
			weish[this.index].className="";
		}
	}
	
	//8ftap切换
	var yul=document.getElementsByClassName("gfshang")[0].getElementsByTagName("li");
	var le=document.getElementsByClassName("gfzhong")[0];
	var wei=le.getElementsByTagName("div");
//				console.log(yuhui);
//				console.log(kebi);
//				console.log(ouwen);
	for (var o=0;o<yul.length;o++){
//					console.log(o);
		yul[o].index=o;
		yul[o].onmouseover=function(){
			//alert("1")
			for(var p=0;p<yul.length;p++){
				yul[p].className="";
				wei[p].className="zhong_a7"; 
			}
			yul[this.index].className="yuqi";  //给菜单添加默认背景
			wei[this.index].className="";
		}
	}
}
			
//1f小轮播			
$(function(){
		$(".ind01_right").click(function(){
			$("#ind01_tp1:not(:animated)").animate({left:-320},
					function(){
						$("#ind01_tp1").find('li').eq(0).appendTo($("#ind01_tp1"));
						$("#ind01_tp1").css({'left':0})
					});				
		});
		
		$(".ind01_left").click(function(){
			$("#ind01_tp1").find('li:last').prependTo($("#ind01_tp1"));
				$("#ind01_tp1").css({left:-320});
				$("#ind01_tp1").stop().animate({left:0});								
		});
		
		var i1=setInterval(i1_01,1000)	
		function i1_01(){
			$("#ind01_tp1:not(:animated)").animate({left:-320},
					function(){
						$("#ind01_tp1").find('li').eq(0).appendTo($("#ind01_tp1"));
						$("#ind01_tp1").css({'left':0})
					});			
		}
})
//2f 小轮播
$(function(){
		$(".ind02_right").click(function(){
			$("#ind02_tp1:not(:animated)").animate({left:-320},
					function(){
						$("#ind02_tp1").find('li').eq(0).appendTo($("#ind02_tp1"));
						$("#ind02_tp1").css({'left':0})
					});				
		});
		
		$(".ind02_left").click(function(){
			$("#ind02_tp1").find('li:last').prependTo($("#ind02_tp1"));
				$("#ind02_tp1").css({left:-320});
				$("#ind02_tp1").stop().animate({left:0});								
		});
		
		var i1=setInterval(i1_01,1000)	
		function i1_01(){
			$("#ind02_tp1:not(:animated)").animate({left:-160},
					function(){
						$("#ind02_tp2").find('li').eq(0).appendTo($("#ind02_tp1"));
						$("#ind02_tp2").css({'left':0})
					});			
		}
})

//3f 小轮播
$(function(){
		$(".ind03_right").click(function(){
			$("#ind03_tp1:not(:animated)").animate({left:-320},
					function(){
						$("#ind03_tp1").find('li').eq(0).appendTo($("#ind03_tp1"));
						$("#ind03_tp1").css({'left':0})
					});				
		});
		
		$(".ind03_left").click(function(){
			$("#ind03_tp1").find('li:last').prependTo($("#ind03_tp1"));
				$("#ind03_tp1").css({left:-320});
				$("#ind03_tp1").stop().animate({left:0});								
		});
		
		var i1=setInterval(i1_01,1000)	
		function i1_01(){
			$("#ind03_tp1:not(:animated)").animate({left:-160},
					function(){
						$("#ind03_tp3").find('li').eq(0).appendTo($("#ind03_tp1"));
						$("#ind03_tp3").css({'left':0})
					});			
		}
})

//4f 小轮播
$(function(){
		$(".ind04_right").click(function(){
			$("#ind04_tp1:not(:animated)").animate({left:-320},
					function(){
						$("#ind04_tp1").find('li').eq(0).appendTo($("#ind04_tp1"));
						$("#ind04_tp1").css({'left':0})
					});				
		});
		
		$(".ind04_left").click(function(){
			$("#ind04_tp1").find('li:last').prependTo($("#ind04_tp1"));
				$("#ind04_tp1").css({left:-320});
				$("#ind04_tp1").stop().animate({left:0});								
		});
		
		var i1=setInterval(i1_01,1000)	
		function i1_01(){
			$("#ind04_tp1:not(:animated)").animate({left:-160},
					function(){
						$("#ind04_tp3").find('li').eq(0).appendTo($("#ind04_tp1"));
						$("#ind04_tp3").css({'left':0})
					});			
		}
})

//5f 小轮播
$(function(){
		$(".ind05_right").click(function(){
			$("#ind05_tp1:not(:animated)").animate({left:-320},
					function(){
						$("#ind05_tp1").find('li').eq(0).appendTo($("#ind05_tp1"));
						$("#ind05_tp1").css({'left':0})
					});				
		});
		
		$(".ind05_left").click(function(){
			$("#ind04_tp1").find('li:last').prependTo($("#ind05_tp1"));
				$("#ind05_tp1").css({left:-320});
				$("#ind05_tp1").stop().animate({left:0});								
		});
		
		var i1=setInterval(i1_01,1000)	
		function i1_01(){
			$("#ind05_tp1:not(:animated)").animate({left:-160},
					function(){
						$("#ind05_tp3").find('li').eq(0).appendTo($("#ind05_tp1"));
						$("#ind05_tp3").css({'left':0})
					});			
		}
})

//6f 小轮播
$(function(){
		$(".ind06_right").click(function(){
			$("#ind06_tp1:not(:animated)").animate({left:-320},
					function(){
						$("#ind06_tp1").find('li').eq(0).appendTo($("#ind06_tp1"));
						$("#ind06_tp1").css({'left':0})
					});				
		});
		
		$(".ind06_left").click(function(){
			$("#ind06_tp1").find('li:last').prependTo($("#ind06_tp1"));
				$("#ind06_tp1").css({left:-320});
				$("#ind06_tp1").stop().animate({left:0});								
		});
		
		var i1=setInterval(i1_01,1000)	
		function i1_01(){
			$("#ind06_tp1:not(:animated)").animate({left:-160},
					function(){
						$("#ind06_tp3").find('li').eq(0).appendTo($("#ind06_tp1"));
						$("#ind06_tp3").css({'left':0})
					});			
		}
})

//7f 小轮播
$(function(){
		$(".ind07_right").click(function(){
			$("#ind07_tp1:not(:animated)").animate({left:-320},
					function(){
						$("#ind07_tp1").find('li').eq(0).appendTo($("#ind07_tp1"));
						$("#ind07_tp1").css({'left':0})
					});				
		});
		
		$(".ind07_left").click(function(){
			$("#ind07_tp1").find('li:last').prependTo($("#ind07_tp1"));
				$("#ind07_tp1").css({left:-320});
				$("#ind07_tp1").stop().animate({left:0});								
		});
		
		var i1=setInterval(i1_01,1000)	
		function i1_01(){
			$("#ind07_tp1:not(:animated)").animate({left:-160},
					function(){
						$("#ind07_tp3").find('li').eq(0).appendTo($("#ind07_tp1"));
						$("#ind07_tp3").css({'left':0})
					});			
		}
})

//8f 小轮播
$(function(){
		$(".ind08_right").click(function(){
			$("#ind08_tp1:not(:animated)").animate({left:-320},
					function(){
						$("#ind08_tp1").find('li').eq(0).appendTo($("#ind08_tp1"));
						$("#ind08_tp1").css({'left':0})
					});				
		});
		
		$(".ind08_left").click(function(){
			$("#ind08_tp1").find('li:last').prependTo($("#ind08_tp1"));
				$("#ind08_tp1").css({left:-320});
				$("#ind08_tp1").stop().animate({left:0});								
		});
		
		var i1=setInterval(i1_01,1000)	
		function i1_01(){
			$("#ind08_tp1:not(:animated)").animate({left:-160},
					function(){
						$("#ind08_tp3").find('li').eq(0).appendTo($("#ind08_tp1"));
						$("#ind08_tp3").css({'left':0})
					});			
		}
})


