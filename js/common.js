(function(){
    /* targetW的值为设计图的宽度大小,此时设置的宽度大小为640 */
   var targetW = 750;
   /* 获取视口缩放的比例 */
//    var scale = document.documentElement.clientWidth/targetW;
   var scale = window.innerWidth/targetW;
   /* 获取到meta标签 */
   var meta =  document.querySelector("meta[name='viewport']");
   /* 向其添加缩放的比例 */
   meta.content="initial-scale="+scale+",minimum-scale="+scale+",maximum-scale="+scale+",user-scalable=no";
})()