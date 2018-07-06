
window.onload=function ()
{
    var btn=document.getElementById('close');
    var oWelcom=document.getElementById('welcom')
    btn.onclick=function()
    {
     function setCookie(name, value, iDay)
        {
        var oDate=new Date();
        
        oDate.setDate(oDate.getDate()+iDay);
        
        document.cookie=name+'='+value+';expires='+oDate;
       }
        setCookie('username','abc',3);
       oWelcom.style.display='none';
    }

    function getCookie(name)
     {
        var arr=document.cookie.split('; ');
        var i=0;    
         for(i=0;i<arr.length;i++)
          {
            var arr2=arr[i].split('=');        
            if(arr2[0]==name)
            {
                return arr2[1];
            }
          }    
        return '';   
     }

   if(document.cookie)
     {
      oWelcom.style.display='none';

     }

}
//登陆框弹出
var DL=document.getElementById('dl');
var tc=document.getElementById('dlk');
var Btn=document.getElementById('btn1');
DL.onclick=function(ev)
{
    var oEvent=ev||event;
    tc.style.display='block';
    oEvent.cancelBubble=true;
}
Btn.onclick=function()
{
      tc.style.display='none';   
  
}

//列表导航

    $(function(){
        $('.aui-content-main .aui-content-menu').hover(function(){

            $(this).addClass('active').find('s').hide();

            $(this).find('.aui-content-menu-dow').show();

        },function(){

            $(this).removeClass('active').find('s').show();

            $(this).find('.aui-content-menu-dow').hide();

        });

    });


//轮播图

    var wrap = document.querySelector(".wrap");
    var next = document.querySelector(".arrow_right");
    var prev = document.querySelector(".arrow_left");
    var index=0
    next.onclick = function () {
      next_pic();
    }
    prev.onclick = function () {
      prev_pic();
    }
    function next_pic () {
      index++;
      if(index > 4){
        index = 0;
      
      }
      var newLeft;
      if(wrap.style.left === "-5400px"){
        newLeft = -1800;
      }else{
        newLeft = parseInt(wrap.style.left)-900;
      }
      wrap.style.left = newLeft + "px";
    }
    function prev_pic () {
      index--;
      if(index < 0){
        index = 4;
      }

      var newLeft;
      if(wrap.style.left === "0px"){
        newLeft = -3600;
      }else{
        newLeft = parseInt(wrap.style.left)+900;
      }
      wrap.style.left = newLeft + "px";
    }
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
 

function getByClass(oParent,sClass)
{
  var aEle=document.getElementsByTagName('*');
  var i=0;
  var aResult=[];
  for(i=0;i<aEle.length;i++)
  {
    if(aEle[i].className==sClass)
    {
      aResult.push(aEle[i]);
    }
  }
  return aResult;
}

//列表滑动

      var oDiv=document.getElementsByTagName('playimages');
      var oSmallUl=getByClass(oDiv,'small_pic')[0].getElementsByTagName('ul')[0];
      var aSmallLi=oSmallUl.getElementsByTagName('li');
      var iNon=0;
      var i=0;

      oSmallUl.style.width=aSmallLi.length*aSmallLi[0].offsetWidth+'px';

    for(i=0;i<aSmallLi.length;i++)
    {
      aSmallLi[i].index=i;

      aSmallLi[i].onmouseover=function()
      {
        startMove(this,'opacity',100)
      }

       aSmallLi[i].onmouseout=function()
      {
        if(this.index!=iNon)
        {

        startMove(this,'opacity',60)
          
        }
      }

    
      aSmallLi[i].onclick=function()
      {
        if(this.index==iNon)return;
         iNon=this.index;
         for(i=0;i<aSmallLi.length;i++)
         {
          startMove(aSmallLi[i],'opacity',60)
         }
           startMove(this,'opacity',100);
          if(iNon==0)
          {
            startMove(oSmallUl,'left',0);
          }
        else if(iNon==aSmallLi.length-1)
        {
          startMove(oSmallUl,'left',-(iNon-2)*aSmallLi[0].offsetWidth)
        }
        else
        {
          startMove(oSmallUl,'left',-(iNon-1)*aSmallLi[0].offsetWidth)
            
        }         
      }
    
  }

  //点击滑动显示li

    var poe=document.getElementById('pre');
  var Nex=document.getElementById('nex');
  var oSmallU=document.getElementById('playimages');
    var oSmallUl=document.getElementById('playimages').getElementsByTagName('ul')[0];
   Nex.onmouseover=poe.onmouseover=oSmallUl.onmouseover=function()
    {
      poe.style.display='block';
        Nex.style.display='block'
    }
  oSmallU.onmouseout=function()
    {
      poe.style.display='none';
      Nex.style.display='none'
    }


  poe.onclick=function()
  {    
  
    if(oSmallUl.offsetLeft<-2800)
    {
     oSmallUl.style.left=oSmallUl.offsetLeft+'px';
    }else{

    oSmallUl.style.left=oSmallUl.offsetLeft-400+'px';
    }

   }

     nex.onclick=function()
  {
    if(oSmallUl.offsetLeft>=0)
    {
     oSmallUl.style.left=oSmallUl.offsetLeft+'px';
    }else{

    oSmallUl.style.left=oSmallUl.offsetLeft+400+'px';
    }

   }

  



    //课程系列图片添加背景样式
var oLi=document.getElementById('kec').getElementsByTagName('li');
var i=0;
       for(i=0;i<oLi.length;i++)
       {
        oLi[i].index=i;
        oLi[i].onmouseover=function()
        {
            for(i=0;i<oLi.length;i++)
            {
              oLi[i].className='';
            }
            this.className='ative';
          
        }
       }