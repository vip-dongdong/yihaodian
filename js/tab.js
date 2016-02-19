//选项卡
window.onload=function(){
	
// 右侧固定定位动效
  //////最右侧的图标显示开始；
var jinkou=$(".jinkous");
//alert(jinkou.length);
/*var gehu=$("gehu");*/

var jump=$(".jump")[0];
var anniu=$("li",jump);
var tishi=$(".tishi");
 
var ch=document.documentElement.clientHeight;
window.onscroll=function(){
  var scrollT=getScrollT();
      if(scrollT<=750){
      jump.style.display="none";
    }else{
      jump.style.display="block";
    }
 
//按钮控制滚动条
for(var i=0;i<anniu.length;i++){
  anniu[i].index=i;
  anniu[i].onclick=function(){
    //获取滚动条的对象
    var obj=document.documentElement.scrollTop?document.documentElement:document.body;
    animate(obj,{scrollTop:jinkou[this.index].t},500,Tween.Linear);
    //当前按钮的对应楼层赋值给滚动条
  }
}

 //滚动条  控制  左侧按钮
    for(var i=0;i<jinkou.length;i++){
      jinkou[i].t=jinkou[i].offsetTop;
        if(jinkou[i].t<scrollT+400){
        for(var j=0;j<anniu.length;j++){
            tishi[j].style.display="none";
          }
        tishi[i].style.display="block";
        }
    }

//左侧按钮效果    ｄｅ　效果

   // var ddd=$(".ddd");//一级菜单名
    //二级菜单名
      for(var i=0;i<anniu.length;i++){
      anniu[i].index=i;
      hover(anniu[i],function(){
          tishi[this.index].style.display="block";
        },function(){
        tishi[this.index].style.display="none";
      })
   
    }
    

 // 点击top返回最顶端
  /*  var toTop=getLast(jump)
    toTop.onclick=function(){
        var obj=document.documentElement.scrollTop==0?document.body:document.documentElement
        animate(obj,{scrollTop:0},500)
    }
*/







}




//////最右侧的图标显示结束；





  //左移
     var move=$(".f1you11")[0];
   var moveimg=$("img",move);   
   for(var i=0;i<moveimg.length;i++){
    moveimg[i].index=i;
    moveimg[i].onmouseover=function(){
         moveimg[this.index].style.cssText="position:relative;left:-6px";
    }
    moveimg[i].onmouseout=function(){
          moveimg[this.index].style.cssText="position:relative;left:0px";
    }

   }





 //下拉效果

function m(){
  var yiji=$(".yiji");
  
      var erji=$(".erji");

        for (var i = 0; i < yiji.length; i++) {
          yiji[i].index=i;
          hover(yiji[i],function(){
             var lis=$("div",erji[this.index]);
             var h=lis[0].offsetHeight;
             erji[this.index].style.height=0+"px";
             animate(erji[this.index],{height:lis.length*h},300,Tween.Linear);
            },function(){
             animate(erji[this.index],{height:0},300,Tween.Linear);
            }
          )
        }
}
m();




//搜索


 /*//搜索

  //顶部天猫搜索框   HTML俩个ID,与下面的各自获取设置      
 var tex=$("#tex");


  tex.onfocus=function(){//点击这个文本框的时候(表单获得焦点事件)
    if(tex.value=="魅力惠入驻！时尚轻奢首选"){//如果文本框里边是默认值，就把它清空
      tex.value=""
    }   
  }
  tex.onblur=function(){//点击这个文本框外边的时候(表单失去焦点事件)
    if(tex.value){//如果文本框里边有值，不做操作

    }else{//如果文本框是空的，就恢复默认值
      tex.value="魅力惠入驻！时尚轻奢首选"
    }
  }
  */

  function c(){
    var tex=$("#tex");
        tex.onfocus=function(){
           //表单获得焦点
           if(tex.value=="魅力惠入驻！时尚轻奢首选"){
            tex.value=""};
        };
        tex.onblur=function(){
          //表单失去焦点
          if(tex.value==""){
          tex.value="魅力惠入驻！时尚轻奢首选";
          }
        }
  }
 c();





//导航栏隐藏
function k(){
   var daos=getClass("ten");
    var fus=getClass("youyincang");
    for (var i = 0; i < daos.length; i++) {
      daos[i].index=i;
      daos[i].onmouseover=function(){
        this.flag=true;
        var aa=this;
        setTimeout(function(){
        if(aa.flag){  
          fus[aa.index].style.display="block";
          animate(fus[aa.index],{left:200,opacity:1},200)
         }
           },100)
        }

      daos[i].onmouseout=function(){
        this.flag=false;
       
        animate(fus[this.index],{left:170,opacity:1},300,function(){
          this.style.display="none";
        })
      }
    }
  }
  k();




//轮播
    function b(){
        var imgss=$(".imgss");
        var btn=$(".btn");
        //alert(btn.length);
        var trt=$(".banner")[0];
        var bgcolor=["#E8E8E8","#E3A900","#B1BCD0","#72D3E3","#FF5025","#EAD0FF","#E7EAE3"];

        var num=1;
        function move(){
          if(num==7){
            num=0;
          }
          for(var i=0;i<imgss.length;i++){
                imgss[i].style.zIndex=2;
               // alert(i)
          };
          for(var i=0;i<btn.length;i++){
               btn[i].style.background="#000";
          };
          imgss[num].style.zIndex=3;
          btn[num].style.background="#fff";
          trt.style.background=bgcolor[num];
          num++;
        }
        var t=setInterval(move,1000);




        for(var i=0;i<btn.length;i++){
          btn[i].index=i;
          btn[i].onmouseover=function(){
            clearInterval(t);
            for(var j=0;j<imgss.length;j++){
              imgss[j].style.zIndex=1;
            };
            for(var j=0;j<btn.length;j++){
               btn[j].style.background="#000";
            };
            imgss[this.index].style.zIndex=2;
                trt.style.background=bgcolor[this.index];
                btn[this.index].style.background="#fff";

          }
          btn[i].onmouseout=function(){
            t=setInterval(move,2000);
            num=this.index+1;
          }
        }
    }
    b();





//每个楼层的轮播开始

function luobo1(lou){
    var jin=$(".jinkou-con2")[lou];
  var imgsbox1=$(".imgsbox1")[lou];
  var bigbox=$(".bigbox")[lou];

  var rec=$("a",bigbox);
      var num1=1;
    function move1(){
      if(num1==3){
        animate(imgsbox1,{left:-330*num1},600,Tween.Linear,function(){
          animate(imgsbox1,{left:0},0);
      })
      num1=0;
       } 
       else{
        animate(imgsbox1,{left:-330*num1},600,Tween.Linear);
        
      } 
      for(var i1=0;i1<rec.length;i1++){
        rec[i1].style.background="#dddddd";
      }
      rec[num1].style.background="#ff3c3c";
        num1++;
      } 
    var t1=setInterval(move1,2000);

    for(var i1=0;i1<rec.length;i1++){
      rec[i1].index=i1;
      rec[i1].onmouseover=function(){
        clearInterval(t1);
        for(var j1=0;j1<rec.length;j1++){
          rec[j1].style.background="#dddddd";

        }
        animate(imgsbox1,{left:-330*this.index},600,Tween.Linear);
        num1=this.index+1;
        this.style.background="#ff3c3c";
      }

      rec[i1].onmouseout=function(){
        t1=setInterval(move1,2000);
      }
    }
 }
  
 for(var i=0;i<8;i++){
    luobo1(i);
 }







    //侧轮播
 function g(num){
        var bannerbox=$(".loucengsss")[num];
      var left=$(".louceng-1-left-2-left")[num];
      var right=$(".louceng-1-left-2-right")[num];
      var flg1=true;
      function aa(){
        if(flg1==true){
          flg1=false;
        animate(bannerbox,{marginLeft:-190},1000,function(){
          var fir=getFirst(this);
          this.appendChild(fir);
          this.style.marginLeft=0;
          flg1=true;
        })
        }
      }
      var t=setInterval(aa,3000)
      left.onmouseover=right.onmouseover=function(){
        clearInterval(t);
      }
      left.onmouseout=right.onmouseover=function(){
        t=setInterval(aa,3000);
      }
      right.onclick=function(){
        aa();
      }
      left.onclick=function(){
        var last=getLast(bannerbox);
            var first=getFirst(bannerbox);
          bannerbox.insertBefore(last,first);
            bannerbox.style.marginLeft="-190px";
            animate(bannerbox,{marginLeft:0},1000)
      }
}
 g(0);



//选项卡
 var word=getClass("word"); //集合
  var tab=getClass("sg-1");

  for(var i=0;i<word.length;i++){  //给每一个标题添加单击事件
    word[i].index=i;  //保存相应对象的i的值
    
    word[i].onmouseover=function(){
      //alert(this,index);
      for(var j=0;j<tab.length;j++){
        tab[j].style.display="none";
        word[j].style.fontWeight="normal";
        word[j].style.textDecoration="none";
      }
      tab[this.index].style.display="block";

      this.style.fontWeight="bold";
            //this.style.textDecoration="underline";
    }
  }
 
}