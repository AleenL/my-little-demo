
app.get("/getInfo",function(req,res){
	res.send("hello jirengu")
})

app.get("/getMore",function(req,res){

 var news = [
	{link:"www.baidu.conm",
	 img:"http://upload-images.jianshu.io/upload_images/3257837-c1bbf36b18d98111.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
	 title:"谁才是你的那个唯一，原谅我怀疑自己",
	 content:"你要的爱，不只是依赖，像个大男孩，风吹又日晒..."
	},
	{link:"www.baidu.conm",
	 img:"http://upload-images.jianshu.io/upload_images/3257837-c1bbf36b18d98111.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
	 title:"谁才是你的那个唯一，原谅我怀疑自己",
	 content:"你要的爱，不只是依赖，像个大男孩，风吹又日晒..."
	},
	{link:"www.baidu.conm",
	 img:"http://upload-images.jianshu.io/upload_images/3257837-c1bbf36b18d98111.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
	 title:"谁才是你的那个唯一，原谅我怀疑自己",
	 content:"你要的爱，不只是依赖，像个大男孩，风吹又日晒..."
	},
	{link:"www.baidu.conm",
	 img:"http://upload-images.jianshu.io/upload_images/3257837-c1bbf36b18d98111.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
	 title:"谁才是你的那个唯一，原谅我怀疑自己",
	 content:"你要的爱，不只是依赖，像个大男孩，风吹又日晒..."
	},
	{link:"www.baidu.conm",
	 img:"http://upload-images.jianshu.io/upload_images/3257837-c1bbf36b18d98111.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
	 title:"谁才是你的那个唯一，原谅我怀疑自己",
	 content:"你要的爱，不只是依赖，像个大男孩，风吹又日晒..."
	},
	{link:"www.baidu.conm",
	 img:"http://upload-images.jianshu.io/upload_images/3257837-c1bbf36b18d98111.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
	 title:"谁才是你的那个唯一，原谅我怀疑自己",
	 content:"你要的爱，不只是依赖，像个大男孩，风吹又日晒..."
	}

]
	res.send({
		status:0,
		msg:"hello 饥人谷"
	});
});