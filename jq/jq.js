$(function(){
    let index = 0
    let timer = null
    function play(){
    index++
    if(index > 4){
        index=0
    }
    $("img").eq(index).prop("class","img_on").siblings().prop("class","")
    $("span").eq(index).prop("class","span_on").siblings().prop("class","")
    } 
    timer = setInterval(play,1500)
    $("#box").mouseover(function(){
        clearInterval(timer)
    })
    $("#box").mouseout(function(){
        timer = setInterval(play,1500)
        
    })
})