window.onresize=function(){
	   var height = $("#div2").width(); 
	   if(parseInt(height)>=500){
		   var height1=height*1.2;
		   var height2=height*1.2;
		   var size1=height/100+15;
		   var size2=height/50+16;
		   var li1=height/100+15;
		   var nav1=height/8;
		   var ButtonW=height/15;
		   var ButtonH=height/22;
		   var w1=height/8;
		   var h1=height/8;
		   $("#div2").height(height1);
		   $("#div1").height(height2);
		   $("body").css("font-size",size1);
		   $("p").css("font-size",size2);
		   $("li").css("font-size",li1);
		   $("#nav").height(nav1);
		   $("button").width(ButtonW);
		   $("button").height(ButtonH);
		   $("a").width(w1);
		   $("a").height(h1);
	   }else{
		   var height3=height*1.9;
		   var height4=height*1.9;
		   var size3=height/60+5;
		   var size4=height/30+1;
		   var li2=height/100+5;
		   var nav2=height/6;	
		   var ButtonW2=height/10;
		   var ButtonH2=height/15;	
		   var w1=height/5;
		   var h1=height/5;		   
		   $("#div2").height(height3);
		   $("#div1").height(height4);
		   $("body").css("font-size",size3);	
		   $("p").css("font-size",size4);	
		   $("li").css("font-size",li2);
		   $("#nav").height(nav2);
		   $("button").width(ButtonW2);
		   $("button").height(ButtonH2);	
           $("a").width(w1);
		   $("a").height(h1);		   
	   }

}
$(function(){
   var height = $("#div2").width(); 
	   if(parseInt(height)>=500){
		   var height1=height*1.2;
		   var height2=height*1.2;
		   var size1=height/100+15;
		   var size2=height/50+16;
		   var li1=height/100+15;
		   var nav1=height/8;
		   var ButtonW=height/15;
		   var ButtonH=height/22;
		   var w1=height/8;
		   var h1=height/8;
		   $("#div2").height(height1);
		   $("#div1").height(height2);
		   $("body").css("font-size",size1);
		   $("p").css("font-size",size2);
		   $("li").css("font-size",li1);
		   $("#nav").height(nav1);
		   $("button").width(ButtonW);
		   $("button").height(ButtonH);
		   $("a").width(w1);
		   $("a").height(h1);
	   }else{
		   var height3=height*1.9;
		   var height4=height*1.9;
		   var size3=height/60+5;
		   var size4=height/30+1;
		   var li2=height/100+5;
		   var nav2=height/6;	
		   var ButtonW2=height/10;
		   var ButtonH2=height/15;	
		   var w1=height/5;
		   var h1=height/5;		   
		   $("#div2").height(height3);
		   $("#div1").height(height4);
		   $("body").css("font-size",size3);	
		   $("p").css("font-size",size4);	
		   $("li").css("font-size",li2);
		   $("#nav").height(nav2);
		   $("button").width(ButtonW2);
		   $("button").height(ButtonH2);	
		   $("a").width(w1);
		   $("a").height(h1);		   
	   }

})
$(document).ready(function(){
  $("#1").click(function(){
	$(document.getElementById("span1").style.zIndex=-1);
	$(document.getElementById("span2").style.zIndex=-2);
	$(document.getElementById("span3").style.zIndex=-3);
	$(document.getElementById("span4").style.zIndex=-4);
	$(document.getElementById("span5").style.zIndex=-5);
	$(document.getElementById("span6").style.zIndex=-6);
  });
    $("#2").click(function(){
	$(document.getElementById("span1").style.zIndex=-2);
	$(document.getElementById("span2").style.zIndex=-1);
	$(document.getElementById("span3").style.zIndex=-3);
	$(document.getElementById("span4").style.zIndex=-4);
	$(document.getElementById("span5").style.zIndex=-5);
	$(document.getElementById("span6").style.zIndex=-6);
  });
    $("#3").click(function(){
	$(document.getElementById("span1").style.zIndex=-3);
	$(document.getElementById("span2").style.zIndex=-2);
	$(document.getElementById("span3").style.zIndex=-1);
	$(document.getElementById("span4").style.zIndex=-4);
	$(document.getElementById("span5").style.zIndex=-5);
	$(document.getElementById("span6").style.zIndex=-6);
  });
    $("#4").click(function(){
	$(document.getElementById("span1").style.zIndex=-4);
	$(document.getElementById("span2").style.zIndex=-2);
	$(document.getElementById("span3").style.zIndex=-3);
	$(document.getElementById("span4").style.zIndex=-1);
	$(document.getElementById("span5").style.zIndex=-5);
	$(document.getElementById("span6").style.zIndex=-6);
  });
    $("#5").click(function(){
	$(document.getElementById("span1").style.zIndex=-5);
	$(document.getElementById("span2").style.zIndex=-2);
	$(document.getElementById("span3").style.zIndex=-3);
	$(document.getElementById("span4").style.zIndex=-4);
	$(document.getElementById("span5").style.zIndex=-1);
	$(document.getElementById("span6").style.zIndex=-6);
  });
    $("#6").click(function(){
	$(document.getElementById("span1").style.zIndex=-6);
	$(document.getElementById("span2").style.zIndex=-2);
	$(document.getElementById("span3").style.zIndex=-3);
	$(document.getElementById("span4").style.zIndex=-4);
	$(document.getElementById("span5").style.zIndex=-5);
	$(document.getElementById("span6").style.zIndex=-1);
  });
   $("button").click(function(){
        if($("p").is(":hidden")){
			$("p").slideDown();
		}else{
			$("p").slideUp();
		}
  });
});
