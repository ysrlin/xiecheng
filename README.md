# xiecheng
携程仿真项目
# 简介
   该项目为仿真项目。用到的技术有HTML、CSS、JavaScript、Angularjs、Ajax、Json。
   应用Bootstrap、jQuery模板。
# 部分特效代码
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
# Ajax
   
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
# json
    "diming": [
        {
            "pid": 1,
            "name": "北京",
            "href": "/startcity/Beijing"
        },
        {
            "pid": 2,
            "name": "天津",
            "href": "/startcity/Beijing"
        },
        {
            "pid": 3,
            "name": "南京",
            "href": "/startcity/Beijing"
        },
        {
            "pid": 4,
            "name": "厦门",
            "href": "/startcity/Beijing"
        },
        {
            "pid": 5,
            "name": "深圳",
            "href": "/startcity/Beijing"
        },
        {
            "pid": 6,
            "name": "沈阳",
            "href": "/startcity/Beijing"
        },
        {
            "pid": 7,
            "name": "香港",
            "href": "/startcity/Beijing"
        }
        //说明：数据部分为测试用例。
