
//      var a=document.getElementById("dd1");
//		var b=document.getElementById("tt");
//		var c=document.getElementById("btn");
//		console.log("dd1")
//		console.log("tt")
//		console.log("bu")
//		c.onclick=function aa(){
//			if(b.value){
//				var time=document.createElement("div");//创建一个新的容器，存放下面获取的时间
//			    var mydate=new Date();//获取时间
//			    time.innerHTML=mydate.toLocaleString();//给新建的容器赋值
//			    a.appendChild(time);//给留言板添加内容
//			
//			    var nei=document.createElement("div");
//			    nei.innerHTML=b.value;
//			    b.value="";
//			    a.appendChild(nei);
//			}
//		}

        var a=document.getElementById("dd1");
		var b=document.getElementById("tt");
		var d=document.getElementById("ee");
		var c=document.getElementById("btn");
		c.onclick=function aa(){
			if(!d.value && !b.value){
				alert("主题内容不能为空\n留言内容不能为空")
			}
			else if(!d.value && b.value){
				alert("主题内容不能为空")
				
			}
			else if(d.value && !b.value){
				alert("留言内容不能为空")
			}
			else if(d.value && b.value){
				var nee=document.createElement("div");
			    nee.innerHTML=d.value;
			    d.value="";
			    a.appendChild(nee);
			    
				var time=document.createElement("div");//创建一个新的容器，存放下面获取的时间
			    var mydate=new Date();//获取时间
			    time.innerHTML=mydate.toLocaleString();//给新建的容器赋值
			    a.appendChild(time);//给留言板添加内容
			    
			    var nei=document.createElement("div");
			    nei.innerHTML=b.value;
			    b.value="";
			    a.appendChild(nei);
			    
			}
		}
















