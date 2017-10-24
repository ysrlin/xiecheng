 // 轮播
	 	var imgs = document.getElementsByClassName("img1");
	var  index = 0;
	setInterval(qyn_carousel,10000);
	function qyn_carousel(){
		imgs[index].style.display="none";
		index= ++index==imgs.length?0:index;
		imgs[index].style.display="block";
	}
	// var imgs=$('#zx_car_slide').find('img');
 //        var dot=$('.zx_dot_group').find("a");
 //        var index=0;
 //        var timer=setInterval(slide,2000);

        
          // dot.mouseover(function qyn_carousel(){
          //    dot.css("background-color",'rgba(0,0,0,.2)');
          //    imgs.css("display","none");
          //    dot.eq($(this).index()).css("background-color",'#FFF');
          //    imgs.eq($(this).index()).css("display","block");
          //    clearInterval(timer);
          //  });
          //  dot.mouseout(function(){
          //    index=$(this).index();
          //    timer=setInterval(slide,2000);
          //  });
        

 //        function slide(){
 //          dot.eq(index).attr('style',"background-color:rgba(0,0,0,.2)");
 //          imgs.eq(index).attr('style',"display:none");
 //          index= ++ index==imgs.length?0:index;
 //          dot.eq(index).attr('style',"background-color:#FFF");
 //          imgs.eq(index).attr('style',"display:block"); 
 //        }


// 列表的mouseover
		 var  list=document.querySelector(".qyn_destination_list");
     var active=document.querySelector("#qyn_key22");
     //筛选出需要操作的node
     var items=document.querySelectorAll(".qyn_destination_list>li");
     list.addEventListener("mouseover",function(e){
      var item=document.querySelector(".qyn_destination_list>li:hover");
      if(item!=null&&item.className===""){

        item.className="cui_nav_current";
      }
    })
    list.addEventListener("mouseout",function(e){
    //重置样式
      items.forEach(function(element){
          element.className="";
      });
     
  })
// 点击轮播
var qyn_travel_vane_arrleft = document.getElementsByClassName('qyn_travel_vane_arrleft').item(0);
var qyn_travel_vane_arrright = document.getElementsByClassName('qyn_travel_vane_arrright').item(0);
  var ac = document.getElementsByClassName('qyn_travel_vane_scrollbox').item(0);
  var b = document.getElementsByClassName('qyn_travel_vane_scrollopt').item(0);
  // b.innerHTML = document.getElementsByClassName('qyn_travel_vane_scrollbox').item(0).innerHTML; 
   qyn_travel_vane_arrleft.onclick=function(){
          b.offsetWidth-ac.scrollLeft<=0?ac.scrollLeft+=290:ac.scrollLeft-=ac.offsetWidth;
    } 
    qyn_travel_vane_arrright.onclick=function(){
    	ac.scrollLeft<=0?ac.scrollLeft+=290:ac.offsetWidth;
    }
// 全部产品的鼠标移动
     var  lista=document.querySelector(".qyn_product_list");
    
      var it=document.querySelectorAll(".qyn_product_list>dd");
     lista.addEventListener("mouseover",function(e){
      var item=document.querySelector(".qyn_product_list>dd");
      if(item!=null&&item.className===""){
         item.style.display="block";
      }
    })
    lista.addEventListener("mouseout",function(e){
    //重置样式
      it.forEach(function(element){
          element.style.display="none";
      });
     
  })
// 搜索点击
     var qyn_search_box = document.getElementsByClassName('qyn_search_box').item(0);
     qyn_search_box.onclick=function(){
     	var bl=document.querySelector(".qyn_hot_search_box");
          if (bl!=null&&bl.className==="qyn_hot_search_box") {
          	bl.className="qyn_hot_search_box2";
          }
     }
 	var  qyn_close = document.getElementsByClassName('qyn_close').item(0);
 	   qyn_close.onclick=function(){
 	   
          var close=document.querySelector(".qyn_hot_search_box2");
          if (close!=null&&close.className==="qyn_hot_search_box2") {
          	close.className="qyn_hot_search_box";
          }
 	   }
// 热门出发城市
 	   var qyn_city_station = document.getElementsByClassName('qyn_city_station').item(0);
 	   var sta = document.querySelector(".qyn_city_searchBox");
 	   	var fly=document.querySelector(".qyn_flt_htl_searchBox");
 	    var bt = document.querySelector(".qyn_city_station");
 	    var jiu = document.querySelector(".qyn_fly");
 	   qyn_city_station.onclick=function(event){
 	       event.stopPropagation();
 	      
         if (bt!=null&&bt.className==="qyn_city_station") {
         	bt.className="qyn_city_station on";
         	jiu.className="qyn_fly";
         } 
         else if(bt!=null&&bt.className==="qyn_city_station on"){
            bt.className="qyn_city_station";
         }
 	      
 	   	if (sta!=null&&sta.style.display==="none") {
 	   	
 	   		if (fly!=null&&fly.style.display==="block") {
        	fly.style.display="none";
        
           }  
 	   		sta.style.display="block";
 	   		
 	   	}else if (sta!=null&&sta.style.display==="block"){
 	   		sta.style.display="none";
 	   		
 	   	}
           
 	   }
 	   sta.onclick=function(event){
              event.stopPropagation();
 	   }


 	   var qyn_fly = document.getElementsByClassName('qyn_fly').item(0);
 	   qyn_fly.onclick=function(){
        if (jiu!=null&&jiu.className==="qyn_fly") {
        	jiu.className="qyn_fly on";
        }
        else if (jiu!=null&&jiu.className==="qyn_fly on") {
        	jiu.className="qyn_fly";
        }
        
 	   	 if (fly!=null&&fly.style.display==="none") {
 	   	 	if (sta!=null&&sta.style.display==="block") {
            sta.style.display="none";
          }
 	   		fly.style.display="block";
 	   	}else if (fly!=null&&fly.style.display==="block") {
 	   		fly.style.display="none";
 	   	}

 	   }
       // 高级搜索
       var qyn_senior_search_btn = document.getElementsByClassName('qyn_senior_search_btn').item(0);
       var search = document.querySelector(".qyn_senior_search_box");
       qyn_senior_search_btn.onclick=function(event){
           

            if (search!=null&&search.style.display==="none") {
            	
            	search.style.display="block";
            	
            }
       }
        var qyn_close2 = document.getElementsByClassName('qyn_close2').item(0);
        qyn_close2.onclick=function(event){
        	

        	if (search!=null&&search.style.display==="block") {
        		
        		search.style.display="none";
        		
        	}

        }

      

       // 城市搜索
       var qyn_station_search_box = document.getElementsByClassName('qyn_station_search_box').item(0);
        var pi = document.querySelector(".qyn_station_search_box>p");
             qyn_station_search_box.onclick=function(){
            
              if (pi!=null&&pi.style.display==="block") {
                pi.style.display="none";
              }
             }

   var body =document.querySelector('body');
     
       body.addEventListener('click',function(){
        sta.style.display="none";
        bt.className="qyn_city_station";
        pi.style.display="block";
        
       
          
        },false);


   var myApp = angular.module("myApp", []);
var a = document.createElement("a");
   myApp.controller('getData',  function($scope,$http){
     $http({
      method:"GET",
      url:"data.json"
     }).then(function successCallback(response){
          $scope.dataset = response.data.diming;
          $scope.dataset1 = response.data.banner;
          $scope.dataset2 = response.data.next;
          $scope.dataset3 = response.data.carouse;
          $scope.dataset4 = response.data.outside;
          $scope.dataset5 = response.data.inside;
          $scope.dataset6 = response.data.around;
          $scope.dataset7 = response.data.cruise;
          $scope.dataset8 = response.data.play;
     },
     function  errorCallback(response){
     });
   });

