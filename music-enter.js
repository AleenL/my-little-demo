    var cateCt = $('.style-items')
    var stylelist = $('.style-choose')
    var styleBtn = $('.pre-style')
    var style = true;
    var musicList = {};

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


    cateCt.on('click',function(e){
        if(e.target.tagName.toLowerCase()!== 'li') return;
        var channelId = e.target.getAttribute('data-channel-id')
        get('http://api.jirengu.com/fm/getSong.php',{channel:channelId},function(ret){
           
        })
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

    function play(url){
        music.src=url;
        music.play()
    }

    