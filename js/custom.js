// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
			 "http://www.33lc.com/article/UploadPic/2012-9/201292914531286805.jpg",
	 		 "http://img2.3lian.com/2014/c6/40/d/40.jpg", 
	 		 "http://pic.qiantucdn.com/58pic/19/84/23/37D58PICpUF_1024.jpg",
			 "http://www.bz55.com/uploads/allimg/130521/1-130521110159.jpg",
			 "http://img1.3lian.com/2015/w1/76/d/86.jpg",
			 "http://tupian.enterdesk.com/2015/gha/0403/34/8.jpg",
			 "http://pic1.win4000.com/wallpaper/a/5747dc9623f0a.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})