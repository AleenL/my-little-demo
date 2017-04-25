$(".bear").animate({left:'48%'},10000);
$(".moon").animate({left:"-200px"},100000);
$(".web-font").animate({opacity:1},3000)

var height = $(window).height();
$(".start").css("height", height);
$(".back").css("height",height)
    

var infobar = document.querySelector('.musicbox .infobar')
var backBtn = document.querySelector('.musicbox .goback')
var playBtn = document.querySelector('.musicbox .fa-play')
var forwardBtn = document.querySelector('.musicbox .forward')
var titleNode = document.querySelector('.musicbox .title')
var authorNode = document.querySelector('.musicbox .auther')
var timeNode = document.querySelector('.musicbox .time')
var progressBarNode = document.querySelector('.musicbox .progress .bar')
var progressNowNode = document.querySelector('.musicbox .progress-now')
var volumeBar = document.querySelector('.musicbox .volume')
var volumeBarNode = document.querySelector('.musicbox .volume .volume-bar')
var volumeNowNode = document.querySelector('.musicbox .volume .volume-now')
var setVolume = document.querySelector('.musicbox .vidio')
var like = document.querySelector('.musicbox .like')

var music = new Audio()
music.autoplay = true
var musicIndex = 0
var musicList = {};
var Pic=$('.covers')
var cateCt = $('.style-items')
var stylelist = $('.style-choose')
var styleBtn = $('.pre-style')
var style = true;
var musicList = [{
  src: '',
    title: '',
    auther: ''
}];


cateCt.on('click',function(e){
        if(e.target.tagName.toLowerCase()!== 'li') return;
        var channelId = e.target.getAttribute('data-channel-id')
        getMusic(channelId)
        })

function getMusic(channelId){
        get('http://api.jirengu.com/fm/getSong.php',{channel:channelId},function(ret){
           for(var key in ret.song){
            musicList[key].src=ret.song[key].url
           musicList[key].title = ret.song[key].title;
           musicList[key].auther = ret.song[key].artist;
           musicList[key].pic = ret.song[key].picture
           }
           
           loadMusic(musicList[musicIndex])
        })
}
function getLrc(lrcUrl){
  get(lrcUrl,{},function(ret){
    console.log(ret)
  },"text")
}
var musicicon = false;
playBtn.onclick = function(){
 
 if(!musicicon){
  music.pause()
   this.innerHTML="&#xe609;"
   Pic.css("animationPlayState",'paused')
   
   musicicon=true;
 }else{
   music.play()
   this.innerHTML = "&#xe600;"
   Pic.css("animationPlayState",'running')
   musicicon=false
 }
}

forwardBtn.onclick = loadNextMusic
backBtn.onclick = loadLastMusic
music.onended = loadNextMusic
music.shouldUpdate = true
music.ontimeupdate = function(){
  var _this = this
  if(_this.shouldUpdate) { 
     updateProgress()
     _this.shouldUpdate = false
    setTimeout(function(){
      _this.shouldUpdate = true
    }, 1000)
  }
}
progressBarNode.onclick = function(e){
  var percent = e.offsetX/parseInt(getComputedStyle(this).width)
  music.currentTime = percent * music.duration
  progressNowNode.style.width = percent*100+"%"
}

setVolume.onmouseover= function(e){
  setVolume.style.right="110px"
  $(volumeBar).animate({width:'100px'})
}
var color = false;
like.onclick = function(){
  if(!color){
    like.style.color = "pink"
    color = true
  }else{
    like.style.color = "#fff"
    color = false
  }
}
var musicvolume = false;
setVolume.onclick= function(e){
  
 if(!musicvolume){
   music.muted=true;
   this.innerHTML="&#xe602;"
   musicvolume = true;
 }else{
   music.muted=false;
   this.innerHTML = "&#xe6be;"
   musicvolume=false;
 }

}

volumeBarNode.onclick = function(e){
  music.volume = 0.2;
  var percent = e.offsetX/parseInt(getComputedStyle(this).width)
  music.volume = percent;
  volumeNowNode.style.width = percent*100+'%'
  setTimeout(function(){
      $(volumeBar).animate({width:0},0)
      setVolume.style.right="10px"
  },3000)
}




function loadMusic(songObj){
  music.src = songObj.src
  titleNode.innerText = songObj.title
  authorNode.innerText = songObj.auther
  Pic.css("background-image",'url('+songObj.pic+')')
}

function loadNextMusic(){
  musicIndex++
  musicIndex = musicIndex%musicList.length
  loadMusic(musicList[musicIndex]) 
  like.style.color = "#ccc"
  color = false
}

function loadLastMusic(){
  musicIndex--
  musicIndex = (musicIndex + musicList.length)%musicList.length
  loadMusic(musicList[musicIndex]) 
  like.style.color = "#ccc"
  color = false 
}

function updateProgress(){
  var percent = (music.currentTime/music.duration)*100+'%'
  progressNowNode.style.width = percent
  
  var minutes = parseInt(music.currentTime/60)
  var seconds = parseInt(music.currentTime%60)+''
  seconds = seconds.length == 2? seconds : '0'+seconds
  timeNode.innerText = minutes + ':' + seconds


}

    styleBtn.on('click',function(){
        if(style){
            stylelist.css('display','block')
            style = false
        }else{
            stylelist.css('display','none')
            style = true
        }
    })
     get('http://api.jirengu.com/fm/getChannels.php', {}, function(ret){
      renderSet(ret.channels)
    })


    
    


    function renderSet(channels){
        var style = $('.style-items');
        var html = channels.map(function(channel){
           return '<li data-channel-id="' + channel.channel_id + '">' + channel.name + '</li>'
        })
        style.append(html)
    }

    function get(url,data,callback,dataType){
        url += "?" +Object.keys(data).map(function(key){
            return key + '=' + data[key]
        }).join('&')

        var xhr = new XMLHttpRequest()
        xhr.responseType = dataType || "json"
        xhr.onload = function(){
            callback(xhr.response)
        }
        xhr.open('GET',url,true)
        xhr.send()
    }
