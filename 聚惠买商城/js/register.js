
		
			var yonghu=/^[\u4e00-\u9fa5]{3,10}$/; //判断用户名
			
			var mima=/^[a-zA-Z0-9]{2,13}$/;  //判断密码
			
			var shouji=/^13[123569]{1}\d{8}|15[123569]\d{8}|188\d{8}$/;  //判断手机
			
			var youxiang=/^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/;  //判断邮箱
			
			
		function cc(){
				
			var p=yonghu.test(a.value);
			if(!p && a.value){
				document.getElementById("aa").style.display="block";  //格式不正确p
				document.getElementById("a1").style.display="none";  //用户名不能为空p1
			}
			if(!p && !a.value){
				document.getElementById("aa").style.display="none";  //格式不正确p
				document.getElementById("a1").style.display="block";
			}
			if(p && a.value){
				document.getElementById("aa").style.display="none";  //格式不正确p
				document.getElementById("a1").style.display="none";
			}
			
			
			var p1=mima.test(b.value);
			if(!p1 && b.value){
			    document.getElementById("ab").style.display="block";
				document.getElementById("a2").style.display="none";
			}
			if(!p1 && !b.value){
			    document.getElementById("ab").style.display="none";
				document.getElementById("a2").style.display="block";
			}
			if(p1 && b.value){
			    document.getElementById("ab").style.display="none";
				document.getElementById("a2").style.display="none";
			}
			
			
			
			var p2=shouji.test(c.value);
			if(!p2 && c.value){
			    document.getElementById("ac").style.display="block";
				document.getElementById("a3").style.display="none";
			}
			if(!p2 && !c.value){
			    document.getElementById("ac").style.display="none";
				document.getElementById("a3").style.display="block";
			}
			if(p2 && c.value){
			    document.getElementById("ac").style.display="none";
				document.getElementById("a3").style.display="none";
			}
			
			
			
			var p3=youxiang.test(d.value);
			if(!p3 && d.value){
			    document.getElementById("ad").style.display="block";
				document.getElementById("a4").style.display="none";
			}
			if(!p3 && !d.value){
			    document.getElementById("ad").style.display="none";
				document.getElementById("a4").style.display="block";
			}
			if(p3 && d.value){
			    document.getElementById("ad").style.display="none";
				document.getElementById("a4").style.display="none";
				alert("注册成功");
			}
			
			
			var bug="1234567890FAJSKFHFEUKHAUIAOFIOAJKSJhjfijhiakhfieoifhieq";
			var a1=Math.floor(Math.random()*(bug.length-1));
			var a2=Math.floor(Math.random()*(bug.length-1));
			var a3=Math.floor(Math.random()*(bug.length-1));
			var a4=Math.floor(Math.random()*(bug.length-1));
			qq.value=bug.substr(a1,1)+" "+bug.substr(a2,1)+" "+bug.substr(a3,1)+" "+bug.substr(a4,1);
			
		}
			
		
	
