# 本站点的策划思路

说明

---

## 为什么做

---

### 因为看到别人有的网站，感觉很炫酷，想要有一个属于自己的网站，所以就着手做了。

---

## 期望的效果

---

### 我希望能够尽量展现出我自己，能够让他人看到我的网站就能认识我，了解我。而且，我希望我的网站能够兼容各个浏览器，包括PC端和安卓端，这样能够更容易被广大人民接受。

---

## 内容来源

---

### 本站点的所有内容都是本人经过长时间所想，筛选写的，内容真实，禁止用于不法用途。

---

## 页面结构与说明

---

### 页面组成

---

#### 本站点由6个页面组成，一个首页，一个登录页面（表单页），两个详细页面，一个列表页（也可以说是详细页），一个反馈页面（表单页）。

---

### 浏览时页面的url

---

#### https://beyondbob.github.io/mine/

---

### 各页面的角色与作用

---

#### 首页：

---

##### 地址：https://beyondbob.github.io/mine/index.html

---

##### 角色与作用：本页面用来展现我的站点的基本内容，粗略的介绍我自己，让大家有先入为主的感觉。并且本页面与其他页面相连接，方便游客浏览。

---

#### 关于我（详细页）：

---

##### 地址：https://beyondbob.github.io/mine/mine.html

---

##### 角色与作用：本页面我用表格来详细的介绍我自己，方便游客各加深入的认识我。

---

#### 我的大学（详细页）：

---

##### 地址：https://beyondbob.github.io/mine/myuniversity.html

---

##### 角色与作用：本页面我用卡片式布局来详细的介绍我的大学，方便游客各加深入的认识我的大学。

---

#### 我喜欢的食物（详细页、列表页）：

---

##### 地址：https://beyondbob.github.io/mine/MyfavoriteFood.html

---

##### 角色与作用：本页面我用jquery通过点击导航栏实现层交替来动态详细的介绍我喜欢的食物。

---

#### 登录页（表单页）：

---

##### 地址：https://beyondbob.github.io/mine/LoginPage.html

---

##### 角色与作用：为了让整个站点更加完整，我设计登录页面。

---

#### 反馈表（表单页）：

---

##### 地址：https://beyondbob.github.io/mine/survey.html

---

##### 角色与作用：为了获得游客的反馈，我做了反馈表。

---

## 技术指标

---

### 兼容的的浏览器版本：IE8以上，搜狗浏览器6.2.5.2以上，windows10的MicrosoftEdge，谷歌，火狐，手机浏览器（基本都可以）。
### 使用的的html/css版本：html 5和css 3。
#### 开发工具：Notepad++

---

## 技术点说明

---

### 1.实现各个浏览器兼容
#### 为了实现基本各个浏览器浏览器兼容，我使用了css3的@media 元素，定义了不同宽度时不同的元素效果。
##### **关键代码**
>@media ( max-width: 2000px ) {
	body{
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	background-image:url(http://pic1.5442.com/2015/0703/02/02.jpg);
	background-size:100% 100%;
	background-repeat:no-repeat;
	background-attachment:fixed;
}
@media  ( max-width:1200px) {
	body{
		font-family: "Helvetica Neue", Helvetica, Arial,      sans-serif;
		background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494856712135&di=e0aa133871b136f9c26779729dccdfe6&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F120907%2F219077-120ZGP53071.jpg);
		background-size:100% 100%;
		background-repeat:no-repeat;
		background-attachment:fixed;
}

### 2.实现页面内不同内容转变
#### 为了实现转变，我使用了css的z-index元素，再加上js的click事件，实现点击改变层的位置。
#### **关键代码**
>\$(document).ready(function(){
  \$("#1").click(function(){
	\$(document.getElementById("span1").style.zIndex=-1);
	\$(document.getElementById("span2").style.zIndex=-2);
	\$(document.getElementById("span3").style.zIndex=-3);
	\$(document.getElementById("span4").style.zIndex=-4);
	\$(document.getElementById("span5").style.zIndex=-5);
	\$(document.getElementById("span6").style.zIndex=-6);
	\$("p").slideUp();
  });
 
 ---
 
### 3.实现内容大小随页面大小变化
#### 为了实现像字体，图片大小随页面大小变化，我使用了js的*window.onresize*元素。
#### **关键代码**
 >window.onresize=function(){
	   var height = \$("#div2").width(); 
	   if(parseInt(height)>=600){
		   var height1=height*1.4;
		   var height2=height*1.4;
		   var size1=height/100+15;
		   var size2=height/50+16;
		   var li1=height/100+15;
		   \$("#div2").height(height1);
		   \$("#div1").height(height2);
		   \$("body").css("font-size",size1);
		   \$("p").css("font-size",size2);
		   \$("li").css("font-size",li1);
	   }else{
		   var height3=height*1.8;
		   var height4=height*1.8;
		   var size3=height/60+5;
		   var size4=height/30+1;
		   var li2=height/100+5;
		   \$("#div2").height(height3);
		   \$("#div1").height(height4);
		   \$("body").css("font-size",size3);	
		   \$("p").css("font-size",size4);	
		   \$("li").css("font-size",li2);
	   }

}

---

## 开发心得

---

### 总结
#### 开发过程很艰辛，为了实现某些页面效果我使用了很多元素，很多元素都不尽人意，最后我使用了一些尽量兼容所有浏览器的元素来进行页面设计，代码虽然有点长，但还是比较好的实现了，开发过程中学到了很多，填补了知识的空缺，很开心。
。
### WEB前端开发课程的感想与展望
#### 这门课程让我学习到了很多，开发过程时同学们之间的交流合作，互相进步。上课时老师详细讲解，都让我受益匪浅。一转眼课程就结束了，有点舍不得。展望接下来的程序开发路程，我觉得前端开发很有趣，说不定我会向前端发展，总之这门课我学的很享受，很开心。
