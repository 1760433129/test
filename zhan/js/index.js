
window.onload=function(){


var fk=document.getElementById('fk');
  var imgDiv=document.getElementById('imgdiv');
  var lis=document.getElementById('fk').getElementsByTagName('li');
  var is=document.getElementById('fk').getElementsByTagName('img');
  var c=0;//大总管变量


  function autorun(){
      //function(){
    c++;
    if(c==6){
      c=0;
    }
    //让所有图片隐藏
    for(var i=0;i<6;i++){
    //is[i].style.display='none';
    lis[i].style.background='#ddd';
    lis[i].style.color="#060606";
    lis[i].className='';


    }
    //让c号图片显示
    startMove(imgDiv,{top:-c*159});
    //imgDiv.style.top=-c*159+'px';
    //让c号li变红
    //
    lis[c].style.background="#A10000";
    lis[c].style.color="pink";
    lis[c].className+='acti';

  }
  //}

  var timer=setInterval(autorun,2000)

//给所有li加事件
  for (var i = 0; i < lis.length; i++) {
    //将序号存在每个li上
    //
    
    lis[i].xuhao=i;
    lis[i].onmouseover=function(){
      //停止定时器
      clearInterval(timer);
      //获得序号
      c=this.xuhao;
      //让所有图片隐藏
    for(var i=0;i<6;i++){
    //is[i].style.display='none';
    lis[i].style.background='#ddd';
    lis[i].style.color="#060606";
    lis[i].className='';


    }
    //让c号图片显示
      startMove(imgDiv,{top:-c*159});
    //imgDiv.style.top=-c*159+'px';
    //让c号li变红
    //
    lis[c].style.background="#A10000";
    lis[c].style.color="pink";
    lis[c].className+='acti';

    }


    lis[i].onmouseout=function(){
      timer=setInterval(autorun,2000)
    }
  };

}