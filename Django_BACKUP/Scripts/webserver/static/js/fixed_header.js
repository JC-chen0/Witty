
$(window).on("scroll",function(){
    //判斷向下滑動的距離
    if($(window).scrollTop()>=100){
        //將頂部導航欄固定
        $(".site-header").addClass("fixed");
    }else{
        $(".site-header").removeClass("fixed");
    }
}); 
