	var pageIndex = 0;
	var isOver=false;
	var newsret=true;

	getNews();

	$(window).on("scroll",checkNews)

	function checkNews(){
		if(isShow($("#load")) && !isOver && newsret){
				getNews();
				WaterFall.init($(".items"));
			}
	}
	function getNews(){
		newsret=false;
		$.get('/getMore', {page: pageIndex}).done(function(ret){
		newsret=true;
		if(ret.status===0){
		pageIndex++;
		
		appendHtml(ret.data)
		checkNews()
		}else{
			alert("获取失败");
		}
		
		}).fail(function(){
			alert("系统异常")
		})
	}
		function isShow($node){
		var windowHeight=$(window).height(),
			scrollTop=$(window).scrollTop(),
			offsetTop=$node.offset().top,
			nodeHeight=$node.height();
			console.log(offsetTop)

		if(windowHeight+scrollTop>offsetTop && scrollTop<offsetTop+nodeHeight){
			return true
		}else{
			return false
		}
	}

 function appendHtml(news){
		var htmls="";
		if (news.length===0){
		isOver=true;
		$("#load").remove();
		htmls="<li class='h1'>没有更多的数据了</li>";
		$(".items").append(htmls)
		return;
	}
		$.each(news ,function(){
		htmls+="<li class='h1'><a href='";
		htmls+=this.link;
		htmls+="'><img src='";
		htmls+=this.img;
		htmls+="' alt=''><div class='text'><h3>";
		htmls+=this.title;
		htmls+="</h3><p>";
		htmls+=this.contents;
		htmls+="</p></div></a></li>"
		})
		$(".items").append(htmls)
	}


/*------------初始化-----------*/
/*
function Barrels($ct) {
	var pageIndex = 0;
	var isOver=false;
	var newsret=true;
}

	Barrels.prototype={
		getNews: function(){
		newsret=false;
		$.get(url, {page: pageIndex}).done(function(ret){
		newsret=true;
		console.log(lorddiv)
		console.log(url);
		if(ret.status===0){
		pageIndex++;
		
		appendHtml(ret.data)
		checkNews()
		}else{
			alert("获取失败");
		}
		
		}).fail(function(){
			alert("系统异常")
		})
		}
	},
		checkNews:function(){
		if(isShow($(url)) && !isOver && newsret){
				getNews(url,lorddiv,sondiv);
			}
	},
		appendHtml:function(news){
		var htmls="";
		if (news.length===0){
		isOver=true;
		$(lorddiv).remove();
		htmls="<li>没有更多的数据了</li>";
		$(sondiv).append(htmls)
	}
		$.each(news ,function(){
		htmls+="<li><a href='";
		htmls+=this.link;
		htmls+="'><img src='";
		htmls+=this.img;
		htmls+="' alt=''><div class='text'><h3>";
		htmls+=this.title;
		htmls+="</h3><p>";
		htmls+=this.contents;
		htmls+="</p></div></a></li>"
		})
		$(sondiv).append(htmls)
	},
		isShow: function ($node){
		var windowHeight=$(window).height(),
			scrollTop=$(window).scrollTop(),
			offsetTop=$node.offset().top,
			nodeHeight=$node.height();

		if(windowHeight+scrollTop>offsetTop && scrollTop<offsetTop+nodeHeight){
			return true
		}else{
			return false
		}
	},

*/

















	}