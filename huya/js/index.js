  var wrap = document.querySelector(".wrap");
    //左右箭头切换
    var next = document.querySelector(".arrow_right");
    var prev = document.querySelector(".arrow_left");
     var index = 0;
    next.onclick = function () {
      next_pic();
    }
    prev.onclick = function () {
      prev_pic();
    }
    function next_pic () {
      index++;
      if(index > 2){
        index = 0;
      }
      showCurrentDot();
      var newLeft;
      if(wrap.style.left ==="-1248px"){
        newLeft = -624;
      }else{
        newLeft = parseInt(wrap.style.left)-312;
      }
      wrap.style.left = newLeft + "px";
    }
    function prev_pic () {
      index--;
      if(index < 0){
        index = 2;
      }
      showCurrentDot();
      var newLeft;
      if(wrap.style.left === "0px"){
        newLeft = -624;
      }else{
        newLeft = parseInt(wrap.style.left)+312;
      }
      wrap.style.left = newLeft + "px";
    }
    //自动轮播
    var timer = null;
    function autoPlay () {
      timer = setInterval(function () {
        next_pic();
      },2000);
    }
    autoPlay();
 
    var container = document.querySelector(".container");
    container.onmouseenter = function () {
      clearInterval(timer);
    }
    container.onmouseleave = function () {
      autoPlay();  
    }
  //轮播图下方的小圆点点击切换图片
   
    var dots = document.getElementById("buttons").getElementsByTagName("span");
    function showCurrentDot () {
      for(var i = 0, len = dots.length; i < len; i++){
        dots[i].className = "";
      }
      dots[index].className = "on";
    }
 
    for (var i = 0, len = dots.length; i < len; i++){
      (function(i){
        dots[i].onclick = function () {
          var dis = index - i;
          if(index == 2 && parseInt(wrap.style.left)!==-936){
            dis = dis - 3;
          }
          //和使用prev和next相同，在最开始的照片5和最终的照片1在使用时会出现问题，导致符号和位数的出错，做相应地处理即可
         if(index == 0 && parseInt(wrap.style.left)!==-312){
            dis = 3 + dis;
          }
          wrap.style.left = (parseInt(wrap.style.left) + dis * 312)+"px";
          index = i;
          showCurrentDot();
        }
      })(i);      
    }